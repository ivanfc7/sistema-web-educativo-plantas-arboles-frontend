import { Wind } from "lucide-react"; 

interface Aporte {
    cantidad: number;
    oxigenoTotal: number;
    co2Total: number;
    carbonoTotal: number;
    fechaRegistro: string;
}

interface AporteTarjeta{
    aporte: Aporte;
}

export function Tarjetas({aporte}: AporteTarjeta){
    return (
      <div className="m-7 bg-green-50 rounded-2xl shadow-md p-4">
        <div className="flex flex-col items-center space-y-4">

          {/* Icono */}
          <div className="bg-green-200 rounded-full p-3">
            <Wind className="w-10 h-10 text-green-700"/>
          </div>

          {/* Valores principales */}
          <div className="text-center">
            <p className="text-2xl font-bold text-green-700">{aporte.co2Total} kg CO₂ eq</p>
            <p className="text-sm text-gray-600">Absorbido del aire por este árbol</p>
          </div>

          {/* Métricas secundarias */}
          <div className="grid grid-cols-2 gap-4 w-full text-sm text-gray-700 mt-2">
            <div>
              <p className="font-bold">Oxígeno liberado:</p>
              <p>{aporte.oxigenoTotal} kg O₂/año</p>
            </div>
            <div>
              <p className="font-bold">Carbono capturado:</p>
              <p>{aporte.carbonoTotal} kg C/año</p>
            </div>
          </div>

          {/* Info contextual */}
          <div className="text-xs text-gray-500 mt-3">
            {aporte.cantidad} ejemplares • {aporte.fechaRegistro}
          </div>
        </div>
      </div>

    )
}
