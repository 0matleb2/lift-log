import { Text, TouchableOpacity } from "react-native";

interface AddExerciseSetButtonProps {
	onPress: () => void;
	disabled: boolean;
}

const AddExerciseSetButton = ({
	onPress,
	disabled,
}: AddExerciseSetButtonProps) => {
	return (
		<TouchableOpacity
			onPress={onPress}
			disabled={disabled}
			style={{
				backgroundColor: disabled ? "#A5B4FC" : "#1E40AF", // Lighter color when disabled
				paddingVertical: 12,
				borderRadius: 8,
				alignItems: "center",
			}}
		>
			<Text style={{ color: "#fff", fontSize: 16, fontWeight: "bold" }}>
				Add Exercise Set
			</Text>
		</TouchableOpacity>
	);
};

export default AddExerciseSetButton;
