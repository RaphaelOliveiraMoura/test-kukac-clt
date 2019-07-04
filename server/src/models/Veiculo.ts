/**
 * Interface genérica para criação de veiculos
 * nesse contexto funciona similar á uma classe abstrata
 */
export default interface Veiculo {
    model: string;
    yearOfManufacture: number,
    doorsAmmount?: number,
    brand: string,
    text?: object
}