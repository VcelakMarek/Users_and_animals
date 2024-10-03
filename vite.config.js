import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

const root = resolve(__dirname, "src");

// prettier-ignore
export default defineConfig({
  base: "/Users_and_animals/",
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
