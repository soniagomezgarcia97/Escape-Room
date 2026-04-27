/* importaciones */
import mongoose, { Schema } from "mongoose";

/* Le pasamos los tipos de datos */
export interface ICrimeLevel {
    userId: mongoose.Types.ObjectId,
    /* Indica si el usuario ha completado o no el nivel */
    escenaCrimen: boolean,
    coartada: boolean,
    desbloqueoFinal: boolean
}

/* Esquema */
const crimeLevelsSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    escenaCrimen: {
        type: Boolean,
        require: true
    },
    coartada: {
        type: Boolean,
        require: true
    },
    desbloqueoFinal: {
        type: Boolean,
        require: true
    }
},
    {
        collection: "ultimoInvitadoLevels"
    })

/* Modelo */
const CrimeLevels = mongoose.model<ICrimeLevel>('CrimeLevels', crimeLevelsSchema)

export default CrimeLevels