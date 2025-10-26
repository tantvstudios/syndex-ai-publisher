import { defineTokens } from "@chakra-ui/react";

export const customFonts = defineTokens.fonts({
	// Example:
	syndex: {
		heading: { value: "var(--font-geist-sans)" },
		body: { value: "var(--font-geist-mono)" },
	},
});
