import { Text, TouchableOpacity, View } from "react-native";
import type { PlateWeight } from "../../../models/Plate";

interface PlateStepperProps {
	plateWeight: PlateWeight;
	onPlateAdded: () => void;
	onPlateRemoved: () => void;
}

const plateConfig = {
	45: {
		addButton: "bg-blue-500 border border-blue-700",
		addText: "text-white",
		removeButton: "bg-blue-200 border border-transparent",
	},
	35: {
		addButton: "bg-yellow-500 border border-yellow-700",
		addText: "text-black",
		removeButton: "bg-yellow-200 border border-transparent",
	},
	25: {
		addButton: "bg-green-500 border border-green-700",
		addText: "text-white",
		removeButton: "bg-green-200 border border-transparent",
	},
	10: {
		addButton: "bg-white border border-gray-400",
		addText: "text-black",
		removeButton: "bg-gray-200 border border-transparent",
	},
	5: {
		addButton: "bg-blue-500 border border-blue-700",
		addText: "text-white",
		removeButton: "bg-blue-200 border border-transparent",
	},
	2.5: {
		addButton: "bg-green-500 border border-green-700",
		addText: "text-white",
		removeButton: "bg-green-200 border border-transparent",
	},
	1.25: {
		addButton: "bg-white border border-gray-400",
		addText: "text-black",
		removeButton: "bg-gray-200 border border-transparent",
	},
};

const PlateStepper = ({
	plateWeight,
	onPlateAdded,
	onPlateRemoved,
}: PlateStepperProps) => {
	const { addButton, addText, removeButton } = plateConfig[plateWeight];

	return (
		<View className="items-center">
			<TouchableOpacity
				className={`${addButton} px-2 rounded-full`}
				onPress={onPlateAdded}
			>
				<Text className={`${addText} text-lg`}>+</Text>
			</TouchableOpacity>
			<Text className="my-1.25 text-gray-800 text-lg font-semibold">
				{plateWeight}
			</Text>
			<TouchableOpacity
				className={`${removeButton} px-2 rounded-full`}
				onPress={onPlateRemoved}
			>
				<Text className={`${addText} text-lg`}>–</Text>
			</TouchableOpacity>
		</View>
	);
};

export default PlateStepper;
