import { useState } from "react";
import { View, useColorScheme } from "react-native";
import ExerciseSetLog from "../components/ExerciseSetLog/ExerciseSetLog";
import AddExerciseSetButton from "../components/ExerciseSetLogger/AddExerciseSetButton";
import ExerciseSelect from "../components/ExerciseSetLogger/ExerciseSelect/ExerciseSelect";
import RepsStepper from "../components/ExerciseSetLogger/RepsStepper";
import WeightInput from "../components/ExerciseSetLogger/WeightInput/WeightInput";
import type Exercise from "../models/Exercise";
import { useStore } from "../store";

const HomeScreen = () => {
	const { addExerciseSet } = useStore();

	const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(
		null,
	);
	const [weight, setWeight] = useState<number | null>(null);
	const [reps, setReps] = useState<number>(8);

	const handleAddExerciseSet = () => {
		if (selectedExercise && weight !== null && reps > 0) {
			addExerciseSet({
				exercise: selectedExercise,
				reps,
				weight,
			});
		}
	};

	const isFormComplete =
		selectedExercise !== null && weight !== null && reps > 0;

	const incrementReps = () => setReps((prev) => Math.min(prev + 1, 20));
	const decrementReps = () => setReps((prev) => Math.max(prev - 1, 1));

	const colorScheme = useColorScheme();

	const backgroundColorClasses =
		colorScheme === "dark" ? "bg-background-dark" : "bg-background";

	return (
		<>
			<View className={`px-4 pt-8 pb-4 ${backgroundColorClasses}`}>
				<ExerciseSelect
					selectedExercise={selectedExercise}
					onSelectExercise={setSelectedExercise}
				/>

				<WeightInput onChangeWeight={setWeight} />

				<RepsStepper
					reps={reps}
					onIncrement={incrementReps}
					onDecrement={decrementReps}
				/>

				<AddExerciseSetButton
					onPress={handleAddExerciseSet}
					disabled={!isFormComplete}
				/>
			</View>
			<ExerciseSetLog />
		</>
	);
};

export default HomeScreen;
