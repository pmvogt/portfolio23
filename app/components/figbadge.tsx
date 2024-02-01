"use client";
import React, { useEffect, useState } from "react";
import { Badge } from "@radix-ui/themes";
import { FigmaLogoIcon } from "@radix-ui/react-icons";
import fetchFigmaDuplicates from "../util/fetchFigmaDuplicates";

export default function FigBadge() {
	const [duplicates, setDuplicates] = useState<number | null>(null);

	useEffect(() => {
		const loadData = async () => {
			try {
				const data = await fetchFigmaDuplicates();
				const duplicatesCount = data.meta.reduce(
					(acc: number, curr: { duplicate_count: number }) =>
						acc + curr.duplicate_count,
					0
				);
				setDuplicates(duplicatesCount);
			} catch (error) {
				console.error(error);
				setDuplicates(null);
			}
		};

		loadData();
	}, []);

	return (
		<Badge highContrast variant="surface" color="gray">
			<FigmaLogoIcon width="16" height="16" />
			{duplicates !== null ? duplicates : "Loading..."}{" "}
			{/* Display the number of duplicates or loading */}
		</Badge>
	);
}
