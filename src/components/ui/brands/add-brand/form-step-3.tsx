import { Box, Button, Dialog } from "@chakra-ui/react";

export const Step3 = ({
  prevStep,
  handleClose,
}: {
  prevStep: () => void;
  handleClose: () => void;
}) => (
  <Box p={0}>
    <Dialog.Header>STEP 3 (Step 3 of 3)</Dialog.Header>
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
        onClick={handleClose}
      >
        Create Brand
      </Button>
    </Dialog.Footer>
  </Box>
);
