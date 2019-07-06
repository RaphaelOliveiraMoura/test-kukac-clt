import request from "request";
import AddressInterface from "../models/Address";

export async function getAdressByCep(cepValue: number | string): Promise<AddressInterface> {
    return new Promise((resolve, reject) => {
        request.get(`https://viacep.com.br/ws/${cepValue}/json/`, function callback(error, info, response) {
            
            if (error) 
                return reject('Invalid CPF');

            if ( info.statusCode == 400 || JSON.parse(response).erro ) 
                return reject('CPF not found');

            const data = JSON.parse(response);
            return resolve({
                'cep': data.cep,
                'state': data.uf,
                'city': data.localidade,
                'neighborhood': data.bairro,
                'street': data.logradouro,
                'complement': data.complemento
            });
        });
    });
}