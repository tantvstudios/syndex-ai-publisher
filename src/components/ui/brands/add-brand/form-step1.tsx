import { Dialog, Text, Input, Button, Box } from "@chakra-ui/react";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { useState } from "react";
import { Image } from "@chakra-ui/react";

interface Step1Props {
  nextStep: () => void;
  register: UseFormRegister<BrandFormData>;
  errors: FieldErrors<BrandFormData>;
}

interface BrandFormData {
  brandName: string;
  rssFeed: string;
  profilePic: FileList | null; // For the file input
}

export const Step1 = ({ nextStep, register, errors }: Step1Props) => {
  const [preview, setPreview] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string>("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

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
            borderColor={errors.brandName ? "red.500" : "black"}
            borderWidth={"1px"}
            borderStyle={"solid"}
            placeholder="Brand Name"
            {...register("brandName", {
              required: "Brand name is required",
              minLength: {
                value: 2,
                message: "Brand name must be at least 2 characters",
              },
            })}
          />
          {errors.brandName && (
            <Text color="red.500" fontSize="xs" mt={1}>
              {errors.brandName.message}
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
            Connect Your RSS Feed
            <Text as="span" color="red.500">
              *
            </Text>
          </Text>
          <Input
            w={"full"}
            h={"2rem"}
            rounded={"1rem"}
            borderColor={errors.rssFeed ? "red.500" : "black"}
            borderWidth={"1px"}
            borderStyle={"solid"}
            placeholder="RSS Feed URL"
            {...register("rssFeed", {
              required: "RSS Feed URL is required",
              pattern: {
                value: /^https?:\/\/.+/,
                message: "Please enter a valid URL",
              },
            })}
          />
          {errors.rssFeed && (
            <Text color="red.500" fontSize="xs" mt={1}>
              {errors.rssFeed.message}
            </Text>
          )}
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
            position="relative"
            cursor="pointer"
            _hover={{ bg: "blue.100" }}
          >
            <Input
              type="file"
              accept=".jpg, .jpeg, .png"
              position="absolute"
              top={0}
              left={0}
              width="100%"
              height="100%"
              opacity={0}
              cursor="pointer"
              {...register("profilePic")}
              onChange={(e) => {
                register("profilePic").onChange(e);
                handleFileChange(e);
              }}
            />
            {preview ? (
              <Box>
                <Image
                  src={preview}
                  alt="Preview"
                  maxH="150px"
                  maxW="150px"
                  mx="auto"
                  mb={2}
                  borderRadius="md"
                />
                <Text fontSize="sm" color="gray.700" fontWeight="medium">
                  {fileName}
                </Text>
              </Box>
            ) : (
              <>
                <Text fontSize="2xl">↑</Text>
                <Text fontSize="sm" color="gray.600">
                  Upload .jpg, .png
                </Text>
              </>
            )}
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
