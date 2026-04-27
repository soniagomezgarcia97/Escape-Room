/* importaciones */
import mongoose, { Schema } from "mongoose";

/* Le pasamos los tipos de datos */
export interface IMisiones {
    userId: mongoose.Types.ObjectId,
    nombre: string,
    /* Indica si el usuario ha completado o no la mision */
    ultimoInvitado: boolean,
    hospitalPsiquiatrico: boolean,
    tesoroPerdido: boolean,
    laboratorioAbandonado: boolean
}

/* Esquema */
const misionesSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    nombre: {
        type: String
    },
    ultimoInvitado: {
        type: Boolean,
        require: true
    },
    hospitalPsiquiatrico: {
        type: Boolean,
        require: true
    },
    tesoroPerdido: {
        type: Boolean,
        require: true
    },
    laboratorioAbandonado: {
        type: Boolean,
        require: true
    },
},
    {
        collection: "missions"
    })

/* Modelo */
const Misiones = mongoose.model<IMisiones>('Misiones', misionesSchema)

export default Misiones