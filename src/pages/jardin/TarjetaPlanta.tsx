interface Planta{
    id: number
    especie: string;
    tipo: string;
    etapa: string;
    descripcion: string;
    foto: string;
}

interface plantaProps{
    plantaGuardada: Planta;
    recargar: () => void;
}


import { useState } from 'react';
import { ImageIcon, XIcon } from 'lucide-react';
import { TabFoto } from './TabFoto';

export function Tarjeta( {plantaGuardada, recargar}: plantaProps){
    const [modalAbierto, setModalAbierto] = useState(false);
    const [descripcionActual, setDescripcionActual] = useState("");
    const [cambiarFoto, setCambiarFoto] = useState(false);

    const formatear = (palabra:string) =>{
        return palabra.charAt(0).toUpperCase() + palabra.slice(1);
    };

    const mostrarModal = (descripcion:string) =>{
        setDescripcionActual(descripcion);
        setModalAbierto(true);
    };

    const cerrarModal = () => {
        setModalAbierto(false);
        setDescripcionActual("");
    };

    const enlace:string = '/aportes-plantas/'+plantaGuardada.id;
    return (
        <div className="rounded-lg bg-lime-100 flex m-1 p-1">
            <div className="w-1/4 m-1.5">
                <img src={plantaGuardada.foto} alt="Imagen de planta" className='max-w-24 max-h-24'/>
            </div>
            <div className="flex-1">
                <p className="font-semibold">{formatear(plantaGuardada.especie)}</p>
                <p className="text-sm text-gray-500">Tipo de planta: ({formatear(plantaGuardada.tipo)})</p>
                <p className="text-sm text-gray-500">Etapa actual: ({formatear(plantaGuardada.etapa)})</p>
                <hr />
                <div className='flex items-center space-x-2'>
                    <button onClick={()=>setCambiarFoto(true)} className='cursor-pointer' title='Cambiar foto'><ImageIcon className="w-8 h-8 text-teal-700 hover:text-teal-900"/></button>
                    <button onClick={() => mostrarModal(plantaGuardada.descripcion)} className='text-green-700 cursor-pointer text-sm font-medium hover:underline'>Descripción</button>
                    {plantaGuardada.tipo === 'arbol' &&(
                        <a href={enlace} className='text-teal-600 cursor-pointer text-sm font-medium hover:underline'>Historial de Captura de Carbono</a>
                    )}
                </div>
            </div>
            {modalAbierto && (
                <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded shadow-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
                        <h3 className="text-lg font-semibold mb-2">Descripción completa</h3>
                        <div className='m-auto'><img className='max-w-full max-h-60 object-contain rounded' src={plantaGuardada.foto} alt="Imagen de planta" /></div>
                        <p className="text-gray-700">{descripcionActual}</p>
                        <button onClick={cerrarModal}
                            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded mr-2 cursor-pointer">Cerrar
                        </button>
                    </div>
                </div>
            )}
            {cambiarFoto && (
                <div className="fixed z-10 inset-0 overflow-y-auto bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white border-green-700 border-2 rounded-lg shadow-xl overflow-hidden relative">
                        <button onClick={()=>setCambiarFoto(false)} className='p-2 cursor-pointer right-0' title='Cerrar'> <XIcon className='text-gray-500 hover:text-gray-800'/></button>
                        <TabFoto idPlanta={plantaGuardada.id} nombrePlanta={plantaGuardada.especie} recargar={recargar} onActualizado={() => {recargar(); setCambiarFoto(false);}}/>
                    </div>
                </div>
            )}
        </div>
    )
}