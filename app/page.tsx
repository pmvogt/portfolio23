import { Container, Flex } from '@radix-ui/themes';
import AppHeader from './components/appheader';
import AppFooter from './components/appfooter';
import Window from './components/window';

export default function Home() {
  return (
    <main>
      <Flex shrink="0">
        <AppHeader />
      </Flex>

      <Container
        py="9"
        grow="1"
        style={{
          overflow: 'auto',
        }}
      >
        <Window />
      </Container>

      <Flex shrink="0">
        <AppFooter />
      </Flex>
    </main>
  );
}
