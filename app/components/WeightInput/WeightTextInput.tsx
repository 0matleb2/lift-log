import { useEffect, useRef, useState } from "react";
import { Text, TextInput, TouchableOpacity } from "react-native";

interface WeightTextInputProps {
	initialText: string;
	onBlurText: (text: string) => void;
}

const WeightTextInput = ({ initialText, onBlurText }: WeightTextInputProps) => {
	const [text, setText] = useState(initialText);
	const textInputRef = useRef<TextInput>(null);

	const handleChangeText = (text: string) => {
		setText(text);
	};

	const handleFocusInput = () => {
		if (textInputRef.current) {
			textInputRef.current.focus();
		}
	};

	useEffect(() => {
		setText(initialText);
	}, [initialText]);

	return (
		<TouchableOpacity
			className="flex-1 flex-row items-center bg-white rounded-lg p-3"
			onPress={handleFocusInput}
		>
			<TextInput
				ref={textInputRef}
				keyboardType="numeric"
				value={text}
				onChangeText={handleChangeText}
				onBlur={() => onBlurText(text)}
				placeholder="Enter weight (lbs)"
				className="flex-1 bg-white rounded-lg text-lg"
			/>
			<Text className="text-lg">lbs</Text>
		</TouchableOpacity>
	);
};

export default WeightTextInput;
