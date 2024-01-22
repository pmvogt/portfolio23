'use client';
import { useState } from 'react';
import { Badge, Box, Flex, Text } from '@radix-ui/themes';

import Spline from '@splinetool/react-spline';
import { FigmaLogoIcon, HeartFilledIcon } from '@radix-ui/react-icons';

import ColorBar from './colorbar';


export default function Window() {
  type Visualizations = {
    [key: string]: string;
  };

  const visualizations: Visualizations = {
    figma1:
      'https://prod.spline.design/ozb1e9hCLqo73g6G/scene.splinecode',
    figma2:
      'https://my.spline.design/fluidholographicliquid-d84fb5fbd806e03e4e87de442abdac3e/',
    // ... other URLs
  };

  const [selectedVisualization, setSelectedVisualization] =
    useState('figma1');

  const renderVisualization = () => {
    const url = visualizations[selectedVisualization];
    return <iframe src={url} width="100%" height="100%"></iframe>;
  };


  return (
    <Box>
       <Flex
      pt="8"
      align="end"
      justify="between"
      width="100%"
      style={{ fontFamily: 'var(--font-geist-sans)' }}
    >
      <Flex direction="column">
          <Text

          style={{ color: 'var(--accent-a12)' }}
          size="3"
          weight="bold"
        >
          Peter Vogt
        </Text>
      </Flex>
      <Flex>
        <Text
          style={{
            color: 'var(--neutral-11)',
          }}
          size="2"
        >
          Design Engineer
        </Text>
      </Flex>
    </Flex>
      <Spline scene="https://prod.spline.design/ozb1e9hCLqo73g6G/scene.splinecode" />
      <Flex
      justify={{ initial: 'center', md: 'between' }}
      align="center"
      width="100%"
    >
      <Flex
        display={{
          initial: 'none',
          md: 'flex',
        }}
      >
        <Badge size="1" highContrast variant="surface" color="gray">
          <FigmaLogoIcon width="16" height="16" />
          100
          <HeartFilledIcon width="16" height="16" />
        </Badge>
      </Flex>

      <Flex
        display={{
          initial: 'none',
          md: 'flex',
        }}
      >
        <ColorBar />
      </Flex>
    </Flex>
    </Box>
  );
}
