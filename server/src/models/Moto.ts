import Veiculo from "./Veiculo";

export default class Moto implements Veiculo {

    public readonly wheels = 2;

    constructor(
        public model: string,
        public yearOfManufacture: number,
        public brand: string,
        public passengers: number,
        public text: any = {}) {

        /**
         * Não permite a criação do objeto caso o número de passageiros
         * for diferente de 1 ou 2
         */
        if (passengers < 1 && passengers > 2)
            throw `Motorbike cannot have ${passengers} passengers`

    }
}