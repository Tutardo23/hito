// components/InfoSidebarPucara.tsx
"use client";
import { FaTimes } from "react-icons/fa";

type Persona = {
  id: string;
  nombre: string;
  cargo: string;
  tipo: string;
  horas: number;
};

type SidebarProps = {
  data: {
    principal?: Persona | null; // 👈 el titular del nodo
    lista?: Persona[] | null;   // 👈 las personas del equipo
  } | null;
  onClose: () => void;
};

export default function InfoSidebarPucara({ data, onClose }: SidebarProps) {
  const colorAzulPucara = "#1C3A62";
  const colorAmarilloPucara = "#ECC300";

  const isVisible = !!data;

  // Combina titular + lista del equipo
  const combinedList: Persona[] = [];
  if (data?.principal) combinedList.push(data.principal);
  if (data?.lista && data.lista.length > 0) combinedList.push(...data.lista);

  return (
    <div
      className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl
                  transform transition-transform duration-500 ease-in-out z-20
                  ${isVisible ? "translate-x-0" : "translate-x-full"}`}
    >
      {/* --- Header --- */}
      <div
        className="flex items-center justify-between p-5"
        style={{ backgroundColor: colorAzulPucara, color: "white" }}
      >
        <h3 className="text-xl font-bold">Listado de Personal</h3>
        <button
          onClick={onClose}
          className="p-1 rounded-full text-white/70 hover:bg-white/20 transition-colors"
          aria-label="Cerrar"
        >
          <FaTimes size={20} />
        </button>
      </div>

      {/* --- Contenido --- */}
      <div className="h-[calc(100%-72px)] overflow-y-auto">
        <ul className="divide-y divide-gray-200">
          {combinedList.length > 0 ? (
            combinedList.map((persona) => (
              <li
                key={persona.id}
                className="p-5 flex justify-between items-center transition-colors hover:bg-gray-50"
              >
                {/* Nombre y cargo */}
                <div className="flex-1 min-w-0">
                  <span
                    className="font-semibold text-base truncate block"
                    style={{ color: colorAzulPucara }}
                  >
                    {persona.nombre}
                  </span>
                  <p className="text-sm text-gray-500 truncate">
                    {persona.cargo}
                  </p>
                </div>

                {/* Píldora de horas */}
                {persona.horas > 0 && (
                  <div className="ml-4 flex-shrink-0">
                    <span
                      className="text-sm font-bold px-3 py-1 rounded-full"
                      style={{
                        backgroundColor: "rgba(236, 195, 0, 0.2)",
                        color: "#b48b00",
                      }}
                    >
                      {persona.horas} hs.
                    </span>
                  </div>
                )}
              </li>
            ))
          ) : (
            <p className="text-gray-500 p-6 text-center">
              No hay personal listado en este equipo.
            </p>
          )}
        </ul>
      </div>
    </div>
  );
}
