// eslint.config.mjs
import js from "@eslint/js";
import nextPlugin from "@next/eslint-plugin-next";
import tsParser from "@typescript-eslint/parser";

export default [
  js.configs.recommended,

  {
    files: ["**/*.{ts,tsx,js,jsx}"],

    ignores: [
      "node_modules/",
      ".next/",
      "dist/",
      "build/"
    ],

    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: { jsx: true }
      }
    },

    plugins: {
      "@next/next": nextPlugin
    },

    rules: {
      ...nextPlugin.configs.recommended.rules
    }
  }
];
