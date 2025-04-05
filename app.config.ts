import { defineConfig } from "@tanstack/react-start/config";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  server: {
    preset: "node-server",
    routeRules: {
      "/api/**": {
        cors: true,
        headers: {
          "access-control-allow-methods": "GET, POST",
          "access-control-allow-credentials": "true",
        },
      },
    },
  },
  vite: {
    plugins: [
      tsConfigPaths({
        projects: ["./tsconfig.json"],
      }),
    ],
  },
});
