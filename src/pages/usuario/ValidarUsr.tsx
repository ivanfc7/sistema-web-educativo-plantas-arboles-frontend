import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"

export function ValidarUsuario(){
    const { token } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        console.log("Vista montada");
        const verificar = async() => {
            try {
              // Llamada a tu endpoint de Django
            const response = await axios.get(`https://sistema-web-educativo-plantas-y-arboles-ntfs.onrender.com/sistemaWeb/api/verificar-token?token=${token}`, {
                    withCredentials: true // IMPORTANTE para que el navegador guarde la cookie
                });

                // Guardamos el access token (el de corta duración) en localStorage
                localStorage.setItem("access_token", response.data.access);
                
                // Redirigimos al inicio/juego después de 2 segundos de éxito
                setTimeout(() => navigate("/inicio"), 2000);
            }catch(error){
                console.log(error);
            }
        }
        if(token){
            verificar();
        }
    }, [token])

    return(
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-emerald-200">
            <div className="bg-white p-10 rounded-2xl shadow-xl text-center max-w-md w-full">
            
            {/* Spinner */}
            <div className="flex justify-center mb-6">
                <div className="w-12 h-12 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
    
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
                Verificando tu acceso
            </h2>
    
            <p className="text-gray-600">
                Estamos validando tu identidad. Esto solo tomará unos segundos...
            </p>
    
            </div>
        </div>
    )
}