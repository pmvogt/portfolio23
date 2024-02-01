"use client";
import React, { useEffect, useState } from "react";
import { Badge } from "@radix-ui/themes";
import { FigmaLogoIcon } from "@radix-ui/react-icons";

import { Suspense } from "react";

async function getDupes() {
	const id = "918316274165785351";
	const data = await fetch(`https://www.figma.com/api/hub_files/profile/${id}`);
	const json = await data.json();

	return json.meta.reduce((acc: number, curr: { duplicate_count: number }) => {
		acc += curr.duplicate_count;
		return acc;
	}, 0);
}

export default async function FigBadge() {
	const dupes = await getDupes();

	return (
		<Badge highContrast variant="surface" color="gray">
			<FigmaLogoIcon width="16" height="16" />
			<Suspense fallback="0">{dupes}</Suspense>
		</Badge>
	);
}
