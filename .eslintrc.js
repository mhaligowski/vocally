module.exports = {
  root: true,
  extends: ["airbnb-typescript"],
  parser: "@typescript-eslint/parser",
  plugins: ["prettier", "@typescript-eslint"],
  ignorePatterns: ["config/**/*"],
  parserOptions: {
    project: "./tsconfig.json"
  }
};
