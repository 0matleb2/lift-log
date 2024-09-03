import { Temporal } from "@js-temporal/polyfill";
import { Text, View, useColorScheme } from "react-native";
import type { ExerciseSet } from "../../models/ExerciseSet";

interface ExerciseSetCardProps {
	exerciseSet: ExerciseSet;
}

const ExerciseSetCard = ({ exerciseSet }: ExerciseSetCardProps) => {
	const setDate = Temporal.PlainDateTime.from(exerciseSet.date).toLocaleString(
		"en",
		{
			weekday: "short",
			day: "numeric",
			month: "short",
			year: "numeric",
			hour: "numeric",
			minute: "numeric",
		},
	);

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
		<View
			className={`flex-row items-center justify-between w-full p-2 rounded-lg shadow-lg ${cardColorClasses}`}
		>
			<View className="flex-1">
				<Text className={`text-lg font-semibold ${titleTextColorClasses}`}>
					{exerciseSet.exercise.name}
				</Text>
				<Text className={`text-sm ${secondaryTextColorClasses}`}>
					{setDate}
				</Text>
			</View>
			<View className="items-end ml-4">
				<Text className={`text-xl font-semibold ${primaryTextColorClasses}`}>
					{exerciseSet.weight} lbs
				</Text>
				<Text className={`text-sm ${secondaryTextColorClasses}`}>
					x {exerciseSet.reps} {exerciseSet.reps === 1 ? "rep" : "reps"}
				</Text>
			</View>
		</View>
	);
};

export default ExerciseSetCard;
