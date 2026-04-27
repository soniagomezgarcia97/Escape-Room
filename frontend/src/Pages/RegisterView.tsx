// Importaciones
import { useForm } from "react-hook-form"
import ErrorMessage from "../components/ErrorMessage"
import type { RegisterForm } from "../types"
import { isAxiosError } from "axios"
import { toast } from "sonner"
import api from "../config/Axios"
import { Link } from "react-router-dom"

export default function RegisterView() {
    const initialValues: RegisterForm = {
        username: '',
        password: ''
    }
    const { register, reset, handleSubmit, formState: { errors } } = useForm({ defaultValues: initialValues })


    const handleRegister = async (formdata: RegisterForm) => {
        try {
            const { data } = await api.post(`/auth/register`, formdata)
            toast.success(data)
            reset()
        } catch (error) {
            if (isAxiosError(error) && error.response) {
                toast.error(error.response.data.error)
            }
        }
    }
    return (
        <>
            <div className="w-full h-screen flex flex-col justify-center items-center gap-10">
                <form onSubmit={handleSubmit(handleRegister)} className="w-full px-5 rounded-lg space-y-10">
                    <div className="grid grid-cols-1 space-y-3">
                        <label htmlFor="username" className="text-2xl md:text-4xl text-slate-500">Nombre</label>
                        <input type="text" id="username" placeholder="Tu nombre" className="text-white border-b border-b-yellow-100 outline-none caret-white focus:boder-b focus:border-yellow-500 p-3 placeholder-slate-400" {...register('username', { required: 'El nombre es obligatorio' })} />
                        {errors.username && <ErrorMessage>{errors.username.message}</ErrorMessage>}
                    </div>
                    <div className="grid grid-cols-1 space-y-3">
                        <label htmlFor="password" className="text-2xl md:text-4xl text-slate-500">Contraseña</label>
                        <input type="password" id="password" placeholder="Contraseña" className="text-white border-b border-b-yellow-100 outline-none caret-white focus:boder-b focus:border-yellow-500 p-3 placeholder-slate-400" {...register('password', { required: 'La contraseña es obligatoria', minLength: { value: 4, message: 'La contraseña debe tener al menos 4 caracteres' } })} />
                        {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
                    </div>
                    <button type="submit" className="bg-yellow-500 hover:bg-yellow-600 text-[#140C08] font-bold py-2 px-4 rounded">Crear cuenta</button>
                </form>
                <nav className="w-full flex flex-row justify-center gap-2">
                    <span className="flex flex-row justify-center text-slate-500">¿Ya tienes una cuenta?</span><Link to="/auth/login" className="text-yellow-500">Iniciar sesión</Link>
                </nav>
            </div>
        </>
    )
}
