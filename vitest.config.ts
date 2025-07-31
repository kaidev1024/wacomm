import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
    test: {
        environment: 'jsdom',
        globals: true,
        setupFiles: ['./setupTests.ts'],
        root: '.',
    },
    resolve: {
        alias: {
            'src': path.resolve('./src')
        }
    }
});