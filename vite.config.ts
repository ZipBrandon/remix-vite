import { defineConfig } from "vite";
import { unstable_vitePlugin as remix } from "@remix-run/dev";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({

  plugins: [remix(), tsconfigPaths()],

  optimizeDeps: {
    include: ['remix-i18next']
  },
  // resolve: {
  //   alias: {
  //     'remix-i18next': 'remix-i18next/browser/index.js'
  //   }
  // }
});
