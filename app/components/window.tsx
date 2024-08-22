import { Box, Button, Flex, Text, DropdownMenu, Separator, Tooltip } from '@radix-ui/themes';

import { CheckIcon, ColumnSpacingIcon } from '@radix-ui/react-icons';

import Spline from '@splinetool/react-spline';

interface WindowProps {
  density: '1' | '2' | '3' | '4';
  onDensityChange: (newDensity: '1' | '2' | '3' | '4') => void;
}

export default function Window({ density, onDensityChange }: WindowProps) {
  const handleDensityChange = (newDensity: '1' | '2' | '3' | '4') => {
    onDensityChange(newDensity);
  };

  const Checkmark = () => {
    return <CheckIcon />;
  };

  return (
    <Flex direction="column" gap="4" width="100%">
      <Flex pt={{ initial: '4', md: '6' }} align="center" justify="between">
        <Flex direction="column">
          <Box className="cursor-crosshair">
            <Tooltip content="Pronounced 'vote'">
              <Text size="3" weight="bold">
                Peter Vogt
              </Text>
            </Tooltip>
          </Box>
          <Text
            style={{
              color: 'var(--mauve-11)',
            }}
            size="2"
          >
            Software Designer & Developer
          </Text>
        </Flex>
        <Flex align="center" gap="2">
          <Box height="100%" display={{ initial: 'none', lg: 'block' }}>
            <Separator orientation="vertical" size="2" color="bronze" />
          </Box>
          <Flex display={{ initial: 'none', lg: 'flex' }} gap="2">
            <DropdownMenu.Root>
              <DropdownMenu.Trigger>
                <Button variant="classic" color="bronze">
                  <ColumnSpacingIcon /> Density
                </Button>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content size="1">
                <DropdownMenu.Label>Layout Density</DropdownMenu.Label>
                <DropdownMenu.Item onSelect={() => handleDensityChange('1')}>
                  Compact {density === '1' && <Checkmark />}
                </DropdownMenu.Item>
                <DropdownMenu.Item onSelect={() => handleDensityChange('2')}>
                  High {density === '2' && <Checkmark />}
                </DropdownMenu.Item>
                <DropdownMenu.Item onSelect={() => handleDensityChange('3')}>
                  Low {density === '3' && <Checkmark />}
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Root>
          </Flex>
        </Flex>
      </Flex>
      <Separator size="4" color="bronze" />
      <Box>
        <Spline scene="https://prod.spline.design/ozb1e9hCLqo73g6G/scene.splinecode" />
      </Box>
    </Flex>
  );
}
