module.exports = {
  root: true,
  extends: ["airbnb-typescript"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  parserOptions: {
    project: "./tsconfig.json",
  },
};
