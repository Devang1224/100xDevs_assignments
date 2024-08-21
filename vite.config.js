import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    nodePolyfills(),
    react()
  ],
  resolve: {
    alias: {
      find: 'web3',
      replacement: 'web3/dist/web3.min.js',
    },

    // or
  },
})
