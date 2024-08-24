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
				style={{
					backgroundColor: "#fff",
					width: 40,
					height: 40,
					borderRadius: 20,
					justifyContent: "center",
					alignItems: "center",
					marginRight: 12,
					borderWidth: 1,
					borderColor: "#E5E7EB",
				}}
			>
				<Text style={{ color: "#4B5563", fontSize: 20, fontWeight: "600" }}>
					−
				</Text>
			</TouchableOpacity>

			<Text style={{ fontSize: 20, fontWeight: "500", color: "#374151" }}>
				{reps} Reps
			</Text>

			<TouchableOpacity
				onPress={onIncrement}
				style={{
					backgroundColor: "#fff",
					width: 40,
					height: 40,
					borderRadius: 20,
					justifyContent: "center",
					alignItems: "center",
					marginLeft: 12,
					borderWidth: 1,
					borderColor: "#E5E7EB",
				}}
			>
				<Text style={{ color: "#4B5563", fontSize: 20, fontWeight: "600" }}>
					+
				</Text>
			</TouchableOpacity>
		</View>
	);
};

export default RepsStepper;
