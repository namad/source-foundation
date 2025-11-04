import { defineConfig } from "vite";
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths';
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(() => {
	return {
		build: {
            sourcemap: 'true',
        },	
		plugins: [
			react(),
			tsconfigPaths(),
			tailwindcss(),
		]
	}
});