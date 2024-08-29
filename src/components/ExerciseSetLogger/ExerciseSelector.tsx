import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import Exercise from "../../models/Exercise";

interface ExerciseSelectorProps {
	selectedExercise: Exercise | null;
	onSelectExercise: (exercise: Exercise | null) => void;
}

const ExerciseSelector = ({
	selectedExercise,
	onSelectExercise,
}: ExerciseSelectorProps) => {
	return (
		<View>
			{selectedExercise ? (
				<View>
					<Text className="text-lg font-semibold text-gray-700 mb-2">
						Selected Exercise:
					</Text>
					<View className="p-2 bg-white rounded-lg mb-2">
						<Text className="text-lg font-bold text-blue-700">
							{selectedExercise.name}
						</Text>
						<Text className="text-xs text-gray-500">
							Primary:{" "}
							{selectedExercise.primaryMuscles
								.map((muscle) => muscle.name)
								.join(", ")}
						</Text>
						<Text className="text-xs text-gray-400">
							Secondary:{" "}
							{selectedExercise.secondaryMuscles
								.map((muscle) => muscle.name)
								.join(", ")}
						</Text>
					</View>
					<TouchableOpacity
						onPress={() => onSelectExercise(null)}
						className="p-2 bg-blue-700 rounded-lg items-center mb-4"
					>
						<Text className="text-white text-lg">Change Exercise</Text>
					</TouchableOpacity>
				</View>
			) : (
				<View>
					<Text className="text-lg font-semibold text-gray-700 mb-2">
						Select Exercise:
					</Text>
					<ScrollView className="max-h-52 mb-4">
						{Exercise.all().map((exercise) => (
							<TouchableOpacity
								key={exercise.name}
								onPress={() => onSelectExercise(exercise)}
								className="p-2 bg-white rounded-lg mb-2"
							>
								<Text className="text-lg font-bold text-blue-700">
									{exercise.name}
								</Text>
								<Text className="text-xs text-gray-500">
									Primary:{" "}
									{exercise.primaryMuscles
										.map((muscle) => muscle.name)
										.join(", ")}
								</Text>
								<Text className="text-xs text-gray-400">
									Secondary:{" "}
									{exercise.secondaryMuscles
										.map((muscle) => muscle.name)
										.join(", ")}
								</Text>
							</TouchableOpacity>
						))}
					</ScrollView>
				</View>
			)}
		</View>
	);
};

export default ExerciseSelector;
