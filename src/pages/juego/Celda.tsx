import ardilla from '/img_juego/ardilla.png';
import basura from '/img_juego/basura.png';
import cesped from '/img_juego/cesped.png';
import piedra from '/img_juego/piedra.png';
import manzana from '/img_juego/manzana.png';
import nuez from '/img_juego/nuez.png';
import flor from '/img_juego/planta.png';
import abeja from '/img_juego/abeja.png';

type CeldaAcciones = {
    tipo:string,
    visible: boolean,
    animado: boolean,
    onDescubrir: () => void;
}
export function Celda({tipo, visible, animado, onDescubrir}: CeldaAcciones){
    const iconos: {[key:string]:string} = {
        'P': piedra, 
        '_': flor,  
        'M': manzana, 
        'A': ardilla, 
        'N': nuez,  
        'C': cesped,  
        'B': basura,
        'E': abeja,   
    }
    return (
        <div onClick={onDescubrir} className="flex items-center justify-center border border-gray-300">
            {animado ? (
                <img src="/hojas-animate.gif" alt="Animación" className="w-full h-full object-cover" />
            ) : (
                visible ? (
                    <img src={iconos[tipo]} alt="img" style={{
                        width: '100%',
                        height: '100%',
                        margin: 0,
                        padding: 0,
                        objectFit: 'cover',
                        display: 'block', 
                    }}/>
                ) : (
                    <img src={iconos['C']} alt="img" className='cursor-pointer' />
                )
            )} 
        </div>
    )
}