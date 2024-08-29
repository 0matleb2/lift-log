import { useEffect, useRef, useState } from "react";
import { Text, TextInput, TouchableOpacity } from "react-native";

interface WeightTextInputProps {
	initialText: string;
	onBlurText: (text: string) => void;
}

const WeightTextInput = ({ initialText, onBlurText }: WeightTextInputProps) => {
	const [text, setText] = useState(initialText);
	const textInputRef = useRef<TextInput>(null);

	useEffect(() => {
		setText(initialText);
	}, [initialText]);

	const handleFocusInput = () => {
		textInputRef.current?.focus();
	};

	return (
		<TouchableOpacity
			className="flex-1 flex-row items-center bg-white rounded-lg p-3"
			onPress={handleFocusInput}
			activeOpacity={1}
		>
			<TextInput
				ref={textInputRef}
				keyboardType="numeric"
				value={text}
				onChangeText={setText}
				onBlur={() => onBlurText(text)}
				placeholder="Enter weight (lbs)"
				className="flex-1 bg-white rounded-lg text-xl font-semibold text-gray-800"
			/>
			<Text className="text-xl font-semibold text-gray-800">lbs</Text>
		</TouchableOpacity>
	);
};

export default WeightTextInput;
