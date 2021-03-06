import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // envDir: `${__dirname}/`,
  server: {
    watch: {
      usePolling: true,
    },
  },
  build: {
    sourcemap: true,
  },
});
