'use client';
import { SewingPinIcon } from '@radix-ui/react-icons';
import { Flex, Text } from '@radix-ui/themes';

export default function AppHeader() {
  return (
    <Flex
      p="4"
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
        <Text
          style={{
            color: 'var(--neutral-11)',
          }}
          size="2"
        >
          Software Designer
        </Text>
      </Flex>
      <Flex>
        <SewingPinIcon width="16" height="16" />
        <Text
          style={{
            fontFamily: 'var(--font-geist-mono)',
          }}
          size="1"
        >
          Marfa, TX
        </Text>
      </Flex>
    </Flex>
  );
}
