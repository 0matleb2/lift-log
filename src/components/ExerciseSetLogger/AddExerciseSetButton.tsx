import { Text, TouchableOpacity, useColorScheme } from "react-native";

interface AddExerciseSetButtonProps {
	onPress: () => void;
	disabled: boolean;
}

const AddExerciseSetButton = ({
	onPress,
	disabled,
}: AddExerciseSetButtonProps) => {
	const colorScheme = useColorScheme();

	let backgroundColorClasses = disabled
		? "bg-primary-button-disabled"
		: "bg-primary-button";
	let textColorClasses = disabled
		? "text-primary-button-disabled"
		: "text-primary-button";

	if (colorScheme === "dark") {
		backgroundColorClasses = disabled
			? "bg-primary-button-dark-disabled"
			: "bg-primary-button-dark";
		textColorClasses = disabled
			? "text-primary-button-dark-disabled"
			: "text-primary-button-dark";
	}

	return (
		<TouchableOpacity
			onPress={onPress}
			disabled={disabled}
			className={`mt-2 py-3 rounded-lg items-center ${backgroundColorClasses} ${textColorClasses}`}
		>
			<Text className="text-white text-lg font-bold">Add Exercise Set</Text>
		</TouchableOpacity>
	);
};

export default AddExerciseSetButton;
