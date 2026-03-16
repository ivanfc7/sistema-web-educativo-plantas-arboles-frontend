export function ConsejoAbeja(){
    const sugerenciasPlanta = {
        planta1: {
            nombre_comun: "Farolito chino",
            origen: "Exótica",
            altura_plantado: "3.0 m",
            foto: "/img_juego/lista/images1.jpg"
        },
        planta2: {
            nombre_comun: "Salancachi",
            origen: "Nativa",
            altura_plantado: "4.4 m",
            foto: "/img_juego/lista/images2.jpg"
        },
        planta3: {
            nombre_comun: "Cedrón",
            origen: "Exótica",
            altura_plantado: "3.0 m",
            foto: "/img_juego/lista/images3.jpg"
        },
        planta5: {
            nombre_comun: "Jazmín paraguayo",
            origen: "Exótica",
            altura_plantado: "4.0 m",
            foto: "/img_juego/lista/images5.jpg"
        },
        planta6: {
            nombre_comun: "Clavelina",
            origen: "Exótica",
            altura_plantado: "4.0 m",
            foto: "/img_juego/lista/images6.jpg"
        },
        planta7: {
            nombre_comun: "Cantuta",
            origen: "Nativa",
            altura_plantado: "3.5 m",
            foto: "/img_juego/lista/images7.jpg"
        },
        planta8: {
            nombre_comun: "Chacatea",
            origen: "Nativa",
            altura_plantado: "3.2 m",
            foto: "/img_juego/lista/images8.jpg"
        },
        planta9: {
            nombre_comun: "Flor de Navidad",
            origen: "Exótica",
            altura_plantado: "4.1 m",
            foto: "/img_juego/lista/images9.jpg"
        },
        planta10: {
            nombre_comun: "Cucarda",
            origen: "Exótica",
            altura_plantado: "3.0 m",
            foto: "/img_juego/lista/images10.jpg"
        },
        planta12: {
            nombre_comun: "Rosa de Siria",
            origen: "Exótica",
            altura_plantado: "3.0 m",
            foto: "/img_juego/lista/images12.jpg"
        },
        planta15: {
            nombre_comun: "Chefflera",
            origen: "Exótica",
            altura_plantado: "4.0 m",
            foto: "/img_juego/lista/images15.jpg"
        },
    }
    const claves = Object.keys(sugerenciasPlanta);
    console.log(claves);
    
    const claveAleatoria = claves[Math.floor(Math.random() * claves.length)];

    const plantaSugeridaPorAbeja = sugerenciasPlanta[claveAleatoria as keyof typeof sugerenciasPlanta];
    return (
        <div className="max-w-sm mx-auto bg-gradient-to-br from-green-50 to-green-100 rounded-2xl shadow-xl p-6 border border-green-300">
            <h2 className="text-lg font-semibold text-green-700 mb-2 flex items-center">
                🌱 ¿Conocías esta planta?
            </h2>
            <img
                src={plantaSugeridaPorAbeja.foto}
                alt={plantaSugeridaPorAbeja.nombre_comun}
                className="w-full h-40 object-cover"
            />
            <p className="text-2xl font-extrabold text-gray-900 mb-4 text-center">
                {plantaSugeridaPorAbeja.nombre_comun}
            </p>

            <div className="space-y-2 text-gray-700 mb-4">
                <p>
                <span className="font-semibold text-green-700">🌍 Origen:</span>{" "}
                {plantaSugeridaPorAbeja.origen}
                </p>
                <p>
                <span className="font-semibold text-green-700">🌳 Altura al plantarla:</span>{" "}
                {plantaSugeridaPorAbeja.altura_plantado}
                </p>
            </div>

            <div className="bg-green-600 text-white text-center rounded-xl px-4 py-3 shadow-md">
                🌸 ¡Anímate a conocer más sobre esta planta y a plantarlo si es posible!
            </div>
        </div>


    )
}