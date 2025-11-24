import { Box, Text, Flex, Button, Badge } from "@chakra-ui/react";

export default function PublisherCard({ item }) {
  return (
    <Box
      borderWidth="1px"
      borderRadius="md"
      p={4}
      bg="white"
      shadow="sm"
      _hover={{ shadow: "md" }}
    >
      <Text fontSize="lg" fontWeight="bold">
        {item.name}
      </Text>

      <Text fontSize="sm" mt={2} color="gray.600">
        {item.description}
      </Text>

      <Flex justify="space-between" mt={4}>
        <Badge colorScheme="green">⭐ {item.rating}</Badge>
        <Badge colorScheme="purple">{item.orders} orders</Badge>
      </Flex>

      <Button mt={4} w="100%" colorScheme="blue">
        Buy Inventory From ${item.price}
      </Button>
    </Box>
  );
}
