import {hash, compare} from "bcryptjs";

//TODO: Encryptar contraseña!

const encrypt = async (pass: string) => {
    const passwordHash = await hash(pass, 8 );
    return passwordHash
};

//TODO: verificar al contraseña encrytptada

const verfied = async (pass: string, passHash: string) => {
    const isCompare = await compare(pass, passHash)
    return isCompare
};

export { encrypt, verfied };