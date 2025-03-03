import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';

// Configuración de Vite
export default defineConfig({
  plugins: [
    tailwindcss(), // Plugin para Tailwind CSS
    react(),       // Plugin para React
  ],
});
