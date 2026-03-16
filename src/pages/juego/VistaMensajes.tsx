import { useNavigate } from "react-router-dom";
import { BarraNavegacion } from "../../components/BarraNavegacion";
import { ArrowLeftSquare } from "lucide-react";
import { useEffect, useState } from "react";
import { getMensajesDesbloqueados } from "../../assets/utils/sistema.api";

interface MensajeData {
    id: number;
    titulo: string;
    descripcion: string;
    desbloqueado: boolean;
}
export function VistaMensajes(){
    const navegacion = useNavigate();
    const [lista, setLista] = useState<MensajeData[]>([]);

    async function cargarMensajes(){
        const res = await getMensajesDesbloqueados(1);
        setLista(res.data);
    }
    
    useEffect(()=>{
        cargarMensajes();
    },[]);

    const volverAlJuego = () => {
        navegacion('/juego-educativo/'+location.pathname.split('/').pop());
    }

    return(
        <div>
            <BarraNavegacion/>
            <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-lime-300">
                <button onClick={volverAlJuego} className="flex items-center justify-center gap-2 px-4 py-1.5 m-1 rounded-full text-sm font-semibold transition-all duration-300 shadow-sm border bg-amber-700 text-white border-yellow-400 hover:bg-amber-800 cursor-pointer">
                    <ArrowLeftSquare size={14}/>
                    <span className="whitespace-nowrap hidden md:inline-block">Volver al Juego</span>
                </button>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 py-8">
                    {lista.length !== 0 &&
                        lista.map((mensaje, index) => (
                        <div
                            key={index}
                            className={`bg-yellow-100 p-4 w-[90%] mx-auto rounded-md shadow-lg transform transition-transform duration-300 hover:scale-105 
                            ${index % 2 === 0 ? 'rotate-[-2deg]' : 'rotate-[2deg]'}`}
                            style={{ border: '2px dashed #facc15' }} 
                        >
                            <div className="flex justify-between items-center mb-2">
                                <p className="font-bold text-lg text-center mb-2 p-2">{mensaje.titulo}</p>
                                <hr className="border-t border-yellow-300 mb-2" />
                                <p className="text-sm text-gray-800">{mensaje.descripcion}</p>
                            </div>
                        </div>
                    ))}
                </div>
           </div>
        </div>
    )
}