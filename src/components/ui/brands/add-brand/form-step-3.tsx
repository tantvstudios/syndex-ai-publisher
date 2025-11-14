import { Box, Button, Dialog, Text } from "@chakra-ui/react";
import MultiSelectButton from "../../custom-multi-select-button";
import { useState } from "react";

const options = [
  "Startup Splotlight",
  "Lifestyle & Culture",
  "Business & Tech",
  "Tech & Innovation",
  "Fashion & Beauty",
  "Arts & Entertainment",
];

export const Step3 = ({
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
        <Box mb={4}>
          <Text
            as="label"
            display="block"
            mb={2}
            fontSize="sm"
            color={"#6d6d6d"}
          >
            What industry do you belong to?
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
