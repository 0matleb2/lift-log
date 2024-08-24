import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import Exercise from "../models/Exercise";

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
				// Display the selected exercise
				<View>
					<Text className="text-lg font-semibold text-gray-700 mb-2">
						Selected Exercise:
					</Text>
					<View
						style={{
							paddingVertical: 8,
							paddingHorizontal: 12,
							backgroundColor: "#fff",
							borderRadius: 8,
							marginBottom: 8,
						}}
					>
						<Text
							style={{ fontSize: 16, fontWeight: "bold", color: "#1E40AF" }}
						>
							{selectedExercise.name}
						</Text>
						<Text style={{ fontSize: 12, color: "#6B7280" }}>
							Primary:{" "}
							{selectedExercise.primaryMuscles
								.map((muscle) => muscle.name)
								.join(", ")}
						</Text>
						<Text style={{ fontSize: 12, color: "#9CA3AF" }}>
							Secondary:{" "}
							{selectedExercise.secondaryMuscles
								.map((muscle) => muscle.name)
								.join(", ")}
						</Text>
					</View>
					<TouchableOpacity
						onPress={() => onSelectExercise(null)} // Allow changing the selection
						style={{
							paddingVertical: 8,
							paddingHorizontal: 12,
							backgroundColor: "#1E40AF",
							borderRadius: 8,
							alignItems: "center",
							marginBottom: 16,
						}}
					>
						<Text style={{ color: "#fff", fontSize: 16 }}>Change Exercise</Text>
					</TouchableOpacity>
				</View>
			) : (
				// Display the exercise selection view
				<>
					<Text className="text-lg font-semibold text-gray-700 mb-2">
						Select Exercise:
					</Text>
					<ScrollView style={{ maxHeight: 200, marginBottom: 16 }}>
						{Exercise.all().map((exercise) => (
							<TouchableOpacity
								key={exercise.name}
								onPress={() => onSelectExercise(exercise)}
								style={{
									paddingVertical: 8,
									paddingHorizontal: 12,
									backgroundColor: "#fff",
									borderRadius: 8,
									marginBottom: 8,
								}}
							>
								<Text
									style={{
										fontSize: 16,
										fontWeight: "bold",
										color: "#1E40AF",
									}}
								>
									{exercise.name}
								</Text>
								<Text style={{ fontSize: 12, color: "#6B7280" }}>
									Primary:{" "}
									{exercise.primaryMuscles
										.map((muscle) => muscle.name)
										.join(", ")}
								</Text>
								<Text style={{ fontSize: 12, color: "#9CA3AF" }}>
									Secondary:{" "}
									{exercise.secondaryMuscles
										.map((muscle) => muscle.name)
										.join(", ")}
								</Text>
							</TouchableOpacity>
						))}
					</ScrollView>
				</>
			)}
		</View>
	);
};

export default ExerciseSelector;
