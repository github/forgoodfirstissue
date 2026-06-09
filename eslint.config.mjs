import next from "eslint-config-next";
import prettier from "eslint-plugin-prettier/recommended";

const eslintConfig = [...next, prettier];

export default eslintConfig;