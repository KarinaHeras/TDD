//Debe contener 8 digitos
//Se divide la parte númerica entre 23, y el resto se coteja con la siguiente tabla:

const kataDni = require('../kataDni');

test('letras and dni', () => {
    // ARRANGE
    const dni = 8
    const expectedResult = 'letras'
    // ACT
    const result = kataDni(dni)

    // ASSERT
    expect(result).toBe(expectedResult);
  });


 