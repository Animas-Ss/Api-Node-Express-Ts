import { Request, Response, request } from "express";
import { handleHttp } from "../utils/error.handle";
import { insertCar, getCars, getCar, updateCar, deleteCar } from "../services/item";

const getItem = async (req: Request, res: Response) => {
    try {
        const id = req.params.id// esto se podria decir const { id } = req.params o si de la req extraigo ya el params {params} : Request seria const id = parms;
        const response = await getCar(id);
        const data = response ? response : "NOT_FOUND";
        res.send(data)
    } catch (error) {
        handleHttp(res, "ERROR_GET_ITEM");
    }
};

const getItems = async (req: Request, res: Response) => {
    try {
        const response = await getCars();
        res.send(response)
    } catch (error) {
        handleHttp(res, "ERROR_GET_ITEMS");
    }
};

const updateItem = async (req: Request, res: Response) => {
    try {
        const body = req.body
        const id = req.params.id;
        const response = await updateCar(id, body);
        res.send(response)
    } catch (error) {
        handleHttp(res, "ERROR_UPDATE_ITEM");
    }
};

const postItem = async ({body}: Request, res: Response) => {
    try {
        const responseItem = await insertCar(body)
        res.send(responseItem);
    } catch (error) {
        handleHttp(res, "ERROR_POST_ITEM", error);
    }
};

const deleteItem = async ({params}: Request, res: Response) => {
    try {
        const { id } = params;
        const response = await deleteCar(id);
        console.log(response)
        res.send(response)
    } catch (error) {
        handleHttp(res, "ERROR_DELETE_ITEM");
    }
};

export {getItem, getItems, postItem, updateItem, deleteItem}

/* function insetItem(body: any) {
    throw new Error("Function not implemented.");
}
 */