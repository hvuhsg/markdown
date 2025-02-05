/** @type {import("prettier").Options} */
export default {
	useTabs: true,
	printWidth: 80,
	htmlWhitespaceSensitivity: "ignore",
	plugins: ["prettier-plugin-svelte", "prettier-plugin-tailwindcss"],
	overrides: [
		{
			files: "*.svelte",
			options: {
				parser: "svelte",
			},
		},
	],
};
