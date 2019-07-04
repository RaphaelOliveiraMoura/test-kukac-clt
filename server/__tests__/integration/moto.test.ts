import request from "supertest";
import application from "../../src/app";
import Moto from "../../src/models/Moto";

describe('POST /motorbike', async () => {
    test('create a motorbike', async () => {

        const moto = new Moto({
            brand: 'ninja',
            model: 'kawasaki',
            passengers: 2,
            yearOfManufacture: 2010
        });

        const response = await request(application.express)
            .post('/vehicle/moto')
            .set({
                'Accept': 'application/json'
            }).send(moto);


        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('model');
        expect(response.body).toHaveProperty('brand');
        expect(response.body).toHaveProperty('yearOfManufacture');
        expect(response.body).toHaveProperty('passengers');
    });

    test('a error creation of motorbike model with missing args', async () => {

        const response = await request(application.express)
            .post('/vehicle/moto')
            .set({
                'Accept': 'application/json'
            }).send({
                model: 'ninja',
                brand: 'kawasaki',
            });


        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('error');
    });
})