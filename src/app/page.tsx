import { Input, Stack } from "@chakra-ui/react";
import { CustomForm, CustomInput } from "@source/components/ui/custom-input";

export default function Home() {
	return (
		<Stack gap={"5rem"} fontSize={"4rem"} color={"syndex.teal"}>
			<CustomInput placeholder="Enter your email" />

			<Input placeholder="Enter your email" />

			<CustomForm />
		</Stack>
	);
}
