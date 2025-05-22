// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import dts from 'vite-plugin-dts';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src'),
    },
  },
  define: {
    global: {},
  },
  build: {
    lib: {
      entry: 'src/index.js',
      name: 'pcom',
      fileName: (format) => `pcom.${format}.js`,
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
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