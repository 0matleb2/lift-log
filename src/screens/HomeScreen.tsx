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
	const [weight, setWeight] = useState<number | null>(0);
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

	const incrementReps = () => setReps((prev) => prev + 1);
	const decrementReps = () => setReps((prev) => prev - 1);

	const colorScheme = useColorScheme();

	const backgroundColorClasses =
		colorScheme === "dark" ? "bg-background-dark" : "bg-background";

	return (
		<View className={`flex-1 pt-4 ${backgroundColorClasses}`}>
			<View className={"px-4"}>
				<ExerciseSelect
					selectedExercise={selectedExercise}
					onSelectExercise={setSelectedExercise}
				/>

				<WeightInput onChangeWeight={setWeight} />

				<View className="mt-4 flex-row items-center justify-center">
					<RepsStepper
						reps={reps}
						onIncrement={incrementReps}
						onDecrement={decrementReps}
						isIncrementDisabled={reps >= 100}
						isDecrementDisabled={reps <= 1}
					/>
					<View className="flex-1 ml-4">
						<AddExerciseSetButton
							onPress={handleAddExerciseSet}
							disabled={!isFormComplete}
						/>
					</View>
				</View>
			</View>
			<View className={`flex-1 mt-4`}>
				<ExerciseSetLog />
			</View>
		</View>
	);
};

export default HomeScreen;
