import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { resolve } from "path";

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "BiWidgets",
      formats: ["es", "umd"],
      fileName: (format) => `bi-widgets.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "recharts", /\.css/],

      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          recharts: "Recharts",
        },
      },
    },
  },
});
