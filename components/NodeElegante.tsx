// components/NodeElegante.tsx
"use client";
import { Handle, Position } from "reactflow";
import { FaClock, FaPlus, FaMinus, FaUsers } from "react-icons/fa";
import Image from "next/image";

type Persona = {
  id: string;
  nombre: string;
  cargo: string;
  tipo: string;
  horas: number;
};

type PersonaData = {
  id: string;
  nombre: string;
  cargo: string;
  tipo: "Titular" | "Contratado";
  horas: number;
  hasChildren: boolean;
  hasList: boolean;
  isExpanded: boolean;
  isFocused: boolean;
  listaPersonas?: Persona[];
  color: string;
  depth: number;
  onExpandCollapse?: (id: string) => void;
  onShowInfo?: (id: string) => void;
};

const colorAzulPucara = "#1C3A62";
const colorAmarilloPucara = "#ECC300";

// --- TARJETA JERÁRQUICA ---
const NodeCard = ({ data }: { data: PersonaData }) => {
  const bgColor = data.color;
  const headerTextColor =
    bgColor === colorAmarilloPucara ? "text-gray-900" : "text-white";

  return (
    <>
      {/* Tipo de contrato arriba a la derecha */}
      <div
        className={`absolute top-0 right-0 px-3 py-1 text-xs font-bold rounded-bl-lg ${headerTextColor}`}
        style={{ backgroundColor: bgColor, opacity: 0.8 }}
      >
        {data.tipo}
      </div>

      {/* Cabecera principal */}
      <div
        className={`p-4 pb-2 rounded-t-xl ${headerTextColor}`}
        style={{ backgroundColor: bgColor }}
      >
        <div className="flex items-center mb-2">
          <div
            className="relative w-10 h-10 mr-3 rounded-full flex-shrink-0"
            style={{
              backgroundColor:
                bgColor === colorAmarilloPucara
                  ? "rgba(28, 58, 98, 0.1)"
                  : "rgba(255, 255, 255, 0.8)",
            }}
          >
            <Image
              src="/images/escudo-pucara.png"
              alt="Colegio Pucará"
              layout="fill"
              objectFit="contain"
              className="p-1"
            />
          </div>

          {/* 🔹 Solo los nodos importantes muestran CARGO arriba y NOMBRE abajo */}
          <div>
            <p className="text-sm font-light opacity-80 leading-tight">
              {data.cargo}
            </p>
            <h3 className="font-extrabold text-xl leading-tight">
              {data.nombre}
            </h3>
          </div>
        </div>
      </div>

      {/* Horas (solo si tiene) */}
      <div className="bg-gray-50 text-gray-800 p-4 pt-2 rounded-b-xl">
        {data.horas > 0 && (
          <div className="flex items-center text-sm mt-1">
            <FaClock className="mr-2" style={{ color: colorAzulPucara }} />
            <span className="font-semibold">{data.horas} hs.</span>
          </div>
        )}
      </div>
    </>
  );
};

// --- BLOQUE DE LISTAS ---
const NodeGridPremium = ({ data }: { data: PersonaData }) => {
  const bgColor = data.color;
  const headerTextColor =
    bgColor === colorAmarilloPucara ? "text-gray-900" : "text-white";
  const gridBorderColor = "rgba(28, 58, 98, 0.2)";
  const gridNames = data.listaPersonas || [];

  // 👉 Formato apellido (grande) y nombre (chico)
  const formatName = (fullName: string | undefined) => {
    if (!fullName) return null;
    const parts = fullName.split(" ");
    const firstName = parts.pop() || "";
    const lastName = parts.join(" ");
    return (
      <>
        <span className="font-semibold">{lastName}</span>
        <span className="text-xs opacity-80">{firstName}</span>
      </>
    );
  };

  return (
    <div className="rounded-xl overflow-hidden" style={{ backgroundColor: bgColor }}>
      {/* Cabecera */}
      <div
        className={`p-4 text-left flex items-center ${headerTextColor}`}
        style={{ backgroundColor: bgColor }}
      >
        <div
          className="relative w-10 h-10 mr-3 rounded-full flex-shrink-0"
          style={{
            backgroundColor:
              bgColor === colorAmarilloPucara
                ? "rgba(28, 58, 98, 0.1)"
                : "rgba(255, 255, 255, 0.8)",
          }}
        >
          <Image
            src="/images/escudo-pucara.png"
            alt="Colegio Pucará"
            layout="fill"
            objectFit="contain"
            className="p-1"
          />
        </div>

        {/* 🔹 En encabezado de bloque, sigue cargo arriba / nombre abajo */}
        <div>
          <p className="text-sm font-light opacity-80 leading-tight">
            {data.cargo}
          </p>
          <h3 className="font-extrabold text-xl leading-tight">{data.nombre}</h3>
        </div>
      </div>

      {/* Grid de profesores → Apellido grande, nombre chico */}
      <div className="grid grid-cols-2 bg-white">
        {gridNames.map((persona, index) => (
          <div
            key={persona.id || index}
            className="text-left p-3 flex flex-col leading-tight"
            style={{
              color: colorAzulPucara,
              borderTop: `1px solid ${gridBorderColor}`,
              borderLeft:
                index % 2 !== 0 ? `1px solid ${gridBorderColor}` : "none",
            }}
          >
            {formatName(persona.nombre)}
          </div>
        ))}
      </div>
    </div>
  );
};

// --- PRINCIPAL ---
export default function NodeElegante({ data }: { data: PersonaData }) {
  const {
    isFocused,
    hasChildren,
    hasList,
    isExpanded,
    color,
    onExpandCollapse,
    onShowInfo,
  } = data;

  const shadowColor = "shadow-gray-400/50";
  const focusRing = isFocused
    ? `ring-4 ring-offset-2 ring-[${colorAmarilloPucara}]`
    : "ring-0";

  const handleExpandClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onExpandCollapse?.(data.id);
  };

  const handleInfoClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onShowInfo?.(data.id);
  };

  return (
    <div
      className={`relative rounded-xl shadow-lg ${shadowColor}
                  min-w-[320px] max-w-[320px] 
                  transition-all duration-300 ${focusRing}`}
      style={{ width: 320 }}
    >
      {/* Nodos importantes → NodeCard | Nodos con lista → NodeGridPremium */}
      {hasList ? <NodeGridPremium data={data} /> : <NodeCard data={data} />}

      {/* Botones inferiores */}
      <div className="absolute -bottom-4 left-0 right-0 flex justify-center gap-x-3">
        {hasChildren && (
          <button
            onClick={handleExpandClick}
            className="w-8 h-8 rounded-full flex items-center justify-center text-white shadow-md"
            style={{ backgroundColor: color }}
          >
            {isExpanded ? <FaMinus size={12} /> : <FaPlus size={12} />}
          </button>
        )}
        {hasList && (
          <button
            onClick={handleInfoClick}
            className="w-8 h-8 rounded-full flex items-center justify-center shadow-md"
            style={{
              backgroundColor: colorAmarilloPucara,
              color: colorAzulPucara,
            }}
          >
            <FaUsers size={14} />
          </button>
        )}
      </div>

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
