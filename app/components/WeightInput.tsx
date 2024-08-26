import { useEffect, useState } from "react";
import {
	Button,
	type NativeSyntheticEvent,
	Text,
	TextInput,
	type TextInputFocusEventData,
	TouchableOpacity,
	View,
} from "react-native";

interface WeightInputProps {
	onChangeWeight: (weight: number) => void;
	initialWeight?: number;
	initialBarbell?: boolean;
}

interface PlateStepperProps {
	plateWeight: number;
	onPlateAdded: () => void;
	onPlateRemoved: () => void;
}

const PlateStepper = ({
	plateWeight,
	onPlateAdded,
	onPlateRemoved,
}: PlateStepperProps) => {
	return (
		<View className="items-center">
			<TouchableOpacity
				className="bg-blue-500 px-2 py-1 rounded"
				onPress={onPlateAdded}
			>
				<Text className="text-white">+</Text>
			</TouchableOpacity>
			<Text className="my-1.25">{plateWeight}</Text>
			<TouchableOpacity
				className="bg-red-400 px-2 py-1 rounded"
				onPress={onPlateAdded}
			>
				<Text className="text-black">+</Text>
			</TouchableOpacity>
		</View>
	);
};

interface WeightTextInputProps {
	initialText: string;
	onBlurText: (text: string) => void;
}

const WeightTextInput = ({ initialText, onBlurText }: WeightTextInputProps) => {
	const [text, setText] = useState(initialText);

	const handleChangeText = (text: string) => {
		setText(text);
	};

	useEffect(() => {
		setText(initialText);
	}, [initialText]);

	return (
		<TextInput
			keyboardType="numeric"
			value={text}
			onChangeText={handleChangeText}
			onBlur={() => onBlurText(text)}
			placeholder="Enter weight (lbs)"
			className="w-full p-3 bg-white rounded-lg shadow-sm mb-2"
		/>
	);
};

const WeightInput = ({
	onChangeWeight,
	initialWeight = 0,
	initialBarbell = true,
}: WeightInputProps) => {
	const [weight, setWeight] = useState<number>(
		initialBarbell && initialWeight < 45 ? 45 : initialWeight,
	);
	const [isBarbellAdded, setIsBarbellAdded] = useState(initialBarbell);

	const handleToggleBarbell = () => {
		let updatedWeight = Number(
			(weight + 45 * (isBarbellAdded ? -1 : 1)).toFixed(2),
		);
		if (updatedWeight < 0) {
			updatedWeight = 0;
		}
		setIsBarbellAdded(!isBarbellAdded);
		setWeight(updatedWeight);
		onChangeWeight(updatedWeight);
	};

	const handleAddWeight = (weightToAdd: number) => {
		const updatedWeight = Number((weight + weightToAdd).toFixed(2));
		setWeight(updatedWeight);
		onChangeWeight(updatedWeight);
	};

	const handleRemoveWeight = (weightToRemove: number) => {
		let updatedWeight = Number((weight - weightToRemove).toFixed(2));

		if (updatedWeight < 0) {
			updatedWeight = 0;
		}

		setWeight(updatedWeight);
		onChangeWeight(updatedWeight);
	};

	const handleBlurText = (text: string) => {
		if (!text) {
			setWeight(0);
			return;
		}
		const updatedWeight = Number(Number.parseFloat(text).toFixed(2));
		if (updatedWeight < 45) {
			setIsBarbellAdded(false);
		}
		setWeight(updatedWeight);
		onChangeWeight(updatedWeight);
	};

	let fortyFivePlateCount = 0;
	let thirtyFivePlateCount = 0;
	let twentyFivePlateCount = 0;
	let tenPlateCount = 0;
	let fivePlateCount = 0;
	let twoPointFivePlateCount = 0;

	if (isBarbellAdded) {
		let plateWeight = weight - 45;
		if (plateWeight < 0) {
			plateWeight = 0;
		}
		fortyFivePlateCount = Math.floor(plateWeight / 90) * 2;
		let remainder = plateWeight % 90;
		thirtyFivePlateCount = Math.floor(remainder / 70) * 2;
		remainder = remainder % 70;
		twentyFivePlateCount = Math.floor(remainder / 50) * 2;
		remainder = remainder % 50;
		tenPlateCount = Math.floor(remainder / 20) * 2;
		remainder = remainder % 20;
		fivePlateCount = Math.floor(remainder / 10) * 2;
		remainder = remainder % 10;
		twoPointFivePlateCount = Math.floor(remainder / 5) * 2;
	} else {
		const plateWeight = weight;
		fortyFivePlateCount = Math.floor(plateWeight / 45);
		let remainder = plateWeight % 45;
		thirtyFivePlateCount = Math.floor(remainder / 35);
		remainder = remainder % 35;
		twentyFivePlateCount = Math.floor(remainder / 25);
		remainder = remainder % 25;
		tenPlateCount = Math.floor(remainder / 10);
		remainder = remainder % 10;
		fivePlateCount = Math.floor(remainder / 5);
		remainder = remainder % 5;
		twoPointFivePlateCount = Math.floor(remainder / 2.5);
	}

	const leftPlates = [];
	const rightPlates = [];

	for (let i = 0; i < fortyFivePlateCount; i++) {
		if (i % 2 === 0) {
			leftPlates.push(
				<View
					key={`45L-${i}`}
					className="w-3 h-14 bg-blue-500 border border-blue-600"
				/>,
			);
		} else {
			rightPlates.push(
				<View
					key={`45R-${i}`}
					className="w-3 h-14 bg-blue-500 border border-blue-600"
				/>,
			);
		}
	}
	for (let i = 0; i < thirtyFivePlateCount; i++) {
		if (i % 2 === 0) {
			leftPlates.push(
				<View
					key={`35L-${i}`}
					className="w-3 h-12 bg-yellow-500 border border-yellow-600"
				/>,
			);
		} else {
			rightPlates.push(
				<View
					key={`35R-${i}`}
					className="w-3 h-12 bg-yellow-500 border border-yellow-600"
				/>,
			);
		}
	}
	for (let i = 0; i < twentyFivePlateCount; i++) {
		if (i % 2 === 0) {
			leftPlates.push(
				<View
					key={`25L-${i}`}
					className="w-3 h-10 bg-green-500 border border-green-600"
				/>,
			);
		} else {
			rightPlates.push(
				<View
					key={`25R-${i}`}
					className="w-3 h-10 bg-green-500 border border-green-600"
				/>,
			);
		}
	}
	for (let i = 0; i < tenPlateCount; i++) {
		if (i % 2 === 0) {
			leftPlates.push(
				<View
					key={`10L-${i}`}
					className="w-2 h-8 bg-white border border-gray-400"
				/>,
			);
		} else {
			rightPlates.push(
				<View
					key={`10R-${i}`}
					className="w-2 h-8 bg-white border border-gray-400"
				/>,
			);
		}
	}
	for (let i = 0; i < fivePlateCount; i++) {
		if (i % 2 === 0) {
			leftPlates.push(
				<View
					key={`5L-${i}`}
					className="w-2 h-6 bg-blue-500 border border-blue-600"
				/>,
			);
		} else {
			rightPlates.push(
				<View
					key={`5R-${i}`}
					className="w-2 h-6 bg-blue-500 border border-blue-600"
				/>,
			);
		}
	}
	for (let i = 0; i < twoPointFivePlateCount; i++) {
		if (i % 2 === 0) {
			leftPlates.push(
				<View
					key={`2.5L-${i}`}
					className="w-2 h-4 bg-green-500 border border-green-600"
				/>,
			);
		} else {
			rightPlates.push(
				<View
					key={`2.5R-${i}`}
					className="w-2 h-4 bg-green-500 border border-green-600"
				/>,
			);
		}
	}

	return (
		<View className="mb-2">
			<WeightTextInput
				initialText={weight.toString()}
				onBlurText={handleBlurText}
			/>
			<View className="flex-row items-center justify-center mb-2">
				{leftPlates.reverse()}
				<Button
					title="Barbell"
					onPress={handleToggleBarbell}
					color={isBarbellAdded ? "#007bff" : "#cccccc"}
				/>
				{rightPlates}
			</View>
			<View className="flex-row justify-around mb-2">
				<PlateStepper
					plateWeight={45}
					onPlateAdded={() => handleAddWeight(45)}
					onPlateRemoved={() => handleRemoveWeight(45)}
				/>
				<PlateStepper
					plateWeight={35}
					onPlateAdded={() => handleAddWeight(35)}
					onPlateRemoved={() => handleRemoveWeight(35)}
				/>
				<PlateStepper
					plateWeight={25}
					onPlateAdded={() => handleAddWeight(25)}
					onPlateRemoved={() => handleRemoveWeight(25)}
				/>
				<PlateStepper
					plateWeight={10}
					onPlateAdded={() => handleAddWeight(10)}
					onPlateRemoved={() => handleRemoveWeight(10)}
				/>
				<PlateStepper
					plateWeight={5}
					onPlateAdded={() => handleAddWeight(5)}
					onPlateRemoved={() => handleRemoveWeight(5)}
				/>
				<PlateStepper
					plateWeight={2.5}
					onPlateAdded={() => handleAddWeight(2.5)}
					onPlateRemoved={() => handleRemoveWeight(2.5)}
				/>
			</View>
		</View>
	);
};

export default WeightInput;
