import OrganigramaPro from "@/components/OrganigramaPro"; // Ajusta esta ruta si es necesario

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Puedes borrar el padding (p-24) u otro estilo 
        si quieres que el organigrama ocupe toda la pantalla.
      */}
      <OrganigramaPro />
    </main>
  );
}