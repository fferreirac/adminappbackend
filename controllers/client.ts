import { Request, Response } from "express";
import ClientModel from "../models/client";


export const getAll = async (req: any, res: Response) => {
    try {

        //** si llegamos hasta aqui es porque el user esta autenticado */
        const clients = await ClientModel.find();

        res.status(200).json({ ok: true , data: clients });        
    } catch (error) {
        res.status(500).json({ok: false, message: "Error del servidor"})
    }    
}

export const getById = async (req: any, res: Response) => {
    const { id } = req.params
    try {

        const client = await ClientModel.findById(id);

        res.status(200).json({ ok: true , data: client });        
    } catch (error) {
        res.status(500).json({ok: false, message: "Error del servidor"})
    }    
}

export const create = async (req: any, res: Response) => {
    console.log({ body: req.body })
    try {
        const cretedClient = await ClientModel.create( req.body );
        res.status(201).json( { ok: true, data: cretedClient } );
        
    } catch (error) {
        res.status(500).json({ok: false, message: "Error del servidor"})
    }
}

export const update = async (req: any, res: Response) => {
    const {id} = req.params;
    try {
        const updatedClient = await ClientModel.findByIdAndUpdate( id, req.body );
        res.status(201).json( { ok: true, data: updatedClient } );    
    } catch (error) {
        res.status(500).json({ok: false, message: "Error del servidor"})
    }
    
}
