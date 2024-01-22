import { Flex, Text } from "@radix-ui/themes";
import Window from "./components/window";

export default function Home() {
  return (
    <Flex
      height="100%"
      pb={{ initial: "0", md: "9" }}
      px={{ initial: "0", md: "4" }}
    >
      <Window />
      <Text>
        Software designer who loves writing code. I like sweating interaction
        details, automating the work of design teams, and building beautiful
        interfaces that scale well.
      </Text>
    </Flex>
  );
}
