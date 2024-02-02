import { NextApiRequest, NextApiResponse } from "next";

interface MetaItem {
	duplicate_count: number;
}

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
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

		res.status(200).json({ dupes });
	} catch (error: any) {
		console.error("Error fetching duplicates:", error);
		res.status(500).json({ error: error.message });
	}
}
