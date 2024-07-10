const { sqlForPartialUpdate } = require('./helpers/sql');
const { BadRequestError } = require('./expressError');

describe('sqlForPartialUpdate', () => {
  test('generates correct SQL query snippet and values array', () => {
    const dataToUpdate = { firstName: 'Aliya', age: 32 };
    const jsToSql = { firstName: 'first_name', age: 'age' };
    const result = sqlForPartialUpdate(dataToUpdate, jsToSql);
    
    expect(result).toEqual({
      setCols: '"first_name"=$1, "age"=$2',
      values: ['Aliya', 32]
    });
  });

  test('uses column names as-is if no mapping is provided', () => {
    const dataToUpdate = { firstName: 'Aliya', age: 32 };
    const jsToSql = {};
    const result = sqlForPartialUpdate(dataToUpdate, jsToSql);

    expect(result).toEqual({
      setCols: '"firstName"=$1, "age"=$2',
      values: ['Aliya', 32]
    });
  });

  test('throws BadRequestError if no data is provided', () => {
    expect(() => {
      sqlForPartialUpdate({}, {});
    }).toThrow(BadRequestError);
  });

  test('correctly handles single field update', () => {
    const dataToUpdate = { firstName: 'Aliya' };
    const jsToSql = { firstName: 'first_name' };
    const result = sqlForPartialUpdate(dataToUpdate, jsToSql);

    expect(result).toEqual({
      setCols: '"first_name"=$1',
      values: ['Aliya']
    });
  });

  test('correctly handles multiple field updates', () => {
    const dataToUpdate = { firstName: 'Aliya', age: 32, lastName: 'Smith' };
    const jsToSql = { firstName: 'first_name', lastName: 'last_name' };
    const result = sqlForPartialUpdate(dataToUpdate, jsToSql);

    expect(result).toEqual({
      setCols: '"first_name"=$1, "age"=$2, "last_name"=$3',
      values: ['Aliya', 32, 'Smith']
    });
  });
});
