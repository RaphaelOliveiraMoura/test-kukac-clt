import { Request, Response } from "express";
import { makePurshace } from "../utils/money";

export default class MoneyController{
    
    static async purshace(request: Request, response: Response){
        const { total, paid } = request.body;

        const purshaceInformation = makePurshace(total, paid);
        if(!purshaceInformation) return response.status(400).send({error: 'Invalid params'});

        return response.status(200).send(purshaceInformation);
    }

}