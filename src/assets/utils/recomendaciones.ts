export interface InfoPlanta{
    ubicacion: string;
    separacion: string;
    etapa: Record<number, Record<string, string>>; 
    tierra: Record<string, string>; 
    clima: Record<string, string>;
    hojas: Record<string, string>;
    tip: string;
}

export const plantas: Record<string, InfoPlanta> = {
    arbol: {
        ubicacion: "Plantar en espacios amplios no muy pegado a infraestructuras.",
        separacion: "3-5 metros entre otro árbol",
        etapa: {
            0: {
                profundidad: "Enterrar a una profundidad de aprox. 2 veces su tamaño",
                riego: "Mantener la tierra húmeda, sin encharcar.",
            },
            1: {
                profundidad: "Colocar a ras del cepellón",
                riego: "Riego profundo y abundante después de plantar.",
            },
            2: {
                profundidad: "A ras del cepellón con un pequeño cuenco alrededor del tallo para retener agua en los primeros riegos",
                riego: "Riego profundo cada 3-4 días durante el primer mes.",
            },
        },
        tierra:{
            pedregoso: "El agua drena más rápido, Buena aireación para las raíces..",
            arenoso: "El suelo retiene poca agua, Se secan demasiado pronto.",
            arcilloso: "El suelo retiene más humedad, Se encharcan con las lluvias o con el riego.",  
            mixto: "Este tipo de suelo está diseñado para optimizar el crecimiento de la mayoría de las plantas."  
        },
        clima:{
            lluvioso: "Riego disminuido: Aprovechar el agua de lluvia",
            nublado: "Riego regular: Evitar el exceso de agua para prevenir hongos",
            caluroso: "Regar con mayor frecuencia: El agua se evapora rápido",    
        },
        hojas:{
            tipoA: "Hojas amarillas y sin brillo: falta de agua.",
            tipoB: "Hojas nuevas pequeñas: falta de luz solar.",
            tipoC: "Manchas o secas: exceso de sol, necesita más sombra.",
            tipoD: "Hojas blandas: exceso de agua.",
            tipoE: "Pequeños agujeros: insectos alimentándose.",
            tipoF: "Manchas oscuras: posible presencia de hongos."
        },
        tip: "Los árboles tienden a requerir de mucho espacio tanto de raices como de altura, la mayoria de árboles frutales no ocupan mucho espacio. Considera el espacio a la hora de plantar un árbol"
    },
    flor: {
        ubicacion: "Entre sol y sombre equilibrada",
        separacion: "20-30 cm entre flores",
        etapa: {
            0: {
                profundidad: "Las semillas de flores deben cubrirse con una capa de tierra de aproximadamente 2 veces su tamaño.",
                riego: "Mantener el sustrato húmedo, regando con atomizador o lluvia fina para no desplazar la semilla."
            },
            1: {
                profundidad: "Mantener al mismo nivel del cepellón.",
                riego: "Regar de forma regular (cada 2-3 días si es verano) evitando encharcar."
            },
            2: {
                profundidad: "Mantener al mismo nivel del cepellón.",
                riego: "Riego equilibrado: frecuente pero moderado, procurando que el suelo no se seque."
            }
        },    
        tierra:{
            pedregoso: "El agua drena más rápido, Buena aireación para las raíces..",
            arenoso: "El suelo retiene poca agua, Se secan demasiado pronto.",
            arcilloso: "El suelo retiene más humedad, Se encharcan con las lluvias o con el riego.",  
            mixto: "Este tipo de suelo está diseñado para optimizar el crecimiento de la mayoría de las plantas."  
        },
        clima:{
            lluvioso: "Riego disminuido: Aprovechar el agua de lluvia. Si llueve muy fuerte cubrir la flor",
            nublado: "Riego regular: Evitar el exceso de agua para prevenir hongos",
            caluroso: "Regar con mayor frecuencia: El agua se evapora rápido",    
        },
        hojas:{
            tipoA: "Hojas amarillas y sin brillo: falta de agua.",
            tipoB: "Hojas nuevas pequeñas: falta de luz solar.",
            tipoC: "Manchas o secas: exceso de sol, necesita más sombra.",
            tipoD: "Hojas blandas: exceso de agua.",
            tipoE: "Pequeños agujeros: insectos alimentándose.",
            tipoF: "Manchas oscuras: posible presencia de hongos."
        },
        tip: "La primavera es excelente para la mayoría de las flores",
    },
    arbusto: {
        ubicacion: "En cualquier espacio abierto",
        separacion: "1 metro entre otros arbustos",
        etapa: {
            0: {
                profundidad: "Las semillas de arbustos deben cubrirse con tierra equivalente a 2 veces su tamaño.",
                riego: "Riego ligero y constante hasta la germinación, manteniendo humedad superficial."
            },
            1: {
                profundidad: "El plantín debe colocarse a ras del cepellón.",
                riego: "Regar profundo después del trasplante (2-3 veces por semana) para estimular raíces fuertes."
            },
            2: {
                profundidad: "Mantener a ras del cepellón.",
                riego: "Riego moderado pero profundo 1-2 veces por semana, aumentando en épocas de calor prolongado."
            }
        },
        tierra:{
            pedregoso: "El agua drena más rápido, Buena aireación para las raíces..",
            arenoso: "El suelo retiene poca agua, Se secan demasiado pronto.",
            arcilloso: "El suelo retiene más humedad, Se encharcan con las lluvias o con el riego.",  
            mixto: "Este tipo de suelo está diseñado para optimizar el crecimiento de la mayoría de las plantas."  
        },
        clima:{
            lluvioso: "Riego reducido: Aprovechar el agua de lluvia",
            nublado: "Riego regular: Evitar el exceso de agua para prevenir hongos",
            caluroso: "Regar con mayor frecuencia: El agua se evapora rápido",    
        },
        hojas:{
            tipoA: "Hojas amarillas y sin brillo: falta de agua.",
            tipoB: "Hojas nuevas pequeñas: falta de luz solar.",
            tipoC: "Manchas o secas: exceso de sol, necesita más sombra.",
            tipoD: "Hojas blandas: exceso de agua.",
            tipoE: "Pequeños agujeros: insectos alimentándose.",
            tipoF: "Manchas oscuras: posible presencia de hongos."
        },
        tip: "Los arbustos son resistentes y útiles para delimitar espacios o crear barreras naturales.",
    },
    suculenta: {
        ubicacion: "En macetas, dentro el hogar o al pie de ventanas",
        separacion: "10-15 cm entre todo tipo de planta",  
        etapa: {
            0: {
                profundidad: "Las semillas de suculentas deben cubrirse con una capa muy fina de tierra o arena (no más de 2 mm).",
                riego: "Rociar con atomizador manteniendo humedad ligera pero sin encharcar."
            },
            1: {
                profundidad: "Trasplantar el plantín a ras del cepellón.",
                riego: "Riego ligero cada 7-10 días; esperar a que el sustrato se seque por completo antes de volver a regar."
            },
            2: {
                profundidad: "Mantener a ras del cepellón, en maceta o suelo con excelente drenaje.",
                riego: "Riego espaciado: cada 10-15 días en clima cálido; reducir a 1 vez al mes en invierno."
            }
        },
        tierra:{
            pedregoso: "El agua drena más rápido, Buena aireación para las raíces..",
            arenoso: "El suelo retiene poca agua, Se secan demasiado pronto.",
            arcilloso: "El suelo retiene más humedad, Se encharcan con las lluvias o con el riego.",  
            mixto: "Este tipo de suelo está diseñado para optimizar el crecimiento de la mayoría de las plantas."  
        },
        clima:{
            lluvioso: "Se puede omitir riego por la humedad en el ambiente",
            nublado: "Riego regular: Una vez a la semana y en poca cantidad ",
            caluroso: "Similar a los dias nublados"
        },
        hojas:{
            tipoA: "Hojas amarillas y sin brillo: falta de agua.",
            tipoB: "Hojas nuevas pequeñas: falta de luz solar.",
            tipoC: "Manchas o secas: exceso de sol, necesita más sombra.",
            tipoD: "Hojas blandas: exceso de agua.",
            tipoE: "Pequeños agujeros: insectos alimentándose.",
            tipoF: "Manchas oscuras: posible presencia de hongos."
        },
        tip: "Perfectas para climas secos.",
    }
};

export function calcularFrecuenciaRiego(temperatura:number, humedad:number): number{
     // Coeficientes iniciales (puedes ajustar)
     const a = -0.05; // cada grado más → menos días entre riegos
     const b = 0.08;  // mayor humedad → más días entre riegos
     const c = 7;     // base de días
 
     let frecuencia = a * temperatura + b * humedad + c;
 
     // Evitar que sea menor a 1
     if (frecuencia < 1) frecuencia = 1;
 
     return Math.round(frecuencia);
}

export enum TipoPlanta {
    Arbol = 'arbol',
    Arbusto = 'arbusto',
    Flor = 'flor',
    Suculenta = 'suculenta',
}

// Interfaces para las etapas de crecimiento de cada tipo de planta
export interface EtapasArbol {
    semilla: number;
    plantín: number;
    planta_joven: number;
    arbol_adulto: number;
}
  
export interface EtapasArbusto {
    semilla: number;
    plantín: number;
    planta_joven: number;
    arbusto_adulto: number;
}
  
export interface EtapasFlor {
    semilla: number;
    plantín: number;
    planta_joven: number;
    floracion: number;
}
  
export interface EtapasSuculenta {
    semilla: number;
    plantín: number;
    planta_joven: number;
    planta_adulta: number;
}
// Valores de referencia para Kc (coeficiente del cultivo) por tipo de planta y etapa
const kcValores = {
    [TipoPlanta.Arbol]: {
      semilla: 0.10,
      plantín: 0.5,
      planta_joven: 0.8,
      arbol_adulto: 0.9
    } as EtapasArbol,
    [TipoPlanta.Arbusto]: {
      semilla: 0.10,
      plantín: 0.5,
      planta_joven: 0.8,
      arbusto_adulto: 0.9
    } as EtapasArbusto,
    [TipoPlanta.Flor]: {
      semilla: 0.10,
      plantín: 0.6,
      planta_joven: 0.9,
      floracion: 1.15
    } as EtapasFlor,
    [TipoPlanta.Suculenta]: {
      semilla: 0.10,
      plantín: 0.15,
      planta_joven: 0.20,
      planta_adulta: 0.25
    } as EtapasSuculenta,
  };

export type Clima = "caluroso" | "nublado" | "lluvioso";

// Valores de referencia para ET0 (evapotranspiración de referencia en mm/día)
// Basado en rangos típicos para diferentes climas
const et0Valores: Record<"caluroso" | "nublado" | "lluvioso", number> = {
    caluroso: 8, // mm/día
    nublado: 5, // mm/día
    lluvioso: 3  // mm/día
};

export function estimarFrecuenciaRiego(tipoPlanta: TipoPlanta, etapaPlanta: keyof (EtapasArbol | EtapasArbusto | EtapasFlor | EtapasSuculenta), clima:Clima, tierra: string):string{
     // 1. Obtener ET0 según el clima
    const et0 = et0Valores[clima];

    // Validar si el tipo de planta y etapa coinciden
    if (!kcValores[tipoPlanta] || !kcValores[tipoPlanta][etapaPlanta as keyof typeof kcValores[keyof typeof kcValores]]) {
        return `Error: La etapa '${etapaPlanta}' no es válida para el tipo de planta '${tipoPlanta}'.`;
    }

    // 2. Obtener Kc según el tipo de planta y su etapa de crecimiento
    const kc = (kcValores[tipoPlanta] as any)[etapaPlanta];

    // 3. Calcular la evapotranspiración del cultivo (ETc) en mm/día
    // ETc = ET0 * Kc
    const etc = et0 * kc;

     // 4. Usar reglas heurísticas para la frecuencia de riego
    let frecuenciaEstimada:string = "";
    if (tipoPlanta === 'suculenta') {
        // Las suculentas tienen necesidades específicas, menos agua en general
        if (clima === 'caluroso') {
        frecuenciaEstimada = "1 vez por semana";
        } else {
        frecuenciaEstimada = "1 vez cada 15 días";
        }
    } else {
        // Frecuencia general para otras plantas basada en ETc
        if (etc >= 6) {
        frecuenciaEstimada = "Diariamente o 1-2 veces al día";
        } else if (etc >= 4) {
        frecuenciaEstimada = "2-3 veces por semana";
        } else {
        frecuenciaEstimada = "1-2 veces por semana";
        }
    }

    if(tierra === 'arenoso' || tierra === 'pedregoso'){
        frecuenciaEstimada += " con poca cantidad de agua";
        if (etapaPlanta as keyof 'plantin') {
            frecuenciaEstimada += " \n 1 litro de agua aproximadamente";
        }
    }else if(tierra === 'arcillso'){
        frecuenciaEstimada += " con abundante agua";
        if (etapaPlanta as keyof 'floracion' || etapaPlanta as keyof 'planta_adulta' || etapaPlanta as keyof 'arbusto_adulto' || etapaPlanta as keyof 'arbol_adulto') {
            frecuenciaEstimada += " \n 2 - 3 litros de agua aproximadamente";
        }
    }else if(tierra === 'mixto'){
        frecuenciaEstimada += " (mantener la humedad con el riego)"
        if (etapaPlanta as keyof 'floracion' || etapaPlanta as keyof 'planta_adulta' || etapaPlanta as keyof 'arbusto_adulto' || etapaPlanta as keyof 'arbol_adulto') {
            frecuenciaEstimada += " \n 2 litros de agua aproximadamente";
        }
    }

    return frecuenciaEstimada;
}