import { Container, Flex } from '@radix-ui/themes';
import AppHeader from './components/appheader';
import AppFooter from './components/appfooter';
import Window from './components/window';

export default function Home() {
  return (
    <main>
      <Flex>
        <AppHeader />
      </Flex>

      <Flex
        height="100%"
        pb={{ initial: '0', md: '9' }}
        px={{ initial: '0', md: '4' }}
      >
        <Window />
      </Flex>
      <Flex
        display={{
          initial: 'none',
          md: 'flex',
        }}
      >
        <AppFooter />
      </Flex>
    </main>
  );
}
