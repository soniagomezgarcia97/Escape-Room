/* Importaciones */
import { CorsOptions } from "cors";

/* Configuracion de los CORS */
export const corsConfig: CorsOptions = {
    origin: function (origin, callback) {
        /* La ejecuta en cada iteracion para comprobar el origen */
        if (origin === process.env.FRONTEND_URL) {
            callback(null, true)
        } else {
            callback(new Error('Error de CORS'))
        }
    }
}