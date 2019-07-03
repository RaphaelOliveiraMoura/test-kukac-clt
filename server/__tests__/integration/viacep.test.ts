import { getAdressByCep } from '../../src/services/viacep';

test('get a full address from the viacep api service', async () => {

    await getAdressByCep(32415295).then((address)=>{
        expect(address).toHaveProperty('cep');
        expect(address).toHaveProperty('state');
        expect(address).toHaveProperty('city');
        expect(address).toHaveProperty('neighborhood');
    })

});