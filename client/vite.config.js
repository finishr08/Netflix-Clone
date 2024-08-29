import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { ENV_VARS } from "../server/config/envVars";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: ENV_VARS.VITE_API_URL,
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
