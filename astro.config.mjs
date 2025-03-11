// @ts-check
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',

  // Tối ưu hiệu suất
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover',
  },

  markdown: {
    shikiConfig: {
      themes: {
        light: 'solarized-light',
        dark: 'one-dark-pro',
      },
    },
  },

  image: {
    // Tối ưu hình ảnh
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
    remotePatterns: [
      {
        protocol: 'https',
      },
    ],
  },

  compressHTML: true,

  build: {
    inlineStylesheets: 'auto',
  },

  vite: {
    plugins: [tailwindcss()],
    build: {
      // Tối ưu CSS và JS
      cssMinify: true,
      minify: true,
      rollupOptions: {
        output: {
          manualChunks: {
            react: ['react', 'react-dom'],
          },
        },
      },
    },
  },

  integrations: [
    react(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      i18n: {
        defaultLocale: 'vi',
        locales: {
          vi: 'vi-VN',
        },
      },
    }),
  ],
});
