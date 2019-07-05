import { getAdressByCep } from "../services/viacep";
import { Request, Response } from "express";

export default class CepController{
    
    public static async get(request: Request, response: Response){
        const cep = request.params.cepValue;

        getAdressByCep(cep).then(function (data) {
            console.log(data);
            
            return response.status(200).send(data);
        }).catch(function (error) {
            return response.status(400).send(error);
        });
    }

}