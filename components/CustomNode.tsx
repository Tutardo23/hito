"use client";
import { Handle, Position } from "reactflow";

type NodeData = {
  nombre: string;
  cargo: string;
  tipo: string;
  horas: number;
  color?: string;
  listaPersonas?: { nombre: string; cargo: string }[];
};

export default function CustomNode({ data }: { data: NodeData }) {
  const borderColor =
    data.tipo === "Titular" ? "border-blue-600" : "border-green-500";

  return (
    <div
      className={`bg-white rounded-xl shadow-md w-72 border-l-8 ${borderColor}`}
    >
      {/* Línea de conexión superior */}
      <Handle type="target" position={Position.Top} className="!bg-gray-400" />

      {/* CABECERA */}
      <div
        className="rounded-t-xl px-4 py-3 text-white"
        style={{ backgroundColor: data.color || "#1C3A62" }}
      >
        {/* 🔹 Cargo ARRIBA */}
        <div className="text-sm font-semibold opacity-90">
          {data.cargo}
        </div>
        {/* 🔹 Nombre ABAJO */}
        <div className="text-lg font-bold">{data.nombre}</div>
      </div>

      {/* CUERPO: Lista de personas */}
      {data.listaPersonas && data.listaPersonas.length > 0 && (
        <div className="p-3 grid grid-cols-2 gap-2 text-sm">
          {data.listaPersonas.map((p, index) => (
            <div key={index}>
              <div className="font-bold text-blue-900">{p.cargo}</div>
              <div className="text-gray-600 text-xs">{p.nombre}</div>
            </div>
          ))}
        </div>
      )}

      {/* HORAS (si tiene) */}
      {data.horas > 0 && (
        <div className="px-4 pb-2 text-xs text-right text-gray-500">
          {data.horas} hs.
        </div>
      )}

      {/* Línea de conexión inferior */}
      <Handle
        type="source"
        position={Position.Bottom}
        className="!bg-gray-400"
      />
    </div>
  );
}
