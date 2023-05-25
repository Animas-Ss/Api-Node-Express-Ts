import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/jwt.handle";
import { RequestExt } from "../interfaces/req-ext";



const checkJwt = (req: RequestExt, res: Response, next: NextFunction) => {
    try {
        //TODO: solicitamos desde la cabezara el jwt
        const jwtByUser = req.headers.authorization || "";
        const jwt = jwtByUser.split(' ').pop() //TODO: esto me devuelve el ultimo valor del array que forme con el split
        const jwtVeryUser = verifyToken(`${jwt}`) as {id: string};//TODO: lo ponemos con un tamplate string para indicarle que es de ese tipo lo usamos para evitar el error de string o undefined
        console.log(jwtVeryUser)
        if(!jwtVeryUser){//OPTIMIZE: validamos la respuesta de la verificacion si es cerdadera seguimso de lo contrario returnamos el error
            res.status(401);
            res.send("NO_TIENES_UN_JWT_VALIDO")
        }else {
            req.user = jwtVeryUser;
            console.log({jwtByUser});
            next();
        }
    } catch (error) {
        res.status(400);
        res.send("SESSION_NO_VALIDA")
    };
};

export {checkJwt};