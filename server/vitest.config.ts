// eslint-disable-next-line spaced-comment
/// <reference types="vitest" />

import swc from 'unplugin-swc';
import { defineConfig } from 'vitest/config';

export default defineConfig({
    plugins: [swc.vite()],
    test: {
        globals: true,
        environment: 'node',
        coverage: {
            provider: 'v8',
            reporter: ['text', 'lcov', 'clover', 'html', 'json'],
            reportsDirectory: 'coverage',
            all: true,
            exclude: [
                '**/*.module.ts',
                'src/**/interfaces/**',
                '**/*.input.ts',
                '**/documentation.swagger.ts',
                'vitest.global-setup.ts '
            ]
        },
        reporters: ['default', 'html'],
        setupFiles: ['dotenv/config'],
        testTimeout: 30000,
        hookTimeout: 60000
    },
    resolve: {
        alias: {
            '@': 'src'
        }
    }
});