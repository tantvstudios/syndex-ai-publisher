"use client";
import {
  Box,
  createListCollection,
  Flex,
  FormatNumber,
  Portal,
  Select,
  Table,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { IoLink } from "react-icons/io5";
import AddBrand from "./add-brand/add-brand-button";

type BrandProps = {
  id: number;
  name: string;
  registrationDate: string;
  rssURL: string;
  followers: number;
  status: string;
};

interface BrandsTableProps {
  brands: BrandProps[];
}

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

const statusColors: Record<string, string> = {
  approved: "#96AA2E", // green
  pending: "#D99A2F", // amber
  rejected: "#C04A3A", // brick red
  inactive: "#6B7280", // gray
};

const frameworks = createListCollection({
  items: [
    { label: "Most Popular", value: "mostPopular" },
    { label: "Least Popular", value: "leastPopular" },
    { label: "Approved -> Rejected", value: "approvedRejected" },
    { label: "Rejected -> Approved", value: "rejectedApproved" },
  ],
});

const BrandsTable = ({ brands }: BrandsTableProps) => {
  return (
    <Box mt={"2rem"} p="2rem" borderRadius="20px" bg="white" boxShadow="sm">
      <Flex justify="space-between" align="center" mb="1rem">
        <Flex gap="1rem" align="center">
          <Text fontSize="xl" fontWeight="bold">
            My Brands
          </Text>

          <Select.Root collection={frameworks} size="sm" width="200px">
            <Select.Control>
              <Select.Trigger>
                <Select.ValueText placeholder="Select filter" />
              </Select.Trigger>
              <Select.IndicatorGroup>
                <Select.Indicator />
              </Select.IndicatorGroup>
            </Select.Control>
            <Portal>
              <Select.Positioner>
                <Select.Content>
                  {frameworks.items.map((framework) => (
                    <Select.Item item={framework} key={framework.value}>
                      {framework.label}
                      <Select.ItemIndicator />
                    </Select.Item>
                  ))}
                </Select.Content>
              </Select.Positioner>
            </Portal>
          </Select.Root>
        </Flex>
        <AddBrand />
      </Flex>

      <Table.Root size={"lg"} mt="1rem">
        <Table.Header>
          <Table.Row fontSize={"11px"}>
            <Table.ColumnHeader fontWeight="bold">Name</Table.ColumnHeader>
            <Table.ColumnHeader fontWeight="bold">
              Registration Date
            </Table.ColumnHeader>
            <Table.ColumnHeader fontWeight="bold">RSS URL</Table.ColumnHeader>
            <Table.ColumnHeader fontWeight="bold">Followers</Table.ColumnHeader>
            <Table.ColumnHeader fontWeight="bold">Status</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {brands.map((brand) => (
            <Table.Row key={brand.id}>
              <Table.Cell>{brand.name}</Table.Cell>
              <Table.Cell>{brand.registrationDate}</Table.Cell>
              <Table.Cell>
                <Link href={brand.rssURL}>
                  <IoLink color="#00f7ee" size={"2rem"} />
                </Link>
              </Table.Cell>
              <Table.Cell>
                <FormatNumber value={brand.followers} />
              </Table.Cell>
              <Table.Cell>
                <Text color={statusColors[brand.status] ?? "gray.500"}>
                  {capitalize(brand.status)}
                </Text>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Box>
  );
};
export default BrandsTable;
