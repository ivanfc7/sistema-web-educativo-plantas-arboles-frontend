import { useEffect, useState } from "react";
import { CheckCircle, Circle } from "lucide-react";
import { updateEtapa } from "../../../assets/utils/sistema.api";
import toast from "react-hot-toast";

type TimeLineProps = {
    idPlanta: string;
    tipo: string;
    etapa: string;
};

const etapasPorTipo: Record<string, { id: string; nombre: string }[]> = {
    arbol: [
        { id: 'semilla', nombre: "Semilla 🌱" },
        { id: 'plantin', nombre: "Plantin 🌿" },
        { id: 'planta_joven', nombre: "Planta Joven 🌳" },
        { id: 'arbol_adulto', nombre: "Arbol Adulto 🌴" },
    ],
    arbusto: [
        { id: 'semilla', nombre: "Semilla 🌱" },
        { id: 'plantin', nombre: "Plantin 🌿" },
        { id: 'planta_joven', nombre: "Planta Joven 🌳" },
        { id: 'arbol_adulto', nombre: "Arbusto Adulto 🌴" },
    ],
    flor: [
        { id: 'semilla', nombre: "Semilla 🌱" },
        { id: 'plantin', nombre: "Plantin 🌿" },
        { id: 'planta_joven', nombre: "Planta Joven 🌳" },
        { id: 'floracion', nombre: "Floración 🌸" },
    ],
    suculenta: [
        { id: 'semilla', nombre: "Semilla 🌱" },
        { id: 'plantin', nombre: "Plantin 🌿" },
        { id: 'planta_joven', nombre: "Planta Joven 🌳" },
        { id: 'floracion', nombre: "Planta Adulta 🌸" },
    ]
  };

export default function TimeLine({idPlanta, tipo, etapa}: TimeLineProps){
    const [etapaActual, setEtapaActual] = useState(etapa);
    const [seleccion, setSeleccion] = useState(etapa);
    const [id, setId] = useState(idPlanta);
    const etapas = etapasPorTipo[tipo] || [];

    useEffect(()=>{
        setEtapaActual(etapa);
        setSeleccion(etapa);
        setId(idPlanta);
    }, [etapa, tipo]);

    async function actualizarEtapa() {
        console.log('actualizando en la base de datos de la planta: '+id);
        setEtapaActual(seleccion);
        try {
            const respuesta = await updateEtapa(id, seleccion);
            console.log(respuesta);
            toast.success('Etapa de planta actualizada!');
        } catch (error) {
            console.log('Hubo un error');
        }
    }

    return (
        <div className="p-1">
            <h3 className="text-xl dark:text-teal-900 font-semibold mb-2">Etapas de tu planta</h3>
            <h4 className="pb-2"> ¿Quieres actualizar la etapa de tu planta? </h4>
            {/* TimeLine de 5 etapas */}
            <div className="flex items-center justify-between">
                {etapas.map((etapa, index) => (
                    <div key={etapa.id} className="flex flex-col items-center relative cursor-pointer"
                        onClick={() => setSeleccion(etapa.id)}
                    >
                         {/* Conector de línea */}
                        {index !== etapas.length - 1 && (
                            <div className="absolute top-1/4 left-full w-full h-1 bg-gray-400"></div>
                        )}

                        {/* Círculo */}
                        <div
                            className={`flex items-center justify-center w-10 h-10 rounded-full border-2
                            ${seleccion === etapa.id ? "bg-green-500 border-green-600 text-white" : "bg-white border-gray-400"}
                            ${etapaActual === etapa.id ? "ring-2 ring-green-400" : ""}
                            transition-all`}
                            >
                            {seleccion === etapa.id ? <CheckCircle size={20} /> : <Circle size={20} />}
                        </div>

                        {/* Nombre de etapa */}
                        <span className="mt-2 text-sm font-medium">{etapa.nombre}</span>
                    </div>
                ))}
            </div>
             {/* Botón de actualizar solo si cambió la selección */}
            {seleccion !== etapaActual && (
                <div className="mt-6 flex justify-center">
                    <button
                        onClick={actualizarEtapa}
                        className="px-6 py-2 bg-green-600 text-white rounded-xl shadow hover:bg-green-700 transition cursor-pointer"
                    >
                        Actualizar etapa
                    </button>
                </div>
            )}
        </div>
    )
}