import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        name: "Group Order",
        short_name: "Group Order",
        theme_color: "#121212",
        icons: [
          {
            src: "/pizza.png",
            sizes: "100x100",
            type: "image/png",
          },
        ],
        background_color: "#121212",
        description:
          "A simple web application that allows users to create orders for making group order easier.",
        display: "standalone",
        lang: "en",
        orientation: "portrait",
        start_url: "/",
      },
    }),
  ],
});
