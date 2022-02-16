const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	darkMode: "class",
	content: [],
	purge: {
		content: ["./src/**/*.{html,ts}"]
	},
	theme: {
		backdropFilter: {
			none: "none",
			blur: "blur(20px)"
		},
		extend: {
			maxWidth: {
				iPhone: "390px",
				Android: "411px"
			},
			maxHeight: {
				iPhone: "896px"
			},
			height: {
				iPhone: "496px"
			},
			fontFamily: {
				quicksand: ["Quicksand", ...defaultTheme.fontFamily.sans]
			},
			backgroundColor: {
				ctdark: "#261E45"
			},
			colors: {
				ctdark: "#261E45",
				ctlight: "#3958FF",
				primaryblue: "#3589F9",
				purpleblack: "#1A152E",
				lighterblue: "#62B4FF"
			},
			boxShadow: {
				"3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)"
			},
			fontWeight: {
				"medium-light": 400
			}
		}
	},
	plugins: [require("@tailwindcss/forms")]
};
