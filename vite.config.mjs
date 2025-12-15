import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  // Disable source maps in all modes to hide file structure
  sourcemap: false,

  // This changes the out put dir from dist to build
  // comment this out if that isn't relevant for your project
  build: {
    outDir: "build",
    chunkSizeWarningLimit: 2000,
    sourcemap: false, // Disable source maps in production to hide file names
    minify: 'esbuild', // Ensure proper minification
    cssMinify: true, // Minify CSS as well
  },
  plugins: [tsconfigPaths(), react()], // Removed component tagger to hide file paths in production
  server: {
    port: "4028",
    host: "0.0.0.0",
    strictPort: true,
    allowedHosts: ['.amazonaws.com', '.builtwithrocket.new']
  }
});