export interface NotesInterface {
    '100': number,
    '10': number,
    '1': number
}

export default interface MoneyInterface {
    total: number,
    paid: number,
    back: {
        value: number,
        notes: NotesInterface
    }
}