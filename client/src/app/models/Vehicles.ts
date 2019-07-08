export default interface Vehicle {
    type: string,
    model: string;
    yearOfManufacture: number,
    doorsAmmount?: number,
    brand: string,
    text?: object
}

export interface Motorcycle extends Vehicle{
    passagers: number
}

export interface Passeio extends Vehicle{

}