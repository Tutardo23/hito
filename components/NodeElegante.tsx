// components/NodeElegante.tsx
"use client";
import { Handle, Position } from "reactflow";
import { FaUserCircle, FaClock, FaPlus, FaMinus } from "react-icons/fa";

type PersonaData = {
  id: string;
  nombre: string;
  cargo: string;
  tipo: "Titular" | "Contratado";
  horas: number;
  hasChildren: boolean;
  isExpanded: boolean;
  isFocused: boolean; // <-- NUEVO: Para saber si es la "diapositiva" activa
  onExpandCollapse?: (id: string) => void;
};

export default function NodeElegante({ data }: { data: PersonaData }) {
  const isTitular = data.tipo === "Titular";
  const bgColor = isTitular ? "bg-blue-700" : "bg-teal-600";
  const textColor = "text-white";
  const shadowColor = isTitular ? "shadow-blue-800/40" : "shadow-teal-700/40";

  // --- NUEVO: Estilo de Foco ---
  const focusRing = data.isFocused
    ? "ring-4 ring-offset-2 ring-yellow-400"
    : "ring-0";

  const handleExpandClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (data.onExpandCollapse) {
      data.onExpandCollapse(data.id);
    }
  };

  return (
    <div
      className={`relative rounded-xl shadow-lg ${shadowColor}
                  min-w-[280px] max-w-[320px] p-0 overflow-hidden 
                  transition-all duration-300 ${focusRing}`} // <-- Añadido {focusRing}
    >
      {/* Etiqueta de tipo */}
      <div
        className={`absolute top-0 right-0 px-3 py-1 text-xs font-bold rounded-bl-lg
                    ${isTitular ? "bg-blue-800" : "bg-teal-700"} ${textColor}`}
      >
        {data.tipo}
      </div>

      {/* Header */}
      <div className={`${bgColor} ${textColor} p-4 pb-2 rounded-t-xl`}>
        <div className="flex items-center mb-2">
          <FaUserCircle className="text-3xl mr-3 opacity-80" />
          <h3 className="font-extrabold text-xl leading-tight">
            {data.nombre}
          </h3>
        </div>
        <p className="text-sm font-light opacity-80">{data.cargo}</p>
      </div>

      {/* Body */}
      <div className="bg-gray-50 text-gray-800 p-4 pt-2 rounded-b-xl">
        {data.horas > 0 && (
          <div className="flex items-center text-sm mt-1">
            <FaClock className="text-blue-500 mr-2" />
            <span className="font-semibold">{data.horas} hs.</span>
          </div>
        )}
      </div>

      {/* --- BOTÓN +/- (Vuelve a estar ABAJO) --- */}
      {data.hasChildren && (
        <button
          onClick={handleExpandClick}
          className={`absolute -bottom-4 left-1/2 -translate-x-1/2
                      w-8 h-8 rounded-full flex items-center justify-center
                      text-white shadow-md transition-all duration-200
                      ${isTitular ? "bg-blue-800 hover:bg-blue-900" : "bg-teal-700 hover:bg-teal-800"}`}
          aria-label={data.isExpanded ? "Colapsar" : "Expandir"}
        >
          {data.isExpanded ? <FaMinus size={12} /> : <FaPlus size={12} />}
        </button>
      )}

      {/* --- HANDLES (Vuelven a estar Arriba/Abajo) --- */}
      <Handle
        type="target"
        position={Position.Top}
        className="!w-3 !h-3 !-top-1.5 !bg-gray-400 !border-2 !border-gray-500"
      />
      <Handle
        type="source"
        position={Position.Bottom}
        className="!w-3 !h-3 !-bottom-1.5 !bg-gray-400 !border-2 !border-gray-500"
      />
    </div>
  );
}