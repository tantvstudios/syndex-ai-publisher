import { Box, Flex, FormatNumber } from "@chakra-ui/react";

type Brand = {
  id: number;
  pubId: string;
  rssFeedUrl: string;
  brandImageUrl: string;
  brandBio: string;
  brandName: string;
  reviewStatus: string;
  regDate: string;
  adminComments: string | null;
  adminComments2: string | null;
};

const BrandsSummary = ({ brands }: { brands: Brand[] }) => {
  const totalBrands = brands.length;
  const inReview = brands.filter((b) => b.reviewStatus === "Pending").length;
  const totalApproved = brands.filter(
    (b) => b.reviewStatus === "Approved"
  ).length;
  const totalRejected = brands.filter(
    (b) => b.reviewStatus === "Rejected"
  ).length;

  const brandSummary = [
    { title: "Total Brands", value: totalBrands, color: "#dce0fd" },
    { title: "In Review", value: inReview, color: "#e0e6c9" },
    { title: "Total Approved", value: totalApproved, color: "#c6f9fa" },
    { title: "Total Rejected", value: totalRejected, color: "#f9c6c6" },
  ];

  return (
    // Adjust the justification and spacing as needed
    <Flex
      direction={"row"}
      gap={"1rem"}
      mt={"1rem"}
      justify={"space-around"}
      // px={"1.5rem"}
    >
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
