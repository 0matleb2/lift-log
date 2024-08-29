import { useCallback, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import {
	type PlateCount,
	type PlateWeight,
	getPlateWeight,
	plateWeights,
} from "../../../types/plateUtils";
import PlateDisplay from "./PlateDisplay";
import PlateStepper from "./PlateStepper";
import WeightTextInput from "./WeightTextInput";

interface WeightInputProps {
	onChangeWeight: (weight: number) => void;
	initialWeight?: number;
	initialBarbell?: boolean;
}

const WeightInput = ({
	onChangeWeight,
	initialWeight = 0,
	initialBarbell = false,
}: WeightInputProps) => {
	const initialAdjustedWeight =
		initialBarbell && initialWeight < 45 ? 45 : initialWeight;

	const [weight, setWeight] = useState<number>(initialAdjustedWeight);
	const [isBarbellAdded, setIsBarbellAdded] = useState(initialBarbell);
	const [plateCounts, setPlateCounts] = useState(
		getOptimizedPlateCounts(initialAdjustedWeight - (initialBarbell ? 45 : 0)),
	);

	const updateState = useCallback(
		(
			updatedPlateCounts: PlateCount,
			updatedWeight: number,
			barbellAdded: boolean,
		) => {
			setWeight(updatedWeight);
			setPlateCounts(updatedPlateCounts);
			setIsBarbellAdded(barbellAdded);
			onChangeWeight(updatedWeight);
		},
		[onChangeWeight],
	);

	const toggleBarbell = () => {
		const barbellAdded = !isBarbellAdded;
		const targetWeight = getPlateWeight(plateCounts) + (barbellAdded ? 45 : 0);
		updateState(plateCounts, targetWeight, barbellAdded);
	};

	const optimizePlates = () => {
		const targetWeight = weight - (isBarbellAdded ? 45 : 0);
		const updatedPlateCounts = getOptimizedPlateCounts(targetWeight);
		const updatedWeight =
			getPlateWeight(updatedPlateCounts) + (isBarbellAdded ? 45 : 0);
		updateState(updatedPlateCounts, updatedWeight, isBarbellAdded);
	};

	const adjustPlate = (plateWeight: PlateWeight, delta: number) => {
		const updatedPlateCounts: PlateCount = {
			...plateCounts,
			[plateWeight]: Math.max(plateCounts[plateWeight] + delta, 0),
		};
		const targetWeight =
			getPlateWeight(updatedPlateCounts) + (isBarbellAdded ? 45 : 0);
		updateState(updatedPlateCounts, targetWeight, isBarbellAdded);
	};

	const handleBlurText = (text: string) => {
		const parsedWeight = Number(text ? Number.parseFloat(text).toFixed(2) : 0);
		const updatedIsBarbellAdded = parsedWeight < 45 ? false : isBarbellAdded;
		const optimizedPlateCounts = getOptimizedPlateCounts(
			parsedWeight - (updatedIsBarbellAdded ? 45 : 0),
		);

		updateState(optimizedPlateCounts, parsedWeight, updatedIsBarbellAdded);
	};

	return (
		<View className="mb-2">
			<View className="flex-row items-center mb-2">
				<WeightTextInput
					initialText={weight.toString()}
					onBlurText={handleBlurText}
				/>
				<TouchableOpacity
					onPress={optimizePlates}
					className="px-1 py-2 ml-2 rounded-lg border border-blue-700 bg-blue-600"
				>
					<Text className="text-2xl">✨</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={toggleBarbell}
					className={`px-1 py-2 ml-2 rounded-lg border ${isBarbellAdded ? "bg-gray-400 border-gray-600" : "bg-gray-200 border-transparent"}`}
				>
					<Text className={`text-2xl ${isBarbellAdded ? "" : "opacity-50"}`}>
						🏋️
					</Text>
				</TouchableOpacity>
			</View>
			<PlateDisplay
				plateCounts={plateCounts}
				isAccurate={weight % 1.25 === 0}
				isBarbellAdded={isBarbellAdded}
			/>
			<View className="flex-row justify-around mb-2">
				{plateWeights.map((plateWeight) => (
					<PlateStepper
						key={plateWeight}
						plateWeight={plateWeight}
						onPlateAdded={() => adjustPlate(plateWeight, 1)}
						onPlateRemoved={() => adjustPlate(plateWeight, -1)}
					/>
				))}
			</View>
		</View>
	);
};

const getOptimizedPlateCounts = (targetWeight: number): PlateCount => {
	let remainingWeight = Math.max(targetWeight, 0);

	const plateCounts: PlateCount = {
		45: 0,
		35: 0,
		25: 0,
		10: 0,
		5: 0,
		2.5: 0,
		1.25: 0,
	};

	for (const plateWeight of plateWeights) {
		const pairWeight = plateWeight * 2;
		plateCounts[plateWeight] = Math.floor(remainingWeight / pairWeight) * 2;
		remainingWeight %= pairWeight;
	}

	return plateCounts;
};

export default WeightInput;
