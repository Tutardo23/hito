// components/OrganigramaPro.tsx
"use client";
import React, {
  // ... (otros imports)
  useMemo,
  useCallback,
  useState,
  useEffect,
} from "react";
import ReactFlow, {
  Controls,
  Background,
  MiniMap,
  // ... (otros imports)
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
import InfoSidebarPucara from "./InfoSidebarPucara"; // Importamos el sidebar
import {
  orgData,
} from "../data/org";
import {
  transformarDatos,
  getLayoutedElements,
  nodeWidth,
  nodeHeight,
} from "../utils/layout";

type Persona = {
  id: string;
  nombre: string;
  cargo: string;
  tipo: string;
  horas: number;
};

const nodeTypes = {
  customElegant: NodeElegante,
};

// ... (layoutedInitialNodes y getDescendants sin cambios)
const { nodes: layoutedInitialNodes, edges: layoutedInitialEdges } =
  getLayoutedElements(
    transformarDatos(orgData).initialNodes,
    transformarDatos(orgData).initialEdges
  );

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
  const { setCenter, fitView } = useReactFlow();
  const [nodes, setNodes, onNodesChange] = useNodesState(layoutedInitialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(layoutedInitialEdges);
  const [focusedNodeId, setFocusedNodeId] = useState<string | null>(
    layoutedInitialNodes[0]?.id || null
  );
  const [sidebarData, setSidebarData] = useState<{
  principal?: Persona | null;
  lista?: Persona[] | null;
} | null>(null);


  // ... (onExpandCollapse, focusOnNode, useEffect inicial, onShowInfo, handleNavigate... toda la lógica se mantiene igual)
  const onExpandCollapse = useCallback(
    (nodeId: string, expand?: boolean) => {
      // ... (misma lógica de antes)
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
    }, [nodes, edges, setNodes, setEdges]
  );
  
  const focusOnNode = useCallback(
    (id: string) => {
      const node = nodes.find(n => n.id === id);
      if (node) {
        setFocusedNodeId(id);
        setCenter(node.position.x + nodeWidth / 2, node.position.y + nodeHeight / 2, {
          zoom: 1,
          duration: 600,
        });
      }
    }, [nodes, setCenter, setFocusedNodeId]
  );

  useEffect(() => {
    fitView({ duration: 0, padding: 0.2 });
    if (focusedNodeId) {
      focusOnNode(focusedNodeId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onShowInfo = useCallback(
  (nodeId: string) => {
    const node = nodes.find((n) => n.id === nodeId);
    if (node && node.data.hasList) {
      // 👇 Enviamos tanto el titular como la lista de personas
      setSidebarData({
        principal: {
          id: node.data.id,
          nombre: node.data.nombre,
          cargo: node.data.cargo,
          tipo: node.data.tipo,
          horas: node.data.horas,
        },
        lista: node.data.listaPersonas || [],
      });

      focusOnNode(nodeId);
    }
  },
  [nodes, focusOnNode]
);


  const handleNavigate = (direction: "up" | "down" | "left" | "right") => {
    // ... (misma lógica de antes)
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
          onExpandCollapse(node.id, false);
          setSidebarData(null);
        }
        break;
      case "down":
        if (children.length > 0) {
          if (!node.data.isExpanded) {
            onExpandCollapse(node.id, true);
          }
          focusOnNode(children[0].id);
          setSidebarData(null);
        }
        break;
      case "left":
        if (siblings[currentIndex - 1]) {
          focusOnNode(siblings[currentIndex - 1].id);
          setSidebarData(null);
        }
        break;
      case "right":
        if (siblings[currentIndex + 1]) {
          focusOnNode(siblings[currentIndex + 1].id);
          setSidebarData(null);
        }
        break;
    }
  };

  const nodesWithState = useMemo(() => {
    return nodes.map(n => ({
      ...n,
      data: {
        ...n.data,
        isFocused: n.id === focusedNodeId,
        onExpandCollapse: onExpandCollapse,
        onShowInfo: onShowInfo,
      },
    }));
  }, [nodes, focusedNodeId, onExpandCollapse, onShowInfo]);

  const navigationState = useMemo(() => {
    // ... (misma lógica de antes)
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

  const onNodeClick = useCallback(
    (_: React.MouseEvent, node: Node) => {
      focusOnNode(node.id);
      if (!node.data.hasList) {
        setSidebarData(null);
      } else {
        if(node.id === focusedNodeId) {
          onShowInfo(node.id);
        }
      }
    },
    [focusOnNode, focusedNodeId, onShowInfo]
  );

  return (
    <ReactFlow
      // ... (mismas props)
      nodes={nodesWithState}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onNodeClick={onNodeClick}
      nodeTypes={nodeTypes}
      proOptions={{ hideAttribution: true }}
      className="bg-gray-50"
      nodesDraggable={false}
      panOnDrag={true}
      zoomOnScroll={true}
      minZoom={0.1}
  maxZoom={2}
  fitView
    >
      <Controls
        showInteractive={false}
        className="!left-4 !top-4 !bg-white !shadow-lg !rounded-lg"
        style={{ color: "#1C3A62" }}
      />
      <MiniMap
        position="bottom-left"
        // --- 👇 ACTUALIZACIÓN DEL COLOR DEL MINIMAPA ---
        nodeColor={(node: Node) => {
          return node.data.color || "#ccc"; // Usa el color jerárquico
        }}
        // --- (Fin de la actualización) ---
        maskColor="#e0f2f7"
      />
      <Background
        variant={BackgroundVariant.Dots}
        gap={16}
        size={1}
        color="#a1a1aa"
      />
      <div
        style={{
          position: "absolute",
          top: 20,
          right: 20,
          zIndex: 10,
          pointerEvents: "none",
          width: "80px",
          height: "auto",
        }}
      >
        {/* Asegúrate de que esta ruta sea correcta (debe estar en /public/images/) */}
        <img
          src="/images/escudo-pucara.png"
          alt="Colegio Pucará Logo"
          className="w-full h-auto"
        />
      </div>
      <NavigationUI onNavigate={handleNavigate} canNav={navigationState} />

      <InfoSidebarPucara
        data={sidebarData}
        onClose={() => setSidebarData(null)}
      />
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