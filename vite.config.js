import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { crx } from '@crxjs/vite-plugin';

import manifest from './src/manifest.json';

import path from 'path';

const isProd = process.env.NODE_ENV === 'production';

export default defineConfig({
  plugins: [vue(), crx({ manifest })],
  server: {
    port: 3004,
    hmr: {
      port: 8989,
      overlay: false,
    }
  },
  build: {
    outDir: isProd ? 'dist/build' : 'dist/dev',
  },
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`
    }
  },
  optimizeDeps: {
    include: ['vue'],
  }
})
