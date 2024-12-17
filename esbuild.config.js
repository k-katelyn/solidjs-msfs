import { build } from "esbuild";
import { solidPlugin } from "esbuild-plugin-solid";
import { $ } from "bun";
import packageJson from "./package.json" assert { type: "json" };

const outCjs = packageJson.main;
const outEsm = packageJson.module;
const outTypes = packageJson.types || "dist/index.d.ts";

async function buildProject() {
  const commonOptions = {
    entryPoints: ["src/index.ts"],
    bundle: true,
    sourcemap: true,
    target: ["es2020"],
    jsx: "automatic",
    jsxImportSource: "solid-js",
    plugins: [solidPlugin()],
  };

  await build({
    ...commonOptions,
    format: "cjs",
    outfile: outCjs,
  });

  await build({
    ...commonOptions,
    format: "esm",
    outfile: outEsm,
  });

  // try {
  //   await $`bun x tsc --declaration --emitDeclarationOnly --outDir ${outTypes.replace(
  //     "/index.d.ts",
  //     ""
  //   )} src/index.ts`;
  //   console.log("Type definitions generated successfully");
  // } catch (error) {
  //   console.error("Error generating type definitions:", error);
  //   process.exit(1);
  // }
}

buildProject().catch((err) => {
  console.error(err);
  process.exit(1);
});
