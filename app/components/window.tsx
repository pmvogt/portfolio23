'use client';

import { Flex, Box, Text } from '@radix-ui/themes';
import SplineViewer from './splineviewer';

export default function Window() {
  return (
    <>
      <Flex
        align="center"
        width="100%"
        mt="8"
        p="5"
        grow="1"
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
    </>
  );
}
