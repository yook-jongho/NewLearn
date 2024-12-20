import { VitePWA } from "vite-plugin-pwa";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        VitePWA({
            registerType: "autoUpdate",
            injectRegister: false,

            manifest: {
                name: "newlearn",
                short_name: "newlearn",
                description: "어려운 뉴스 기사를 쉽고 빠르게",
                theme_color: "#ffffff",

                icons: [
                    {
                        src: "icons/apple-touch-icon-60x60.png",
                        sizes: "60x60",
                        type: "image/png",
                    },
                    {
                        src: "icons/apple-touch-icon-152x152.png",
                        sizes: "192x192",
                        type: "image/png",
                    },
                ],
            },

            workbox: {
                globPatterns: ["**/*.{js,css,html,svg,png,ico}"],
                cleanupOutdatedCaches: true,
                clientsClaim: true,
            },

            devOptions: {
                enabled: false,
                navigateFallback: "index.html",
                suppressWarnings: true,
                type: "module",
            },
        }),
    ],
});
