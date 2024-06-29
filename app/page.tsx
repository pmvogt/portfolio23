import { Flex } from '@radix-ui/themes';
import HomeContent from './components/homecontent';

export default function Home() {
  return (
    <Flex
      height="100%"
      width="100%"
      px={{ initial: '2', md: '4' }}
      style={{ minHeight: '100vh', maxWidth: '100vw' }}
    >
      <HomeContent />
    </Flex>
  );
}
