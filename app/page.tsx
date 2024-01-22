import { Flex, Container, Text } from "@radix-ui/themes";
import Window from "./components/window";

export default function Home() {
  return (
    <Flex
      height="100%"
      pb={{ initial: "0", md: "9" }}
      px={{ initial: "0", md: "4" }}
    >
      <Window />
    </Flex>
  );
}
