"use client";
import { Box, Flex, Table, Text, IconButton } from "@chakra-ui/react";

import { IoLink, IoCheckmark } from "react-icons/io5";
import { toaster } from "@source/components/ui/toaster";
import AddBrand from "./add-brand/add-brand-button";
import { useState } from "react";
import CustomSelect from "../custom-select";
import Image from "next/image";

type BrandProps = {
  id: number;
  brandImageUrl: string;
  brandName: string;
  regDate: string;
  rssFeedUrl: string;
  reviewStatus: string;
};

interface BrandsTableProps {
  brands: BrandProps[];
}

const statusColors: Record<string, string> = {
  Approved: "#96AA2E", // green
  Pending: "#D99A2F", // amber
  Rejected: "#C04A3A", // brick red
};

const options = [
  { label: "Approved", value: "Approved" },
  { label: "Rejected", value: "Rejected" },
  { label: "Pending", value: "Pending" },
];

const BrandsTable = ({ brands }: BrandsTableProps) => {
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);

  const handleCopy = async (text: string, brandId: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(brandId);
      toaster.success({
        title: "Copied!",
        description: "RSS URL copied to clipboard",
      });
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      toaster.error({
        title: "Failed to copy",
        description: "Could not copy to clipboard",
      });
    }
  };

  return (
    <Box mt={"2rem"} p="2rem" borderRadius="20px" bg="white" boxShadow="sm">
      <Flex justify="space-between" align="center" mb="1rem">
        <Flex gap="1rem" align="center">
          <Text fontSize="xl" fontWeight="bold">
            My Brands
          </Text>
          <CustomSelect
            options={options}
            placeholder="Select filter"
            value={selectedStatus}
            onChange={(val) => setSelectedStatus(val)}
          />
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
            <Table.ColumnHeader fontWeight="bold">Status</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {brands.map((brand) => (
            <Table.Row key={brand.id}>
              <Table.Cell>
                <Flex align="center" gap="0.5rem">
                  <Image
                    src={brand.brandImageUrl}
                    alt={brand.brandName}
                    width={20}
                    height={20}
                    className="rounded-full"
                  />
                  {brand.brandName}
                </Flex>
              </Table.Cell>
              <Table.Cell>{brand.regDate}</Table.Cell>
              <Table.Cell>
                <Flex align="center" gap="0.5rem">
                  <IconButton
                    aria-label="Copy RSS URL"
                    size={"lg"}
                    variant="ghost"
                    onClick={() => handleCopy(brand.rssFeedUrl, brand.id)}
                  >
                    {copiedId === brand.id ? (
                      <IoCheckmark color="#96AA2E" size="1.5rem" />
                    ) : (
                      <IoLink color="#00f7ee" size="1.5rem" />
                    )}
                  </IconButton>
                </Flex>
              </Table.Cell>
              <Table.Cell>
                <Text color={statusColors[brand.reviewStatus] ?? "gray.500"}>
                  {brand.reviewStatus}
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
