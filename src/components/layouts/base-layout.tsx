import { Box, Flex } from "@chakra-ui/react";
import { ComponentProps } from "react";
import { LeftSidebar } from "../ui/sidebars/left-sidebar";

type BaseLayoutProps = ComponentProps<typeof Flex>;
const BaseLayout = ({ children, ...props }: BaseLayoutProps) => {
	return (
		<Flex {...props} gap={"2rem"} pt={"1rem"} pl={"1rem"}>
			<LeftSidebar />
			<Box flex={2}>{children}</Box>
		</Flex>
	);
};

export { BaseLayout };
