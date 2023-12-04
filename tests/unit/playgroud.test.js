describe('Basic math', () => {
  /*   it funtion , es el primer argumento en el que declaras 
  en terminos humamnos lo que estas probando
 */
  it('adds two numbers', () => {
    // Aca escribire la afirmacion o la expectativa.
    // Expect es la accion que hara y .tobe en este caso seria extrictamente igual a 2
    expect(1 + 1).toBe(2); //lo que espera es 2 como respuesta
  });

  it('Sustracts two numbers', () => {
    expect(5 - 3).toBe(2);
    expect(10 - 5).toBe(5);
  });
});
