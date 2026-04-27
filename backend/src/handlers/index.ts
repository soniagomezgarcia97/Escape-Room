/* Importaciones */
import User from "../models/users";
import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { checkPassword, hashPassword } from "../utils/auth";
import CrimeLevels from "../models/ultimo-invitado-levels";
import CrimeScene from "../models/crime-scene";
import Misiones from "../models/misiones";

/* Funcion crear cuenta */
const createAccount = async (req: Request, res: Response) => {
    /* Comprobar duplicados */
    const { username, password } = req.body

    const userExists = await User.findOne({ username })
    if (userExists) {
        const error = new Error('El usuario ya está registrado.')
        return res.status(409).json({ error: error.message })
    }

    /* Registro usuarios */
    const user = new User(req.body)
    user.password = await hashPassword(password)
    await user.save()
    /* Crear progreso inicial para el nuevo usuario */
    await CrimeLevels.create({ userId: user._id, escenaCrimen: false, coartada: false, desbloqueoFinal: false })
    await CrimeScene.create({ userId: user._id, nombre: 'escena', copaSangre: false, cuchilloSangre: false, candelabroSangre: false, guantes: false })
    await Misiones.create({ userId: user._id, nombre: 'misiones', ultimoInvitado: false, hospitalPsiquiatrico: false, tesoroPerdido: false, laboratorioAbandonado: false })

    res.status(201).send('Usuario creado correctamente.')
}

export default createAccount

/* Función login */
export const login = async (req: Request, res: Response) => {
    /* Comprobar si el usuario está registrado */
    const { username, password } = req.body

    const userExists = await User.findOne({ username })
    if (!userExists) {
        const error = new Error('El usuario no existe.')
        return res.status(409).json({ error: error.message })
    }

    /* Comprobar la contraseña */
    const PasswordCorrect = await checkPassword(password, userExists.password)

    if (!PasswordCorrect) {
        const error = new Error('Contraseña incorrecta')
        /* Error no autorizado */
        return res.status(401).json({ error: error.message })
    }

    res.json({ id: userExists._id, username: userExists.username })
}

/* Funcion eliminar cuenta */
export const borrarCuenta = async (req: Request, res: Response) => {
    const { id } = req.params

    const usuarioEliminado = await User.findByIdAndDelete(id)
    if (!usuarioEliminado) {
        const error = new Error('El usuario no existe')
        /* Error usuario no encontrado */
        return res.status(404).json({ error: error.message })
    }
    res.json({ message: 'Cuenta eliminada correctamente' })
}