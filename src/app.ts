import "dotenv/config";
import express from "express";
import cors from 'cors';
//EXPORTAR ARCHIVO INDEX DE RUTAS
import { router } from "./routes";

import db from './config/mongo';
//PUERTO DE MI SERVIDOR
const PORT = process.env.PORT || 3001;
//CREO MI SERVIDOR
const app = express();
//PARA QUE SE PEUDA INTERACTUAR CON OTROS SERVISIOS
app.use(cors());
//PARA QUE LEA ARCHIVOS .JSON
app.use(express.json());
//PARA USAR LAS RUTAS CREADAS
app.use(router);
//PARA LA CONEXION CON LA BASE DE DATOS
db().then(() => console.log("conectado con la base de datos"))
//PARA QUE ESCUCHE EN EL PUERTO DONDE ESTA ABIERTO EL SERVIDOR 
app.listen(PORT, () => console.log(`listening to the server on port: ${PORT}`))