"use client";
import { useState } from "react";
import {
  Badge,
  Container,
  Flex,
  Text,
  DropdownMenu,
  IconButton,
} from "@radix-ui/themes";

import Spline from "@splinetool/react-spline";
import {
  CaretDownIcon,
  ColumnSpacingIcon,
  FigmaLogoIcon,
  HeartFilledIcon,
} from "@radix-ui/react-icons";

import ColorBar from "./colorbar";

export default function Window() {
  const [density, setDensity] = useState("1");

  const handleDensityChange = (newDensity) => {
    setDensity(newDensity);
  };

  return (
    <Container size={density} height="100%" width="100%" px="3">
      <Flex direction="column" gap="3" width="100%">
        <Flex pt="6" align="end" justify="between">
          <Flex direction="column">
            <Text style={{ color: "var(--accent-a12)" }} size="3" weight="bold">
              Peter Vogt
            </Text>
            <Text
              style={{
                color: "var(--gray-10)",
              }}
              size="2"
            >
              Design Engineer
            </Text>
          </Flex>
          <Flex>
            <DropdownMenu.Root>
              <DropdownMenu.Trigger>
                <IconButton variant="surface" highContrast>
                  <ColumnSpacingIcon />
                </IconButton>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content size="1">
                <DropdownMenu.Label>Layout Density</DropdownMenu.Label>
                <DropdownMenu.Item onSelect={() => handleDensityChange("1")}>
                  Compact
                </DropdownMenu.Item>
                <DropdownMenu.Item onSelect={() => handleDensityChange("3")}>
                  High
                </DropdownMenu.Item>
                <DropdownMenu.Item onSelect={() => handleDensityChange("2")}>
                  Low
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Root>
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
      <Text>
        Software designer who loves writing code. I like sweating interaction
        details, automating the work of design teams, and building beautiful
        interfaces that scale well.
      </Text>
    </Container>
  );
}
