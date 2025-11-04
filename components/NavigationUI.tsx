// components/NavigationUI.tsx
"use client";
import { FaArrowUp, FaArrowDown, FaArrowLeft, FaArrowRight } from "react-icons/fa";

type NavProps = {
  onNavigate: (direction: "up" | "down" | "left" | "right") => void;
  // Pasamos qué botones deshabilitar
  canNav: {
    up: boolean;
    down: boolean;
    left: boolean;
    right: boolean;
  };
};

// Estilo base para los botones
const btnStyle =
  "w-12 h-12 bg-white/80 shadow-lg rounded-full flex items-center justify-center text-blue-800 backdrop-blur-sm transition-all duration-200 hover:bg-white hover:scale-105";
const btnStyleDisabled = "opacity-30 cursor-not-allowed hover:scale-100";

export default function NavigationUI({ onNavigate, canNav }: NavProps) {
  return (
    <div
      className="absolute bottom-6 right-6 z-10 grid grid-cols-3 gap-2 w-40"
      style={{ pointerEvents: "auto" }}
    >
      {/* Fila 1: Flecha Arriba */}
      <div className="col-span-3 flex justify-center">
        <button
          onClick={() => onNavigate("up")}
          disabled={!canNav.up}
          className={`${btnStyle} ${!canNav.up ? btnStyleDisabled : ""}`}
          aria-label="Ir arriba"
        >
          <FaArrowUp />
        </button>
      </div>

      {/* Fila 2: Izquierda, Abajo, Derecha */}
      <div className="flex justify-end">
        <button
          onClick={() => onNavigate("left")}
          disabled={!canNav.left}
          className={`${btnStyle} ${!canNav.left ? btnStyleDisabled : ""}`}
          aria-label="Ir a la izquierda"
        >
          <FaArrowLeft />
        </button>
      </div>
      <div className="flex justify-center">
        <button
          onClick={() => onNavigate("down")}
          disabled={!canNav.down}
          className={`${btnStyle} ${!canNav.down ? btnStyleDisabled : ""}`}
          aria-label="Ir abajo"
        >
          <FaArrowDown />
        </button>
      </div>
      <div className="flex justify-start">
        <button
          onClick={() => onNavigate("right")}
          disabled={!canNav.right}
          className={`${btnStyle} ${!canNav.right ? btnStyleDisabled : ""}`}
          aria-label="Ir a la derecha"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}