interface Planta {
    id: number;
    especie: string;
    tipo: string;
    descripcion: string;
    etapa: string;
    foto: string;
}

import { BarraNavegacion } from "../../components/BarraNavegacion"
import { useEffect, useState } from "react";
import { getPlantas } from "../../assets/utils/sistema.api";
import { Tarjeta } from "./TarjetaPlanta";
import { SinPlantas } from "../../components/SinPlantas";

export function MisPlantas(){
    const [lista, setLista] = useState<Planta[]>([]);

    async function cargarListaPlantas(){
        const respuesta = await getPlantas();
        setLista(respuesta.data);
    }

    useEffect(() => {
        cargarListaPlantas()
    }, []);

    return (
        <section className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-lime-300">
            <BarraNavegacion />      
            <div className="p-3 max-w-4xl w-full mx-auto">
                {lista.length === 0 ?(
                    <div className="max-w-md mx-auto mt-10 text-center">
                        <SinPlantas/>
                    </div>
                ): (
                    <div className="bg-transparent grid grid-cols-1 md:grid-cols-2 gap-2">
                        {lista.map((planta, index) => (
                            <Tarjeta key={index} plantaGuardada={planta} recargar={cargarListaPlantas}/>
                        ))}
                    </div>  
                )}
            </div>
        </section>
    )
} 
