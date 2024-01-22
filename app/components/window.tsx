"use client";
import { Badge, Box, Flex, Text } from "@radix-ui/themes";

import Spline from "@splinetool/react-spline";
import { FigmaLogoIcon, HeartFilledIcon } from "@radix-ui/react-icons";

import ColorBar from "./colorbar";

export default function Window() {
  return (
    <Flex direction="column" gap="3" width="100%">
      <Flex pt="8" align="end" justify="between">
        <Flex direction="column">
          <Text style={{ color: "var(--accent-a12)" }} size="3" weight="bold">
            Peter Vogt
          </Text>
        </Flex>
        <Flex>
          <Text
            style={{
              color: "var(--neutral-a09)",
            }}
            size="2"
          >
            Design Engineer
          </Text>
        </Flex>
      </Flex>
      <Spline scene="https://prod.spline.design/ozb1e9hCLqo73g6G/scene.splinecode" />
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
    </Flex>
  );
}
