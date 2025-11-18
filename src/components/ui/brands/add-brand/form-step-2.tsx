import { Box, Text } from "@chakra-ui/react";
import MultiSelectButton from "../../custom-multi-select-button";
import { StepContext } from "../../custom-multistep-dialog";
import { BrandFormData } from "./add-brand-button";
import { DialogStepWrapper } from "./dialog-step-wrapper";

const options = [
  "Latino/Hispanic",
  "Asian American",
  "Native American",
  "Black/African American",
];

export const Step2 = (ctx: StepContext<BrandFormData>) => {
  const { setValue, watch, prevStep, nextStep } = ctx;

  // Watch form values to keep them in sync
  const outletSelected = watch("isLocalOutlet") || "";
  const community = watch("communityServed") || [];

  // Update form when selections change
  const handleOutletChange = (values: string[]) => {
    setValue("isLocalOutlet", values[0] || "", { shouldValidate: true });
  };

  const handleCommunityChange = (values: string[]) => {
    setValue("communityServed", values, { shouldValidate: true });
  };

  return (
    <DialogStepWrapper onBack={prevStep} onNext={nextStep}>
      <Box mb={12}>
        <Text as="label" display="block" mb={1} fontSize="sm" color={"#6d6d6d"}>
          Are you a local news outlet?
        </Text>
        <MultiSelectButton
          options={["Yes", "No"]}
          value={outletSelected ? [outletSelected] : []}
          onChange={handleOutletChange}
          size="sm"
          spacing={2}
          maxSelections={1}
        />
        {outletSelected && (
          <Text mt={4} fontSize="sm" color="gray.600">
            Selected: {outletSelected}
          </Text>
        )}
      </Box>
      <Box mb={4}>
        <Text as="label" display="block" mb={1} fontSize="sm" color={"#6d6d6d"}>
          What community do you serve?
        </Text>
        <MultiSelectButton
          options={options}
          value={community}
          onChange={handleCommunityChange}
          size="sm"
          spacing={2}
        />
        {community.length > 0 && (
          <Text mt={4} fontSize="sm" color="gray.600">
            Selected: {community.join(", ")}
          </Text>
        )}
      </Box>
    </DialogStepWrapper>
  );
};
