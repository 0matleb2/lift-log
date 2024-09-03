import { View, useColorScheme } from "react-native";
import {
	type PlateCounts,
	type PlateWeight,
	plateWeights,
} from "../../../models/Plate";
import StyledIcon from "../../StyledIcon";

interface PlateDisplayProps {
	plateCounts: PlateCounts;
	isAccurate: boolean;
	isBarbellAdded: boolean;
}

const plateConfig = {
	45: {
		width: "w-2.5",
		height: "h-16",
		color: {
			light: "bg-plate-45",
			dark: "bg-plate-45-dark",
		},
		borderColor: {
			light:
				"border-b-8 border-b-plate-45-shadow border-x border-x-plate-45-shadow border-t-8 border-t-plate-45-highlight",
			dark: "border-b-8 border-b-plate-45-shadow-dark border-x border-x-plate-45-shadow-dark border-t-8 border-t-plate-45-highlight-dark",
		},
	},
	35: {
		width: "w-2.5",
		height: "h-14",
		color: {
			light: "bg-plate-35",
			dark: "bg-plate-35-dark",
		},
		borderColor: {
			light:
				"border-b-8 border-b-plate-35-shadow border-x border-x-plate-35-shadow border-t-8 border-t-plate-35-highlight",
			dark: "border-b-8 border-b-plate-35-shadow-dark border-x border-x-plate-35-shadow-dark border-t-8 border-t-plate-35-highlight-dark",
		},
	},
	25: {
		width: "w-2.5",
		height: "h-12",
		color: {
			light: "bg-plate-25",
			dark: "bg-plate-25-dark",
		},
		borderColor: {
			light:
				"border-b-8 border-b-plate-25-shadow border-x border-x-plate-25-shadow border-t-8 border-t-plate-25-highlight",
			dark: "border-b-8 border-b-plate-25-shadow-dark border-x border-x-plate-25-shadow-dark border-t-8 border-t-plate-25-highlight-dark",
		},
	},
	10: {
		width: "w-2",
		height: "h-10",
		color: {
			light: "bg-plate-10",
			dark: "bg-plate-10-dark",
		},
		borderColor: {
			light:
				"border-b-8 border-b-plate-10-shadow border-x border-x-plate-10-shadow border-t-8 border-t-plate-10-highlight",
			dark: "border-b-8 border-b-plate-10-shadow-dark border-x border-x-plate-10-shadow-dark border-t-8 border-t-plate-10-highlight-dark",
		},
	},
	5: {
		width: "w-1.5",
		height: "h-7",
		color: {
			light: "bg-plate-5",
			dark: "bg-plate-5-dark",
		},
		borderColor: {
			light:
				"border-b-8 border-b-plate-5-shadow border-x border-x-plate-5-shadow border-t-8 border-t-plate-5-highlight",
			dark: "border-b-8 border-b-plate-5-shadow-dark border-x border-x-plate-5-shadow-dark border-t-8 border-t-plate-5-highlight-dark",
		},
	},
	2.5: {
		width: "w-1.5",
		height: "h-5",
		color: {
			light: "bg-plate-2_5",
			dark: "bg-plate-2_5-dark",
		},
		borderColor: {
			light:
				"border-b-4 border-b-plate-2_5-shadow border-x border-x-plate-2_5-shadow border-t-4 border-t-plate-2_5-highlight",
			dark: "border-b-4 border-b-plate-2_5-shadow-dark border-x border-x-plate-2_5-shadow-dark border-t-4 border-t-plate-2_5-highlight-dark",
		},
	},
	1.25: {
		width: "w-1.5",
		height: "h-4",
		color: {
			light: "bg-plate-1_25",
			dark: "bg-plate-1_25-dark",
		},
		borderColor: {
			light:
				"border-b-4 border-b-plate-1_25-shadow border-x border-x-plate-1_25-shadow border-t-4 border-t-plate-1_25-highlight",
			dark: "border-b-4 border-b-plate-1_25-shadow-dark border-x border-x-plate-1_25-shadow-dark border-t-4 border-t-plate-1_25-highlight-dark",
		},
	},
};

const barbellConfig = {
	color: {
		light: "bg-barbell",
		dark: "bg-barbell-dark",
	},
	borderColor: {
		light:
			"border-b-4 border-b-barbell-shadow border-x border-x-barbell-shadow border-t-2 border-t-barbell-highlight",
		dark: "border-b-4 border-b-barbell-shadow-dark border-x border-x-barbell-shadow-dark border-t-2 border-t-barbell-highlight-dark",
	},
};

const PlateDisplay = ({
	plateCounts,
	isAccurate,
	isBarbellAdded,
}: PlateDisplayProps) => {
	const leftPlates = [];
	const rightPlates = [];

	const colorScheme = useColorScheme();
	const isDarkMode = colorScheme === "dark";

	for (const plateWeight of plateWeights) {
		const renderedPlates = renderPlates(
			plateWeight,
			plateCounts[plateWeight],
			isDarkMode,
		);
		leftPlates.push(...renderedPlates.filter((_, index) => index % 2 === 0));
		rightPlates.push(...renderedPlates.filter((_, index) => index % 2 !== 0));
	}

	const plateDisplayBackgroundColorClasses = isDarkMode
		? "bg-card-background-dark"
		: "bg-card-background";

	const warningColorClasses = isDarkMode
		? "text-warning-text-dark"
		: "text-warning-text";

	return (
		<View
			className={`relative mt-2 p-2 flex-row items-center justify-center rounded-lg ${plateDisplayBackgroundColorClasses}`}
		>
			{!isAccurate && (
				<View className="absolute z-10 mb-12">
					<StyledIcon
						name="warning"
						size={32}
						className={warningColorClasses}
					/>
				</View>
			)}
			{leftPlates.reverse()}
			{(leftPlates.length > 0 || rightPlates.length > 0) && (
				<View
					className={`${
						isBarbellAdded ? "flex-1" : "w-6"
					} h-2.5 ${isDarkMode ? barbellConfig.color.dark : barbellConfig.color.light} ${
						isDarkMode
							? barbellConfig.borderColor.dark
							: barbellConfig.borderColor.light
					}`}
				/>
			)}
			{rightPlates}
		</View>
	);
};

const renderPlates = (
	plateWeight: PlateWeight,
	count: number,
	isDarkMode: boolean,
) => {
	const plates = [];
	const { width, height, color, borderColor } = plateConfig[plateWeight];

	for (let i = 0; i < count; i++) {
		plates.push(
			<View
				key={`${plateWeight}-${i}`}
				className={`${width} ${height} ${
					isDarkMode ? color.dark : color.light
				} ${isDarkMode ? borderColor.dark : borderColor.light}`}
			/>,
		);
	}

	return plates;
};

export default PlateDisplay;
