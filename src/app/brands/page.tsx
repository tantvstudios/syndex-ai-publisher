import { Flex, Text } from "@chakra-ui/react";
import BrandsSummary from "@source/components/ui/brands/brands-summary";
import BrandsTable from "@source/components/ui/brands/brands-table";
const BrandsPage = () => {
  // Mock Data for Brands
  const brands = [
    {
      id: 1,
      name: "NYTimes",
      registrationDate: "2023-01-01",
      rssURL: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml",
      followers: 1200000,
      status: "approved",
    },
    {
      id: 2,
      name: "TechCrunch",
      registrationDate: "2023-02-10",
      rssURL: "https://techcrunch.com/feed/",
      followers: 850000,
      status: "approved",
    },
    {
      id: 3,
      name: "The Guardian – World News",
      registrationDate: "2023-03-05",
      rssURL: "https://www.theguardian.com/world/rss",
      followers: 530000,
      status: "pending",
    },
    {
      id: 4,
      name: "Hacker News",
      registrationDate: "2023-04-12",
      rssURL: "https://hnrss.org/frontpage",
      followers: 420000,
      status: "approved",
    },
    {
      id: 5,
      name: "ESPN",
      registrationDate: "2023-05-20",
      rssURL: "https://www.espn.com/espn/rss/news",
      followers: 1100000,
      status: "rejected",
    },
    {
      id: 6,
      name: "Mashable",
      registrationDate: "2023-06-15",
      rssURL: "https://mashable.com/feeds/rss/all",
      followers: 310000,
      status: "approved",
    },
    {
      id: 7,
      name: "Wired",
      registrationDate: "2023-07-01",
      rssURL: "https://www.wired.com/feed/rss",
      followers: 760000,
      status: "pending",
    },
    {
      id: 8,
      name: "BBC – Technology",
      registrationDate: "2023-08-01",
      rssURL: "http://feeds.bbci.co.uk/news/technology/rss.xml",
      followers: 950000,
      status: "approved",
    },
  ];

  return (
    <Flex direction={"column"} pl={"1rem"} pt={"0.5rem"}>
      <Text fontSize="2xl" fontWeight="bold">
        Brands
      </Text>
      <BrandsSummary
        totalBrands={10}
        inReview={5}
        totalApproved={3}
        totalFollowers={20000000}
      />
      <BrandsTable brands={brands} />
    </Flex>
  );
};

export default BrandsPage;
