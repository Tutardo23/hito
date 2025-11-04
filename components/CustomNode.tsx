"use client";
import { Handle, Position } from "reactflow";

// Tipamos los datos que recibirá el nodo desde tus datos
type NodeData = {
  nombre: string;
  cargo: string;
  tipo: string;
  horas: number;
};

export default function CustomNode({ data }: { data: NodeData }) {
  // Color del borde según el tipo de contrato
  const borderColor =
    data.tipo === "Titular" ? "border-blue-600" : "border-green-500";

  return (
    <div
      className={`bg-white rounded-lg shadow-md w-64 ${borderColor} border-l-8`}
    >
      {/* Conexión de entrada (arriba) */}
      <Handle type="target" position={Position.Top} className="!bg-gray-400" />

      {/* Contenido de la tarjeta */}
      <div className="p-4">
        <div className="font-bold text-lg text-blue-900">{data.nombre}</div>
        <div className="text-gray-600 text-sm">{data.cargo}</div>
        
        {/* Solo mostramos horas si son mayores a 0 */}
        {data.horas > 0 && (
          <div className="mt-2 pt-2 border-t border-gray-200">
            <span className="text-xs font-semibold bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
              {data.horas} hs.
            </span>
          </div>
        )}
      </div>

      {/* Conexión de salida (abajo) */}
      <Handle
        type="source"
        position={Position.Bottom}
        className="!bg-gray-400"
      />
    </div>
  );
}