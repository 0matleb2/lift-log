import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import {
	type PlateCount,
	type PlateWeight,
	getPlateWeight,
	plateWeights,
} from "../../types";
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
	const [weight, setWeight] = useState<number>(
		initialBarbell && initialWeight < 45 ? 45 : initialWeight,
	);
	const [isBarbellAdded, setIsBarbellAdded] = useState(initialBarbell);
	const [plateCounts, setPlateCounts] = useState(
		getOptimizedPlateCounts(initialWeight - (initialBarbell ? 45 : 0)),
	);

	const handleToggleBarbell = () => {
		const updatedIsBarbellAdded = !isBarbellAdded;
		const updatedWeight =
			getPlateWeight(plateCounts) + (updatedIsBarbellAdded ? 45 : 0);
		setIsBarbellAdded(updatedIsBarbellAdded);
		setWeight(updatedWeight);
		onChangeWeight(updatedWeight);
	};

	const handleOptimizePlates = () => {
		const targetWeight = weight - (isBarbellAdded ? 45 : 0);
		const updatedPlateCounts = getOptimizedPlateCounts(targetWeight);

		const updatedWeight =
			getPlateWeight(updatedPlateCounts) + (isBarbellAdded ? 45 : 0);

		setPlateCounts(updatedPlateCounts);
		setWeight(updatedWeight);
		onChangeWeight(updatedWeight);
	};

	const handleAddPlate = (plateWeight: PlateWeight) => {
		const updatedPlateCounts: PlateCount = {
			...plateCounts,
			[plateWeight]: plateCounts[plateWeight] + 1,
		};

		const updatedWeight =
			getPlateWeight(updatedPlateCounts) + (isBarbellAdded ? 45 : 0);

		setPlateCounts(updatedPlateCounts);
		setWeight(updatedWeight);
		onChangeWeight(updatedWeight);
	};

	const handleRemovePlate = (plateWeight: PlateWeight) => {
		const updatedPlateCounts: PlateCount = {
			...plateCounts,
			[plateWeight]: Math.max(plateCounts[plateWeight] - 1, 0), // Ensure no negative counts
		};

		const updatedWeight =
			getPlateWeight(updatedPlateCounts) + (isBarbellAdded ? 45 : 0);

		setPlateCounts(updatedPlateCounts);
		setWeight(updatedWeight);
		onChangeWeight(updatedWeight);
	};

	const handleBlurText = (text: string) => {
		const parsedWeight = text ? Number.parseFloat(text).toFixed(2) : "0";
		const updatedWeight = Number(parsedWeight);

		const updatedIsBarbellAdded = updatedWeight >= 45;
		const optimizedPlateCounts = getOptimizedPlateCounts(
			updatedWeight - (updatedIsBarbellAdded ? 45 : 0),
		);

		setWeight(updatedWeight);
		setPlateCounts(optimizedPlateCounts);
		setIsBarbellAdded(updatedIsBarbellAdded);
		onChangeWeight(updatedWeight);
	};

	return (
		<View className="mb-2">
			<View className="flex-row items-center mb-2">
				<WeightTextInput
					initialText={weight.toString()}
					onBlurText={handleBlurText}
				/>
				<TouchableOpacity
					onPress={handleOptimizePlates}
					className="px-1 py-2 ml-2 rounded-lg border border-blue-700 bg-blue-600"
				>
					<Text className="text-2xl">✨</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={handleToggleBarbell}
					className={`px-1 py-2 ml-2 rounded-lg border ${isBarbellAdded ? "bg-gray-400 border-gray-600" : "bg-gray-200 border-transparent"}`}
				>
					{isBarbellAdded ? (
						<Text className="text-2xl">🏋️</Text>
					) : (
						<Text className="text-2xl opacity-50">🏋️</Text>
					)}
				</TouchableOpacity>
			</View>
			<PlateDisplay
				plateCounts={plateCounts}
				isAccurate={weight % 1.25 === 0}
				isBarbellAdded={isBarbellAdded}
			/>
			<View className="flex-row justify-around mb-2">
				<PlateStepper
					plateWeight={45}
					onPlateAdded={() => handleAddPlate(45)}
					onPlateRemoved={() => handleRemovePlate(45)}
				/>
				<PlateStepper
					plateWeight={35}
					onPlateAdded={() => handleAddPlate(35)}
					onPlateRemoved={() => handleRemovePlate(35)}
				/>
				<PlateStepper
					plateWeight={25}
					onPlateAdded={() => handleAddPlate(25)}
					onPlateRemoved={() => handleRemovePlate(25)}
				/>
				<PlateStepper
					plateWeight={10}
					onPlateAdded={() => handleAddPlate(10)}
					onPlateRemoved={() => handleRemovePlate(10)}
				/>
				<PlateStepper
					plateWeight={5}
					onPlateAdded={() => handleAddPlate(5)}
					onPlateRemoved={() => handleRemovePlate(5)}
				/>
				<PlateStepper
					plateWeight={2.5}
					onPlateAdded={() => handleAddPlate(2.5)}
					onPlateRemoved={() => handleRemovePlate(2.5)}
				/>
				<PlateStepper
					plateWeight={1.25}
					onPlateAdded={() => handleAddPlate(1.25)}
					onPlateRemoved={() => handleRemovePlate(1.25)}
				/>
			</View>
		</View>
	);
};

const getOptimizedPlateCounts = (targetWeight: number): PlateCount => {
	let weight = Math.max(targetWeight, 0);

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
		plateCounts[plateWeight] = Math.floor(weight / pairWeight) * 2;
		weight %= pairWeight;
	}

	return plateCounts;
};

export default WeightInput;
