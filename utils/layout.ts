// utils/layout.ts
import { Edge, Node, Position } from "reactflow";
import dagre from "dagre";

// (Aquí van tus tipos OrgDataNode y Persona)
// ...
type Persona = {
  id: string;
  nombre: string;
  cargo: string;
  tipo: string;
  horas: number;
};

type OrgDataNode = {
  id: string;
  etiqueta?: string;
  persona: Persona;
  children?: OrgDataNode[];
};
// ...

export const transformarDatos = (
  data: OrgDataNode
): { initialNodes: Node[]; initialEdges: Edge[] } => {
  const initialNodes: Node[] = [];
  const initialEdges: Edge[] = [];

  function procesarNodo(nodo: OrgDataNode, parentId: string | null) {
    const nodeId = nodo.id;
    const label = nodo.etiqueta || nodo.persona.nombre;
    const hasChildren = !!(nodo.children && nodo.children.length > 0);

    initialNodes.push({
      id: nodeId,
      type: "customElegant",
      data: {
        label,
        ...nodo.persona,
        hasChildren: hasChildren,
        isExpanded: false,
      },
      position: { x: 0, y: 0 },
      // --- Asegúrate de que estén Arriba/Abajo ---
      sourcePosition: Position.Bottom,
      targetPosition: Position.Top,
      // ----------------------------------------
      hidden: !!parentId,
    });

    if (parentId) {
      initialEdges.push({
        id: `e-${parentId}-${nodeId}`,
        source: parentId,
        target: nodeId,
        type: "smoothstep",
        animated: false,
        style: { strokeWidth: 2, stroke: "#a1a1aa" },
        hidden: true,
      });
    }

    if (hasChildren) {
      nodo.children!.forEach(hijo => procesarNodo(hijo, nodeId));
    }
  }

  procesarNodo(data, null);
  return { initialNodes, initialEdges };
};

const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));

// --- 👇 EXPORTA ESTOS VALORES ---
export const nodeWidth = 300;
export const nodeHeight = 150;
// --- (Fin de la exportación) ---

export const getLayoutedElements = (
  nodes: Node[],
  edges: Edge[]
): { nodes: Node[]; edges: Edge[] } => {
  // --- Asegúrate de que esté en "TB" ---
  dagreGraph.setGraph({ rankdir: "TB", ranksep: 80, nodesep: 40 });
  // ------------------------------------

  nodes.forEach(node => {
    dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight });
  });

  edges.forEach(edge => {
    dagreGraph.setEdge(edge.source, edge.target);
  });

  dagre.layout(dagreGraph);

  const layoutedNodes = nodes.map(node => {
    const nodeWithPosition = dagreGraph.node(node.id);
    node.position = {
      x: nodeWithPosition.x - nodeWidth / 2,
      y: nodeWithPosition.y - nodeHeight / 2,
    };
    return node;
  });

  return { nodes: layoutedNodes, edges };
};