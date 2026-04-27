/* Importaciones */
import { Router } from "express";
import mongoose from "mongoose";
import User from "./models/users";
import { handleInputErrors } from "./middleware/validation";
import createAccount, { login, borrarCuenta }from "./handlers";
import { body } from "express-validator";
import CrimeScene from "./models/crime-scene";
import CrimeLevels from "./models/ultimo-invitado-levels";
import Misiones from "./models/misiones";

/* Creacion de la instancia de router de express */
const router = Router()

/* Registro */
router.post('/auth/register', 
    body('username').notEmpty().withMessage('El nombre de usuario no puede ir vacío.'),
    body('password').notEmpty().withMessage('La contraseña no puede ir vacía.'),
    handleInputErrors,
    createAccount
)

/* Inicio de sesion */
router.post('/auth/login', 
    body('username').notEmpty().withMessage('El nombre de usuario no puede ir vacío.'),
    body('password').notEmpty().withMessage('La contraseña no puede ir vacía.'),
    handleInputErrors,
    login
)

/* Borrar cuenta */
router.delete('/auth/account/:id', borrarCuenta)

/* Levels Ultimo invitado */
router.patch('/niveles/ultimoInvitado/:id', async(req, res) => {
    const { id } = req.params
    /* Sesion */
    const sesion = await mongoose.startSession()
    sesion.startTransaction()

    /* Comprobar si los tres nivbeles etsan temrinados */
    try {
        const niveles = await CrimeLevels.findOne({userId: id}).session(sesion)
        const misionTerminada = niveles.escenaCrimen && niveles.coartada && niveles.desbloqueoFinal

        if (misionTerminada) {
            await Misiones.findOneAndUpdate(
                {userId: id},
                {$set: {ultimoInvitado: true}},
                {session: sesion}
            )
            await sesion.commitTransaction()
            res.json({correcto: true})
        }else{
            await sesion.abortTransaction()
            res.json({correcto: false})
        }
    } catch (error) {
        await sesion.abortTransaction()
        res.status(500).json('Error al actualizar misión')
    }
    finally{
        sesion.endSession()
    }
})
/* Obtencion del estado de los niveles */
router.get('/niveles/estado/:id', async(req, res) => {
    const { id } = req.params
    try {
        const niveles = await CrimeLevels.findOne({userId: id})
        res.json(niveles)
    } catch (error) {
        res.status(500).json('Error al obtener niveles')
    }
})

/* Escenario del crimen */
router.patch('/ultimoInvitado/escenarioCrimen/:id', async (req, res) =>{
    const {id} = req.params
    const {objeto} = req.body

    /* Sesion */
    const sesion = await mongoose.startSession()
    sesion.startTransaction()

    try {
        /*  */
        const updated = await CrimeScene.findOneAndUpdate(
            {userId: id}, 
            {$set: {[objeto]: true}}, 
            { returnDocument: 'after', session: sesion }
        )
        const objetosEncontrados = updated.copaSangre && updated.cuchilloSangre && updated.candelabroSangre && updated.guantes
        if (objetosEncontrados) {
            await CrimeLevels.findOneAndUpdate(
                {userId: id},
                {$set: {escenaCrimen: true}},
                { returnDocument: 'after', session: sesion }
            )
        }
        await sesion.commitTransaction()
        res.json({ success: true, message: "Objeto actualizado", updated });
    } catch (error) {
        await sesion.abortTransaction()
        res.status(500).send('No se pudo actualizar la BD')
    }finally{
        await sesion.endSession()
    }
})
/* Coartada */
router.patch('/ultimoInvitado/coartada/:id', async (req, res) =>{
    const {id} = req.params
    const {respuesta} = req.body

    try {
        /* Respuesta correcta */
        const respuestaCorrecta = 'santi'
        if (respuesta === respuestaCorrecta){
            await CrimeLevels.findOneAndUpdate(
                {userId: id},
                {$set: {coartada: true}},
                {new: true}
            )
            res.json({correcto: true})
        }else{
            res.json({correcto: false})
        }
    } catch (error) {
        res.status(500).send('Error al comprobar la respuesta')
    }
})
/* Desbloqueo final */
router.patch('/ultimoInvitado/desbloqueoFinal/:id', async (req, res) => {
    const {id} = req.params
    const {codigo} = req.body
    try {
        const codigoCorrecto = '3178'
        if (codigo === codigoCorrecto){
            await CrimeLevels.findOneAndUpdate(
                {userId: id},
                {$set: {desbloqueoFinal: true}},
                {new: true}
            )
            res.json({correcto: true})
        }else{
            res.json({correcto:false})
        }
    } catch (error) {
        res.status(500).send('Error al comprobar el código')
    }
})

export default router