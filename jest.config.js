module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  //Esto son las extension en la cuales jest buscara para relizar la pruebas
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)']
}
