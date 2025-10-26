import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";
import { customRecipes } from "./recipes";
import { customSlotRecipes } from "./slot-recipes";
import { customColors } from "./tokens/colors";
import { customFonts } from "./tokens/fonts";

const configuration = defineConfig({
	theme: {
		tokens: {
			colors: customColors,
			fonts: customFonts,
		},
		recipes: customRecipes,
		slotRecipes: customSlotRecipes,
	},
});

const customTheme = createSystem(defaultConfig, configuration);

export default customTheme;
