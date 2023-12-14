import { Box, Container, Flex, Text, Code } from "@radix-ui/themes";

export default function Home() {
	return (
		<main className="flex min-h-screen p-8 flex-col items-center justify-between">
			<Flex px="4" pt="4" align="baseline" justify="between">
				<Flex direction="column">
					<Text style={{ color: "var(--accent-a12)" }} size="3" weight="bold">
						Peter Vogt
					</Text>
					<Text style={{ color: "var(--neutral-11)" }} size="2">
						Software Designer
					</Text>
				</Flex>
				<Flex>
					<code>Marfa, TX</code>
				</Flex>
			</Flex>
			<Container>
				<Flex
					align="center"
					width="100%"
					height="9"
					p="2"
					style={{
						backgroundColor: "var(--black-a8)",
						borderTopLeftRadius: 4,
						borderTopRightRadius: 4,
					}}
				>
					<Code>test</Code>
				</Flex>
				<Box
					width="100%"
					height="9"
					mt="0"
					style={{ backgroundColor: "var(--gold-7)" }}
				>
					<Text>test</Text>
				</Box>
			</Container>
		</main>
	);
}
