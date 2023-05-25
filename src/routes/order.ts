import { Router } from "express";
import { getItems } from "../controllers/order";
import { checkJwt } from "../middleware/sesion";
//OPTIMIZE: esta ruta solo puede acceder las personas que tengan session activa, que tengan un JWT valido

const router = Router();

router.get("/", checkJwt, getItems)

export {router};