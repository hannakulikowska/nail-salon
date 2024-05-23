import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig(({ mode }) => {
  let base = '/';

  return {
    base,
    root: path.resolve(__dirname),
    resolve: {
      alias: {
        '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
        '~bootstrap-icons': path.resolve(__dirname, 'node_modules/bootstrap-icons'),
        '~modern-normalize': path.resolve(__dirname, 'node_modules/modern-normalize'),
        '~aos': path.resolve(__dirname, 'node_modules/aos'),
      },
    },
    server: {
      port: 8080,
      hot: true,
    },
    build: {
      outDir: path.resolve(__dirname, 'dist'),
    },
  };
});
