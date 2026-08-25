import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import wasm from "vite-plugin-wasm";
import { nodePolyfills } from "vite-plugin-node-polyfills";

export default defineConfig({
  base: "/pre-calculus/",
  build: {
    target: "esnext",
    rollupOptions: {
      input: {
        home: fileURLToPath(new URL("./index.html", import.meta.url)),
        section91: fileURLToPath(
          new URL("./pages/sections/9-1.html", import.meta.url),
        ),
        section92: fileURLToPath(
          new URL("./pages/sections/9-2.html", import.meta.url),
        ),
        section19: fileURLToPath(
          new URL("./pages/sections/1-9.html", import.meta.url),
        ),
        section21: fileURLToPath(
          new URL("./pages/sections/2-1.html", import.meta.url),
        ),
        section22: fileURLToPath(
          new URL("./pages/sections/2-2.html", import.meta.url),
        ),
      },
    },
  },
  plugins: [
    wasm(),
    nodePolyfills({
      globals: { Buffer: true, global: true },
      protocolImports: true,
    }),
  ],
});
