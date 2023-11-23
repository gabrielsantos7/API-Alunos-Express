module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: 'airbnb-base',
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off', // Não deixa usar console.log()
    'class-methods-use-this': 'off', // Não deixa usar o this em alguns casos
    'import/first': 'off', // Define obrigatoriamnete as importações primeiro
    'no-param-reassign': 'off', // Não permite reatribuir valores aos parâmetros de funções
    'padded-blocks': 'off', // Não deixa colocar espaço entre blocos de código
    'no-unused-vars': 'warn', // Variáveis que não estão sendo usadas
    'import/no-extraneous-dependencies': 'off', // Importações que não estão sendo reconhecidas
    camelcase: 'off', // Variáveis só podem ser criadas com o padrão camelCase
  },
};
