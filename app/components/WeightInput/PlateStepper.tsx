import { Text, TouchableOpacity, View } from "react-native";

interface PlateStepperProps {
	plateWeight: number;
	onPlateAdded: () => void;
	onPlateRemoved: () => void;
}

const PlateStepper = ({
	plateWeight,
	onPlateAdded,
	onPlateRemoved,
}: PlateStepperProps) => {
	const addButtonClasses: string[] = [];
	const addTextClasses: string[] = [];
	const removeButtonClasses: string[] = [];
	const removeTextClasses: string[] = [];

	if (plateWeight === 45 || plateWeight === 5) {
		addButtonClasses.push(...["bg-blue-500", "border", "border-blue-700"]);
		addTextClasses.push(...["text-white"]);
		removeButtonClasses.push(
			...["bg-blue-200", "border", "border-transparent"],
		);
	} else if (plateWeight === 35) {
		addButtonClasses.push(...["bg-yellow-500", "border", "border-yellow-700"]);
		addTextClasses.push(...["text-black"]);
		removeButtonClasses.push(
			...["bg-yellow-200", "border", "border-transparent"],
		);
	} else if (plateWeight === 25 || plateWeight === 2.5) {
		addButtonClasses.push(...["bg-green-500", "border", "border-green-700"]);
		addTextClasses.push(...["text-white"]);
		removeButtonClasses.push(
			...["bg-green-200", "border", "border-transparent"],
		);
	} else if (plateWeight === 10 || plateWeight === 1.25) {
		addButtonClasses.push(...["bg-white", "border", "border-gray-400"]);
		addTextClasses.push(...["text-black"]);
		removeButtonClasses.push(
			...["bg-gray-200", "border", "border-transparent"],
		);
	}

	return (
		<View className="items-center">
			<TouchableOpacity
				className={`${addButtonClasses.join(" ")} px-2 rounded-full`}
				onPress={onPlateAdded}
			>
				<Text className={`${addTextClasses.join(" ")} text-lg`}>+</Text>
			</TouchableOpacity>
			<Text className="my-1.25 text-lg">{plateWeight}</Text>
			<TouchableOpacity
				className={`${removeButtonClasses.join(" ")} px-2 rounded-full`}
				onPress={onPlateRemoved}
			>
				<Text className={`${removeTextClasses.join(" ")} text-lg`}>–</Text>
			</TouchableOpacity>
		</View>
	);
};

export default PlateStepper;
