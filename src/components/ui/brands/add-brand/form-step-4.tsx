import { Box, Text } from "@chakra-ui/react";
import MultiSelectButton from "../../custom-multi-select-button";
import { StepContext } from "../../custom-multistep-dialog";
import { BrandFormData } from "./add-brand-button";
import { DialogStepWrapper } from "./dialog-step-wrapper";

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

export const Step4 = (ctx: StepContext<BrandFormData>) => {
  const { setValue, watch, prevStep, submit } = ctx;
  const regions = watch("regions") || [];

  // Split stored regions back into northeast/southeast for display
  const northSelected = regions.filter((r) => northeastOptions.includes(r));
  const southSelected = regions.filter((r) => southeastOptions.includes(r));

  const handleNorthChange = (values: string[]) => {
    const newRegions = [...southSelected, ...values];
    setValue("regions", newRegions, { shouldValidate: true });
  };

  const handleSouthChange = (values: string[]) => {
    const newRegions = [...northSelected, ...values];
    setValue("regions", newRegions, { shouldValidate: true });
  };

  return (
    <DialogStepWrapper
      onBack={prevStep}
      onNext={submit}
      nextLabel="Create Brand"
    >
      <Box mb={4}>
        <Text as="label" display="block" mb={2} fontSize="sm" color={"#6d6d6d"}>
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
            onChange={handleNorthChange}
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
            onChange={handleSouthChange}
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
    </DialogStepWrapper>
  );
};
