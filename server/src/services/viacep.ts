import request from "request";
import AddressInterface from "../models/Address";

export async function getAdressByCep(cepValue: number | string): Promise<AddressInterface> {
    return new Promise((resolve, reject) => {
        request.get(`https://viacep.com.br/ws/${cepValue}/json/`)
            .on('response', function (data: any) {
                if(data.error) reject('CPF not found');
                resolve({
                    'cep': data.cep,
                    'state': data.uf,
                    'city': data.localidade,
                    'neighborhood': data.bairro,
                    'street': data.logradouro,
                    'complement': data.complemento
                });
            })
            .on('error', function (error: any) {
                reject('Invalid CPF');
            });
    });
}