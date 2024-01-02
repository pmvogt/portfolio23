'use client';
import { useRef, ReactNode } from 'react';
import {
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion';
import {
  BackpackIcon,
  EnvelopeClosedIcon,
  FigmaLogoIcon,
  MoonIcon,
  ReaderIcon,
  SpeakerOffIcon,
  TwitterLogoIcon,
} from '@radix-ui/react-icons';
import { Flex, IconButton } from '@radix-ui/themes';
import Link from 'next/link';

type NavLinkAction =
  | { type: 'button'; onClick: () => void }
  | { type: 'link'; href: string };

interface NavLinkProps {
  action: NavLinkAction;
  icon?: ReactNode;
  mouseX: MotionValue<number>;
}

export default function NavToolbar() {
  let mouseX = useMotionValue(Infinity);

  const links = [
    {
      name: 'Home',
      icon: <BackpackIcon />,
      action: { type: 'link', href: '/404' },
    },
    {
      name: 'Craft',
      icon: <ReaderIcon />,
      action: { type: 'link', href: '/' },
    },
    {
      name: 'Contact',
      icon: <EnvelopeClosedIcon />,
      action: { type: 'link', href: '/' },
    },
    {
      name: 'Figma',
      icon: <FigmaLogoIcon />,
      action: { type: 'link', href: '/' },
    },
    {
      name: 'X',
      icon: <TwitterLogoIcon />,
      action: { type: 'link', href: '/' },
    },
    {
      name: 'ThemeToggle',
      icon: <MoonIcon />,
      action: { type: 'link', href: '/' },
    },
    {
      name: 'SoundToggle',
      icon: <SpeakerOffIcon />,
      action: { type: 'link', href: '/' },
    },
  ];

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
    >
      <Flex
        className="mx-auto flex h-16 items-center gap-4"
        style={{
          background: `var(--color-surface)`,
          borderWidth: 1,
          borderColor: `var(--accent-a7)`,
          borderStyle: 'solid',
          borderRadius: 9999,
        }}
        p="4"
        gap="2"
      >
        {links.map((link, i) => (
          <NavLink
            key={i}
            mouseX={mouseX}
            icon={link.icon}
            action={link.action}
          ></NavLink>
        ))}
      </Flex>
    </motion.div>
  );
}

function NavLink({ icon, mouseX, action, ...props }: NavLinkProps) {
  const renderContent = () => {
    if (action.type === 'button') {
      return (
        <IconButton {...props}>
          <span>{icon}</span>
        </IconButton>
      );
    } else if (action.type === 'link') {
      return (
        <Link href={action.href}>
          <div {...props}>{icon}</div>
        </Link>
      );
    }
  };

  let ref = useRef<HTMLDivElement>(null);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? {
      x: 0,
      width: 0,
    };
    return Math.abs(val - (bounds.x + bounds.width / 2)); // Use absolute value for distance
  });

  let widthSync = useTransform(distance, [-80, 0, 80], [40, 60, 30]);

  let width = useSpring(widthSync, {
    mass: 0.1,
    stiffness: 200,
    damping: 10,
  });

  console.log(distance.get(), width.get());

  return (
    <motion.div
      className="aspect-square flex-col flex items-center justify-center rounded-full"
      ref={ref}
      style={{
        width,
        borderColor: 'var(--accent-7)',
        borderWidth: 1,
      }}
    >
      {renderContent()}
    </motion.div>
  );
}
