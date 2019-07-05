import request from "supertest";
import application from "../../src/app";

describe('POST /money', async () => {
    test('verify the args with a success request params', async () => {
        const response = await request(application.express)
            .post('/money')
            .set({
                'Accept': 'application/json'
            }).send({
                'total': 100,
                'paid': 268
            });


        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('total', 100);
        expect(response.body).toHaveProperty('paid', 268);
        expect(response.body).toHaveProperty('back');
        expect(response.body).toHaveProperty('back.value');
        expect(response.body).toHaveProperty('back.notes', {
            '100': 1,
            '10': 6,
            '1': 8
        });
    });

    test('a request with invalid params', async () => {
        const response = await request(application.express)
            .post('/money')
            .set({
                'Accept': 'application/json'
            }).send({
                'total': 500,
                'paid': 400
            });


        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('error');
    });

    test('another route with valid params', async () => {
        const response = await request(application.express)
            .post('/money')
            .set({
                'Accept': 'application/json'
            }).send({
                'total': 800,
                'paid': 847
            });


        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('total', 800);
        expect(response.body).toHaveProperty('paid', 847);
        expect(response.body).toHaveProperty('back');
        expect(response.body).toHaveProperty('back.value');
        expect(response.body).toHaveProperty('back.notes', {
            '100': 0,
            '10': 4,
            '1': 7
        });
    });
})