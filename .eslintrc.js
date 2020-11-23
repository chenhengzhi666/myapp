module.exports = {
  env: {
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb-base',
    'prettier',
    'prettier/react',
  ],
  parser: 'babel-eslint',
  rules: {
    'react/prop-types': 0,
    'react/display-name': 0,
    'no-console': 2,
    'no-unused-vars': [2, 'all'],
    'import/no-unresolved': 0,
    'import/no-extraneous-dependencies': 0,
    semi: [2, 'always'],
    'import/no-cycle': 0,
    'class-methods-use-this': [
      2,
      {
        exceptMethods: ['render'],
      },
    ],
    'linebreak-style': ['off', 'windows'],
  },
  plugins: ['react', 'prettier'],
  settings: {
    react: {
      createClass: 'createReactClass',
      pragma: 'React',
      version: '16.3.2',
    },
    propWrapperFunctions: ['forbidExtraProps'],
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
      },
    },
  },
  globals: {
    window: true,
    document: true,
    Image: true,
    Event: true,
    Promise: true,
    sessionStorage: true,
    setTimeout: true,
    process: true,
    console: true,
    require: true,
  },
};
