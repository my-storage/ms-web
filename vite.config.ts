import path from 'path'
import { defineConfig } from "vite";

import solid from "solid-start/vite";
import netlify from "solid-start-netlify";
import eslint from 'vite-plugin-eslint';

export default defineConfig({
  resolve: {
    alias: {
        "@components": path.resolve(__dirname, "./src/components"),
        "@layouts": path.resolve(__dirname, "./src/layouts"),
        "@contexts": path.resolve(__dirname, "./src/contexts"),
        "@features": path.resolve(__dirname, "./src/features"),
        "@hooks": path.resolve(__dirname, "./src/hooks"),
        "@modules": path.resolve(__dirname, "./src/modules"),
        "@routes": path.resolve(__dirname, "./src/routes"),
        "@services": path.resolve(__dirname, "./src/services"),
        "@shared": path.resolve(__dirname, "./src/shared"),
        "@root": path.resolve(__dirname, "./src/root"),
    }
  },
  plugins: [solid({ adapter: netlify() }), eslint()],
});
