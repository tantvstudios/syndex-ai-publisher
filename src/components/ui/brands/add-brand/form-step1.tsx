import { Dialog, Text, Input, Button, Box } from "@chakra-ui/react";

export const Step1 = ({ nextStep }: { nextStep: () => void }) => {
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
            mb={1}
            fontSize="sm"
            color={"#6d6d6d"}
          >
            Enter Brand Name
            <Text as="span" color="red.500">
              *
            </Text>
          </Text>
          <Input
            w={"full"}
            h={"2rem"}
            rounded={"1rem"}
            borderColor={"black"}
            borderWidth={"1px"}
            borderStyle={"solid"}
            placeholder="Brand Name"
            required
          />
        </Box>

        <Box mb={4}>
          <Text
            as="label"
            display="block"
            mb={1}
            fontSize="sm"
            color={"#6d6d6d"}
          >
            Connect Your RSS Feed
            <Text as="span" color="red.500">
              *
            </Text>
          </Text>
          <Input
            w={"full"}
            h={"2rem"}
            rounded={"1rem"}
            borderColor={"black"}
            borderWidth={"1px"}
            borderStyle={"solid"}
            placeholder="RSS Feed URL"
            required
          />
        </Box>

        <Box mb={8}>
          <Text as="label" display="block" mb={2} fontSize="sm">
            Upload Profile Pic
          </Text>
          <Box
            border="2px dashed"
            borderColor="blue.100" // Styled to match the image's light blue border
            bg="blue.50"
            borderRadius="md"
            p={6}
            textAlign="center"
          >
            <Text fontSize="2xl">↑</Text>
            <Text fontSize="sm" color="gray.600">
              Upload .jpg, .png
            </Text>
          </Box>
        </Box>
      </Dialog.Body>

      <Dialog.Footer justifyContent="center" p={"2rem"}>
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
      </Dialog.Footer>
    </Box>
  );
};
