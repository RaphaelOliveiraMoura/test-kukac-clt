interface AddressInterface {
    cep: number|string;
    state: string;
    city: string;
    neighborhood: string;
    street?: string;
    complement?: string;
}