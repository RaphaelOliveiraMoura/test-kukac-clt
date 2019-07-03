export default interface Veiculo {
    model: string;
    yearOfManufacture: number,
    doorsAmmount?: number,
    brand: string,
    text?: {
        engine: string,
        fuel: string,
    }
}