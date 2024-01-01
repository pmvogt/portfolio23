'use client';
import { ReactNode } from 'react';
import {
  BackpackIcon,
  FigmaLogoIcon,
  MoonIcon,
  ReaderIcon,
  SpeakerOffIcon,
  TwitterLogoIcon,
} from '@radix-ui/react-icons';
import { Flex, IconButton } from '@radix-ui/themes';

interface NavLinkProps {
  icon?: ReactNode; // `icon` is optional and can be any valid React node
}

function NavLink({ icon, ...props }: NavLinkProps) {
  return (
    <IconButton size="3" variant="outline" radius="full" {...props}>
      {icon}
    </IconButton>
  );
}

export default function NavToolbar() {
  const links = [
    { name: 'Home', icon: <BackpackIcon /> },
    { name: 'Craft', icon: <ReaderIcon /> },
    { name: 'Contact', icon: <ReaderIcon /> },
    { name: 'Figma', icon: <FigmaLogoIcon /> },
    { name: 'X', icon: <TwitterLogoIcon /> },
    { name: 'ThemeToggle', icon: <MoonIcon /> },
    { name: 'SoundToggle', icon: <SpeakerOffIcon /> },
  ];

  return (
    <Flex
      style={{
        background: `var(--color-surface)`,
        borderWidth: 1,
        borderColor: `var(--gold-a7)`,
        borderStyle: 'solid',
        borderRadius: 9999,
      }}
      px="4"
      py="2"
      gap="1"
    >
      {links.map((link, index) => (
        <NavLink key={index} icon={link.icon}></NavLink>
      ))}
    </Flex>
  );
}
