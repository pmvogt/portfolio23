'use client';
import { useState } from 'react';
import { Container, Flex, Text } from '@radix-ui/themes';
import Window from '../components/window';
import ColorBar from '../components/colorbar';
import PositionedNavToolbar from '../components/positionednavtoolbar';

export default function HomeContent() {
  const [density, setDensity] = useState<'1' | '2' | '3' | '4'>('1');

  return (
    <Container
      size={density}
      style={{
        height: '100%',
        overflowY: 'auto',
        overflowX: 'hidden',
        WebkitOverflowScrolling: 'touch',
        width: '100%',
        maxWidth: '100vw',
      }}
    >
      <Flex direction="column" gap="4" width="100%" pb="4">
        <Window density={density} onDensityChange={setDensity} />
        <Text
          size="2"
          style={{
            color: 'var(--mauve-a11)',
          }}
        >
          Currently working on various projects around American Dynamism and re-industrialization.
          If you are in this space, drop a line!
        </Text>
        <ColorBar />
        <PositionedNavToolbar />
      </Flex>
    </Container>
  );
}
