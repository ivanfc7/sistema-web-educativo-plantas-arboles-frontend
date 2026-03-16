import { BarraNavegacion } from "../../components/BarraNavegacion"
import { Salir } from "../../components/Salir"
import { Wizard } from "./Wizard"

export function VistaHE(){
    return (
        <section className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-lime-300">
            <BarraNavegacion />
            <Salir/>
            <Wizard/>
        </section>
    )
}