'use client';
import Image from 'next/image';
import { useState } from 'react';
import { Flex, Box, Select, Text } from '@radix-ui/themes';

export default function Window() {
  type Visualizations = {
    [key: string]: string;
  };

  const visualizations: Visualizations = {
    figma1:
      'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F5gYofN0G97wuyX0ijtYiiu%2Ftoolbar%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D40-380%26viewport%3D3828%252C1002%252C0.8%26t%3DgHfnflj9FkOBCWkj-1%26scaling%3Dcontain%26starting-point-node-id%3D1%253A9%26mode%3Ddesign',
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
    <Flex
      align="center"
      direction="column"
      content="center"
      py="9"
      grow="1"
      width="100%"
    >
      <Flex
        py="4"
        pl="4"
        grow="1"
        width="100%"
        style={{
          backgroundColor: 'var(--neutral-a12)',
          borderTopLeftRadius: 4,
          borderTopRightRadius: 4,
          borderWidth: 1,
          borderStyle: 'solid',
          borderBottomColor: 'transparent',
          borderColor: 'var(--neutral-a11)',
          color: 'var(--neutral-11)',
        }}
      >
        <Select.Root
          value={selectedVisualization}
          onValueChange={setSelectedVisualization}
        >
          <Select.Trigger style={{ fontFamily: 'monospace' }}>
            {selectedVisualization}
          </Select.Trigger>
          <Select.Content style={{ fontFamily: 'monospace' }}>
            <Select.Group>
              <Select.Label>Effects</Select.Label>
              <Select.Item value="figma1">gradient</Select.Item>
              <Select.Item value="figma2">watercolor</Select.Item>
              <Select.Item value="figma3">bubbles</Select.Item>
            </Select.Group>
            <Select.Separator />
            <Select.Group>
              <Select.Label>Interactions</Select.Label>
              <Select.Item value="dropdown">dropdown</Select.Item>
              <Select.Item value="button">button</Select.Item>
            </Select.Group>
          </Select.Content>
        </Select.Root>
      </Flex>
      <Flex
        width="100%"
        height="100%"
        mt="0"
        grow="1"
        style={{
          backgroundColor: 'var(--gold-7)',
          borderWidth: 1,
          borderBottomLeftRadius: 2,
          borderBottomRightRadius: 2,
          borderStyle: 'solid',
          borderColor: 'var(--gold-7)',
        }}
      >
        {renderVisualization()}
      </Flex>
    </Flex>
  );
}
