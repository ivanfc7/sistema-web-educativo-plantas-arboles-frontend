import arboleduLogo from '/icon-192x192.png';
import '../App.css'

export function Encabezado(){
    return(
        <header>
            <img src={arboleduLogo} className="logo" alt="Arboledu logo" />
            <p className='title'>Sistema Web Educativo para el Seguimiento y Cuidado de Árboles y Plantas</p>
        </header>
    )
}