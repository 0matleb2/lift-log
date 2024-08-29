import { View } from "react-native";
import {
	type PlateCounts,
	type PlateWeight,
	plateWeights,
} from "../../../models/Plate";

interface PlateDisplayProps {
	plateCounts: PlateCounts;
	isAccurate: boolean;
	isBarbellAdded: boolean;
}

const plateConfig = {
	45: {
		width: "w-2.5",
		height: "h-16",
		color: "bg-blue-500",
		borderColor:
			"border-b-8 border-b-blue-700 border-x border-x-blue-600 border-t-8 border-t-blue-400",
	},
	35: {
		width: "w-2.5",
		height: "h-14",
		color: "bg-yellow-500",
		borderColor:
			"border-b-8 border-b-yellow-700 border-x border-x-yellow-600 border-t-8 border-t-yellow-400",
	},
	25: {
		width: "w-2.5",
		height: "h-12",
		color: "bg-green-500",
		borderColor:
			"border-b-8 border-b-green-700 border-x border-x-green-600 border-t-8 border-t-green-400",
	},
	10: {
		width: "w-2",
		height: "h-10",
		color: "bg-gray-50",
		borderColor:
			"border-b-8 border-b-gray-400 border-x border-x-slate-400 border-t-8 border-t-gray-200",
	},
	5: {
		width: "w-1.5",
		height: "h-7",
		color: "bg-blue-500",
		borderColor:
			"border-b-8 border-b-blue-700 border-x border-x-blue-600 border-t-8 border-t-blue-400",
	},
	2.5: {
		width: "w-1.5",
		height: "h-5",
		color: "bg-green-500",
		borderColor:
			"border-b-4 border-b-green-700 border-x border-x-green-600 border-t-4 border-t-green-400",
	},
	1.25: {
		width: "w-1.5",
		height: "h-4",
		color: "bg-gray-50",
		borderColor:
			"border-b-4 border-b-gray-400 border-x border-x-slate-400 border-t-4 border-t-gray-200",
	},
};

const PlateDisplay = ({
	plateCounts,
	isAccurate,
	isBarbellAdded,
}: PlateDisplayProps) => {
	const leftPlates = [];
	const rightPlates = [];

	for (const plateWeight of plateWeights) {
		const renderedPlates = renderPlates(plateWeight, plateCounts[plateWeight]);
		leftPlates.push(...renderedPlates.filter((_, index) => index % 2 === 0));
		rightPlates.push(...renderedPlates.filter((_, index) => index % 2 !== 0));
	}

	return (
		<View
			className={`mb-2 p-2 min-h-16 flex-row items-center justify-center border rounded-xl ${
				isAccurate ? "border-transparent" : "border-red-300 bg-red-50"
			}`}
		>
			{leftPlates.reverse()}
			{(leftPlates.length > 0 || rightPlates.length > 0) && (
				<View
					className={`${
						isBarbellAdded ? "flex-1" : "w-6"
					} h-2.5 bg-slate-300 border-b-4 border-slate-400 border-t-2 border-t-slate-200`}
				/>
			)}
			{rightPlates}
		</View>
	);
};

const renderPlates = (plateWeight: PlateWeight, count: number) => {
	const plates = [];
	const { width, height, color, borderColor } = plateConfig[plateWeight];

	for (let i = 0; i < count; i++) {
		plates.push(
			<View
				key={`${plateWeight}-${i}`}
				className={`${width} ${height} ${color} ${borderColor}`}
			/>,
		);
	}

	return plates;
};

export default PlateDisplay;
