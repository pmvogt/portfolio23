'use client';
import { FigmaLogoIcon } from '@radix-ui/react-icons';
import { Badge, Box, Flex } from '@radix-ui/themes';
import ColorBar from './colorbar';
import NavToolbar from './navtoolbar';

export default function AppFooter() {
  return (
    <Flex
      px="4"
      pb="4"
      shrink="0"
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
        <Badge size="2" highContrast variant="surface" color="gray">
          <FigmaLogoIcon width="16" height="16" />
          100 duplicates
        </Badge>
      </Flex>
      <NavToolbar />

      <Flex
        display={{
          initial: 'none',
          md: 'flex',
        }}
      >
        <ColorBar />
      </Flex>
    </Flex>
  );
}
