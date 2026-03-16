const nivel1: string[][] = [
    ['P','P','P','P','P','P','P','P','P','P'],
    ['P','A','_','_','_','_','_','_','_','P'],
    ['P','P','P','_','_','P','_','P','P','P'],
    ['P','_','P','P','_','P','P','_','P','P'],
    ['P','_','_','_','_','P','P','_','P','P'],
    ['P','_','_','_','P','_','_','_','_','P'],
    ['P','_','_','P','P','P','P','_','P','P'],
    ['P','_','_','_','P','P','P','_','P','P'],
    ['P','_','P','_','_','_','_','_','_','P'],
    ['P','_','_','P','_','P','P','P','_','P']
];

const nivel2: string[][] = [
    ['P','P','P','P','P','P','P','P','P','P'],
    ['P','_','_','_','_','_','_','_','_','P'],
    ['P','_','P','_','_','P','_','P','P','P'],
    ['P','_','P','P','_','_','P','_','P','P'],
    ['P','_','P','_','_','P','P','_','P','P'],
    ['P','_','P','_','P','_','_','_','_','_'],
    ['P','_','A','P','P','P','P','_','P','P'],
    ['P','_','_','_','P','P','P','_','P','P'],
    ['P','P','P','_','_','_','_','_','_','P'],
    ['P','P','P','P','_','P','P','P','P','P']
];

const nivel3: string[][] = [
    ['P','P','P','P','P','P','P','P','P','P'],
    ['P','_','_','_','_','_','_','_','_','P'],
    ['P','P','P','_','_','P','_','P','A','P'],
    ['P','_','P','P','_','_','P','_','P','P'],
    ['P','_','P','_','_','P','P','_','P','P'],
    ['P','_','P','_','P','_','_','_','_','P'],
    ['_','_','_','_','P','P','P','_','P','P'],
    ['_','_','P','B','P','P','P','_','P','P'],
    ['_','P','P','_','_','_','_','_','_','P'],
    ['P','_','_','_','_','P','P','P','_','P']
];

const nivel4: string[][] = [
    ['P','P','P','P','P','P','P','P','P','P'],
    ['P','_','_','_','_','B','_','_','_','P'],
    ['P','_','P','_','_','P','_','P','_','P'],
    ['P','A','P','P','_','_','P','_','P','P'],
    ['P','_','P','_','_','P','P','_','P','P'],
    ['P','_','P','_','P','_','_','_','_','P'],
    ['_','_','_','P','P','P','P','_','P','P'],
    ['_','P','_','_','P','P','P','_','P','P'],
    ['_','_','P','_','_','_','_','_','_','P'],
    ['P','_','P','P','_','P','P','P','_','P']
];

const nivel5: string[][] = [
    ['P','P','P','P','P','P','P','P','P','P'],
    ['P','_','_','_','_','_','_','_','_','P'],
    ['P','_','P','_','_','P','_','_','_','P'],
    ['P','_','P','P','_','_','P','_','P','P'],
    ['P','_','P','_','_','P','P','_','P','P'],
    ['P','_','P','_','P','_','_','_','_','P'],
    ['_','P','A','P','P','P','P','_','P','P'],
    ['_','_','_','_','P','P','P','_','P','P'],
    ['P','_','P','_','_','_','_','_','_','P'],
    ['P','_','P','P','_','P','P','P','P','P']
];

const mapaOriginal = [nivel1, nivel2, nivel3, nivel4, nivel5];
const mapaCopia = mapaOriginal.sort(()=>Math.random()-0.5);
var contador = 0;

const armarLaberinto = (mapa: string[][]): string[][] => {
    const mapaRespuesta = mapa.map(fila => [...fila]);

    const espaciosDisponibles: [number, number][] = [];

    // Buscar espacios vacíos y contar objetos ya existentes
    for (let i = 0; i < mapa.length; i++) {
        for (let j = 0; j < mapa[0].length; j++) {
            const celda = mapaRespuesta[i][j];
            if (celda === '_') {
                espaciosDisponibles.push([i, j]);
            }
        }
    }

    // Barajar los espacios disponibles
    for (let i = espaciosDisponibles.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [espaciosDisponibles[i], espaciosDisponibles[j]] = [espaciosDisponibles[j], espaciosDisponibles[i]];
    }

    let pos = 0;

    const tendraE = Math.random() < 0.5;
    console.log("la respuesta es: "+tendraE);
    if (tendraE) contador +=1;
    console.log("el contador es "+contador);

    if(tendraE && contador === 1){
        if (pos < espaciosDisponibles.length) {
            const [i, j] = espaciosDisponibles[pos++];
            mapaRespuesta[i][j] = 'E';
        }
        console.log('Este laberinto tiene E');
        
        if (pos < espaciosDisponibles.length) {
            const [i, j] = espaciosDisponibles[pos++];
            mapaRespuesta[i][j] = 'B';
        }
    
    }else{
        const itemDelLaberinto = Math.random() < 0.5 ? 'M' : 'N';

        if (pos < espaciosDisponibles.length) {
            const [i, j] = espaciosDisponibles[pos++];
            mapaRespuesta[i][j] = itemDelLaberinto;
        }
    
        if (pos < espaciosDisponibles.length) {
            const [i, j] = espaciosDisponibles[pos++];
            mapaRespuesta[i][j] = 'B';
        }
    
    }
    return mapaRespuesta;
};

const mapaAleatorio = mapaCopia.map(nivel => armarLaberinto(nivel) );

export const mapas = (indice: number): string[][] => {
    return mapaAleatorio[indice];
}

export const cantidadNiveles = ():number => {
    return mapaAleatorio.length;
}


