import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/datacoffee-page/', // MUST match your GitHub repo name!
  server: {
    host: '0.0.0.0',
    port: 5000,
  },
});
