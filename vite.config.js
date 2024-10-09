import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const root = resolve(__dirname, "src");

// prettier-ignore
export default defineConfig({
  base: "/",
  plugins: [react()],
  root: "src",
  resolve: {
    alias: {
      "types": resolve(root, "types"),
      "components": resolve(root, "components"),
      "api": resolve(root, "api"),
      "connectors": resolve(root, "connectors")
    },
  },
});
