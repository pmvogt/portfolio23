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
      icon: <BackpackIcon style={{ color: 'var(--accent-a11)' }} />,
      action: { type: 'link', href: '/' },
    },
    {
      name: 'Craft',
      icon: <ReaderIcon style={{ color: 'var(--accent-a11)' }} />,
      action: { type: 'link', href: '/404' },
    },
    {
      name: 'Contact',
      icon: (
        <EnvelopeClosedIcon style={{ color: 'var(--accent-a11)' }} />
      ),
      action: { type: 'link', href: '/' },
    },
    {
      name: 'Figma',
      icon: <FigmaLogoIcon style={{ color: 'var(--accent-a11)' }} />,
      action: {
        type: 'link',
        href: 'https://figma.com/@vogtbot9000',
      },
    },
    {
      name: 'X',
      icon: (
        <TwitterLogoIcon style={{ color: 'var(--accent-a11)' }} />
      ),
      action: { type: 'link', href: 'https://www.x.com/vogtbot' },
    },
    {
      name: 'ThemeToggle',
      icon: <MoonIcon style={{ color: 'var(--accent-a11)' }} />,
      action: { type: 'link', href: '/' },
    },
    {
      name: 'SoundToggle',
      icon: <SpeakerOffIcon style={{ color: 'var(--accent-a11)' }} />,
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
          borderColor: `var(--gold-a7)`,
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
            action={link.action as { type: 'link'; href: string }}
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
        <IconButton size="4" {...props}>
          <span className="w-full h-full">{icon}</span>
        </IconButton>
      );
    } else if (action.type === 'link') {
      return (
        <Link
          className="before:absolute before:inset-0"
          href={action.href}
        >
          <div className="w-full h-full" {...props}>
            {icon}
          </div>
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
  );
}
