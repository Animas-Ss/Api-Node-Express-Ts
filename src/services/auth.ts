import { Auth } from "../interfaces/auth.interface";
import UserModel from "../models/user";
import { encrypt, verfied } from "../utils/bcrypt.handle";
import { generateToken } from "../utils/jwt.handle";

const registerNewUser = async ( authUser: Auth) => {
    const {email, password} = authUser; //TODO: desestructuramos el objeto 
    const user = await UserModel.findOne({email: email});
    if(user) return "ALREADY_USER"
    //TODO password encryptado
    const passHash = await encrypt(password)
    const registerNew = await UserModel.create({...authUser, password: passHash});//TODO copiamos el objeto y solo cmabiamos el pass
    return registerNew;
};

const loginUser = async (authUser: Auth) => {
    const user = await UserModel.findOne({ email: authUser.email});
    if(!user) return "DATOS_NOT_FOUND";
    const password = user.password;//TODO este es el pass de la base de datos osea el encryptado 
    const isCorrect = await verfied(authUser.password, password);//TODO comparacion
    if(!isCorrect) return "DATOS_INVALIDOS";//TODO si es incorrecta la comparacion 
    //TODO: JWT una ves que sabemos que el usuario la infomacion correta
    const token = generateToken(user.email);
    const data = {
        token,
        user: user
    };
    return data;
    //return token
    //return user;//TODO si todo va bien devulevo el user  de mi base de datos 
};

export {registerNewUser, loginUser};