import { ConfigEnv, defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react"
import TsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig((env: ConfigEnv) => {
  const config = {
    plugins: [react(), TsconfigPaths()],
    server: {
      open: true,
    },
    build: {
      outDir: "build",
      sourcemap: true,
    },
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: "src/setupTests",
      mockReset: true,
    },
    base: '/'
  };
  console.log('env', env);

  if (env.command !== 'serve') {
    config.base = '/fest3/'
  }

  return config;
});
