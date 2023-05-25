import { JwtPayload } from "jsonwebtoken";//TODO: para que funcione jwtpayload tenemos que impiortarla sino no reconoce la definicion
import { Request } from "express";

//OPTIMIZE: creamos una interfase que extiende de Request
//TODO: repetimos la interfase pero la idea es lleavrla a un archivo asi al usamos donde corresponda
export interface RequestExt extends Request{
    user?: JwtPayload | {id: string};
}
