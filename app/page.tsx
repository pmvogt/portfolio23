"use client";

import { useState } from "react";

import { Badge, Code, Container, Flex, Text } from "@radix-ui/themes";
import Window from "./components/window";
import { FigmaLogoIcon, HeartFilledIcon } from "@radix-ui/react-icons";

import ColorBar from "./components/colorbar";

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
              <Badge size="1" highContrast variant="surface" color="gray">
                <FigmaLogoIcon width="16" height="16" />
                100
                <HeartFilledIcon width="16" height="16" />
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
          <Text size="2">
            Designer that loves to <Code>code.</Code> Fan of sweating
            interaction details, automating the work of design teams, and
            building well-documented, beautiful, scaled design systems.
          </Text>
        </Flex>
      </Container>
    </Flex>
  );
}
