// utils/fetchFigmaDuplicates.ts
export interface FigmaData {
	meta: FigmaMetaItem[];
}

export interface FigmaMetaItem {
	duplicate_count: number;
}

async function fetchFigmaDuplicates(): Promise<FigmaData> {
	try {
		const response = await fetch(
			`https://www.figma.com/api/hub_files/profile/918316274165785351}`
		);

		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Failed to fetch data: ", error);
		throw error;
	}
}

export default fetchFigmaDuplicates;
