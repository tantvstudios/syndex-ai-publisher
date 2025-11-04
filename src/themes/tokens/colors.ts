import { defineTokens } from "@chakra-ui/react";

export const customColors = defineTokens.colors({
  brand: {
    primary: { value: "#212529" }, // Dark Grey
    secondary: { value: "#6c757d" }, // Medium Grey
    accent: { value: "#ffc107" }, // Amber/Yellow
    danger: { value: "#dc3545" }, // Red
  },
  background: {
    main: { value: "#ffffff" }, // Pure White
    secondary: { value: "#f8f9fa" }, // Lightest Grey
  },
  text: {
    dark: { value: "#212529" }, // Main headings/body on light bg
    light: { value: "#ffffff" }, // Text on dark backgrounds
  },
  neutral: {
    border: { value: "#e7e7e7" }, // dividers/card outlines
  },
});
