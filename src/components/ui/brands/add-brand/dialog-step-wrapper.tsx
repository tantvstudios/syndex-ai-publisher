import { Box, Dialog, Button } from "@chakra-ui/react";
import { ReactNode } from "react";

interface DialogStepWrapperProps {
  title?: string;
  children: ReactNode;
  onBack?: () => void;
  onNext?: () => void;
  nextLabel?: string;
  showBack?: boolean;
}

export const DialogStepWrapper = ({
  title = "Create New Brand",
  children,
  onBack,
  onNext,
  nextLabel = "Next",
  showBack = true,
}: DialogStepWrapperProps) => {
  return (
    <Box p={0}>
      <Dialog.Header
        flex="column"
        p={"2rem"}
        justifyContent="center"
        fontWeight="extrabold"
        fontSize={"2rem"}
      >
        {title}
      </Dialog.Header>
      <Dialog.Body>{children}</Dialog.Body>
      <Dialog.Footer
        justifyContent={showBack ? "space-between" : "center"}
        p={"2rem"}
      >
        {showBack && onBack && (
          <Button
            bg="white"
            color="black"
            borderColor={"black"}
            variant="outline"
            size="md"
            width={showBack ? "45%" : "75%"}
            rounded={"0.5rem"}
            onClick={onBack}
          >
            Back
          </Button>
        )}
        {onNext && (
          <Button
            bg="black"
            color="white"
            _hover={{ bg: "gray.700" }}
            size="md"
            width={showBack ? "45%" : "75%"}
            rounded={"0.5rem"}
            onClick={onNext}
          >
            {nextLabel}
          </Button>
        )}
      </Dialog.Footer>
    </Box>
  );
};
