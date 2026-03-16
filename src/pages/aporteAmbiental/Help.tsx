import { HelpCircle } from 'lucide-react';
import ayuda from '/Guia.png';

export function Ayuda(){
    return(
        <div className="absolute z-10 mt-8 w-80 bg-green-100 p-3 rounded-lg shadow-xl text-sm border border-gray-200">
          Calcula la altura y diametro de tu arbol/planta 
          <img src={ayuda} alt="guia" />
          <br />
          <span className="text-xs text-gray-500 flex flex-row">Haz clic en el icono <HelpCircle className="w-5 h-5 ml-1 mr-1" />  para cerrar.</span>
        </div>
    )
}