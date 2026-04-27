/* Importaciones */
import express from "express";
import morgan from "morgan"
import helmet from "helmet";
import app from "./config/server";
import cors from 'cors';
import { corsConfig } from './config/cors';
import router from "./router";
import { noEncontradaHandler, erroresHandler } from "./middleware/errors";

/* Variables */
const port = process.env.PORT || 4000

app.use(cors(corsConfig))
app.use(express.json())
app.use(morgan('dev'))
app.use(helmet())

/* Router */
app.use('/', router)

/* Middleware de errores 404 y 500 */
app.use(noEncontradaHandler)
app.use(erroresHandler)

/* App */
app.listen(port)


