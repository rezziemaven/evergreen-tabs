import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    preact(),
    viteStaticCopy({
      targets: [
        {
          src: 'manifest.json',
          dest: '',
        },
        {
          src: 'service-worker.js',
          dest: '',
        },
        {
          src: 'helpers.js',
          dest: '',
        },
      ],
    }),
  ],
});
