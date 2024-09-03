import { useCallback, useState } from "react";
import { TouchableOpacity, View, useColorScheme } from "react-native";
import {
	type PlateCounts,
	type PlateWeight,
	getPlateWeight,
	plateWeights,
} from "../../../models/Plate";
import StyledIcon from "../../StyledIcon";
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
			updatedPlateCounts: PlateCounts,
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
		const updatedPlateCounts: PlateCounts = {
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

	const colorScheme = useColorScheme();

	const isDarkMode = colorScheme === "dark";

	const optimizeButtonBackgroundColorClasses = isDarkMode
		? "bg-optimize-button-background-dark"
		: "bg-optimize-button-background";

	const optimizeButtonTextColorClasses = isDarkMode
		? "text-optimize-button-text-dark"
		: "text-optimize-button-text";

	const toggleBarbellButtonBackgroundColorClasses = isDarkMode
		? isBarbellAdded
			? "bg-toggle-button-background-on-dark"
			: "bg-toggle-button-background-off-dark"
		: isBarbellAdded
			? "bg-toggle-button-background-on"
			: "bg-toggle-button-background-off";

	const toggleBarbellButtonTextColorClasses = isDarkMode
		? isBarbellAdded
			? "text-toggle-button-text-on-dark"
			: "text-toggle-button-text-off-dark"
		: isBarbellAdded
			? "text-toggle-button-text-on"
			: "text-toggle-button-text-off";

	const toggleBarbellButtonBorderColorClasses = isDarkMode
		? isBarbellAdded
			? "border-toggle-button-border-on-dark"
			: "border-toggle-button-border-off-dark"
		: isBarbellAdded
			? "border-toggle-button-border-on"
			: "border-toggle-button-border-off";

	return (
		<View>
			<View className="flex-row items-center mt-4">
				<WeightTextInput
					initialText={weight.toString()}
					onBlurText={handleBlurText}
				/>
				<TouchableOpacity
					onPress={optimizePlates}
					className={`p-2 ml-2 rounded-lg ${optimizeButtonBackgroundColorClasses}`}
				>
					<StyledIcon
						name="sparkles"
						size={24}
						className={`${optimizeButtonTextColorClasses}`}
					/>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={toggleBarbell}
					className={`p-2 ml-2 rounded-lg border ${toggleBarbellButtonBackgroundColorClasses} ${toggleBarbellButtonBorderColorClasses}`}
				>
					<StyledIcon
						name={isBarbellAdded ? "barbell" : "barbell-outline"}
						size={24}
						className={`${toggleBarbellButtonTextColorClasses}`}
					/>
				</TouchableOpacity>
			</View>
			<View className="flex-row justify-around mt-4">
				{plateWeights.map((plateWeight) => (
					<PlateStepper
						key={plateWeight}
						plateWeight={plateWeight}
						onPlateAdded={() => adjustPlate(plateWeight, 1)}
						onPlateRemoved={() => adjustPlate(plateWeight, -1)}
						isSubtractDisabled={plateCounts[plateWeight] === 0}
					/>
				))}
			</View>
			{getPlateWeight(plateCounts) > 0 && (
				<View className="mt-4">
					<PlateDisplay
						plateCounts={plateCounts}
						isAccurate={weight % 1.25 === 0}
						isBarbellAdded={isBarbellAdded}
					/>
				</View>
			)}
		</View>
	);
};

const getOptimizedPlateCounts = (targetWeight: number): PlateCounts => {
	let remainingWeight = Math.max(targetWeight, 0);

	const plateCounts: PlateCounts = {
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
