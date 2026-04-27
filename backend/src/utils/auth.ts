/* Importaciones */
import bcrypt, { genSalt, hash } from 'bcrypt'

/* Hashear contraseñas */
export const hashPassword = async (password:string) =>{
    /* En salt le pasamos el numero de rondas uqe queremos que tenga, cuantas mas rondas, mas seguro, pero mas lento */
    const salt = await bcrypt.genSalt(10)
    return bcrypt.hash(password, salt)
}

/* Comrpobar contraseña */
export const checkPassword = async (enteredPassword:string, hash:string) =>{
    return await bcrypt.compare(enteredPassword, hash)
}