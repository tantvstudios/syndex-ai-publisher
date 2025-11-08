"use client";
import { Box, Link as ChakraLink, Flex, Icon } from "@chakra-ui/react";
import { toaster } from "@source/components/ui/toaster";
import { SIDEBAR_ROUTES } from "@source/data/sidebar";
import Link from "next/link";

const LeftSidebar = () => {
	return (
		<Box
			w={{ base: "fit-content", lg: "14rem" }}
			minW={{ lg: "10rem" }}
			h={{ lg: "dvh" }}
			background="syndex.background.secondary"
			rounded={{ base: "none", lg: "20px" }}
		>
			<Flex
				direction={{ base: "row", lg: "column" }}
				p="2rem 1rem"
				bg="inherit"
				align={"left"}
				rounded={"inherit"}
				justify="space-around"
				h={"2/3"}
				zIndex="max"
			>
				{SIDEBAR_ROUTES.map(({ name, path, icon }, index) => {
					const PassedIcon = icon;
					return (
						<ChakraLink
							key={index}
							textDecor="none"
							_focus={{ outline: "none" }}
							_active={{ outline: "none" }}
							asChild
							display="flex"
							alignItems="center"
							gap="0.5rem"
							color="syndex.text.dark"
						>
							<Link
								href={path.includes("post") ? "#" : path}
								onClick={() => {
									if (path.includes("post")) {
										toaster.info({
											description: "Coming soon",
											closable: true,
										});
									}
								}}
							>
								<Icon
									as="svg"
									viewBox={PassedIcon.viewBox}
									boxSize={{ base: 6, lg: 7 }}
									fill="black"
								>
									<path d={PassedIcon.d} />
								</Icon>

								{name}
							</Link>
						</ChakraLink>
					);
				})}
			</Flex>
		</Box>
	);
};

export { LeftSidebar };
