import request from "supertest";
import application from "../../src/app";

describe('GET /palindrome', async () => {
    test('', async () => {
        const response = await request(application.express)
            .get('/palindrome?first=1&last=20')
            .set({
                'Accept': 'application/json'
            });

        expect(response.status).toBe(200);
        expect(response.body).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 11]);
    });
})