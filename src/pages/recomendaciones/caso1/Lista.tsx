interface Tipo{
    tipoPlanta: string;
}

export function Listas({tipoPlanta}:Tipo){
    const listaArbol = ['Tajibo','Molle','Jacaranda', 'Sauces', 'Eucalipto', 'Pino'];
    const listaFlores = ['Jazmin','Rosa','Lirios', 'Girasoles', 'Gladiolos'];
    const listaArbustos = ['Churqui','Pino enano','Tola', 'Cedron', 'Karalawa'];
    const listaSuculentas = ['Cactus','Pata de rana','Espada de San Jorge', 'Dolar', 'Árbol de jade'];
    return (
        <div className="absolute z-10 mt-8 w-60 bg-green-100 p-2 rounded-lg shadow-xl text-sm border border-gray-200">
            {tipoPlanta === 'arbol'&&(
                <div>
                    <p className="font-bold">Algunas especies de arboles </p>
                    <div>
                        {listaArbol.map((elemento, indice)=> (
                            <li key={indice} className="text-sm">{elemento}</li>
                        ))}
                    </div>
                </div>
            )}
             {tipoPlanta === 'arbusto'&&(
                <div>
                    <p className="font-bold">Algunas especies de arbustos </p>
                    <div>
                        {listaArbustos.map((elemento, indice)=> (
                            <li key={indice} className="text-sm">{elemento}</li>
                        ))}
                    </div>
                </div>
            )}
             {tipoPlanta === 'flor'&&(
                <div>
                    <p className="font-bold">Algunas especies de flores </p>
                    <div>
                        {listaFlores.map((elemento, indice)=> (
                            <li key={indice} className="text-sm">{elemento}</li>
                        ))}
                    </div>
                </div>
            )}
             {tipoPlanta === 'suculenta'&&(
                 <div>
                    <p className="font-bold">Algunas especies de plantas suculentas o cactáceas </p>
                    <div>
                        {listaSuculentas.map((elemento, indice)=> (
                            <li key={indice} className="text-sm">{elemento}</li>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}