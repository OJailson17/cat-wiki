/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
		'./src/app/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				montserrat: ['Montserrat', 'sans-serif'],
			},
			backgroundImage: {
				'hero-image-sm': "url('/assets/HeroImagesm.png')",
				'hero-image-md': "url('/assets/HeroImagemd.png')",
				'hero-image-lg': "url('/assets/HeroImagelg.png')",
			},
			colors: {
				'primary-text-color': '#291507',
			},
		},
	},
	plugins: [],
};
