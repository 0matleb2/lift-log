import { Temporal } from "@js-temporal/polyfill";
import { Text, View } from "react-native";
import type { ExerciseSet } from "../../models/ExerciseSet";

interface ExerciseSetLogItemProps {
	exerciseSet: ExerciseSet;
}

const ExerciseSetLogItem = ({ exerciseSet }: ExerciseSetLogItemProps) => {
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

	return (
		<View className="flex-row items-center justify-between w-full p-4 mb-2 bg-white rounded-lg shadow-lg">
			<View className="flex-1">
				<Text className="text-lg font-semibold text-blue-600">
					{exerciseSet.exercise.name}
				</Text>
				<Text className="text-sm text-gray-500">{setDate}</Text>
			</View>
			<View className="items-end ml-4">
				<Text className="text-xl font-semibold text-gray-800">
					{exerciseSet.weight} lbs
				</Text>
				<Text className="text-sm text-gray-600">
					x {exerciseSet.reps} {exerciseSet.reps === 1 ? "rep" : "reps"}
				</Text>
			</View>
		</View>
	);
};

export default ExerciseSetLogItem;
