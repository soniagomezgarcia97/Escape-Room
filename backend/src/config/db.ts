/* Configuración de la base de datos */

/* importaciones */
import mongoose from 'mongoose'
import 'dotenv/config'

/* Función que se conecta a una BD */
const connectDb = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
    } catch (error) {
        throw new Error(error)
    }
}

export default connectDb