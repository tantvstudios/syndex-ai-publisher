import { Flex, Text } from "@chakra-ui/react";
import BrandsSummary from "@source/components/ui/brands/brands-summary";
import BrandsTable from "@source/components/ui/brands/brands-table";
const BrandsPage = () => {
  // Mock Data for Brands
  const brands = [
    {
      id: 121,
      pubId: "P5S528",
      rssFeedUrl: "https://www.secretswapp.com.ng/feed",
      brandImageUrl:
        "https://res.cloudinary.com/dykperm6m/image/upload/v1759096050/BrandLogos/gp0pthgluatwfaluggnw.png",
      brandBio:
        "This station looks into the socieyty and what makes it what it is. true story at its peak",
      brandName: "Maxela Space",
      reviewStatus: "Pending",
      regDate: "2025-07-07",
      adminComments: null,
      adminComments2: null,
    },
    {
      id: 122,
      pubId: "P5S529",
      rssFeedUrl: "https://www.techvibes.com/feed",
      brandImageUrl:
        "https://res.cloudinary.com/dykperm6m/image/upload/v1759096050/BrandLogos/gp0pthgluatwfaluggnw.png",
      brandBio: "Exploring the latest in tech innovations and gadgets.",
      brandName: "TechVibes",
      reviewStatus: "Approved",
      regDate: "2025-06-15",
      adminComments: "Looks great for collaboration",
      adminComments2: null,
    },
    {
      id: 123,
      pubId: "P5S530",
      rssFeedUrl: "https://www.foodieheaven.com/feed",
      brandImageUrl:
        "https://res.cloudinary.com/dykperm6m/image/upload/v1759096050/BrandLogos/gp0pthgluatwfaluggnw.png",
      brandBio: "All about culinary delights and foodie adventures.",
      brandName: "Foodie Heaven",
      reviewStatus: "Rejected",
      regDate: "2025-05-20",
      adminComments: "Feed is inactive",
      adminComments2: "Please update your feed",
    },
    {
      id: 124,
      pubId: "P5S531",
      rssFeedUrl: "https://www.fashionforward.com/feed",
      brandImageUrl:
        "https://res.cloudinary.com/dykperm6m/image/upload/v1759096050/BrandLogos/gp0pthgluatwfaluggnw.png",
      brandBio: "Trends, styles, and everything fashion-related.",
      brandName: "Fashion Forward",
      reviewStatus: "Pending",
      regDate: "2025-07-01",
      adminComments: null,
      adminComments2: null,
    },
    {
      id: 125,
      pubId: "P5S532",
      rssFeedUrl: "https://www.sportsmania.com/feed",
      brandImageUrl:
        "https://res.cloudinary.com/dykperm6m/image/upload/v1759096050/BrandLogos/gp0pthgluatwfaluggnw.png",
      brandBio: "Latest news, scores, and commentary on sports.",
      brandName: "Sports Mania",
      reviewStatus: "Approved",
      regDate: "2025-06-25",
      adminComments: "Excellent content quality",
      adminComments2: "Consider expanding video coverage",
    },
    {
      id: 126,
      pubId: "P5S533",
      rssFeedUrl: "https://www.travelogue.com/feed",
      brandImageUrl:
        "https://res.cloudinary.com/dykperm6m/image/upload/v1759096050/BrandLogos/gp0pthgluatwfaluggnw.png",
      brandBio:
        "Capturing the essence of travel and adventure around the globe.",
      brandName: "Travelogue",
      reviewStatus: "Approved",
      regDate: "2025-07-10",
      adminComments: "Engaging content",
      adminComments2: null,
    },
    {
      id: 127,
      pubId: "P5S534",
      rssFeedUrl: "https://www.healthhub.com/feed",
      brandImageUrl:
        "https://res.cloudinary.com/dykperm6m/image/upload/v1759096050/BrandLogos/gp0pthgluatwfaluggnw.png",
      brandBio: "Tips, news, and guides for a healthier lifestyle.",
      brandName: "Health Hub",
      reviewStatus: "Pending",
      regDate: "2025-07-12",
      adminComments: null,
      adminComments2: null,
    },
  ];

  return (
    <Flex direction={"column"} p={"2rem"}>
      <Text fontSize="2xl" fontWeight="bold">
        Brands
      </Text>
      <BrandsSummary brands={brands} />
      <BrandsTable brands={brands} />
    </Flex>
  );
};

export default BrandsPage;
