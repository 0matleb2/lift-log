import { useEffect, useRef, useState } from "react";
import {
	Text,
	TextInput,
	TouchableOpacity,
	useColorScheme,
} from "react-native";

interface WeightTextInputProps {
	initialText: string;
	onBlurText: (text: string) => void;
}

const WeightTextInput = ({ initialText, onBlurText }: WeightTextInputProps) => {
	const [text, setText] = useState(initialText);
	const textInputRef = useRef<TextInput>(null);
	const colorScheme = useColorScheme();

	useEffect(() => {
		setText(initialText);
	}, [initialText]);

	const handleFocusInput = () => {
		textInputRef.current?.focus();
	};

	const backgroundColorClasses =
		colorScheme === "dark" ? "bg-card-background-dark" : "bg-card-background";
	const textColorClasses =
		colorScheme === "dark" ? "text-primary-text-dark" : "text-primary-text";

	return (
		<TouchableOpacity
			className={`flex-1 flex-row items-center ${backgroundColorClasses} rounded-lg p-2`}
			onPress={handleFocusInput}
			activeOpacity={1}
		>
			<TextInput
				ref={textInputRef}
				keyboardType="numeric"
				value={text}
				onChangeText={setText}
				onBlur={() => onBlurText(text)}
				className={`flex-1 ${backgroundColorClasses} rounded-lg text-xl font-semibold ${textColorClasses}`}
			/>
			<Text className={`text-xl font-semibold ${textColorClasses}`}>lbs</Text>
		</TouchableOpacity>
	);
};

export default WeightTextInput;
