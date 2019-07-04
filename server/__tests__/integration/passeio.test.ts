import request from "supertest";
import application from "../../src/app";
import Passeio from "../../src/models/Passeio";

describe('/POST passeio', async () => {
    test('create a passeio car', async () => {

        const passeio = new Passeio({
            model: 'uno',
            brand: 'fiat',
            yearOfManufacture: 1999,
            text: {
                fuel: 'alcohol'
            }
        });

        const response = await request(application.express)
            .post('/vehicle/passeio')
            .set({
                'Accept': 'application/json'
            }).send(passeio);


        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('model');
        expect(response.body).toHaveProperty('brand');
        expect(response.body).toHaveProperty('yearOfManufacture');
    });

    test('a error creation of passeio model with missing args', async () => {

        const response = await request(application.express)
            .post('/vehicle/passeio')
            .set({
                'Accept': 'application/json'
            }).send({
                model: 'uno',
                brand: 'fiat',
            });


        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('error');
    });
})