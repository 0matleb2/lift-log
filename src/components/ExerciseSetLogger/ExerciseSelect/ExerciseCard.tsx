import { Text, View, useColorScheme } from "react-native";
import type Exercise from "../../../models/Exercise";

interface ExerciseCardProps {
	exercise: Exercise;
}

const ExerciseCard = ({ exercise }: ExerciseCardProps) => {
	const colorScheme = useColorScheme();

	const isDarkMode = colorScheme === "dark";

	const cardColorClasses = isDarkMode
		? "bg-card-background-dark border-card-border-dark"
		: "bg-card-background border-card-border";

	const titleTextColorClasses = isDarkMode
		? "text-card-title-text-dark"
		: "text-card-title-text";
	const primaryTextColorClasses = isDarkMode
		? "text-card-primary-text-dark"
		: "text-card-primary-text";
	const secondaryTextColorClasses = isDarkMode
		? "text-card-secondary-text-dark"
		: "text-card-secondary-text";

	return (
		<View className={`p-2 ${cardColorClasses} rounded-lg`}>
			<Text className={`text-lg font-bold ${titleTextColorClasses}`}>
				{exercise.name}
			</Text>
			<Text className={`text-xs ${primaryTextColorClasses}`}>
				Primary:{" "}
				{exercise.primaryMuscles.map((muscle) => muscle.name).join(", ")}
			</Text>
			<Text className={`text-xs ${secondaryTextColorClasses}`}>
				Secondary:{" "}
				{exercise.secondaryMuscles.map((muscle) => muscle.name).join(", ")}
			</Text>
		</View>
	);
};

export default ExerciseCard;
