import reactRefresh from '@vitejs/plugin-react-refresh';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  envDir: './',
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
    },
  },
  plugins: [reactRefresh()],
});
