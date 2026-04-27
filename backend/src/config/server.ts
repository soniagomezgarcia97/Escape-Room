/* Creación del servidor */
import express from "express";
import cors from "cors";
import connectDb from "./db";
import { corsConfig } from "./cors";

/* Variables */
const app = express()

// Cors
app.use(cors(corsConfig))

/* Conexión con la BD */
connectDb()

export default app