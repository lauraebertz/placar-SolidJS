import { defineConfig } from "vite";
import solid from "vite-plugin-solid";

export default defineConfig({
  plugins: [solid()],
  // Caminhos relativos permitem publicar na subpasta de um repositório.
  // Este exemplo não utiliza rotas internas.
  base: "./",
});
