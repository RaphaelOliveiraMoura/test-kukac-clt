import { Request, Response } from "express";
import Moto from "../models/Moto";
import Passeio from "../models/Passeio";

export default class VehicleController {

    static async createPasseio(request: Request, response: Response) {

        const {
            brand,
            model,
            yearOfManufacture,
            text
        } = request.body;

        try {

            const passeio = new Passeio({
                brand,
                model,
                yearOfManufacture,
                text
            });

            return response.status(201).send(passeio);

        } catch (error) {
            return response.status(400).send({ error });
        }

    }

    static async createMoto(request: Request, response: Response) {

        const {
            brand,
            model,
            passengers,
            yearOfManufacture,
            text
        } = request.body;

        try {

            const moto = new Moto({
                brand,
                model,
                passengers,
                yearOfManufacture,
                text
            });

            return response.status(201).send(moto);

        } catch (error) {
            return response.status(400).send({ error });
        }

    }

}