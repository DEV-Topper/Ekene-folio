import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				grandslang: ["Grandslang Roman", "sans-serif"],
				montserrat: ["Montserrat", "sans-serif"],
			},
			blur: {
				"0.5": "0.5px",
				"0.8": "0.8px",
				"1": "1px",
				"0.88": "0.88px",
			},

			animation: {
				"infinite-scroll": "infinite-scroll 25s linear infinite",
			},
			keyframes: {
				"infinite-scroll": {
					from: { transform: "translateX(0)" },
					to: { transform: "translateX(-100%)" },
				},
			},
		},
	},
	plugins: [],
};
export default config;
