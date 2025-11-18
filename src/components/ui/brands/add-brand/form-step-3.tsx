import { Box, Text } from "@chakra-ui/react";
import MultiSelectButton from "../../custom-multi-select-button";
import { BrandFormData } from "./add-brand-button";
import { StepContext } from "../../custom-multistep-dialog";
import { DialogStepWrapper } from "./DialogStepWrapper";

const options = [
  "Startup Spotlight",
  "Lifestyle & Culture",
  "Business & Tech",
  "Tech & Innovation",
  "Fashion & Beauty",
  "Arts & Entertainment",
];

export const Step3 = (ctx: StepContext<BrandFormData>) => {
  const { setValue, watch, prevStep, nextStep } = ctx;
  const selected = watch("topicsCovered") || [];

  const handleChange = (values: string[]) => {
    setValue("topicsCovered", values, { shouldValidate: true });
  };

  return (
    <DialogStepWrapper onBack={prevStep} onNext={nextStep}>
      <Box mb={4}>
        <Text as="label" display="block" mb={2} fontSize="sm" color={"#6d6d6d"}>
          What industry do you belong to?
        </Text>
        <MultiSelectButton
          options={options}
          value={selected}
          onChange={handleChange}
          size="sm"
          spacing={2}
        />
        {selected.length > 0 && (
          <Text mt={4} fontSize="sm" color="gray.600">
            Selected: {selected.join(", ")}
          </Text>
        )}
      </Box>
    </DialogStepWrapper>
  );
};
