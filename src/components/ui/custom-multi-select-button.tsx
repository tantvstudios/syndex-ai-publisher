import { Box, Button, HStack } from "@chakra-ui/react";
import { FaPlus, FaMinus } from "react-icons/fa";

interface MultiSelectButtonProps {
  options: string[];
  value?: string[];
  onChange?: (selected: string[]) => void;
  size?: "sm" | "md" | "lg";
  spacing?: number;
  maxSelections?: number;
}

interface value {
  label: string;
  value: any;
}

const MultiSelectButton = ({
  options = [],
  value = [],
  onChange,
  size = "md",
  maxSelections = Infinity,
}: MultiSelectButtonProps) => {
  const toggle = (option: string) => {
    const isSelected = value.includes(option);
    if (!isSelected && value.length >= maxSelections) {
      return; // Do not allow more selections
    }

    const newSelected = value.includes(option)
      ? value.filter((item) => item !== option)
      : [...value, option];
    onChange?.(newSelected);
  };

  return (
    <Box>
      <HStack wrap="wrap">
        {options.map((opt) => {
          const isSelected = value.includes(opt);
          const isDisabled =
            !isSelected &&
            maxSelections !== undefined &&
            value.length >= maxSelections;

          return (
            <Button
              key={opt}
              onClick={() => toggle(opt)}
              size={size}
              bg={isSelected ? "#00f7ee" : "white"}
              color={"black"}
              borderColor="black"
              borderWidth="1px"
              cursor={isDisabled ? "not-allowed" : "pointer"}
              opacity={isDisabled ? 0.6 : 1}
            >
              {isSelected ? <FaMinus /> : <FaPlus />}
              {opt}
            </Button>
          );
        })}
      </HStack>
    </Box>
  );
};

export default MultiSelectButton;
