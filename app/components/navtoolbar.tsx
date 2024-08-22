'use client';
import { Fragment, useRef, ReactNode } from 'react';
import { MotionValue, motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import {
  FigmaLogoIcon,
  TwitterLogoIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from '@radix-ui/react-icons';
import { Avatar, Flex, IconButton, Tooltip } from '@radix-ui/themes';
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

  const linkGroups = [
    [
      // {
      //   name: "Craft",
      //   icon: <BackpackIcon style={{ color: "var(--accent-a11)" }} />,
      //   action: { type: "link", href: "/craft" },
      // },
      // {
      //   name: 'Blog',
      //   icon: <ReaderIcon style={{ color: 'var(--accent-a11)' }} />,
      //   action: { type: 'link', href: '/blog' },
      // },
    ],
    [
      // {
      //   name: "Contact",
      //   icon: <EnvelopeClosedIcon style={{ color: "var(--accent-a11)" }} />,
      //   action: { type: "link", href: "/contact" },
      // },
      {
        name: 'Figma',
        icon: <FigmaLogoIcon style={{ color: 'var(--accent-a11)', width: 24, height: 24 }} />,
        action: { type: 'link', href: 'https://figma.com/@vogtbot9000' },
      },
      {
        name: 'X',
        icon: <TwitterLogoIcon style={{ color: 'var(--accent-a11)', width: 24, height: 24 }} />,
        action: { type: 'link', href: 'https://www.x.com/vogtbot' },
      },
      {
        name: 'GitHub',
        icon: <GitHubLogoIcon style={{ color: 'var(--accent-a11)', width: 24, height: 24 }} />,
        action: { type: 'link', href: 'https://github.com/pmvogt' },
      },
      {
        name: 'LinkedIn',
        icon: <LinkedInLogoIcon style={{ color: 'var(--accent-a11)', width: 24, height: 24 }} />,
        action: { type: 'link', href: 'https://www.linkedin.com/in/vogtbot/' },
      },
    ],
    // [
    //   {
    //     name: "Toggle theme",
    //     icon: <MoonIcon style={{ color: "var(--accent-a11)" }} />,
    //     action: { type: "link", href: "/" },
    //   },
    //   {
    //     name: "Toggle sound",
    //     icon: <SpeakerOffIcon style={{ color: "var(--accent-a11)" }} />,
    //     action: { type: "link", href: "/" },
    //   },
    // ],
  ];

  return (
    <motion.div onMouseMove={(e) => mouseX.set(e.pageX)} onMouseLeave={() => mouseX.set(Infinity)}>
      <Flex
        className="h-16"
        justify="between"
        align="center"
        gap="3"
        style={{
          backgroundColor: 'var(--gray-1)',
          borderWidth: 1,
          borderColor: `var(--gray-8)`,
          borderStyle: 'solid',
          borderRadius: 9999,
        }}
        px="4"
      >
        <Flex>
          <Avatar size="2" fallback="pv" radius="full" src="/yo.png" />
        </Flex>
        <Flex gap="3" align="center">
          {linkGroups.map((group, groupIndex) => (
            <Fragment key={groupIndex}>
              {group.map((link, linkIndex) => (
                <NavLink
                  name={link.name}
                  key={linkIndex}
                  mouseX={mouseX}
                  icon={link.icon}
                  action={link.action as { type: 'link'; href: string }}
                />
              ))}
              {/* TODO: bring this back when blog, etc are done */}
              {/* {groupIndex < linkGroups.length - 1 && <Separator size="2" orientation="vertical" />} */}
            </Fragment>
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
          <span className="w-24 h-24">{icon}</span>
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

  const widthSync = useTransform(distance, [-100, 0, 100], [50, 70, 40]);

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
