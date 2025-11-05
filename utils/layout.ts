// utils/layout.ts
import { Edge, Node, Position } from "reactflow";
import dagre from "dagre";

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
  listaPersonas?: Persona[]; // <<-- ¡ARREGLO DEL ERROR DE TIPADO!
};

export const nodeWidth = 300;
export const nodeHeight = 150;

// --- Paleta de Colores Jerárquicos (sin cambios) ---
const colorAzulPucara = "#1C3A62";
const colorVerdePucara = "#2E6B4B";
const colorDoradoPucara = "#ECC300";
const colorGrisPucara = "#6b7280";
const colorGrisClaro = "#a1a1aa";

const hierarchyColors = [
  colorAzulPucara,
  colorVerdePucara,
  colorDoradoPucara,
  colorGrisPucara,
  colorGrisClaro,
];

export const transformarDatos = (
  data: OrgDataNode
): { initialNodes: Node[]; initialEdges: Edge[] } => {
  const initialNodes: Node[] = [];
  const initialEdges: Edge[] = [];

  function procesarNodo(nodo: OrgDataNode, parentId: string | null, depth: number) {
    const nodeId = nodo.id;
    const label = nodo.etiqueta || nodo.persona.nombre;

    // Determina si expande sub-nodos (usando 'children')
    const hasSubNodes = !!(nodo.children && nodo.children.length > 0); 
    
    // Determina si debe mostrar la lista (usando 'listaPersonas')
    const hasPersonaList = !!(nodo.listaPersonas && nodo.listaPersonas.length > 0);
    
    // Pasa la lista de personas que YA ESTÁ CARGADA en data.ts
    const listaPersonas = nodo.listaPersonas || []; 

    const color = hierarchyColors[depth] || colorGrisClaro;

    initialNodes.push({
      id: nodeId,
      type: "customElegant",
      data: {
        label,
        ...nodo.persona,
        hasChildren: hasSubNodes,
        hasList: hasPersonaList,
        listaPersonas: listaPersonas, 
        isExpanded: false,
        color: color,
        depth: depth,
      },
      position: { x: 0, y: 0 },
      sourcePosition: Position.Bottom,
      targetPosition: Position.Top,
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

    if (hasSubNodes) {
      nodo.children!.forEach(hijo => procesarNodo(hijo, nodeId, depth + 1));
    }
  }

  procesarNodo(data, null, 0);
  return { initialNodes, initialEdges };
};

const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));

export const getLayoutedElements = (
  nodes: Node[],
  edges: Edge[]
): { nodes: Node[]; edges: Edge[] } => {
  
  // --- ESPACIADO EXACTO: ranksep 100 y nodesep 70 (SIN CAMBIOS) ---
  dagreGraph.setGraph({ rankdir: "TB", ranksep: 100, nodesep: 70 });
  
  nodes.forEach((node) => {
    const nodeData = node.data as any;
    let h = nodeHeight;
    if (nodeData.hasList) {
      h = 240; 
    }
    
    dagreGraph.setNode(node.id, {
      width: nodeWidth, 
      height: h 
    });
  });

  edges.forEach((edge) => {
    dagreGraph.setEdge(edge.source, edge.target);
  });

  dagre.layout(dagreGraph);

  const layoutedNodes = nodes.map((node) => {
    const nodeWithPosition = dagreGraph.node(node.id);
    node.position = {
      x: nodeWithPosition.x - nodeWidth / 2,
      y: nodeWithPosition.y - nodeHeight / 2,
    };
    return node;
  });

  return { nodes: layoutedNodes, edges };
};