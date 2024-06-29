"use client";
import { useState } from "react";

import {
  Code,
  Container,
  Flex,
  Text,
} from "@radix-ui/themes";

import Window from "../components/window";
import ColorBar from "../components/colorbar";
import FigBadge from "../components/figbadge";
import Resume from './resume'

export default function HomeContent() {
  const [density, setDensity] = useState<"1" | "2" | "3" | "4">("1");

 
  return (
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
            <FigBadge />
          </Flex>

          <Flex>
            <ColorBar />
          </Flex>
        </Flex>
        <Text size="2">
          Designer that loves to <Code>code</Code>. Standing on
          business since 1987.
        </Text>
      </Flex>

      <Resume />
     
    </Container>
  );
}
