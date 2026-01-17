import pluginJs from "@eslint/js"
import nextPlugin from "@next/eslint-plugin-next"
import pluginReact from "eslint-plugin-react"
import eslintPluginUnusedImports from "eslint-plugin-unused-imports"
import globals from "globals"
import tseslint from "typescript-eslint"

export default [
  {
    ignores: ["next-env.d.ts", ".next/*"],
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: ["*.config.*"],
        },
        tsconfigRootDir: import.meta.dirname,
      },
      globals: globals.browser,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    plugins: {
      "unused-imports": eslintPluginUnusedImports,
      "@next/next": nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
      "react/jsx-no-useless-fragment": "warn",
      "react/no-deprecated": "warn",
      "react/react-in-jsx-scope": "off",
      "no-console": ["error", { allow: ["warn", "error"] }],
      "unused-imports/no-unused-imports": "warn",
      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          prefer: "type-imports",
          fixStyle: "inline-type-imports",
        },
      ],
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
      "react/jsx-sort-props": [
        "warn",
        {
          callbacksLast: true,
          shorthandFirst: true,
          ignoreCase: true,
          reservedFirst: ["key"],
        },
      ],
    },
  },
]
