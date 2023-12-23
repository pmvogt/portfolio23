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

      <Window />

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
