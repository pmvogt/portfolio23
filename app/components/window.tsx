import Spline from "@splinetool/react-spline";

import {
  Flex,
  Text,
  DropdownMenu,
  IconButton,
  Tooltip,
} from "@radix-ui/themes";
import { CheckIcon, ColumnSpacingIcon } from "@radix-ui/react-icons";

interface WindowProps {
  density: "1" | "2" | "3" | "4";
  onDensityChange: (newDensity: "1" | "2" | "3" | "4") => void;
}

export default function Window({ density, onDensityChange }: WindowProps) {
  const handleDensityChange = (newDensity: "1" | "2" | "3" | "4") => {
    onDensityChange(newDensity);
  };

  const Checkmark = () => {
    return <CheckIcon />;
  };

  return (
    <Flex direction="column" gap="4" width="100%">
      <Flex pt="6" align="center" justify="between">
        <Flex className="cursor-crosshair" direction="column">
          <Tooltip content="Pronounced 'vote'" side="right">
            <Text size="3" weight="bold">
              Peter Vogt
            </Text>
          </Tooltip>
          <Text
            style={{
              color: "var(--gray-10)",
            }}
            size="2"
          >
            Design Engineer
          </Text>
        </Flex>
        <Flex>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <IconButton variant="surface" highContrast>
                <ColumnSpacingIcon />
              </IconButton>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content size="1">
              <DropdownMenu.Label>Layout Density</DropdownMenu.Label>
              <DropdownMenu.Item onSelect={() => handleDensityChange("1")}>
                Compact {density === "1" && <Checkmark />}
              </DropdownMenu.Item>
              <DropdownMenu.Item onSelect={() => handleDensityChange("2")}>
                High {density === "2" && <Checkmark />}
              </DropdownMenu.Item>
              <DropdownMenu.Item onSelect={() => handleDensityChange("3")}>
                Low {density === "3" && <Checkmark />}
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </Flex>
      </Flex>
      <Spline scene="https://prod.spline.design/ozb1e9hCLqo73g6G/scene.splinecode" />
    </Flex>
  );
}
