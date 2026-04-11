import { CreateUsr } from "../usuario/CreateUsr";
import { Carrusel } from "./Carrusel";
import { Footer } from "../../components/PiePagina";
import { useEffect, useState } from "react";
import { XIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function LandingPage() {
    const [mostrarModal, setMostrarModal] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem('access_token'); // o 'access_token'
        if (token) {
            // ¡Si ya tiene sesión, no lo dejes en la landing!
            navigate('/inicio');
        }
    }, [navigate]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-lime-300 flex flex-col">
            <section className="gap-2 m-2 flex-grow">
                <div className="m-6 md:m-12">
                    <Carrusel />
                </div>
                <div className="m-6 md:m-12 justify-center align-middle text-center">
                    <button className="rounded-2xl pt-2 pb-2 pl-4 pr-4 text-white text-xl bg-green-500 hover:bg-green-600 cursor-pointer" onClick={() => setMostrarModal(true)}>Comenzar</button>
                </div>
            </section>
            {mostrarModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 z-50">
                    <div className="bg-white border-green-700 border-2 rounded-lg shadow-xl overflow-hidden relative">
                        <button onClick={()=>setMostrarModal(false)} className='p-2 cursor-pointer' title='Cerrar'> <XIcon className='text-gray-500 hover:text-gray-800'/></button>
                        <div>
                            <CreateUsr />
                        </div>
                    </div>
                </div>
            )}
            <Footer/>
        </div>
    )
}