import { NextRequest, NextResponse } from "next/server";

interface MetaItem {
	duplicate_count: number;
}

export async function GET(request: Request) {
	const id = "918316274165785351";
	try {
		const data = await fetch(
			`https://www.figma.com/api/hub_files/profile/${id}`
		);
		if (!data.ok) {
			throw new Error(`Failed to fetch, status: ${data.status}`);
		}
		const json = await data.json();

		const dupes = json.meta.reduce(
			(acc: number, curr: MetaItem) => acc + curr.duplicate_count,
			0
		);
		console.log({ dupes });
		// res.status(200).json({ dupes });
		return NextResponse.json({ dupes } as any, { status: 200 });
	} catch (error: any) {
		console.error("Error fetching duplicates:", error);
		return NextResponse.error(); // Remove the second argument
	}
}
