import { Request, Response } from "express";
import sendEmail from "../helpers/mailer";
import UserModel from "../models/user";
import jwt from "jsonwebtoken";


export const login = async (req: Request, res: Response) => {
    const {email}  = req.params;
    const { code } = req.body;
   
    const user = await UserModel.findOne({email, login_code: code})
   
    if(!user){
        return res.status(400).json({ok: false, message: "Código invalido!"})
    }

    //const userObject = user.toObject();

    const token = jwt.sign(
        {   sub: user.id,
            firstname: user.firstName, 
            lastname: user.lastName, 
            roles: user.roles 
        },process.env.JWT_SECRET_KEY as string);
    
    //seteo de la cookie
    res.cookie("jwt", token);
    
    //res.send("Hi, desde login");
    res.status(200).json({ok: true, message: "Inicio de sesión éxitoso!"});
}


export const generateCode = async (req: Request, res: Response) => {
    const { email } = req.params;
    const user = await UserModel.findOne({email});
    
    if(!user){
        return res.status(400).json({ok: false, message: "Usuario no existe en la base de datos" })
    }
    let randomCode = '';
    
    for (let index = 0; index < 6; index++){
        const number = Math.floor(Math.random()*10)
        randomCode += number;
    }
    //Guardamos el codifo en base de datos
    user.login_code = randomCode;
    await user.save();


    // Enviamos e codigo por email
    sendEmail({
        to: email, 
        subject: "este es tu código: " + randomCode,
        html:"Código para ingresar: "+ randomCode
     })
    res.send("Hi, desde generateCode");
}