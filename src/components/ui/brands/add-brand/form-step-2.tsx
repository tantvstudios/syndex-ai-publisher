import { Box, Button, Dialog, Text } from "@chakra-ui/react";
import MultiSelectButton from "../../custom-multi-select-button";
import { useState } from "react";

const options = [
  "Latino/Hispanic",
  "Asian American",
  "Native American",
  "Black/African American",
];

export const Step2 = ({
  prevStep,
  nextStep,
}: {
  prevStep: () => void;
  nextStep: () => void;
}) => {
  const [selected, setSelected] = useState<string[]>([]);

  return (
    <Box p={0}>
      <Dialog.Header
        flex="column"
        p={"2rem"}
        justifyContent="center"
        fontWeight="extrabold"
        fontSize={"2rem"}
      >
        Create New Brand
      </Dialog.Header>
      <Dialog.Body>
        <Box mb={12}>
          <Text
            as="label"
            display="block"
            mb={1}
            fontSize="sm"
            color={"#6d6d6d"}
          >
            Are you a local news outlet?
          </Text>
          <MultiSelectButton
            options={["Yes", "No"]}
            value={selected}
            onChange={setSelected}
            size="sm"
            spacing={2}
            maxSelections={1}
          />
          {selected.length > 0 && (
            <Text mt={4} fontSize="sm" color="gray.600">
              Selected: {selected.join(", ")}
            </Text>
          )}
        </Box>
        <Box mb={4}>
          <Text
            as="label"
            display="block"
            mb={1}
            fontSize="sm"
            color={"#6d6d6d"}
          >
            What community do you serve?
          </Text>
          <MultiSelectButton
            options={options}
            value={selected}
            onChange={setSelected}
            size="sm"
            spacing={2}
          />
          {selected.length > 0 && (
            <Text mt={4} fontSize="sm" color="gray.600">
              Selected: {selected.join(", ")}
            </Text>
          )}
        </Box>
      </Dialog.Body>
      <Dialog.Footer justifyContent="space-between" p={"2rem"}>
        <Button
          bg="white"
          color="black"
          borderColor={"black"}
          variant="outline"
          size="md"
          width="45%"
          rounded={"0.5rem"}
          onClick={prevStep}
        >
          Back
        </Button>

        <Button
          bg="black"
          color="white"
          _hover={{ bg: "gray.700" }}
          size="md"
          width="45%"
          rounded={"0.5rem"}
          onClick={nextStep}
        >
          Next
        </Button>
      </Dialog.Footer>
    </Box>
  );
};
