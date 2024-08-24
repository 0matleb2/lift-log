import { Temporal } from "@js-temporal/polyfill";
import { Button, Text, View } from "react-native";
import ExerciseSetList from "../containers/ExerciseSetList";
import Exercise from "../models/Exercise";
import { useStore } from "../store";

const HomeScreen = () => {
	const { addExerciseSet } = useStore();

	return (
		<View className="flex-1 items-center justify-center bg-gray-100">
			<Text className="text-2xl font-bold text-blue-600">
				Welcome to Lift Log!
			</Text>
			<Text className="text-lg text-gray-600">
				Track your lifts and progress
			</Text>

			<Button
				title="Add Lift"
				onPress={() =>
					addExerciseSet({
						exercise: Exercise.BenchPress,
						reps: 8,
						weight: 150,
					})
				}
			/>

			<ExerciseSetList />
		</View>
	);
};

export default HomeScreen;
