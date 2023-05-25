import { Router } from "express";
import { getFile } from "../controllers/upload";
import { checkJwt } from "../middleware/sesion";
import multerMiddleware from "../middleware/file";


const router = Router();

router.get("/",checkJwt, multerMiddleware.single("myFile"), getFile)

export {router};