"use client";

import React, { useEffect, useState } from "react";
import { Badge } from "@radix-ui/themes";
import { FigmaLogoIcon } from "@radix-ui/react-icons";

const getDupes = async () => {
	const response = await fetch("/api/figma");
	const data = await response.json();
	return data.dupes;
};

export default function FigBadge() {
	const [dupes, setDupes] = useState<number | null>(null);
	console.log(dupes);

	return (
		<Badge highContrast variant="surface" color="gray">
			<FigmaLogoIcon width="16" height="16" />
			{dupes !== null ? dupes : "Loading..."}
		</Badge>
	);
}
