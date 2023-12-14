'use client';

import { Box, Flex } from '@radix-ui/themes';

const colors = [
  'sand-5',
  'sand-6',
  'sand-7',
  'gold-5',
  'gold-6',
  'gold-7',
];

export default function ColorBar() {
  return (
    <Flex>
      {colors.map((color) => (
        <Box
          key={color}
          style={{ backgroundColor: `var(--${color})` }}
          height="5"
          width="8"
        />
      ))}
    </Flex>
  );
}
