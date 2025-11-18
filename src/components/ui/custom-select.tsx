"use client";

import { createListCollection, Portal, Select } from "@chakra-ui/react";

export type CustomSelectOption = {
  label: string;
  value: string;
};

interface CustomSelectProps {
  options: CustomSelectOption[];
  value?: string | null;
  placeholder?: string;
  width?: string | number;
  size?: "sm" | "md" | "lg";
  onChange?: (value: string) => void;
}

export default function CustomSelect({
  options,
  value,
  placeholder = "Select an option",
  width = "200px",
  size = "sm",
  onChange,
}: CustomSelectProps) {
  const collection = createListCollection({
    items: options,
  });

  return (
    <Select.Root
      collection={collection}
      width={width}
      size={size}
      value={value ? [value] : []}
      onValueChange={(details) => onChange?.(details.value[0])}
    >
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder={placeholder} />
        </Select.Trigger>
        <Select.IndicatorGroup>
          <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>

      <Portal>
        <Select.Positioner>
          <Select.Content>
            {collection.items.map((option) => (
              <Select.Item item={option} key={option.value}>
                {option.label}
                <Select.ItemIndicator />
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  );
}
