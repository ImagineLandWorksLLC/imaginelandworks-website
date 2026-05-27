import eslintPluginAstro from "eslint-plugin-astro";
import ts from "typescript-eslint";

export default [
  // TypeScript rules for .ts files and .astro frontmatter
  ...ts.configs.recommended,

  // Astro rules + template linting + built-in a11y checks.
  // Official guide: https://ota-meshi.github.io/eslint-plugin-astro/user-guide/
  ...eslintPluginAstro.configs.recommended,

  // Project-level overrides
  {
    rules: {
      // TypeScript handles unused-var detection; the base rule causes false
      // positives in .astro frontmatter blocks.
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/no-explicit-any": "warn",
    },
  },

  // Ignore generated and built directories
  {
    ignores: ["dist/**", ".astro/**", "public/**", "*.config.*"],
  },
];
