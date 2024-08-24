import React from "react";
import { TextInput, View } from "react-native";

interface WeightInputProps {
	weight: string;
	onChangeWeight: (weight: string) => void;
}

const WeightInput = ({ weight, onChangeWeight }: WeightInputProps) => {
	return (
		<View className="mb-4">
			<TextInput
				keyboardType="numeric"
				value={weight}
				onChangeText={onChangeWeight}
				placeholder="Enter weight (lbs)"
				className="w-full p-3 bg-white rounded-lg shadow-sm"
			/>
		</View>
	);
};

export default WeightInput;
