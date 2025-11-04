"use client";
import { Link as ChakraLink, Flex, Icon } from "@chakra-ui/react";
import { toaster } from "@source/components/ui/toaster";
import { SIDEBAR_ROUTES } from "@source/data/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LeftSidebar = () => {
  const pathname = usePathname();

  return (
    <Flex
      direction={{ base: "row", lg: "column" }}
      p="2rem 1rem"
      background="white"
      align={"left"}
      rounded={{ base: "none", lg: "20px" }}
      justify="space-around"
      w={{ base: "fit-content", lg: "14rem" }}
      minW={{ lg: "10rem" }}
      h={{ lg: "65dvh" }}
      zIndex="max"
    >
      {SIDEBAR_ROUTES.map(({ name, path, icon }, index) => {
        const PassedIcon = icon;
        return (
          <ChakraLink
            key={index}
            textDecor="none"
            _focus={{ outline: "none" }}
            _active={{ outline: "none" }}
            asChild
            display="flex"
            alignItems="center"
            gap="0.5rem"
            color="black"
          >
            <Link
              href={path.includes("post") ? "#" : path}
              onClick={() => {
                if (path.includes("post")) {
                  toaster.info({
                    description: "Coming soon",
                    closable: true,
                  });
                }
              }}
            >
              <Icon
                as="svg"
                viewBox={PassedIcon.viewBox}
                boxSize={{ base: 6, lg: 7 }}
                fill="black"
              >
                <path d={PassedIcon.d} />
              </Icon>

              {name}
            </Link>
          </ChakraLink>
        );
      })}
    </Flex>
  );
};

export { LeftSidebar };
