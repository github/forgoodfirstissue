import typescriptEslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import js from "@eslint/js";
import globals from "globals";

export default [
    js.configs.recommended,
    {
        files: ["**/*.{js,jsx,ts,tsx}"],
        plugins: {
            "@typescript-eslint": typescriptEslint,
        },
        languageOptions: {
            parser: tsParser,
            ecmaVersion: 12,
            sourceType: "module",
            globals: {
                ...globals.browser,
                ...globals.node,
                ...globals.es2021,
            },
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        rules: {
            ...typescriptEslint.configs.recommended.rules,
            "@typescript-eslint/no-explicit-any": "warn",
            "@typescript-eslint/no-unused-vars": ["error", {
                "argsIgnorePattern": "^_",
                "varsIgnorePattern": "^_"
            }],
            "no-redeclare": "off",
            "@typescript-eslint/no-redeclare": "error",
        },
    },
    {
        ignores: [".next/**", "node_modules/**", "out/**", "public/**"],
    }
];