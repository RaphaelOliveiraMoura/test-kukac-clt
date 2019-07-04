import Veiculo from "./Veiculo";

interface PasseioInterface {
    model: string;
    yearOfManufacture: number;
    brand: string;
    text?: object;
}

export default class Passeio implements Veiculo {

    public readonly doorsAmmount = 4;
    public model: string;
    public yearOfManufacture: number;
    public brand: string;
    public text: object;

    constructor(params: PasseioInterface) {
        this.model = params.model;
        this.yearOfManufacture = params.yearOfManufacture;
        this.brand = params.brand;
        this.text = params.text || {};
    }
}