module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', '@react-native-community'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'react-native'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx', '.js', '.jsx'] }],
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    'no-unused-vars': 'error',
    'prettier/prettier': ['error', { singleQuote: true }],
    'react/react-in-jsx-scope': 0,
    'comma-dangle': 0,
    'import/prefer-default-export': 0,
    'react-hooks/exhaustive-deps': 1,
    react: {
      'function-component-definition': [2, { namedComponents: 'arrow-function' }],
    },
  },
};
