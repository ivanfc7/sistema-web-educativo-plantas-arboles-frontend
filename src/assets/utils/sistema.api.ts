import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000";

async function apiFetch(endpoint: string, opciones: RequestInit = {}) {
    // 1. Preparar headers con el token actual
    const headers = {
        ...opciones.headers,
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`
    };

    // 2. Intentar la petición original
    let response = await fetch(`${BASE_URL}${endpoint}`, {
        ...opciones,
        headers,
        credentials: "include" // Importante para las cookies
    });

    // 3. Si el error es 401 (Token expirado), intentamos el Refresh
    if (response.status === 401) {
        const refreshRes = await fetch(`${BASE_URL}/sistemaWeb/api/token/refresh/`, {
            method: "POST",
            credentials: "include", // Envía la cookie refresh_token a Django
        });

        if (refreshRes.ok) {
            const data = await refreshRes.json();
            localStorage.setItem('access_token', data.access); // Guardamos el nuevo access_token

            // 4. Reintentamos la petición original con el nuevo token
            return await fetch(`${BASE_URL}${endpoint}`, {
                ...opciones,
                headers: {
                    ...opciones.headers,
                    'Authorization': `Bearer ${data.access}`
                },
                credentials: "include"
            });
        } else {
            // El Refresh Token también murió (pasaron 30 días)
            localStorage.removeItem('access_token');
            window.location.href = "/"; // Al landing
        }
    }

    return response;
}

/** API REST DEL PERFIL - NOMBRE */
export const profile = async () => {
    const response = await apiFetch("/sistemaWeb/api/profile", { method: "POST" });
    const data = await response.json();
    return data;
}
export const getTotalPlantas = async () => {
    const response = await apiFetch("/sistemaWeb/api/total-plantas", { method: "GET" });
    const data = await response.json();
    return data;
}
export const getTotalAportes = async () => {
    const response = await apiFetch("/sistemaWeb/api/total-aportes", { method: "GET" });
    const data = await response.json();
    return data;
}

/** API REST DEL JUEGO */
const apiProgreso = axios.create({baseURL: 'http://127.0.0.1:8000/sistemaWeb/api/progreso/'});

// export const getProgresoJuego = () =>  apiProgreso.get('/',{
//     headers:{
//         'Authorization': `Token ${localStorage.getItem('token')}`
//     }
// });
export const getProgresoJuego = async () => {
    const response = await apiFetch("/sistemaWeb/api/progreso/", { method: "GET" });
    const data = await response.json();
    return data;
}
/** API REST DE PLANTA */
const apiPlanta = axios.create({
    baseURL: 'http://127.0.0.1:8000/sistemaWeb/api/planta/', 
});

export const createPlanta = (
    planta: {
        especie: string, 
        descripcion:string, 
        tipo: string, 
        etapa: string
    }) => apiPlanta.post('/', planta, {
        headers:{
            'Authorization': `Token ${localStorage.getItem('token')}`, 
        }, 
    });

export const getPlantas = () =>  apiPlanta.get('/', {
    headers:{
        'Authorization': `Token ${localStorage.getItem('token')}`, 
    }, 
});

export const getPlantaById = (id:string) => apiPlanta.get(`/${id}`, {
    headers:{
        'Authorization': `Token ${localStorage.getItem('token')}`, 
    }
});

export const updateFotoPlantaById = (id:string, foto:File) => {
    const formData = new FormData();
    formData.append('foto', foto);

    return apiPlanta.patch(`/${id}/`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data', 
            'Authorization': `Token ${localStorage.getItem('token')}`, 
        }, 
    });
};

export const updateEtapa = (id:string, nuevaEtapa:string)=>{
    return apiPlanta.patch(`${id}/actualizar-etapa/`,{etapa: nuevaEtapa}, {
        headers: {
            'Content-Type': 'multipart/form-data', 
            'Authorization': `Token ${localStorage.getItem('token')}`, 
        }, 
    });
};

/** API REST DE APORTES AMBIENTALES */
const apiAporte = axios.create({
    baseURL: 'http://127.0.0.1:8000/sistemaWeb/api/aporte/'
})

export const createAporte = (
    aporte: {
        cantidad: number, 
        oxigenoTotal: number, 
        carbonoTotal: number, 
        co2Total: number
    }) => apiAporte.post('/', aporte, {
        headers:{
            'Authorization': `Token ${localStorage.getItem('token')}`, 
        }
    });

export const getAportesByPlanta = (id:string) => apiAporte.get(`/?planta=${id}`, {
    headers:{
        'Authorization': `Token ${localStorage.getItem('token')}`
    }
});

/** API REST DE FUNCION BUSQUEDA */
export const findDescripcion = (palabra: string) =>
    axios.get(`http://127.0.0.1:8000/sistemaWeb/api/buscar_descripcion/`, {
      params: { palabra }
});

/** API REST DE OLVIDAR PASSWORD */
export const forgotPassword = (correo: string) =>
    axios.post(`http://127.0.0.1:8000/sistemaWeb/api/generar_token/`, {
        correo
});
  
/** API REST DEL LINK PARA GENERAR USUARIO */
export const createUser = async (
    newuser: {     
       first_name: string,
       email: string, 
    }
) => {
    const response = await fetch("http://127.0.0.1:8000/sistemaWeb/api/generar-link", {
        method: "POST", 
        headers: {"Content-Type": "application/json"}, 
        body: JSON.stringify(newuser), 
    });
    const data = await response.json();
    return data;
}

/** API REST PARA EL LOGIN */
export const login = async (userData: { username: string, password: string }) => {
    const response = await fetch("http://127.0.0.1:8000/sistemaWeb/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
    });
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Usuario o contraseña incorrectos");
    }
    const data = await response.json();
    // Guardar en localStorage
    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));
    return data; 
};



 



export const updateContadorMensajes = async () => {
    const res = await apiProgreso.post('incrementar-contador-msj/',{},
        { headers:{
            'Authorization': `Token ${localStorage.getItem('token')}`
        }});
    return res.data;
}

export const updateContadorAprendizaje = async () => {
    const res = await apiProgreso.post('incrementar-contador-apzj/', {},
        { headers:{
            'Authorization': `Token ${localStorage.getItem('token')}`
        }});
    return res.data;
}

export const getFechaJuego = async () => {
    const res = await apiProgreso.get('puede-jugar/',{
        headers:{
            'Authorization': `Token ${localStorage.getItem('token')}`
        }});
    return res.data;
}

export const updateFechaJuego = async () => {
    const res = await apiProgreso.post('actualizar-fecha/', 
        {},
        { headers:{
            'Authorization': `Token ${localStorage.getItem('token')}`
        }});
    return res.data;
}

/** API REST DE LOS MENSAJES */
const apiMensajes = axios.create({baseURL: 'http://127.0.0.1:8000/sistemaWeb/api/mensaje/',});

export const getMensajesDesbloqueados = (id:number) => apiMensajes.get(`/?progreso=${id}`,{
    headers:{
        'Authorization': `Token ${localStorage.getItem('token')}`
    }}
);

export const saveMensajeDesbloqueado = (
    mensaje: {
        titulo:string;
        descripcion:string;
        desbloqueado:boolean;
    }
) => {
    apiMensajes.post('/',mensaje,{
        headers:{
            'Authorization': `Token ${localStorage.getItem('token')}`
        }}
    );
};

/** API REST DE LOS APRENDIZAJES */
const apiAprendizaje = axios.create({
    baseURL: 'http://127.0.0.1:8000/sistemaWeb/api/aprendizaje/',
})

export const getAprendizajeDesbloqueado = (id:number) => apiAprendizaje.get(`/?progreso=${id}`,{
    headers:{
        'Authorization': `Token ${localStorage.getItem('token')}`
    }}
);

export const saveAprendizajeDesbloqueado = (
    aprendizaje: {
        titulo:string;
        contenido:string;
        imagen:string;
        video:string;
        fuente:string;
        desbloqueado:boolean;
    }
) => {
    apiAprendizaje.post('/', aprendizaje,{
        headers:{
            'Authorization': `Token ${localStorage.getItem('token')}`
        }}
    );
};
