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
	const isDarkMode = colorScheme === "dark";

	const backgroundColorClasses = isDarkMode
		? disabled
			? "bg-primary-button-background-disabled-dark"
			: "bg-primary-button-background-dark"
		: disabled
			? "bg-primary-button-background-disabled"
			: "bg-primary-button-background";
	const textColorClasses = isDarkMode
		? disabled
			? "text-primary-button-text-disabled-dark"
			: "text-primary-button-text-dark"
		: disabled
			? "text-primary-button-text-disabled"
			: "text-primary-button-text";

	return (
		<TouchableOpacity
			onPress={onPress}
			disabled={disabled}
			className={`p-2 rounded-lg items-center ${backgroundColorClasses}`}
		>
			<Text className={`text-lg font-bold ${textColorClasses}`}>Log Set</Text>
		</TouchableOpacity>
	);
};

export default AddExerciseSetButton;
