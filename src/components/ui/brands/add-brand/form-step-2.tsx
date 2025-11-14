import { Box, Button, Dialog } from "@chakra-ui/react";

export const Step2 = ({
  prevStep,
  nextStep,
}: {
  prevStep: () => void;
  nextStep: () => void;
}) => (
  <Box p={0}>
    <Dialog.Header>STEP 2 (Step 2 of 2)</Dialog.Header>
    <Dialog.Body>{/* Form Controls for Brand Name and RSS Feed */}</Dialog.Body>
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
    {/* <Dialog.Footer justifyContent="center" p={"2rem"}>
      <Button
        bg="black"
        color="white"
        _hover={{ bg: "gray.700" }}
        size="md"
        width="75%"
        rounded={"0.5rem"}
        onClick={nextStep}
      >
        Next
      </Button>
    </Dialog.Footer> */}
  </Box>
);
