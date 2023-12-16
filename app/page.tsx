import { Container, Flex } from '@radix-ui/themes';
import AppHeader from './components/appheader';
import AppFooter from './components/appfooter';
import Window from './components/window';

export default function Home() {
  return (
    <main>
      <Flex shrink={{ initial: '1', md: '0' }}>
        <AppHeader />
      </Flex>
      <Flex height="100%">
        <Container width="100%">
          <Window />
        </Container>
      </Flex>
      <Flex
        display={{
          initial: 'none',
          md: 'flex',
        }}
        shrink={{ initial: '1', md: '0' }}
      >
        <AppFooter />
      </Flex>
    </main>
  );
}
