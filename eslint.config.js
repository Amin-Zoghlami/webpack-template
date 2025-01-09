const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended');

module.exports = [
  "eslint:recommended",            
  eslintPluginPrettierRecommended,
   {
    rules: {
      "semi": "error",
      "singleQuote": "true",
    },
  },
];
