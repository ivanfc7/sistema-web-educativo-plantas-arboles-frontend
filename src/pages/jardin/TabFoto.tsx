import { useEffect, useState } from "react";
import { CheckIcon } from "lucide-react";
import { updateFotoPlantaById } from "../../assets/utils/sistema.api";
import { toast } from "react-hot-toast";

type TabFotoProps = {
    idPlanta: number;
    nombrePlanta: string;
    recargar: () => void;
    onActualizado?: () => void; 
};

export function TabFoto({ idPlanta, nombrePlanta, recargar, onActualizado }: TabFotoProps) {
    const [activeTab, setActiveTab] = useState("layout1");
    const [image, setImage] = useState<File | null>(null);
    const [rutaImagen, setRutaImagen] = useState('');
    const [vistaImagen, setVistaImagen] = useState<string | null>(null);

    const imagenesPreelaboradas = [
        "/fotoDefault.png",
        "/imgPreelaboradas/fotoPE1.jpg",
        "/imgPreelaboradas/fotoPE2.jpg",
        "/imgPreelaboradas/fotoPE3.jpg",
        "/imgPreelaboradas/fotoPE4.jpg",
        "/imgPreelaboradas/fotoPE5.jpg",
        "/imgPreelaboradas/fotoPE6.jpg",
        "/imgPreelaboradas/fotoPE7.jpg",
        "/imgPreelaboradas/fotoPE8.jpg",
        "/imgPreelaboradas/fotoPE9.jpg",
        "/imgPreelaboradas/fotoPE10.jpg",
        "/imgPreelaboradas/fotoPE11.jpg",
        "/imgPreelaboradas/fotoPE12.jpg",
    ]

    useEffect(()=>{
        return () => {
            if(vistaImagen){
                URL.revokeObjectURL(vistaImagen);
            }
        };
    }, [vistaImagen])

    const subirImagen = (event:React.ChangeEvent<HTMLInputElement>) => {
        const imagenActual = event.target.files?.[0]; 
        if (imagenActual) {
            setImage(imagenActual);
            const vistaURL = URL.createObjectURL(imagenActual);
            setVistaImagen(vistaURL);
        }
    };

    const seleccionarImagen = async (rutaImagenPreelaborada:string) => {
        const response = await fetch(rutaImagenPreelaborada);
        const blob = await response.blob();
        const filename =  rutaImagenPreelaborada.split('/').pop() as string;
        const file = new File([blob], filename, {type: blob.type});
        if (file) {
            updateFotoPlantaById(String(idPlanta), file)
            .then((response) => {
                console.log(response);
                toast.success('Se actualizo la foto de tu planta !!');
                recargar(); 
                if (onActualizado) onActualizado(); 
            })
            .catch((error)=> {
                console.log(error);
            });
        }
    };

    const actualizarFoto = () => {
        if(image){
            updateFotoPlantaById(String(idPlanta), image)
                .then((response) => {
                    console.log(response);
                    toast.success('Se actualizo la foto de tu planta !!');
                    recargar(); 
                    if (onActualizado) onActualizado(); 
                })
                .catch((error)=> {
                    console.log(error);
                });
        }
    };

    return (
        <div className="p-3 max-w-md w-full max-h-[70vh] overflow-y-auto">
            <p className="font-semibold text-teal-900">Cambiar foto de la planta {nombrePlanta}</p>
            <button onClick={() => setActiveTab('layout1')}
                className={`px-4 py-2 rounded-t-lg font-semibold ${activeTab === "layout1"
                        ? "bg-lime-300 text-black"
                        : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                    }`}
            >
                Imagenes prediseñadas
            </button>
            <button onClick={() => setActiveTab('layout2')}
                className={`px-4 py-2 rounded-t-lg font-semibold ${activeTab === "layout2"
                        ? "bg-lime-300 text-black"
                        : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                    }`}
            >
                Subir una foto
            </button>
            {/* Contenido */}
            <div className="p-4 bg-white rounded-b-lg shadow-md mx-4 mt-0">
                {activeTab === "layout1" && (
                    <div className="p-2">
                        <div className="grid grid-cols-3 md:grid-cols-4 ">
                            {imagenesPreelaboradas.map((ruta, index) => (
                                <div
                                    key={index}
                                    onClick={() => setRutaImagen(ruta)}
                                    className={`border-2 rounded cursor-pointer hover:shadow-lg ${
                                    rutaImagen === ruta ? "border-green-500" : "border-amber-200"
                                    }`}
                                >
                                    <img src={ruta} alt="foto por defecto" width={75} height={75} className="mx-auto p-1" />
                                </div>
                            ))}
                        </div>
                        <button onClick={()=>seleccionarImagen(rutaImagen)} className="text-white font-bold cursor-pointer rounded-lg mt-2 bg-green-500 hover:bg-green-600 text-sm sm:w-auto px-2 py-1.5 text-center focus:ring-green-300 flex flex-row" title="Guardar Imagen"><CheckIcon/></button>
                    </div>
                )}
                {activeTab === "layout2" && (
                    <div className="p-2">
                        <input type="file" className="cursor-pointer bg-gray-200 p-2" accept="image/*" onChange={subirImagen}/>
                        {vistaImagen &&(
                            <div className="mt-4">
                                <img src={vistaImagen} className="mx-auto" alt="Imagen Seleccionada" />
                            </div>
                        )}
                        <button onClick={actualizarFoto} disabled={!vistaImagen} 
                            className={`text-white font-bold rounded-lg mt-2 text-sm sm:w-auto px-2 py-1.5 text-center flex flex-row ${vistaImagen? "bg-green-500 hover:bg-green-600 cursor-pointer": "bg-gray-400 cursor-not-allowed"}`} title="Guardar Foto"><CheckIcon/></button>    
                    </div>
                )}
            </div>
        </div>
    )
}