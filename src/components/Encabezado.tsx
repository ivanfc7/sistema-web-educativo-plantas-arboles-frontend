import webgarden from '/webgarden.jpg';
import { Leaf } from "lucide-react"; 
import '../App.css'

export function Encabezado() {
  return (
    <header className="py-2 px-4 max-w-7xl mx-auto w-full flex items-center justify-between">
      <div className="flex items-center gap-3 group cursor-pointer">
        <img 
          src={webgarden} 
          className="w-10 h-10 rounded-full object-cover shadow-sm ring-2 ring-emerald-500/20 group-hover:scale-105 transition-transform" 
          alt="Webgarden icono" 
        />
        <span className="text-xl font-bold bg-gradient-to-r from-emerald-800 to-green-600 bg-clip-text text-transparent">
          Webgarden
        </span>
      </div>
      
      <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 bg-emerald-100/80 backdrop-blur px-3 py-1.5 rounded-full border border-emerald-200">
        <Leaf className="w-3.5 h-3.5 text-emerald-600" />
        <span>Aprende & Cuida</span>
      </div>
    </header>
  );
}