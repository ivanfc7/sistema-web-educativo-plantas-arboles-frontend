import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export function Salir(){
    const navegacion = useNavigate();
    const location = useLocation();
    const salir = () => {
        if (location.pathname === '/crear-cuenta') {
            navegacion('/index');
        }else{
            navegacion('/inicio');
        }
    }

    return (
        <button onClick={salir} className="cursor-pointer text-white rounded-lg mt-5 ml-3 bg-red-500 p-2 hover:bg-red-600" >🗙 Salir</button>
    )
}