import { build } from "esbuild";
import { readFileSync } from "node:fs";

const pkg = JSON.parse(readFileSync("package.json", "utf8"));

await build({
  entryPoints: ["src/embed/index.tsx"],
  outfile: "public/embed/cnh-landings.iife.js",
  bundle: true,
  minify: true,
  format: "iife",
  globalName: "CNHLandings", // window.CNHLandings.mount / unmount / version
  target: ["es2018"],
  jsx: "automatic",
  loader: { ".css": "text" }, // CSS vira string, injetada pelo mount()
  define: {
    "process.env.NODE_ENV": '"production"',
    __VERSION__: JSON.stringify(pkg.version),
  },
});
console.log("✔ public/embed/cnh-landings.iife.js gerado");