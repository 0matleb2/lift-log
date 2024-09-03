import { Text, TouchableOpacity, View, useColorScheme } from "react-native";
import StyledIcon from "../StyledIcon";

interface RepsStepperProps {
	reps: number;
	onIncrement: () => void;
	onDecrement: () => void;
	isIncrementDisabled?: boolean;
	isDecrementDisabled?: boolean;
}

const RepsStepper = ({
	reps,
	onIncrement,
	onDecrement,
	isIncrementDisabled = false,
	isDecrementDisabled = false,
}: RepsStepperProps) => {
	const colorScheme = useColorScheme();
	const isDarkMode = colorScheme === "dark";

	const repsTextColorClasses = isDarkMode
		? "text-primary-text-dark"
		: "text-primary-text";

	const incrementButtonBackgroundColorClasses = isDarkMode
		? isIncrementDisabled
			? "bg-secondary-button-background-disabled-dark"
			: "bg-secondary-button-background-dark"
		: isIncrementDisabled
			? "bg-secondary-button-background-disabled"
			: "bg-secondary-button-background";

	const incrementButtonTextColorClasses = isDarkMode
		? isIncrementDisabled
			? "text-secondary-button-text-disabled-dark"
			: "text-secondary-button-text-dark"
		: isIncrementDisabled
			? "text-secondary-button-text-disabled"
			: "text-secondary-button-text";

	const decrementButtonBackgroundColorClasses = isDarkMode
		? isDecrementDisabled
			? "bg-secondary-button-background-disabled-dark"
			: "bg-secondary-button-background-dark"
		: isDecrementDisabled
			? "bg-secondary-button-background-disabled"
			: "bg-secondary-button-background";

	const decrementButtonTextColorClasses = isDarkMode
		? isDecrementDisabled
			? "text-secondary-button-text-disabled-dark"
			: "text-secondary-button-text-dark"
		: isDecrementDisabled
			? "text-secondary-button-text-disabled"
			: "text-secondary-button-text";

	return (
		<View className="flex-row items-center justify-center">
			<TouchableOpacity
				onPress={onDecrement}
				className={`w-10 h-10 rounded-full justify-center items-center mr-3 ${decrementButtonBackgroundColorClasses}`}
				disabled={isDecrementDisabled}
			>
				<StyledIcon
					name="remove"
					size={24}
					className={`${decrementButtonTextColorClasses}`}
				/>
			</TouchableOpacity>

			<Text className={`text-xl px-2 font-semibold ${repsTextColorClasses}`}>
				{reps} {reps === 1 ? "rep" : "reps"}
			</Text>

			<TouchableOpacity
				onPress={onIncrement}
				className={`w-10 h-10 rounded-full justify-center items-center ml-3 ${incrementButtonBackgroundColorClasses} ${incrementButtonTextColorClasses}`}
				disabled={isIncrementDisabled}
			>
				<StyledIcon
					name="add"
					size={24}
					className={`${incrementButtonTextColorClasses}`}
				/>
			</TouchableOpacity>
		</View>
	);
};

export default RepsStepper;
