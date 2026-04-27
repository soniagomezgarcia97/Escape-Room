/* importaciones */
import mongoose, { Schema } from "mongoose";

/* Le pasamos los tipos de datos */
export interface IUser {
    username: string,
    password: string
}

/* Esquema */
const userSchema = new Schema({
    username: {
        type: String,
        require: true,
        trim: true
    },
    password: {
        type: String,
        require: true,
        trim: true
    }
})

/* Modelo */
const User = mongoose.model<IUser>('User', userSchema)

export default User