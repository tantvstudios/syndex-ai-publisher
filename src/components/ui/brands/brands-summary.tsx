import { Box, Flex } from "@chakra-ui/react";

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

  const formatNumber = (num: number) =>
    new Intl.NumberFormat("en-US").format(num);

  return (
    <div>
      <Flex direction={"row"} gap={"1rem"} mt={"1rem"}>
        {brandSummary.map((item) => (
          <Box
            key={item.title}
            h="10rem"
            w="16rem"
            bg={item.color}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            borderRadius="8px"
            boxShadow="md"
          >
            <Box fontSize="2xl" fontWeight="bold" mt="0.5rem">
              {formatNumber(item.value)}
            </Box>
            <Box fontSize="lg" fontWeight="light" mt="0.5rem">
              {item.title}
            </Box>
          </Box>
        ))}
      </Flex>
    </div>
  );
};

export default BrandsSummary;
