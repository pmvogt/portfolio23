import { Box, Container, Flex, Text } from '@radix-ui/themes';
import AppHeader from './components/appheader';
import AppFooter from './components/appfooter';
import SplineViewer from './components/splineviewer';

export default function Home() {
  return (
    <main className="flex h-screen p-8 flex-col items-center content-between justify-start">
      <AppHeader />
      <Container
        grow="1"
        height="100%"
        style={{
          overflow: 'auto',
        }}
      >
        <Flex
          align="center"
          width="100%"
          mt="8"
          p="4"
          style={{
            backgroundColor: 'var(--black-a8)',
            borderTopLeftRadius: 4,
            borderTopRightRadius: 4,
          }}
        >
          <Text
            size="2"
            trim="both"
            style={{ fontFamily: 'var(--font-geist-mono)' }}
          >
            effects/gradient
          </Text>
        </Flex>
        <Box
          width="100%"
          mt="0"
          style={{
            backgroundColor: 'var(--gold-7)',
          }}
        >
          <SplineViewer />
        </Box>
      </Container>
      <AppFooter />
    </main>
  );
}
