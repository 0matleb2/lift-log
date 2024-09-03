import {
	ScrollView,
	Text,
	TouchableOpacity,
	View,
	useColorScheme,
} from "react-native";
import Exercise from "../../../models/Exercise";
import ExerciseCard from "./ExerciseCard";

interface ExerciseSelectProps {
	selectedExercise: Exercise | null;
	onSelectExercise: (exercise: Exercise | null) => void;
}

const ExerciseSelect = ({
	selectedExercise,
	onSelectExercise,
}: ExerciseSelectProps) => {
	const colorScheme = useColorScheme();
	const titleTextColorClasses =
		colorScheme === "dark" ? "text-title-text-dark" : "text-title-text";

	return (
		<View className="mt-4">
			<Text className={`text-lg font-semibold ${titleTextColorClasses} mb-2`}>
				{selectedExercise ? "Selected Exercise:" : "Select Exercise:"}
			</Text>

			{selectedExercise ? (
				<TouchableOpacity onPress={() => onSelectExercise(null)}>
					<ExerciseCard exercise={selectedExercise} />
				</TouchableOpacity>
			) : (
				<ScrollView className="max-h-80">
					{Exercise.all().map((exercise) => (
						<TouchableOpacity
							key={exercise.name}
							onPress={() => onSelectExercise(exercise)}
							className="mb-2"
						>
							<ExerciseCard exercise={exercise} />
						</TouchableOpacity>
					))}
				</ScrollView>
			)}
		</View>
	);
};

export default ExerciseSelect;
