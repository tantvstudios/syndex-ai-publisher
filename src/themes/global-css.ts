import { defineGlobalStyles } from "@chakra-ui/react";

export const customGlobalCss = defineGlobalStyles({
	html: {
		fontSize: "62.5%", // 10px = 1rem
		boxSizing: "border-box",
		scrollBehavior: "smooth",
	},
	body: {
		fontSize: "1.4rem",
		fontFamily: "syndex.body",
	},
});
