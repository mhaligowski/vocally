module.exports = {
  root: true,
  extends: ["airbnb-typescript"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier"],
  ignorePatterns: ["config/**/*"],
  parserOptions: {
    project: "tsconfig.json"
  }
};
