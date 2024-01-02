import type { Metadata } from "next";
import { Theme, Flex } from "@radix-ui/themes";
import AppHeader from "./components/appheader";
import AppFooter from "./components/appfooter";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import "./globals.css";
import "@radix-ui/themes/styles.css";

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
		<html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
			<body>
				<Theme
					accentColor="gold"
					grayColor="sand"
					scaling="100%"
					appearance="dark"
				>
					<main>
						<Flex>
							<AppHeader />
						</Flex>

						{children}

						<Flex>
							<AppFooter />
						</Flex>
					</main>
				</Theme>
			</body>
		</html>
	);
}
