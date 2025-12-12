import js from "@eslint/js";
import globals from "globals";

export default [
    {
        ignores: [
            "node_modules/",
            "dist/",
            "coverage/",
            "eslint.config.js"
        ]
    },
    {
        files: ["**/*.{js,mjs,cjs}"],
        languageOptions: {
            globals: {
                ...globals.node,
            },
            ecmaVersion: "latest",
            sourceType: "module",
        },
        rules: {
            ...js.configs.recommended.rules,
            "no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
            "no-undef": "error",
            "no-console": "warn",
            "no-process-exit": "off",
            "no-path-concat": "error",
        },
    }
];