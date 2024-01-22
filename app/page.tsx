import { Flex, Container } from '@radix-ui/themes';
import Window from './components/window';


export default function Home() {
  return (
    <Flex
      height="100%"
      pb={{ initial: '0', md: '9' }}
      px={{ initial: '0', md: '4' }}
    >
      <Container size="1" height="100%">
        <Flex direction="column" gap="2">
        <Window />
          </Flex>
      </Container>
    </Flex>
  );
}
