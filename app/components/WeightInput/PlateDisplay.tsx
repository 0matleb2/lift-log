import { View } from "react-native";
import { type PlateCount, getPlateWeight } from "../../types";

interface PlateDisplayProps {
	plateCounts: PlateCount;
	isAccurate: boolean;
	isBarbellAdded: boolean;
}

const PlateDisplay = ({
	plateCounts,
	isAccurate,
	isBarbellAdded,
}: PlateDisplayProps) => {
	const fortyFivePlateCount = plateCounts[45];
	const thirtyFivePlateCount = plateCounts[35];
	const twentyFivePlateCount = plateCounts[25];
	const tenPlateCount = plateCounts[10];
	const fivePlateCount = plateCounts[5];
	const twoPointFivePlateCount = plateCounts[2.5];
	const onePointTwoFivePlateCount = plateCounts[1.25];

	const leftPlates = [];
	const rightPlates = [];

	for (let i = 0; i < fortyFivePlateCount; i++) {
		if (i % 2 === 0) {
			leftPlates.push(
				<View
					key={`45L-${i}`}
					className="w-2.5 h-16 bg-blue-500 border-b-8 border-b-blue-700 border-x border-x-blue-600 border-t-8 border-t-blue-400"
				/>,
			);
		} else {
			rightPlates.push(
				<View
					key={`45R-${i}`}
					className="w-2.5 h-16 bg-blue-500 border-b-8 border-b-blue-700 border-x border-x-blue-600 border-t-8 border-t-blue-400"
				/>,
			);
		}
	}
	for (let i = 0; i < thirtyFivePlateCount; i++) {
		if (i % 2 === 0) {
			leftPlates.push(
				<View
					key={`35L-${i}`}
					className="w-2.5 h-14 bg-yellow-500 border-b-8 border-b-yellow-700 border-x border-x-yellow-600 border-t-8 border-t-yellow-400"
				/>,
			);
		} else {
			rightPlates.push(
				<View
					key={`35R-${i}`}
					className="w-2.5 h-14 bg-yellow-500 border-b-8 border-b-yellow-700 border-x border-x-yellow-600 border-t-8 border-t-yellow-400"
				/>,
			);
		}
	}
	for (let i = 0; i < twentyFivePlateCount; i++) {
		if (i % 2 === 0) {
			leftPlates.push(
				<View
					key={`25L-${i}`}
					className="w-2.5 h-12 bg-green-500 border-b-8 border-b-green-700 border-x border-x-green-600 border-t-8 border-t-green-400"
				/>,
			);
		} else {
			rightPlates.push(
				<View
					key={`25R-${i}`}
					className="w-2.5 h-12 bg-green-500 border-b-8 border-b-green-700 border-x border-x-green-600 border-t-8 border-t-green-400"
				/>,
			);
		}
	}
	for (let i = 0; i < tenPlateCount; i++) {
		if (i % 2 === 0) {
			leftPlates.push(
				<View
					key={`10L-${i}`}
					className="w-2 h-10 bg-gray-50 border-b-8 border-b-gray-400 border-x border-x-slate-400 border-t-8 border-t-gray-200"
				/>,
			);
		} else {
			rightPlates.push(
				<View
					key={`10R-${i}`}
					className="w-2 h-10 bg-gray-50 border-b-8 border-b-gray-400 border-x border-x-slate-400 border-t-8 border-t-gray-200"
				/>,
			);
		}
	}
	for (let i = 0; i < fivePlateCount; i++) {
		if (i % 2 === 0) {
			leftPlates.push(
				<View
					key={`5L-${i}`}
					className="w-1.5 h-7 bg-blue-500 border-b-8 border-b-blue-700 border-x border-x-blue-600 border-t-8 border-t-blue-400"
				/>,
			);
		} else {
			rightPlates.push(
				<View
					key={`5R-${i}`}
					className="w-1.5 h-7 bg-blue-500 border-b-8 border-b-blue-700 border-x border-x-blue-600 border-t-8 border-t-blue-400"
				/>,
			);
		}
	}
	for (let i = 0; i < twoPointFivePlateCount; i++) {
		if (i % 2 === 0) {
			leftPlates.push(
				<View
					key={`2.5L-${i}`}
					className="w-1.5 h-5 bg-green-500 border-b-4 border-b-green-700 border-x border-x-green-600 border-t-4 border-t-green-400"
				/>,
			);
		} else {
			rightPlates.push(
				<View
					key={`2.5R-${i}`}
					className="w-1.5 h-5 bg-green-500 border-b-4 border-b-green-700 border-x border-x-green-600 border-t-4 border-t-green-400"
				/>,
			);
		}
	}
	for (let i = 0; i < onePointTwoFivePlateCount; i++) {
		if (i % 2 === 0) {
			leftPlates.push(
				<View
					key={`1.25L-${i}`}
					className="w-1.5 h-4  bg-gray-50 border-b-4 border-b-gray-400 border-x border-x-slate-400 border-t-4 border-t-gray-200"
				/>,
			);
		} else {
			rightPlates.push(
				<View
					key={`1.25R-${i}`}
					className="w-1.5 h-4  bg-gray-50 border-b-4 border-b-gray-400 border-x border-x-slate-400 border-t-4 border-t-gray-200"
				/>,
			);
		}
	}

	return (
		<View
			className={`mb-2 p-2 min-h-16 flex-row items-center justify-center border rounded-xl ${isAccurate ? "border-transparent" : "border-red-300 bg-red-50"}`}
		>
			{leftPlates.reverse()}
			{getPlateWeight(plateCounts) !== 0 && (
				<View
					className={`${isBarbellAdded ? "flex-1" : "w-6"} h-2.5 bg-slate-300 border-b-4 border-slate-400 border-t-2 border-t-slate-200`}
				/>
			)}
			{rightPlates}
		</View>
	);
};

export default PlateDisplay;
