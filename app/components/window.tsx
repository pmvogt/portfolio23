"use client";

import { Flex, Text } from "@radix-ui/themes";

export default function Window() {
	return (
		<Flex
			align="center"
			direction="column"
			content="center"
			py="9"
			width="100%"
			height="100%"
		>
			<Flex
				py="5"
				pl="4"
				width="100%"
				style={{
					backgroundColor: "var(--neutral-a12)",
					borderTopLeftRadius: 4,
					borderTopRightRadius: 4,
					borderWidth: 1,
					borderStyle: "solid",
					borderBottomColor: "transparent",
					borderColor: "var(--neutral-a11)",
					color: "var(--neutral-11)",
				}}
			>
				<Text
					size="2"
					trim="both"
					style={{ fontFamily: "var(--font-geist-mono)" }}
				>
					effects/gradient
				</Text>
			</Flex>
			<Flex
				width="100%"
				mt="0"
				style={{
					backgroundColor: "var(--gold-7)",
					borderWidth: 1,
					borderBottomLeftRadius: 2,
					borderBottomRightRadius: 2,
					borderStyle: "solid",
					borderColor: "var(--gold-7)",
				}}
			>
				content
			</Flex>
		</Flex>
	);
}
