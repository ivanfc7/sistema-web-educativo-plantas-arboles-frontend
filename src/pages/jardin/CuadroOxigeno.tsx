import { useEffect, useState } from "react";
import { getTotalAportes } from "../../assets/utils/sistema.api";

export function CuadroOxigeno(){
    const [totalAportes, setTotalAportes] = useState(0);

    useEffect(()=>{
        async function cargarProduccionOxigeno() {
            const resAport = await getTotalAportes();
            setTotalAportes(resAport.total);    
        }
        cargarProduccionOxigeno();
    }, [])
    
    return (
        <div className="p-6 bg-white rounded-2xl shadow-md space-y-4">
            <h2 className="text-xl font-bold text-green-700">
                🌱 Balance de Oxígeno
            </h2>
            
            <p className="text-gray-700 text-base">
                Tus árboles liberaron aproximadamente un total de 
                <span className="font-semibold text-green-600"> {totalAportes} Kg</span> de Oxígeno 🌍
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-green-50 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold text-green-700">😴 En reposo</h3>
                <p className="text-gray-600 text-sm">Una persona necesita al año:</p>
                <p className="text-green-800 font-bold text-xl">208.78 kg</p>
                </div>

                <div className="p-4 bg-blue-50 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold text-blue-700">🏃‍♂️ En movimiento</h3>
                <p className="text-gray-600 text-sm">Una persona necesita al año:</p>
                <p className="text-blue-800 font-bold text-xl">2253.25 kg</p>
                </div>
            </div>
            {/* Progress bar personalizada */}
            <div className="mt-6">
                <div className="flex justify-between mb-1 text-sm text-gray-600">
                    <span>Reposo: 208.78 kg</span>
                    <span>Movimiento: 2253.25 kg</span>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-4">
                    <div
                    className="bg-green-500 h-4 rounded-full transition-all duration-500"
                    style={{
                        width: `${Math.min(
                        Math.max(((totalAportes - 208.78) / (2253.25 - 208.78)) * 100, 0),
                        100
                        )}%`,
                    }}
                    />
                </div>
            </div>
        </div>
    )
}