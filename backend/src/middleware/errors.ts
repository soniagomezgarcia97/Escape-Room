/* Importaciones */
import { Request, Response, NextFunction } from "express";

/* Error 404 */
export const noEncontradaHandler = (req: Request, res:Response) => {
    res.status(404).json({error: 'La ruta no se ha encontrado'})
}

/* Error 500 */
export const erroresHandler = (error: Error, req:Request, res:Response, next: NextFunction) => {
    res.status(500).json({error: error.message})
}