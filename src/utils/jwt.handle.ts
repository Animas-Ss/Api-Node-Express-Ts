import { sign, verify } from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || "token.010101";

//TODO: generamos un Token
const generateToken = (id: string) => {
    const jwt = sign({id}, JWT_SECRET, {
        expiresIn: "2h",
    });
    return jwt;
};

//TODO: verificamos el token creado
const verifyToken = (jwt: string) => {
 const isOK = verify(jwt, JWT_SECRET);
 return isOK;
};
//TODO: exportamos las dos funciones creadas
export {generateToken, verifyToken}