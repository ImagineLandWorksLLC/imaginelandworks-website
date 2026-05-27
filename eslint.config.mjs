import eslintPluginAstro from "eslint-plugin-astro";
import ts from "typescript-eslint";
import a11y from "eslint-plugin-jsx-a11y";

export default [
  // TypeScript rules for .ts files and .astro frontmatter
  ...ts.configs.recommended,

  // Astro rules — includes the Astro parser, template checks, and a11y hints.
  // Uses the recommended preset from the official eslint-plugin-astro guide:
  // https://ota-meshi.github.io/eslint-plugin-astro/user-guide/
  ...eslintPluginAstro.configs.recommended,

  // JSX accessibility rules (requires eslint ^9, pinned in package.json)
  a11y.flatConfigs.recommended,

  // Project-level overrides
  {
    rules: {
      // TypeScript handles unused-var detection in .astro frontmatter;
      // the base ESLint rule causes false positives there.
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
