/// <reference path="./env/MyProcessEnv.d.ts" />
import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";

// Build時に環境変数の有無を検証したければこの辺りで検証したり
/*
if (process.env.MY_ENV_VAR === undefined) {
  console.error("MY_ENV_VAR is not defined");
  process.exit(1);
}
*/

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  define: {
    // JSON.stringify の中の process.env.MY_ENV_VAR は補完が効く状態
    "process.env.MY_ENV_VAR": JSON.stringify(process.env.MY_ENV_VAR),
  },
});
