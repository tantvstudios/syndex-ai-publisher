import { defineSlotRecipe } from "@chakra-ui/react";
import { fieldAnatomy } from "@chakra-ui/react/anatomy";

export const fieldSlotRecipe = defineSlotRecipe({
	className: "chakra-field",
	slots: fieldAnatomy.keys(),
	base: {
		requiredIndicator: {
			color: "fg.error",
			lineHeight: "1",
		},
		root: {
			display: "flex",
			width: "100%",
			position: "relative",
			gap: "1.5",
		},
		label: {
			display: "flex",
			alignItems: "center",
			textAlign: "start",
			fontSize: "5rem",
			fontWeight: "medium",
			gap: "1",
			userSelect: "none",
			_disabled: {
				opacity: "0.5",
			},
		},
		errorText: {
			display: "inline-flex",
			alignItems: "center",
			fontWeight: "medium",
			gap: "1",
			color: "fg.error",
			textStyle: "xs",
		},
		helperText: {
			color: "fg.muted",
			textStyle: "xs",
		},
	},

	variants: {
		orientation: {
			vertical: {
				root: {
					flexDirection: "column",
					alignItems: "flex-start",
				},
			},
			horizontal: {
				root: {
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "space-between",
				},
				label: {
					flex: "0 0 var(--field-label-width, 80px)",
				},
			},
		},
	},

	defaultVariants: {
		orientation: "vertical",
	},
});
