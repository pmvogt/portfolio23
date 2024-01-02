import { Flex, Container } from '@radix-ui/themes';
import AppHeader from './components/appheader';
import AppFooter from './components/appfooter';
import Window from './components/window';

export default function Home() {
  return (
    <Flex
      height="100%"
      pb={{ initial: '0', md: '9' }}
      px={{ initial: '0', md: '4' }}
    >
      <div className="max-w-screen-2xl mx-auto w-full">
        <Window />
      </div>
    </Flex>
  );
}
