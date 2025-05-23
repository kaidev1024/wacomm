// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import dts from 'vite-plugin-dts';
import path from 'path';
import tailwindcss from "@tailwindcss/vite";
import forms from '@tailwindcss/forms';

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
    tailwindcss(),
    forms,
  ],
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src'),
    },
    dedupe: ['react', 'react-dom', '@mui/material', '@mui/x-date-pickers'],
  },
  define: {
    global: {},
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
  },
  build: {
    lib: {
      entry: 'src/index.js',
      name: 'pcom',
      fileName: (format) => `pcom.${format}.js`,
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['react', 'react-dom', '@mui/material', '@mui/system'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
      treeshake: false,
    },
  },
});