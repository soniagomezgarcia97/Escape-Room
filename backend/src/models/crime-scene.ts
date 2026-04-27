/* importaciones */
import mongoose, { Schema } from "mongoose";

/* Le indicamos el tipo de cada instancia de la base de datos */
export interface ICrimeScene {
    userId: mongoose.Types.ObjectId,
    nombre: string,
    /* Indica si el usuario ha encontrado o no el objeto */
    copaSangre: boolean,
    cuchilloSangre: boolean,
    candelabroSangre: boolean,
    guantes: boolean
}

/* Esquema */
const crimeSceneSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    nombre: {
        type: String
    },
    copaSangre: {
        type: Boolean,
        require: true
    },
    cuchilloSangre: {
        type: Boolean,
        require: true
    },
    candelabroSangre: {
        type: Boolean,
        require: true
    },
    guantes: {
        type: Boolean,
        require: true
    }
},
    {
        /* Le indicamos la coleccion en laque tiene que buscar y actualizar */
        collection: 'crimeObjects'
    })

/* Modelo */
const CrimeScene = mongoose.model<ICrimeScene>('CrimeScene', crimeSceneSchema)
export default CrimeScene