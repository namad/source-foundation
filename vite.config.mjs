import { defineConfig } from "vite";
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig(() => {
	return {
        root: 'source-foundation/src',
		plugins: [
			react(),
			tsconfigPaths()
		]
	}
});