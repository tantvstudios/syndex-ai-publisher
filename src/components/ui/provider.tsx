"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { getQueryClient } from "@source/config/tsq";
import customTheme from "@source/themes";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ColorModeProvider, type ColorModeProviderProps } from "./color-mode";

export function Provider(props: ColorModeProviderProps) {
	return (
		<QueryClientProvider client={getQueryClient()}>
			<ChakraProvider value={customTheme}>
				<ColorModeProvider {...props} />
			</ChakraProvider>

			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
}
