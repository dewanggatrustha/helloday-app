import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
	config: {
		initialColorMode: "light",
		useSystemColorMode: false,
	},
	colors: {
		primary: {
			200: "#FDF2B2",
			400: "#F8DD6D",
			500: "#F4CC3E", //base color
			700: "#AF891F",
		},
		black: "#121212",
		blue: "09192F", //dark mode color
	},
	fonts: {
		body: "Poppins",
		heading: "Poppins",
	},
});
