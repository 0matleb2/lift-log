import { Text, TouchableOpacity, View, useColorScheme } from "react-native";
import type { PlateWeight } from "../../../models/Plate";
import StyledIcon from "../../StyledIcon";

interface PlateStepperProps {
	plateWeight: PlateWeight;
	onPlateAdded: () => void;
	onPlateRemoved: () => void;
	isAddDisabled?: boolean;
	isSubtractDisabled?: boolean;
}

const PlateStepper = ({
	plateWeight,
	onPlateAdded,
	onPlateRemoved,
	isAddDisabled = false,
	isSubtractDisabled = false,
}: PlateStepperProps) => {
	const colorScheme = useColorScheme();
	const isDarkMode = colorScheme === "dark";
	const textColorClasses = isDarkMode
		? "text-primary-text-dark"
		: "text-primary-text";

	const addStepperBackgroundColorClasses = isDarkMode
		? isAddDisabled
			? "bg-secondary-button-background-disabled-dark"
			: "bg-secondary-button-background-dark"
		: isAddDisabled
			? "bg-secondary-button-background-disabled"
			: "bg-secondary-button-background";

	const addStepperTextColorClasses = isDarkMode
		? isAddDisabled
			? "text-secondary-button-text-disabled-dark"
			: "text-secondary-button-text-dark"
		: isAddDisabled
			? "text-secondary-button-text-disabled"
			: "text-secondary-button-text";

	const subtractStepperBackgroundColorClasses = isDarkMode
		? isSubtractDisabled
			? "bg-secondary-button-background-disabled-dark"
			: "bg-secondary-button-background-dark"
		: isSubtractDisabled
			? "bg-secondary-button-background-disabled"
			: "bg-secondary-button--background";

	const subtractStepperTextColorClasses = isDarkMode
		? isSubtractDisabled
			? "text-secondary-button-text-disabled-dark"
			: "text-secondary-button-text-dark"
		: isSubtractDisabled
			? "text-secondary-button-text-disabled"
			: "text-secondary-button-text";

	const plateClassMap = {
		45: { light: "bg-plate-45", dark: "bg-plate-45-dark" },
		35: { light: "bg-plate-35", dark: "bg-plate-35-dark" },
		25: { light: "bg-plate-25", dark: "bg-plate-25-dark" },
		10: { light: "bg-plate-10", dark: "bg-plate-10-dark" },
		5: { light: "bg-plate-5", dark: "bg-plate-5-dark" },
		2.5: { light: "bg-plate-2_5", dark: "bg-plate-2_5-dark" },
		1.25: { light: "bg-plate-1_25", dark: "bg-plate-1_25-dark" },
	};

	const plateColor = isDarkMode
		? plateClassMap[plateWeight].dark
		: plateClassMap[plateWeight].light;

	return (
		<View className="flex-row items-center">
			<View className={`w-1.5 h-full ${plateColor} rounded-l-lg`} />
			<View className="items-center">
				<TouchableOpacity
					className={`${addStepperBackgroundColorClasses} px-2 rounded-r-full`}
					onPress={onPlateAdded}
					disabled={isAddDisabled}
				>
					<StyledIcon
						name="add"
						size={24}
						className={`${addStepperTextColorClasses}`}
					/>
				</TouchableOpacity>
				<Text className={`my-1.25 ${textColorClasses} text-lg font-semibold`}>
					{plateWeight}
				</Text>
				<TouchableOpacity
					className={`${subtractStepperBackgroundColorClasses} px-2 rounded-r-full`}
					onPress={onPlateRemoved}
					disabled={isSubtractDisabled}
				>
					<StyledIcon
						name="remove"
						size={24}
						className={`${subtractStepperTextColorClasses}`}
					/>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default PlateStepper;
