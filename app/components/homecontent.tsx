'use client';
import { useState } from 'react';
import { Code, Container, Flex, Text } from '@radix-ui/themes';
import Window from '../components/window';
import ColorBar from '../components/colorbar';
import Resume from './resume';

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
          Designer that loves to <Code>code</Code>. Proven results working on scaled design systems
          for hundreds of software teams. Standing on business since 1987.
        </Text>

        <Text
          size="2"
          style={{
            color: 'var(--mauve-a11)',
          }}
        >
          Currently: Design Engineer Lead @ CapitalOne, FS Design System
        </Text>
        <ColorBar />
      </Flex>
      <Resume />
    </Container>
  );
}
