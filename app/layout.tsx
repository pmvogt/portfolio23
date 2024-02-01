import type { Metadata } from "next";
import { Theme } from "@radix-ui/themes";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import "./globals.css";
import "@radix-ui/themes/styles.css";
import NavToolbar from "./components/navtoolbar";

export const metadata: Metadata = {
  title: "Peter Vogt - Software Designer, Design Engineer",
  description: "Peter Vogt's personal site.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <Theme
          accentColor="gold"
          grayColor="sand"
          scaling="100%"
          appearance="dark"
        >
          <main className="font-sans">
            {children}{" "}
            <div className="flex flex-col justify-center bottom-4 items-center  overflow-hidden fixed w-full">
              <div className="mx-auto w-full max-w-md">
                <NavToolbar />
              </div>
            </div>
          </main>
        </Theme>
      </body>
    </html>
  );
}
