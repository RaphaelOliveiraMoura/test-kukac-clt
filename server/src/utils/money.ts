interface NotesInterface {
    '100': number,
    '10': number,
    '1': number
}

interface PurchaseInterface {
    total: number,
    paid: number,
    back: {
        value: number,
        notes: NotesInterface
    }
}

export function makePurshace(totalAmount: number, paidAmount: number): PurchaseInterface | boolean {
    /**
     * Retorna false caso o valor pago for menor que o valor da compra
     * ou se o valor da compra for negativo
     */
    if (paidAmount < totalAmount) return false;
    if (totalAmount <= 0) return false;
    
    const backMoney = paidAmount - totalAmount;
    return {
        'total': totalAmount,
        'paid': paidAmount,
        'back': {
            'value': backMoney,
            'notes': fetchMoneyNotes(backMoney)
        }
    }
}

function fetchMoneyNotes(value: number): NotesInterface {
    /**
     * Calcula a possibilidade de troco com o menor numero de notas
     * possível
     */
    const notesOf100 = value / 100;
    const notesOf10 = value % 100 / 10;
    const notesOf1 = value % 100 % 10;
    /**
     * Arrendonda todos os valores que podem ser inteiros ou float
     */
    return {
        '100': Math.floor(notesOf100),
        '10': Math.floor(notesOf10),
        '1': Math.floor(notesOf1),
    }
}