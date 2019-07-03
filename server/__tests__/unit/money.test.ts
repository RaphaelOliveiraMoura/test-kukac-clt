import { makePurshace } from '../../src/utils/money';

test('make a purshace and expect the correct response with the all informations', () => {

    expect(makePurshace(50, 82)).toEqual({
        total: 50,
        paid: 82,
        back: {
            value: 32,
            notes: { '100': 0, '10': 3, '1': 2 }
        }
    });

    expect(makePurshace(200, 828)).toEqual({
        total: 200,
        paid: 828,
        back: {
            value: 628,
            notes: { '100': 6, '10': 2, '1': 8 }
        }
    });

    expect(makePurshace(125, -85)).toEqual(false);
    expect(makePurshace(-125, 500)).toEqual(false);
    expect(makePurshace(500, 499)).toEqual(false);

});