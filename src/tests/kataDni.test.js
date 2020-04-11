//Debe contener 8 digitos
//Se divide la parte númerica entre 23, y el resto se coteja con la siguiente tabla:

const kataDni = require('../kataDni');

test('tiene menos de 8 digitos', () => {
    // ARRANGE
    const dni = '92'
    const expectedResult = 'el numero del dni debe  contener 8 digitos, rellene con 0 a la izquierda'
    // ACT
    const result = kataDni(dni)

    // ASSERT
    expect(result).toBe(expectedResult);
  });


  test('tiene 8 digitos y devuelve la letra que corresponde', () => {
    // ARRANGE
    const dni = '00000023'
    const expectedResult = 'T'
    // ACT
    const result = kataDni(dni)

    // ASSERT
    expect(result).toBe(expectedResult);
  });


  test('tiene 8 digitos y devuelve la letra R', () => {
    // ARRANGE
    const dni = '00000001'
    const expectedResult = 'R'
    // ACT
    const result = kataDni(dni)

    // ASSERT
    expect(result).toBe(expectedResult);
  });

  test('tiene 8 digitos y devuelve la letra W', () => {
    // ARRANGE
    const dni = '00000002'
    const expectedResult = 'W'
    // ACT
    const result = kataDni(dni)

    // ASSERT
    expect(result).toBe(expectedResult);
  });

  test('tiene 8 digitos y devuelve la letra A', () => {
    // ARRANGE
    const dni = '00000003'
    const expectedResult = 'A'
    // ACT
    const result = kataDni(dni)

    // ASSERT
    expect(result).toBe(expectedResult);
  });

  test('tiene 8 digitos y devuelve la letra G', () => {
    // ARRANGE
    const dni = '00000004'
    const expectedResult = 'G'
    // ACT
    const result = kataDni(dni)

    // ASSERT
    expect(result).toBe(expectedResult);
  });

  test('tiene 8 digitos y devuelve la letra M', () => {
    // ARRANGE
    const dni = '00000005'
    const expectedResult = 'M'
    // ACT
    const result = kataDni(dni)

    // ASSERT
    expect(result).toBe(expectedResult);
  });


  test('tiene 8 digitos y devuelve la letra Y', () => {
    // ARRANGE
    const dni = '00000006'
    const expectedResult = 'Y'
    // ACT
    const result = kataDni(dni)

    // ASSERT
    expect(result).toBe(expectedResult);
  });
  test('tiene 8 digitos y devuelve la letra F', () => {
    // ARRANGE
    const dni = '00000007'
    const expectedResult = 'F'
    // ACT
    const result = kataDni(dni)

    // ASSERT
    expect(result).toBe(expectedResult);
  });

  test('tiene 8 digitos y devuelve la letra P', () => {
    // ARRANGE
    const dni = '00000008'
    const expectedResult = 'P'
    // ACT
    const result = kataDni(dni)

    // ASSERT
    expect(result).toBe(expectedResult);
  });

  test('tiene 8 digitos y devuelve la letra D', () => {
    // ARRANGE
    const dni = '00000009'
    const expectedResult = 'D'
    // ACT
    const result = kataDni(dni)

    // ASSERT
    expect(result).toBe(expectedResult);
  });

  test('tiene 8 digitos y devuelve la letra X', () => {
    // ARRANGE
    const dni = '00000010'
    const expectedResult = 'X'
    // ACT
    const result = kataDni(dni)

    // ASSERT
    expect(result).toBe(expectedResult);
  });


  test('tiene 8 digitos y devuelve la letra B', () => {
    // ARRANGE
    const dni = '00000011'
    const expectedResult = 'B'
    // ACT
    const result = kataDni(dni)

    // ASSERT
    expect(result).toBe(expectedResult);
  });

  test('tiene 8 digitos y devuelve la letra N', () => {
    // ARRANGE
    const dni = '00000012'
    const expectedResult = 'N'
    // ACT
    const result = kataDni(dni)

    // ASSERT
    expect(result).toBe(expectedResult);
  });