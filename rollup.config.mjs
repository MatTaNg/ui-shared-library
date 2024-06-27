// Modeled after https://code.ssnc.dev/algo/react-components/blob/RB-1-0-1/rollup.config.ts
import nodeResolvePlugin from "@rollup/plugin-node-resolve";
import { readFileSync } from "fs";
import { defineConfig } from "rollup";
import PeerDepsExternalPlugin from "rollup-plugin-peer-deps-external";
import typescript from "rollup-plugin-typescript";
import sassPlugin from "rollup-plugin-sass";
import commonjsPlugin from "@rollup/plugin-commonjs";

const packageJson = JSON.parse(
  readFileSync("./package.json", { encoding: "utf8" })
);

const config = defineConfig({
  input: "./src/index.ts",
  output: [
    {
      file: packageJson.main,
      format: "es",
      sourcemap: true,
    },
  ],

  plugins: [
    PeerDepsExternalPlugin(),
    nodeResolvePlugin(),
    commonjsPlugin(),
    sassPlugin({
      insert: true,
    }),
    typescript(),
  ],
});

export default config;
