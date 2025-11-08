import { defineSemanticTokens } from "@chakra-ui/react";

export const customSemanticColors = defineSemanticTokens.colors({
  syndex: {
    background: {
      DEFAULT: { value: "{colors.syndex.white.400}" },
      secondary: { value: "{colors.syndex.grey.100}" },
    },
    text: {
      dark: { value: "{colors.syndex.grey.500}" },
      light: { value: "{colors.syndex.white.400}" },
    },
    border: {
      DEFAULT: { value: "{colors.syndex.white.300}" },
    },
  },
});
