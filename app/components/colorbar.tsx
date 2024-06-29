'use client';

import { Box, Flex } from '@radix-ui/themes';

const colors = ['gray-5', 'gray-6', 'gray-7', 'accent-7', 'accent-8', 'accent-9'];

export default function ColorBar() {
  return (
    <Flex>
      {colors.map((color) => (
        <Box key={color} style={{ backgroundColor: `var(--${color})` }} height="2" width="6" />
      ))}
    </Flex>
  );
}
