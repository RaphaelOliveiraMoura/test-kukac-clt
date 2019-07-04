import { getAdressByCep } from '../../src/services/viacep';

describe('viacep API', async () => {
    test('get a full address from the viacep api service', async () => {

        await getAdressByCep(32415295).then((address) => {
            expect(address).toHaveProperty('cep');
            expect(address).toHaveProperty('state');
            expect(address).toHaveProperty('city');
            expect(address).toHaveProperty('neighborhood');
        })

    });
})

describe('POST /cep', async () => {
    test('send 5 valid ceps and get a list with all information about address of these ceps', async () => {

    });
    test('send just one cep and get information about it', async () => {

    });
    test('send invalid ceps to get a error', async () => {

    });
})