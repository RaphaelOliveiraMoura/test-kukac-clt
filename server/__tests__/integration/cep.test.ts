import request from "supertest";
import application from "../../src/app";
import { getAdressByCep } from '../../src/services/viacep';

describe('viacep API', async () => {
    await test('get a full address from the viacep api service', async () => {

        await getAdressByCep(32415295).then((address) => {
            expect(address).toHaveProperty('cep');
            expect(address).toHaveProperty('state');
            expect(address).toHaveProperty('city');
            expect(address).toHaveProperty('neighborhood');
        })

    });
})

describe('GET /cep', async () => {
    await test('send a valid cep and get all information about address of this cep', async () => {
        const response = await request(application.express)
            .get('/cep/32415295')
            .set({
                'Accept': 'application/json'
            });

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('cep');
        expect(response.body).toHaveProperty('state');
        expect(response.body).toHaveProperty('city');
        expect(response.body).toHaveProperty('neighborhood');
        expect(response.body).toHaveProperty('street');
        expect(response.body).toHaveProperty('complement');
    });
    await test('send a invalid cep to get a error', async () => {
        const response = await request(application.express)
            .get('/cep/6545646554')
            .set({
                'Accept': 'application/json'
            });

        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('error');
    });
})