"use client";
import { Fragment, useRef, ReactNode } from "react";
import {
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  EnvelopeClosedIcon,
  FigmaLogoIcon,
  MoonIcon,
  ReaderIcon,
  SpeakerOffIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { Avatar, Flex, IconButton, Separator } from "@radix-ui/themes";
import Link from "next/link";

type NavLinkAction =
  | { type: "button"; onClick: () => void }
  | { type: "link"; href: string };

interface NavLinkProps {
  action: NavLinkAction;
  icon?: ReactNode;
  mouseX: MotionValue<number>;
}

export default function NavToolbar() {
  let mouseX = useMotionValue(Infinity);

  const linkGroups = [
    [
      // Group 1: Craft, Blog, Contact
      {
        name: "Craft",
        icon: <ReaderIcon style={{ color: "var(--accent-a11)" }} />,
        action: { type: "link", href: "/craft" },
      },
      {
        name: "Blog",
        icon: <EnvelopeClosedIcon style={{ color: "var(--accent-a11)" }} />,
        action: { type: "link", href: "/blog" },
      },
      {
        name: "Contact",
        icon: <EnvelopeClosedIcon style={{ color: "var(--accent-a11)" }} />,
        action: { type: "link", href: "/contact" },
      },
    ],
    [
      // Group 2: Figma, Twitter
      {
        name: "Figma",
        icon: <FigmaLogoIcon style={{ color: "var(--accent-a11)" }} />,
        action: { type: "link", href: "https://figma.com/@vogtbot9000" },
      },
      {
        name: "X",
        icon: <TwitterLogoIcon style={{ color: "var(--accent-a11)" }} />,
        action: { type: "link", href: "https://www.x.com/vogtbot" },
      },
    ],
    [
      // Group 3: Site theme, sound toggle
      {
        name: "ThemeToggle",
        icon: <MoonIcon style={{ color: "var(--accent-a11)" }} />,
        action: { type: "link", href: "/" },
      },
      {
        name: "SoundToggle",
        icon: <SpeakerOffIcon style={{ color: "var(--accent-a11)" }} />,
        action: { type: "link", href: "/" },
      },
    ],
  ];

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
    >
      <Flex
        className="mx-auto w-full flex h-16 items-center"
        justify="between"
        style={{
          backgroundColor: "var(--gray-1)",
          borderWidth: 1,
          borderColor: `var(--gray-8)`,
          borderStyle: "solid",
          borderRadius: 9999,
        }}
        px="4"
      >
        <Flex shrink="1">
          <Avatar size="2" fallback="pv" radius="full" src="/yo.png" />
        </Flex>
        <Flex grow="1" gap="2" align="center">
          {linkGroups.map((group, groupIndex) => (
            <Fragment key={groupIndex}>
              {group.map((link, linkIndex) => (
                <NavLink
                  key={linkIndex}
                  mouseX={mouseX}
                  icon={link.icon}
                  action={link.action as { type: "link"; href: string }}
                ></NavLink>
              ))}
              {groupIndex < linkGroups.length - 1 && (
                <Separator orientation="vertical" />
              )}
            </Fragment>
          ))}
        </Flex>
      </Flex>
    </motion.div>
  );
}

function NavLink({ icon, mouseX, action, ...props }: NavLinkProps) {
  const renderContent = () => {
    if (action.type === "button") {
      return (
        <IconButton size="4" {...props}>
          <span className="w-full h-full">{icon}</span>
        </IconButton>
      );
    } else if (action.type === "link") {
      return (
        <Link className="before:absolute before:inset-0" href={action.href}>
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
        borderColor: "var(--gold-a7)",
        borderWidth: 1,
      }}
    >
      {renderContent()}
    </motion.div>
  );
}
