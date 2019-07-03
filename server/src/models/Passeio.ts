import Veiculo from "./VeiculoInterface";

export default class Passeio implements Veiculo {

    public readonly doorsAmmount = 4;

    constructor(
        public model: string,
        public yearOfManufacture: number,
        public brand: string,
        public text: any = {}) {

    }
}