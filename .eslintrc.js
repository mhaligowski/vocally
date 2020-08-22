module.exports = {
  root: true,
  extends: [
    "airbnb-typescript",
    "prettier",
    "prettier/@typescript-eslint",
    "prettier/react",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier"],
  ignorePatterns: ["config/**/*", "dist/**/*", ".eslintrc.js"],
  parserOptions: {
    project: "tsconfig.json",
  },
  rules: {
    "prettier/prettier": "error",
  },
};
