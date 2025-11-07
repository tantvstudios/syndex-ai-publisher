import { defineTokens } from "@chakra-ui/react";

export const customColors = defineTokens.colors({
  // Light Colors: 100 - 400
  // Dark City: 500 - 900

  /*
  Syndex Color Reference:
    - Primary / Text Dark → grey.500 → #212529
    - Secondary UI / Text Muted → grey.400 → #6c757d
    - Accent / Highlights → yellow.400 → #ffc107
    - Danger / Alerts → red.400 → #dc3545
    - Main Background → white.400 → #ffffff
    - Section / Subtle Background → grey.100 → #f8f9fa
    - Borders / Card Outline → white.300 → #e7e7e7
    - Text on Dark / Dark UI Base → black.300 → #212529
    - Pure Black → black.400 → #000000
  */

  syndex: {
    grey: {
      100: { value: "#f8f9fa" }, // Lightest Grey
      400: { value: "#6c757d" }, // Medium Grey
      500: { value: "#212529" }, // Darker Grey
    },
    yellow: {
      400: { value: "#ffc107" }, // Light Yellow
    },
    red: {
      400: { value: "#dc3545" }, // Danger Red
    },
    white: {
      300: { value: "#e7e7e7" }, // Neutral White
      400: { value: "#ffffff" }, // Pure White
    },
    black: {
      300: { value: "#212529" }, // Behind Bg Black
      400: { value: "#000000" }, // Pure Black
    },
  },
});
