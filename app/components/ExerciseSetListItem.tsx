import { Temporal } from "@js-temporal/polyfill";
import { Text, View } from "react-native";
import type { ExerciseSet } from "../models/ExerciseSet";

interface ExerciseSetListItemProps {
	exerciseSet: ExerciseSet;
}

const ExerciseSetListItem = ({ exerciseSet }: ExerciseSetListItemProps) => {
	const setDate = Temporal.PlainDateTime.from(exerciseSet.date);

	return (
		<View className="flex-row items-center justify-between w-full p-4 mb-2 bg-white rounded-lg shadow-lg">
			<View className="flex-1 flex-col">
				<Text className="text-lg font-semibold text-blue-600">
					{exerciseSet.exercise.name}
				</Text>
				<Text className="text-sm text-gray-500">
					{setDate.toLocaleString("en", {
						weekday: "short",
						day: "numeric",
						month: "short",
						year: "numeric",
						hour: "numeric",
						minute: "numeric",
					})}
				</Text>
			</View>
			<View className="flex-col items-end ml-4">
				<Text className="text-xl font-bold text-gray-800">
					{exerciseSet.weight} lbs
				</Text>
				<Text className="text-sm text-gray-600">x {exerciseSet.reps} reps</Text>
			</View>
		</View>
	);
};

export default ExerciseSetListItem;
