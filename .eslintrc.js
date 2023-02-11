module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:prettier/recommended'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'no-unused-vars': 'error',
    'react/prop-types': ['off'],
    'react/react-in-jsx-scope': 'off'
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};
