import { Request, Response } from "express";
import jwt, { JsonWebTokenError } from 'jsonwebtoken';
import SaleModel from "../models/sale";
//import { CustomRequest } from "../middlewares/auth";


export const getAll = async (req: any, res: Response) => {
    //const token = req.cookies.jwt;
    //console.log({ cookies: req.cookies })
    try {
        // const token = req.cookies.jwt;
        // const user = jwt.verify(token, process.env.JWT_SECRET_KEY as string)
        // console.log({ user });

        //** si llegamos hasta aqui es porque el user esta autenticado */
        const sales = await SaleModel.find({ user: req.user.sub })

        res.status(200).json({ok: true, data: sales });
        
    } catch (error) {
        // if(error instanceof JsonWebTokenError){
        //     console.log({name: error.name, message: error.message})
        //    return res.status(401).json({ok: false, message: "Request invalida" })
        // }
        res.status(500).json({ok: false, message: "Error del servidor"})
    }    
}



export const create = async (req: any, res: Response) => {
    const { operation_date, total_amount} = req.body;
    const cretedSale = await SaleModel.create({ operation_date, total_amount, user: req.user.sub});
    res.status(201).json({ok: true, data: cretedSale});
}


