//TODO: para que esta servicio de la ruta funcione tiene que crearse una interfaz de mongo pero para fines practicos se va a solo realizar la proteccion de la ruta
//import { Car } from "../interfaces/car.interdaface";
import ItemModel from "../models/item";



const getOrders = async () => {
    const responseItem = await ItemModel.find({});
    return responseItem
};


export { getOrders }