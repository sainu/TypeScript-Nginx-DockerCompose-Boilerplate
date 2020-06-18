module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: [
    "standard",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    sourceType: "module",
  },
  rules: {
    "no-useless-constructor": "off",
    "@typescript-eslint/no-useless-constructor": "error",
  },
};
