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

        if (!this.model || !this.yearOfManufacture || !this.brand)
            throw `Is not possible create a passeio car without correct args`
    }

    public toJson(){
        return {
            'type': 'passeio',
            'model': this.model,
            'yearOfManufacture': this.yearOfManufacture,
            'brand': this.brand,
            'doorsAmmount': this.doorsAmmount,
            'text': this.text,
        }
    }
}