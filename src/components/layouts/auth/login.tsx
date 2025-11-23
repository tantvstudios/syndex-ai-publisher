import { Stack } from "@chakra-ui/react";
import { CustomForm } from "@source/components/ui/custom-input";

const login = () => {
	return (
		<Stack gap={"5rem"} fontSize={"4rem"} color={"syndex.teal"}>
			<CustomForm />
		</Stack>
	);
};

export default login;
