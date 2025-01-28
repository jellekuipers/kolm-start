export default {
  plugins: [
    "prettier-plugin-tailwindcss",
    "@ianvs/prettier-plugin-sort-imports",
  ],
  importOrder: [
    "^(react/(.*)$)|^(react$)",
    "<THIRD_PARTY_MODULES>",
    "",
    "^~/components/(.*)$",
    "^~/db/(.*)$",
    "^~/lib/(.*)$",
    "^~/styles/(.*)$",
    "^~/trpc/(.*)$",
    "^~/utils/(.*)$",
    "^~/validation/(.*)$",
    "^~/(.*)$",
    "",
    "^[./]",
  ],
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
  importOrderTypeScriptVersion: "5.0.0",
  importOrderCaseSensitive: false,
};
