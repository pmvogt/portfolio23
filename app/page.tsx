"use client";

import { useState } from "react";

import {
  Badge,
  Code,
  Container,
  Heading,
  Flex,
  Text,
  Separator,
  Box,
} from "@radix-ui/themes";
import Window from "./components/window";
import { FigmaLogoIcon } from "@radix-ui/react-icons";

import ColorBar from "./components/colorbar";
// import NavToolbar from "./components/navtoolbar";

export default function Home() {
  const [density, setDensity] = useState<"1" | "2" | "3" | "4">("1");

  return (
    <Flex
      height="100%"
      pb={{ initial: "0", md: "9" }}
      px={{ initial: "0", md: "4" }}
    >
      <Container size={density}>
        <Flex direction="column" gap="4" width="100%">
          <Window density={density} onDensityChange={setDensity} />

          <Text size="2">
            Designer that loves to <Code>code</Code>. Focused on sweating
            interaction details, supercharging the work of design teams, and
            building beautiful, well-documented design systems.
          </Text>

          <Flex
            justify={{ initial: "center", md: "between" }}
            align="center"
            width="100%"
          >
            <Flex
              display={{
                initial: "none",
                md: "flex",
              }}
            >
              <Badge highContrast variant="surface" color="gray">
                <FigmaLogoIcon width="16" height="16" />
                100
              </Badge>
            </Flex>

            <Flex
              display={{
                initial: "none",
                md: "flex",
              }}
            >
              <ColorBar />
            </Flex>
          </Flex>
        </Flex>

        <Heading weight="light" mt="9" as="h2" size="3">
          Experience
        </Heading>

        <Box pb="6" width="100%">
          <Flex mt="5" justify="between" width="100%">
            <Text as="p" size="2">
              USAA
            </Text>
          </Flex>

          <Flex justify="between" mt="1">
            <Text as="p" size="2" style={{ color: "var(--gray-10)" }}>
              Lead Designer, Design Systems
            </Text>
            <Text as="p" size="2" style={{ color: "var(--gray-10)" }}>
              2022-2023
            </Text>
          </Flex>
          <Flex mt="1" justify="between" width="100%">
            <Text as="p" size="2" style={{ color: "var(--gray-10)" }}>
              Sr Designer, Design Technologist
            </Text>
            <Text as="p" size="2" style={{ color: "var(--gray-10)" }}>
              2019-2022
            </Text>
          </Flex>

          <Separator size="4" my="3" />

          <Flex mt="2" justify="between" width="100%">
            <Text as="p" size="2">
              Stellar Elements
            </Text>
          </Flex>

          <Flex justify="between" mt="1">
            <Text as="p" size="2" style={{ color: "var(--gray-10)" }}>
              Design Technologist
            </Text>
            <Text as="p" size="2" style={{ color: "var(--gray-10)" }}>
              2017-2019
            </Text>
          </Flex>

          <Separator size="4" my="3" />

          <Flex mt="2" justify="between" width="100%">
            <Text as="p" size="2">
              Lightcast
            </Text>
          </Flex>

          <Flex justify="between" mt="1">
            <Text as="p" size="2" style={{ color: "var(--gray-10)" }}>
              Product Designer
            </Text>
            <Text as="p" size="2" style={{ color: "var(--gray-10)" }}>
              2016-2017
            </Text>
          </Flex>

          <Separator size="4" my="3" />

          <Flex mt="2" justify="between" width="100%">
            <Text as="p" size="2">
              Pigeonly (YC W15)
            </Text>
          </Flex>

          <Flex justify="between" mt="1">
            <Text as="p" size="2" style={{ color: "var(--gray-10)" }}>
              Sr Designer
            </Text>
            <Text as="p" size="2" style={{ color: "var(--gray-10)" }}>
              2015-2016
            </Text>
          </Flex>

          <Separator size="4" my="3" />

          <Flex mt="2" justify="between" width="100%">
            <Text as="p" size="2">
              Munzee
            </Text>
          </Flex>

          <Flex justify="between" mt="1">
            <Text as="p" size="2" style={{ color: "var(--gray-10)" }}>
              Designer
            </Text>
            <Text as="p" size="2" style={{ color: "var(--gray-10)" }}>
              2014-2015
            </Text>
          </Flex>

          <Separator size="4" my="3" />

          <Flex mt="2" justify="between" width="100%">
            <Text as="p" size="2">
              Mark Cuban Companies
            </Text>
          </Flex>

          <Flex justify="between" mt="1">
            <Text as="p" size="2" style={{ color: "var(--gray-10)" }}>
              Designer
            </Text>
            <Text as="p" size="2" style={{ color: "var(--gray-10)" }}>
              2012-2014
            </Text>
          </Flex>
        </Box>
        {/* <NavToolbar /> */}
      </Container>
    </Flex>
  );
}
