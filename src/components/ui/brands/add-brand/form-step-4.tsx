import { Box, Button, Dialog, Text } from "@chakra-ui/react";
import { useState } from "react";
import MultiSelectButton from "../../custom-multi-select-button";

const northeastOptions = [
  "Connecticut (CT)",
  "Delaware (DE)",
  "District of Columbia (DC)",
  "Maine (ME)",
  "Maryland (MD)",
  "Massachusetts (MA)",
  "New Hampshire (NH)",
  "New Jersey (NJ)",
  "New York (NY)",
  "Pennsylvania (PA)",
  "Rhode Island (RI)",
  "Vermont (VT)",
  "West Virginia (WV)",
];

const southeastOptions = [
  "Alabama (AL)",
  "Arkansas (AR)",
  "District of Columbia (DC)", // Duplicate but included as shown in figma
  "Florida (FL)",
  "Georgia (GA)",
  "Kentucky (KY)",
  "Louisiana (LA)",
  "Mississippi (MS)",
  "North Carolina (NC)",
  "South Carolina (SC)",
  "Tennessee (TN)",
  "Virginia (VA)",
];

export const Step4 = ({
  prevStep,
  handleClose,
}: {
  prevStep: () => void;
  handleClose: () => void;
}) => {
  const [northSelected, setNorthSelected] = useState<string[]>([]);
  const [southSelected, setSouthSelected] = useState<string[]>([]);
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
            What region do you belong to?
          </Text>
          <Box mb={4}>
            <Text
              as="label"
              display="block"
              mb={1}
              fontWeight={"bold"}
              fontSize="sm"
            >
              Northeast
            </Text>
            <MultiSelectButton
              options={northeastOptions}
              value={northSelected}
              onChange={setNorthSelected}
              size="sm"
              spacing={2}
            />
            {northSelected.length > 0 && (
              <Text mt={4} fontSize="sm" color="gray.600">
                Selected: {northSelected.join(", ")}
              </Text>
            )}
          </Box>

          <Box mb={4}>
            <Text
              as="label"
              display="block"
              mb={1}
              fontWeight={"bold"}
              fontSize="sm"
            >
              Southeast
            </Text>
            <MultiSelectButton
              options={southeastOptions}
              value={southSelected}
              onChange={setSouthSelected}
              size="sm"
              spacing={2}
            />
            {southSelected.length > 0 && (
              <Text mt={4} fontSize="sm" color="gray.600">
                Selected: {southSelected.join(", ")}
              </Text>
            )}
          </Box>
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
          onClick={handleClose}
        >
          Create Brand
        </Button>
      </Dialog.Footer>
    </Box>
  );
};
