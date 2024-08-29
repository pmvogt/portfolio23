'use client';
import { Box, Container, Flex, Text, Heading } from '@radix-ui/themes';
import ColorBar from './components/colorbar';
import NavToolbar from './components/navtoolbar';
import Spline from '@splinetool/react-spline';

export default function Home() {
  return (
    <Container size="3">
      <NavToolbar />
      <Flex direction="column" justify="center">
        <ColorBar />
      </Flex>
      <Spline scene="https://prod.spline.design/AWZkrQzAPbpauLCz/scene.splinecode" />
    </Container>
  );
}
