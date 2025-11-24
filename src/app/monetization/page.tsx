"use client";

import { Box, Flex, Text } from "@chakra-ui/react";
import PublisherGrid from "@/components/monetization/PublisherGrid";
import Filters from "@/components/monetization/Filters";

export default function MonetizationPage() {
  return (
    <Box w="100%" p={6}>
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        Monetization
      </Text>

      <Filters />

      <PublisherGrid />
    </Box>
  );
}
export default function MonetizationPage() {
    return <div>Monetization</div>;
  }
  
