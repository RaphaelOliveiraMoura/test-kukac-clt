import { Request, Response } from "express";
import fileSystem from 'fs';
import path from 'path';
import Moto from "../models/Moto";
import Passeio from "../models/Passeio";

const databasePath = path.resolve('database','vehicles.json');

export default class VehicleController {

    static async createPasseio(request: Request, response: Response) {
        const {brand, model, yearOfManufacture, text} = request.body;
        try {
            const passeio = new Passeio({ brand, model, yearOfManufacture, text });
            const fileData = fileSystem.readFileSync(databasePath, 'utf8') || '[]';
            const vehicles = JSON.parse(fileData);
            vehicles.push(passeio.toJson());
            fileSystem.writeFileSync(databasePath, JSON.stringify(vehicles));
            return response.status(201).send(passeio);
        } catch (error) {
            return response.status(400).send({ error });
        }
    }

    static async createMoto(request: Request, response: Response) {
        const { brand, model, passengers, yearOfManufacture, text } = request.body;
        try {
            const moto = new Moto({ brand, model, passengers, yearOfManufacture, text });
            const fileData = fileSystem.readFileSync(databasePath, 'utf8') || '[]';
            const vehicles = JSON.parse(fileData);
            console.log(vehicles);
            vehicles.push(moto.toJson());
            fileSystem.writeFileSync(databasePath, JSON.stringify(vehicles));
            return response.status(201).send(moto);
        } catch (error) {
            return response.status(400).send({ error });
        }
    }

    static async listVehicles(request: Request, response: Response) {
        try {
            const fileData = require(databasePath);
            const vehicles = JSON.parse(fileData);
            return response.status(201).send(vehicles);
        } catch (error) {
            return response.status(500).send({error:'Error fetching vehicles'});
        }
    }

}