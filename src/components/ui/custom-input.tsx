import { Field, Input } from "@chakra-ui/react";
import { ComponentProps } from "react";

type TCustomInputProps = ComponentProps<typeof Input>;
const CustomInput = (props: TCustomInputProps) => {
	return (
		<Input
			{...props}
			w={"full"}
			h={"5rem"}
			rounded={"2rem"}
			borderColor={"syndex.teal"}
			borderWidth={"1px"}
			borderStyle={"solid"}
		/>
	);
};

const CustomForm = () => {
	return (
		<Field.Root>
			<Field.Label>
				Email
				<Field.RequiredIndicator />
			</Field.Label>
			<Input />
			<Field.HelperText />
			<Field.ErrorText />
		</Field.Root>
	);
};

export { CustomForm, CustomInput };
