import { useState } from "react";
import { Alert, View } from "react-native";
import AddExerciseSetButton from "../components/AddExerciseSetButton";
import ExerciseSelector from "../components/ExerciseSelector";
import RepsStepper from "../components/RepsStepper";
import WeightInput from "../components/WeightInput";
import ExerciseSetList from "../containers/ExerciseSetList";
import type Exercise from "../models/Exercise";
import { useStore } from "../store";

const HomeScreen = () => {
	const { addExerciseSet } = useStore();

	const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(
		null,
	);
	const [weight, setWeight] = useState<string>("");
	const [reps, setReps] = useState<number>(8); // Use number for reps with default value

	const handleAddExerciseSet = () => {
		if (selectedExercise && weight && reps) {
			addExerciseSet({
				exercise: selectedExercise,
				reps,
				weight: Number.parseFloat(weight),
			});
		} else {
			Alert.alert("Error", "Please fill out all fields before adding a set.");
		}
	};

	const handleChangeWeight = (weight: number) => {
		setWeight(weight.toString());
	};

	const isFormComplete = !!(selectedExercise && weight && reps);

	const incrementReps = () => setReps((prev) => Math.min(prev + 1, 20));
	const decrementReps = () => setReps((prev) => Math.max(prev - 1, 1));

	return (
		<>
			<View className="p-4 bg-gray-100">
				<ExerciseSelector
					selectedExercise={selectedExercise}
					onSelectExercise={setSelectedExercise}
				/>

				<WeightInput onChangeWeight={handleChangeWeight} />

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
			<View className="flex-1 bg-gray-100">
				<ExerciseSetList />
			</View>
		</>
	);
};

export default HomeScreen;
