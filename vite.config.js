import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
const path = require('path');



// https://vitejs.dev/config/
export default defineConfig({
	server: {
		port: 3000,
	},
	// base: "/drgopnik/",
	resolve: {
		alias: [
			{ find: "@", replacement: path.resolve(__dirname, "./src") }
		],
		// alias: {
		// 	"@": path.resolve(__dirname, "src"),
		// }
	},
	plugins: [react()],
});
