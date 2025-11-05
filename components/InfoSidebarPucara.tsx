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
  data: Persona[] | null;
  onClose: () => void;
};

export default function InfoSidebarPucara({ data, onClose }: SidebarProps) {
  // --- Colores Pucará ---
  const colorAzulPucara = "#1C3A62";
  const colorAmarilloPucara = "#ECC300";

  const isVisible = !!data;

  return (
    <div
      className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl
                  transform transition-transform duration-500 ease-in-out z-20
                  ${isVisible ? "translate-x-0" : "translate-x-full"}`}
    >
      {/* --- Header del Sidebar --- */}
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

      {/* --- 👇 CONTENIDO (NUEVO DISEÑO "EXECUTIVE") 👇 --- */}
      <div className="h-[calc(100%-72px)] overflow-y-auto">
        <ul className="divide-y divide-gray-200">
          {data && data.length > 0 ? (
            data.map(persona => (
              <li
                key={persona.id}
                className="p-5 flex justify-between items-center transition-colors hover:bg-gray-50"
              >
                {/* Nombre y Cargo */}
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

                {/* "Píldora" de Horas (si existen) */}
                {persona.horas > 0 && (
                  <div className="ml-4 flex-shrink-0">
                    <span
                      className="text-sm font-bold px-3 py-1 rounded-full"
                      style={{
                        backgroundColor: "rgba(236, 195, 0, 0.2)", // Fondo amarillo claro
                        color: "#b48b00", // Amarillo oscuro para texto
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
      {/* --- (Fin del nuevo diseño) --- */}
    </div>
  );
}