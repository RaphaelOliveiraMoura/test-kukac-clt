import Veiculo from "./Veiculo";

interface MotoInterface {
    model: string;
    yearOfManufacture: number;
    brand: string;
    passengers: number;
    text?: object;
}
export default class Moto implements Veiculo {

    public readonly wheels = 2;
    public model: string;
    public yearOfManufacture: number;
    public brand: string;
    public passengers: number;
    public text: object;

    constructor(params: MotoInterface) {

        this.model = params.model;
        this.yearOfManufacture = params.yearOfManufacture;
        this.brand = params.brand;
        this.text = params.text || {};

        /**
         * Não permite a criação do objeto caso o número de passageiros
         * for diferente de 1 ou 2
         */
        if (params.passengers < 1 && params.passengers > 2)
            throw `Motorbike cannot have ${params.passengers} passengers`

        if (!this.model || !this.yearOfManufacture || !this.brand)
            throw `Is not possible create a motorbike without correct args`

        this.passengers = params.passengers;

    }
}