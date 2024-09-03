'use client';
import { Container, Flex } from '@radix-ui/themes';
import ColorBar from './components/colorbar';
import NavToolbar from './components/navtoolbar';
import Spline from '@splinetool/react-spline';

export default function Home() {
  return (
    <>
      <Flex direction="column" justify="center">
        <NavToolbar />
        <Container>
          <ColorBar />
          <Spline scene="https://prod.spline.design/AWZkrQzAPbpauLCz/scene.splinecode" />
        </Container>
      </Flex>
    </>
  );
}
