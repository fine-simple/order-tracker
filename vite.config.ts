import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        name: "Order Tracker",
        short_name: "Order Tracker",
        theme_color: "#ee6c13",
        background_color: "#121212",
        icons: [
          {
            src: "/icon.png",
            sizes: "400x400",
            type: "image/png",
          },
        ],
        description:
          "A simple web application that allows users to create orders, calculate individual total costs, and evenly distribute taxes and expenses for accurate cost sharing.",
        display: "standalone",
        lang: "en",
        orientation: "portrait",
        start_url: "/",
      },
    }),
  ],
});
