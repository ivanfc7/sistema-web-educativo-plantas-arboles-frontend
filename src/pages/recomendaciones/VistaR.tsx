import { useState } from "react";
import { BarraNavegacion } from "../../components/BarraNavegacion";
import { Salir } from "../../components/Salir";
import { Layout1 } from "./caso1/Layout1";
import { Layout2 } from "./caso2/Layout2";

export function VistaR() {
  const [activeTab, setActiveTab] = useState("layout1");

  return (
    <section className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-lime-300">
      <BarraNavegacion />
      <Salir />

      {/* Tabs */}
      <div className="flex justify-center mt-6 space-x-4">
        <button
          onClick={() => setActiveTab("layout1")}
          className={`px-4 py-2 rounded-t-lg font-semibold ${
            activeTab === "layout1"
              ? "bg-lime-300 text-black"
              : "bg-gray-200 text-gray-600 hover:bg-gray-300"
          }`}
        >
          Voy a plantar por primera vez
        </button>
        <button
          onClick={() => setActiveTab("layout2")}
          className={`px-4 py-2 rounded-t-lg font-semibold ${
            activeTab === "layout2"
              ? "bg-lime-300 text-black"
              : "bg-gray-200 text-gray-600 hover:bg-gray-300"
          }`}
        >
          Ya tengo mis plantas
        </button>
      </div>

      {/* Contenido */}
      <div className="p-4 bg-white rounded-b-lg shadow-md mx-4 mt-0">
        {activeTab === "layout1" && <Layout1 />}
        {activeTab === "layout2" && <Layout2 />}
      </div>
    </section>
  );
}
