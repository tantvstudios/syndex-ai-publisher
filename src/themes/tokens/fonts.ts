import { defineTokens } from "@chakra-ui/react";

export const customFonts = defineTokens.fonts({
  // // Example:
  // syndex: {
  // 	heading: { value: "var(--font-geist-sans)" },
  // 	body: { value: "var(--font-geist-mono)" },
  // },
  // Use a consistent system stack for headings and body
  syndex: {
    heading: { value: "'Helvetica Neue', Helvetica, Arial, sans-serif" },
    body: { value: "'Helvetica Neue', Helvetica, Arial, sans-serif" },
    mono: { value: "'Helvetica Neue', Helvetica, Arial, sans-serif" },
  },
});

// Font weight tokens to reference across the theme/components
export const customFontWeights = {
  heading: 700, // Bold for headings
  semiBold: 600, // Semi-bold for emphasized headings/buttons
  regular: 400, // Regular for body text
  light: 300, // Light for muted/secondary text
};
