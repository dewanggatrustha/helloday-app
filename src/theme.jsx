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
			500: "#DDB62A",
			700: "#AF891F",
		},
		black: "#121212",
		white: "FEFDFD",
	},
});
