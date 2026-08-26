import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",
      // 🚀 YAHAN HACK ADD KIYA HAI 🚀
      devOptions: {
        enabled: true, // Ye line localhost par PWA testing on kar degi
      },
      includeAssets: ["sahil_favicon.png"],
      manifest: {
        name: "Sahil Mirza Portfolio",
        short_name: "Sahil",
        description: "MERN & .NET Developer Portfolio of Sahil Mirza",
        theme_color: "#000000",
        background_color: "#000000",
        display: "standalone",
        icons: [
          {
            src: "/sahil_favicon.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/sahil_favicon.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    }),
  ],
});
