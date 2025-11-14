import { Box, Flex, FormatNumber } from "@chakra-ui/react";

const BrandsSummary = ({
  totalBrands = 0,
  inReview = 0,
  totalApproved = 0,
  totalFollowers = 0,
}: {
  totalBrands?: number;
  inReview?: number;
  totalApproved?: number;
  totalFollowers?: number;
}) => {
  const brandSummary = [
    { title: "Total Brands", value: totalBrands, color: "#dce0fd" },
    { title: "In Review", value: inReview, color: "#e0e6c9" },
    { title: "Total Approved", value: totalApproved, color: "#c6f9fa" },
    { title: "Total Followers", value: totalFollowers, color: "#c6f9fa" },
  ];

  return (
    <Flex direction={"row"} gap={"1rem"} mt={"1rem"}>
      {brandSummary.map((item) => (
        <Box
          key={item.title}
          h="6rem"
          w="16rem"
          p="3.5rem"
          bg={item.color}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          borderRadius="2rem"
          boxShadow="lg"
        >
          <Box fontSize="3xl" fontWeight="extrabold" mt="0.5rem">
            <FormatNumber value={item.value} />
          </Box>
          <Box fontSize="lg" fontWeight="extralight" mt="0.5rem">
            {item.title}
          </Box>
        </Box>
      ))}
    </Flex>
  );
};

export default BrandsSummary;
