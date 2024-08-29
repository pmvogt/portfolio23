'use client';
import { useRef, ReactNode } from 'react';
import { MotionValue, motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import {
  FigmaLogoIcon,
  TwitterLogoIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  DropdownMenuIcon,
} from '@radix-ui/react-icons';
import { Flex, IconButton, Tooltip, Text, Button, DropdownMenu, Heading } from '@radix-ui/themes';
import Link from 'next/link';

type NavLinkAction = { type: 'button'; onClick: () => void } | { type: 'link'; href: string };

interface NavLinkProps {
  name: string;
  action: NavLinkAction;
  icon?: ReactNode;
  mouseX: MotionValue<number>;
}

export default function NavToolbar() {
  const mouseX = useMotionValue(Infinity);

  const textLinks = [{ name: 'AI Gallery', href: '/ai-gallery' }];

  const socialLinks = [
    {
      name: 'Figma',
      icon: <FigmaLogoIcon style={{ color: 'var(--accent-a11)', width: 16, height: 16 }} />,
      action: { type: 'link', href: 'https://figma.com/@vogtbot9000' },
    },
    {
      name: 'GitHub',
      icon: <GitHubLogoIcon style={{ color: 'var(--accent-a11)', width: 16, height: 16 }} />,
      action: { type: 'link', href: 'https://github.com/pmvogt' },
    },
    {
      name: 'X',
      icon: <TwitterLogoIcon style={{ color: 'var(--accent-a11)', width: 16, height: 16 }} />,
      action: { type: 'link', href: 'https://www.x.com/vogtbot' },
    },
    {
      name: 'LinkedIn',
      icon: <LinkedInLogoIcon style={{ color: 'var(--accent-a11)', width: 16, height: 16 }} />,
      action: { type: 'link', href: 'https://www.linkedin.com/in/vogtbot/' },
    },
  ];

  return (
    <motion.div
      className="w-full"
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
    >
      <Flex
        className="h-16 px-2"
        justify="between"
        align="center"
        style={{
          background: 'linear-gradient(.25turn, var(--bronze-a3) 10%, transparent)',
          borderWidth: 1,
          borderColor: `var(--gray-8)`,
          borderStyle: 'solid',
        }}
      >
        <Flex align="center" gap="3">
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <Button variant="surface">
                <DropdownMenuIcon />
              </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              {textLinks.map((link, index) => (
                <DropdownMenu.Item key={index} asChild>
                  <Link href={link.href}>{link.name}</Link>
                </DropdownMenu.Item>
              ))}
            </DropdownMenu.Content>
          </DropdownMenu.Root>
          <Flex direction="column" className="hidden sm:flex">
            <Flex align="center" gap="1" className="cursor-crosshair">
              <Tooltip content="Pronounced 'vote'">
                <Heading size={{ initial: '1', md: '2' }} weight="bold">
                  Peter Vogt 🇺🇸
                </Heading>
              </Tooltip>
              {/* <Text style={{ color: 'var(--gray-8)' }} size="1">
                (ピーター ボグト)
              </Text> */}
            </Flex>
            <Text size={{ initial: '1', md: '2' }} weight="light">
              Software Designer & Developer
            </Text>
          </Flex>
        </Flex>
        <Flex gap="2" align="center">
          {socialLinks.map((link, index) => (
            <NavLink
              key={index}
              name={link.name}
              mouseX={mouseX}
              icon={link.icon}
              action={link.action as { type: 'link'; href: string }}
            />
          ))}
        </Flex>
      </Flex>
    </motion.div>
  );
}

function NavLink({ name, icon, mouseX, action, ...props }: NavLinkProps) {
  const renderContent = () => {
    if (action.type === 'button') {
      return (
        <IconButton size="4" {...props}>
          <span className="cursor-pointer w-24 h-24">{icon}</span>
        </IconButton>
      );
    } else if (action.type === 'link') {
      return (
        <Link className="before:absolute before:inset-0" href={action.href}>
          <div className="w-full h-full" {...props}>
            {icon}
          </div>
        </Link>
      );
    }
  };

  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? {
      x: 0,
      width: 0,
    };
    return Math.abs(val - (bounds.x + bounds.width / 2)); // Use absolute value for distance
  });

  const widthSync = useTransform(distance, [-100, 0, 100], [50, 60, 40]);

  const width = useSpring(widthSync, {
    mass: 0.1,
    stiffness: 200,
    damping: 10,
  });

  return (
    <Tooltip content={name}>
      <motion.div
        className="aspect-square relative flex-col flex items-center justify-center rounded-full"
        ref={ref}
        style={{
          width,
          borderColor: 'var(--gold-a7)',
          borderWidth: 1,
        }}
      >
        {renderContent()}
      </motion.div>
    </Tooltip>
  );
}
