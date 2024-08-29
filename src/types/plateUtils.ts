export const plateWeights = [45, 35, 25, 10, 5, 2.5, 1.25] as const;

export type PlateWeight = (typeof plateWeights)[number];

export type PlateCount = {
	[key in (typeof plateWeights)[number]]: number;
};

export const getPlateWeight = (plateCounts: PlateCount) => {
	return plateWeights.reduce((total, weight) => {
		return total + plateCounts[weight] * weight;
	}, 0);
};
