import { Request, Response } from "express";
import { registerNewUser, loginUser } from "../services/auth";

const registerCtrl = async (req: Request, res: Response) => {
   try {
      const newUser = req.body;
      const responseUser = await registerNewUser(newUser);
      res.send(responseUser);
   } catch (error) {

   }
};

const loginCtrl = async (req: Request, res: Response) => {
   try {
      //TODO const {email, password} = body
      const body = req.body;
      //const {email, password} = body;//TODO: desestructuramos y enviamos los elementos
      const responseLogin = await loginUser(body);

      if(responseLogin === "DATOS_INVALIDOS"){
         res.status(403);
         res.send(responseLogin);
      }else {
         res.send(responseLogin);
      }
   } catch (error) {
      console.log(error);
   }
};

export { loginCtrl, registerCtrl }