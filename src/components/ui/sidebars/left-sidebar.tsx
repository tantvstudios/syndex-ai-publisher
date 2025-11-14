"use client";
import {
  Box,
  Link as ChakraLink,
  Flex,
  Icon,
  IconButton,
  Drawer,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { toaster } from "@source/components/ui/toaster";
import { SIDEBAR_ROUTES } from "@source/data/sidebar";
import Link from "next/link";

const SidebarList = ({ onClose }: { onClose?: () => void }) => (
  <>
    {SIDEBAR_ROUTES.map(({ name, path, icon }, index) => {
      const { viewBox, d } = icon || {};
      return (
        <ChakraLink
          key={index}
          asChild
          textDecor="none"
          display="flex"
          alignItems="center"
          gap="0.5rem"
          color="syndex.text.dark"
          mb={4}
        >
          <Link
            href={path.includes("post") ? "#" : path}
            onClick={() => {
              onClose?.();
              if (path.includes("post")) {
                toaster.info({ description: "Coming soon", closable: true });
              }
            }}
          >
            <Flex align="center" gap="0.5rem">
              <Icon as="svg" viewBox={viewBox} boxSize={6} fill="currentColor">
                <path d={d} />
              </Icon>
              <Box as="span">{name}</Box>
            </Flex>
          </Link>
        </ChakraLink>
      );
    })}
  </>
);

const SidebarContent = ({
  onClose,
  isMobile,
}: {
  onClose?: () => void;
  isMobile?: boolean;
}) => (
  <Box
    p="1.5rem"
    bg={isMobile ? "white" : "syndex.background.secondary"}
    w="14rem"
    minH="30rem"
    maxH="calc(100vh - 2rem)" /* keep the sidebar from stretching to full viewport height */
    overflowY="auto" /* allow internal scroll if content is taller */
    borderRadius="12px"
  >
    {onClose && (
      <IconButton
        aria-label="Close menu"
        onClick={onClose}
        mb={4}
        display={{ base: "inline-flex", lg: "none" }}
      >
        <CloseIcon />
      </IconButton>
    )}
    <SidebarList onClose={onClose} />
  </Box>
);

export const LeftSidebar = () => {
  const { open, onOpen, onClose } = useDisclosure();

  return (
    <>
      {/* Mobile Devices Hamburger */}
      <IconButton
        aria-label="Open menu"
        pos="fixed"
        top="1rem"
        left="1rem"
        zIndex="overlay"
        onClick={onOpen}
        display={{ base: "inline-flex", lg: "none" }}
      >
        <HamburgerIcon />
      </IconButton>

      {/* Mobile Devices Sidebar */}
      <Drawer.Root
        open={open}
        onOpenChange={(e) => (e.open ? onOpen() : onClose())}
        placement="start"
      >
        <Drawer.Backdrop />

        <Drawer.Positioner>
          <Drawer.Content w="14rem" p={0} bg="white">
            <Drawer.Body p={0}>
              <SidebarContent onClose={onClose} isMobile />
            </Drawer.Body>
          </Drawer.Content>
        </Drawer.Positioner>
      </Drawer.Root>

      {/* Lg Sidebar */}
      <Box
        display={{ base: "none", lg: "block" }}
        position="sticky"
        top="1rem" /* leave 1rem space from top */
        alignSelf="flex-start"
        w="14rem"
        bg="transparent" /* outer container transparent so inner card shows bg and rounded corners */
        rounded="lg"
        zIndex="sticky"
        p="0.5rem"
      >
        <SidebarContent />
      </Box>
    </>
  );
};
