// components/OrganigramaPro.tsx
"use client";
import React, { useMemo, useCallback, useState, useEffect } from "react";
import ReactFlow, {
  Controls,
  Background,
  MiniMap,
  ReactFlowProvider,
  useReactFlow,
  useNodesState,
  useEdgesState,
  getOutgoers,
  getIncomers,
  getConnectedEdges,
  Node,
  Edge,
  BackgroundVariant,
} from "reactflow";
import "reactflow/dist/style.css";

import NodeElegante from "./NodeElegante";
import NavigationUI from "./NavigationUI";
import { orgData } from "../data/org";
// --- 👇 Importamos los tamaños ---
import {
  transformarDatos,
  getLayoutedElements,
  nodeWidth,
  nodeHeight,
} from "../utils/layout";

const nodeTypes = {
  customElegant: NodeElegante,
};

// --- Obtenemos layout (sin cambios) ---
const { nodes: layoutedInitialNodes, edges: layoutedInitialEdges } =
  getLayoutedElements(
    transformarDatos(orgData).initialNodes,
    transformarDatos(orgData).initialEdges
  );

// --- Función getDescendants (sin cambios) ---
const getDescendants = (
  node: Node,
  nodes: Node[],
  edges: Edge[]
): Node[] => {
  const outgoers = getOutgoers(node, nodes, edges);
  if (outgoers.length === 0) {
    return [];
  }
  return outgoers.concat(
    outgoers.flatMap(n => getDescendants(n, nodes, edges))
  );
};

function OrganigramaContent() {
  // --- 👇 Importamos las funciones de la cámara ---
  const { setCenter, fitView } = useReactFlow();

  const [nodes, setNodes, onNodesChange] = useNodesState(layoutedInitialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(layoutedInitialEdges);

  const [focusedNodeId, setFocusedNodeId] = useState<string | null>(
    layoutedInitialNodes[0]?.id || null
  );

  // --- Lógica de Expandir/Colapsar (AHORA MÁS LIMPIA) ---
  // (Quitamos el 'fitView' molesto de aquí)
  const onExpandCollapse = useCallback(
    (nodeId: string, expand?: boolean) => {
      const node = nodes.find(n => n.id === nodeId);
      if (!node) return;

      const isExpanding = expand !== undefined ? expand : !node.data.isExpanded;

      setNodes(nds =>
        nds.map(n =>
          n.id === nodeId
            ? { ...n, data: { ...n.data, isExpanded: isExpanding } }
            : n
        )
      );

      if (isExpanding) {
        const children = getOutgoers(node, nodes, edges);
        const edgesToReveal = getConnectedEdges(children, edges);
        setNodes(nds =>
          nds.map(n => (children.find(c => c.id === n.id) ? { ...n, hidden: false } : n))
        );
        setEdges(eds =>
          eds.map(e => (edgesToReveal.find(er => er.id === e.id) ? { ...e, hidden: false } : e))
        );
      } else {
        const descendants = getDescendants(node, nodes, edges);
        const edgesToHide = getConnectedEdges(descendants, edges);
        setNodes(nds =>
          nds.map(n =>
            descendants.find(d => d.id === n.id)
              ? { ...n, hidden: true, data: { ...n.data, isExpanded: false } }
              : n
          )
        );
        setEdges(eds =>
          eds.map(e => (edgesToHide.find(eh => eh.id === e.id) ? { ...e, hidden: true } : e))
        );
      }
    },
    [nodes, edges, setNodes, setEdges]
  );

  // --- NUEVA FUNCIÓN DE FOCO (EL CAMBIO CLAVE) ---
  const focusOnNode = useCallback(
    (id: string) => {
      const node = nodes.find(n => n.id === id);
      if (node) {
        setFocusedNodeId(id);
        // Centramos la cámara en el nodo, con un zoom fijo de 1 (100%)
        // y una duración de 600ms para el paneo suave.
        setCenter(node.position.x + nodeWidth / 2, node.position.y + nodeHeight / 2, {
          zoom: 1, // Zoom consistente (efecto diapositiva)
          duration: 600,
        });
      }
    },
    [nodes, setCenter, setFocusedNodeId]
  );

  // --- Centrar al inicio ---
  useEffect(() => {
    // Usamos fitView solo UNA VEZ al cargar
    fitView({ duration: 0, padding: 0.2 });
    if (focusedNodeId) {
      // Y luego centramos en el nodo raíz
      focusOnNode(focusedNodeId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Se ejecuta solo al montar

  // --- Lógica de Navegación (ahora solo llama a focusOnNode) ---
  const handleNavigate = (direction: "up" | "down" | "left" | "right") => {
    const node = nodes.find(n => n.id === focusedNodeId);
    if (!node) return;

    const parent = getIncomers(node, nodes, edges)[0];
    const children = getOutgoers(node, nodes, edges);
    const siblings = parent ? getOutgoers(parent, nodes, edges) : [];
    const currentIndex = siblings.findIndex(n => n.id === node.id);

    switch (direction) {
      case "up":
        if (parent) {
          focusOnNode(parent.id);
          // Colapsar los hijos que dejamos atrás
          onExpandCollapse(node.id, false);
        }
        break;
      case "down":
        if (children.length > 0) {
          if (!node.data.isExpanded) {
            onExpandCollapse(node.id, true);
          }
          focusOnNode(children[0].id); // Enfocar al primer hijo
        }
        break;
      case "left":
        if (siblings[currentIndex - 1]) {
          focusOnNode(siblings[currentIndex - 1].id);
        }
        break;
      case "right":
        if (siblings[currentIndex + 1]) {
          focusOnNode(siblings[currentIndex + 1].id);
        }
        break;
    }
  };

  // --- Inyectar 'isFocused' (sin cambios) ---
  const nodesWithState = useMemo(() => {
    return nodes.map(n => ({
      ...n,
      data: {
        ...n.data,
        isFocused: n.id === focusedNodeId,
        onExpandCollapse: onExpandCollapse,
      },
    }));
  }, [nodes, focusedNodeId, onExpandCollapse]);

  // --- Calcular flechas (sin cambios) ---
  const navigationState = useMemo(() => {
    // ... (lógica igual que antes)
    const node = nodes.find(n => n.id === focusedNodeId);
    if (!node) return { up: false, down: false, left: false, right: false };
    const parent = getIncomers(node, nodes, edges)[0];
    const children = getOutgoers(node, nodes, edges);
    const siblings = parent ? getOutgoers(parent, nodes, edges) : [];
    const currentIndex = siblings.findIndex(n => n.id === node.id);
    return {
      up: !!parent,
      down: children.length > 0,
      left: !!siblings[currentIndex - 1],
      right: !!siblings[currentIndex + 1],
    };
  }, [focusedNodeId, nodes, edges]);

  // --- NUEVO: Handler para Clic en Nodo ---
  const onNodeClick = useCallback(
    (_: React.MouseEvent, node: Node) => {
      focusOnNode(node.id);
    },
    [focusOnNode]
  );

  return (
    <ReactFlow
      nodes={nodesWithState}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onNodeClick={onNodeClick} // <-- Añadido
      nodeTypes={nodeTypes}
      proOptions={{ hideAttribution: true }}
      className="bg-gradient-to-br from-blue-50 to-indigo-100"
      // --- Habilitamos la interacción manual ---
      nodesDraggable={false} // No arrastrar nodos
      panOnDrag={true} // Sí arrastrar el fondo
      zoomOnScroll={true} // Sí hacer zoom con la rueda
    >
      <Controls showInteractive={false} className="!left-4 !top-4" />
      <MiniMap position="bottom-left" />
      <Background variant={BackgroundVariant.Dots} gap={16} size={1} />
      <NavigationUI onNavigate={handleNavigate} canNav={navigationState} />
    </ReactFlow>
  );
}

// Componente principal (sin cambios)
export default function OrganigramaPro() {
  return (
    <div style={{ height: "90vh", width: "100%", position: "relative" }}>
      <ReactFlowProvider>
        <OrganigramaContent />
      </ReactFlowProvider>
    </div>
  );
}