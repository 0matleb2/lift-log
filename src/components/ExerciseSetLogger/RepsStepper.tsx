import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface RepsStepperProps {
	reps: number;
	onIncrement: () => void;
	onDecrement: () => void;
}

const RepsStepper = ({ reps, onIncrement, onDecrement }: RepsStepperProps) => {
	return (
		<View className="mb-4 flex-row items-center justify-center">
			<TouchableOpacity
				onPress={onDecrement}
				className="bg-white w-10 h-10 rounded-full justify-center items-center mr-3 border border-gray-300"
			>
				<Text className="text-gray-600 text-xl font-semibold">−</Text>
			</TouchableOpacity>

			<Text className="text-xl font-semibold text-gray-800">
				{reps} {reps === 1 ? "rep" : "reps"}
			</Text>

			<TouchableOpacity
				onPress={onIncrement}
				className="bg-white w-10 h-10 rounded-full justify-center items-center ml-3 border border-gray-300"
			>
				<Text className="text-gray-600 text-xl font-semibold">+</Text>
			</TouchableOpacity>
		</View>
	);
};

export default RepsStepper;
