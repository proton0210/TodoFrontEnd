import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import reactRefresh from "@vitejs/plugin-react-refresh";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), reactRefresh()],
  server: {
    port: 3030,
  },
  preview: {
    port: 8080,
  },
  define: {
    "process.env": {},
    "window.global": "window",
  },
});
