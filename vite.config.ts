import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
const SIXTY_DAYS = 60 * 60 * 24 * 60;
const BASE_URL = "/vite";
export default defineConfig({
  build: {
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
      },
      mangle: true,
    },
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
        },
      },
    },
  },
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: "script-defer",
      includeAssets: ["favicon.ico", "apple-touch-icon.png", "mask-icon.svg"],
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
        globIgnores: ["assets/*.{js,css,html,ico,png,svg}"],
        runtimeCaching: [
          {
            urlPattern: ({ url }) =>
              url.origin === self.location.origin &&
              /\.(png|jpg|jpeg|gif|svg)$/.test(url.pathname),
            handler: "CacheFirst",
            options: {
              cacheName: "local-images-cache",
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: SIXTY_DAYS,
              },
            },
          },
          {
            urlPattern: /\/assets\/react-.*\.js$/,
            handler: "CacheFirst",
            options: {
              cacheName: "react-chunks",
              expiration: {
                maxAgeSeconds: SIXTY_DAYS,
              },
            },
          },
        ],
      },
      manifest: {
        name: "ViteReactTsTemplate",
        short_name: "ViteReactTsTemplate",
        theme_color: "#1976D2",
        background_color: "#f8fcfe",
        display: "fullscreen",
        description: "Vite React Typescript Template",
        start_url: BASE_URL,
        scope: BASE_URL,
        icons: [
          {
            src: "pwa-64x64.png",
            sizes: "64x64",
            type: "image/png",
          },
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "maskable-icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },
    }),
  ],
  base: BASE_URL,
});
