import { Flex } from "@radix-ui/themes";
import HomeContent from "./components/homecontent";

export default function Home() {
  return (
    <Flex
      height="100%"
      pb={{ initial: "0", md: "9" }}
      px={{ initial: "0", md: "4" }}
    >
      <HomeContent />
    </Flex>
  );
}
