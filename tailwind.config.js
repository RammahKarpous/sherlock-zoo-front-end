module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				body: {
					default: "#F1FEF6",
					darker: "#DBF6E6",
				},
				green: {
					primary: "#10A74C",
					secondary: "#10CF51",
					button: "#D0FBE1",
					dark: "#042F15",
					darker: "#042511",
				},
				button: {
					primary: "#FFE600",
					secondary: "#FC8F2A",
				},
			},
		},

		fontSize: {
			'small': '1.5rem',
			'medium': '2.25rem',
			'large': '4rem'
		},
		height: {
			xl: '35em',
			header: '800px',
			'tablet-header': '600px',
			'mobile-header': '400px'
		}
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
