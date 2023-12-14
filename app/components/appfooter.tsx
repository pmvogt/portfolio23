'use client';
import { FigmaLogoIcon } from '@radix-ui/react-icons';
import { Badge, Flex } from '@radix-ui/themes';
import ColorBar from './colorbar';

export default function AppFooter() {
  return (
    <Flex
      px="4"
      pb="4"
      shrink="0"
      justify="between"
      align="center"
      width="100%"
    >
      <Badge size="2" highContrast variant="surface" color="gray">
        <FigmaLogoIcon width="16" height="16" />
        100 Dupes
      </Badge>
      <ColorBar />
    </Flex>
  );
}
