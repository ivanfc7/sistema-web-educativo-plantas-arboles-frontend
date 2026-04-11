import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { createUser } from "../../assets/utils/sistema.api";

type Newuser = {
    first_name: string;
    email: string;
}

export function CreateUsr(){
    const {register, handleSubmit, formState:{errors}} = useForm();

    const crearCuenta = handleSubmit(data => {
        const datos:Newuser={
            first_name:data.first_name,
            email: data.email,
        }
        generarLink(datos);
        toast.success('Correo enviado!!');
    });

    const generarLink = async (data: Newuser) => {
        const newuser = {
            ...data
        }
        try {
            await createUser(newuser);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="w-full max-w-sm p-4 ">
            <p className="text-center text-teal-800 m-3">Bienvenido!! Crea tu usuario para acceder al sistema </p>
            <div className="w-full max-w-sm p-4 bg-white">
                <form onSubmit={crearCuenta}>
                    <div>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Nombre/s y apellido/s</label>
                        <input type="text" id="nombre" 
                            {...register('first_name', {required:true})} 
                            className="bg-white border border-green-300 text-black text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:border-green-500 dark:text-black" placeholder="Nombre completo"/>
                            {errors.name && <span className="text-orange-600 text-sm">Este campo esta vacio</span> }
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Correo Electronico</label>
                        <input type="email" id="email" 
                            {...register('email', {required:true})}
                            className="bg-white border border-green-300 text-black text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:border-green-500 dark:text-black" placeholder="nombre@gmail.com"/>
                            {errors.email && <span className="text-orange-600 text-sm">Campo no valido</span>} 
                    </div>
                    <div className="mt-2">
                        <button type="submit" className="cursor-pointer w-full text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-800">Vamos</button>
                    </div>
                </form>
            </div>
        </div>

    )
}