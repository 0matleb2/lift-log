import { useEffect, useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

interface WeightInputProps {
	weight: string;
	onChangeWeight: (weight: string) => void;
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
			<Button title="+" onPress={onPlateAdded} color="#007bff" />
			<Text className="my-1.25">{`${plateWeight} lbs`}</Text>
			<Button title="–" onPress={onPlateRemoved} color="#dc3545" />
		</View>
	);
};

const WeightInput = ({ weight = "0", onChangeWeight }: WeightInputProps) => {
	const [isBarbellAdded, setIsBarbellAdded] = useState(false);
	const [fortyFivePlateCount, setFortyFivePlateCount] = useState(0);
	const [thirtyFivePlateCount, setThirtyFivePlateCount] = useState(0);
	const [twentyFivePlateCount, setTwentyFivePlateCount] = useState(0);
	const [tenPlateCount, setTenPlateCount] = useState(0);
	const [fivePlateCount, setFivePlateCount] = useState(0);
	const [twoPointFivePlateCount, setTwoPointFivePlateCount] = useState(0);

	const handleToggleBarbell = () => {
		const barbellWeight = 45;
		let updatedWeight = Number.parseFloat(weight);

		if (!isBarbellAdded) {
			updatedWeight += barbellWeight;
		} else {
			updatedWeight -= barbellWeight;
		}

		setIsBarbellAdded(!isBarbellAdded);
		onChangeWeight(updatedWeight.toString());
	};

	const handleAddPlate = (plateWeight: number) => {
		if (plateWeight === 45) {
			setFortyFivePlateCount(fortyFivePlateCount + 1);
		} else if (plateWeight === 35) {
			setThirtyFivePlateCount(thirtyFivePlateCount + 1);
		} else if (plateWeight === 25) {
			setTwentyFivePlateCount(twentyFivePlateCount + 1);
		} else if (plateWeight === 10) {
			setTenPlateCount(tenPlateCount + 1);
		} else if (plateWeight === 5) {
			setFivePlateCount(fivePlateCount + 1);
		} else if (plateWeight === 2.5) {
			setTwoPointFivePlateCount(twoPointFivePlateCount + 1);
		}
	};

	const handleRemovePlate = (plateWeight: number) => {
		if (plateWeight === 45 && fortyFivePlateCount > 0) {
			setFortyFivePlateCount(fortyFivePlateCount - 1);
		} else if (plateWeight === 35 && thirtyFivePlateCount > 0) {
			setThirtyFivePlateCount(thirtyFivePlateCount - 1);
		} else if (plateWeight === 25 && twentyFivePlateCount > 0) {
			setTwentyFivePlateCount(twentyFivePlateCount - 1);
		} else if (plateWeight === 10 && tenPlateCount > 0) {
			setTenPlateCount(tenPlateCount - 1);
		} else if (plateWeight === 5 && fivePlateCount > 0) {
			setFivePlateCount(fivePlateCount - 1);
		} else if (plateWeight === 2.5 && twoPointFivePlateCount > 0) {
			setTwoPointFivePlateCount(twoPointFivePlateCount - 1);
		}
	};

	useEffect(() => {
		onChangeWeight(
			(
				fortyFivePlateCount * 45 +
				thirtyFivePlateCount * 35 +
				twentyFivePlateCount * 25 +
				tenPlateCount * 10 +
				fivePlateCount * 5 +
				twoPointFivePlateCount * 2.5 +
				(isBarbellAdded ? 1 : 0) * 45
			).toString(),
		);
	}, [
		onChangeWeight,
		fortyFivePlateCount,
		thirtyFivePlateCount,
		twentyFivePlateCount,
		tenPlateCount,
		fivePlateCount,
		twoPointFivePlateCount,
		isBarbellAdded,
	]);

	// Handle keyboard input
	const handleChangeText = (text: string) => {
		setIsBarbellAdded(false);
		setFortyFivePlateCount(0); // Reset plate count if manual input is used
		onChangeWeight(text);
	};

	// Generate rectangles based on plateCount
	const leftPlates = [];
	const rightPlates = [];
	for (let i = 0; i < fortyFivePlateCount; i++) {
		if (i % 2 === 0) {
			leftPlates.push(
				<View
					key={`45L-${i}`}
					className="w-2 h-14 bg-blue-500 border border-gray-500"
				/>,
			);
		} else {
			rightPlates.push(
				<View
					key={`45R-${i}`}
					className="w-2 h-14 bg-blue-500 border border-gray-500"
				/>,
			);
		}
	}
	for (let i = 0; i < thirtyFivePlateCount; i++) {
		if (i % 2 === 0) {
			leftPlates.push(
				<View
					key={`35L-${i}`}
					className="w-2 h-12 bg-yellow-500 border border-gray-500"
				/>,
			);
		} else {
			rightPlates.push(
				<View
					key={`35R-${i}`}
					className="w-2 h-12 bg-yellow-500 border border-gray-500"
				/>,
			);
		}
	}
	for (let i = 0; i < twentyFivePlateCount; i++) {
		if (i % 2 === 0) {
			leftPlates.push(
				<View
					key={`25L-${i}`}
					className="w-2 h-10 bg-green-500 border border-gray-500"
				/>,
			);
		} else {
			rightPlates.push(
				<View
					key={`25R-${i}`}
					className="w-2 h-10 bg-green-500 border border-gray-500"
				/>,
			);
		}
	}
	for (let i = 0; i < tenPlateCount; i++) {
		if (i % 2 === 0) {
			leftPlates.push(
				<View
					key={`10L-${i}`}
					className="w-1 h-8 bg-white border border-gray-500"
				/>,
			);
		} else {
			rightPlates.push(
				<View
					key={`10R-${i}`}
					className="w-1 h-8 bg-white border border-gray-500"
				/>,
			);
		}
	}
	for (let i = 0; i < fivePlateCount; i++) {
		if (i % 2 === 0) {
			leftPlates.push(
				<View
					key={`5L-${i}`}
					className="w-1 h-6 bg-blue-500 border border-gray-500"
				/>,
			);
		} else {
			rightPlates.push(
				<View
					key={`5R-${i}`}
					className="w-1 h-6 bg-blue-500 border border-gray-500"
				/>,
			);
		}
	}
	for (let i = 0; i < twoPointFivePlateCount; i++) {
		if (i % 2 === 0) {
			leftPlates.push(
				<View
					key={`2.5L-${i}`}
					className="w-1 h-4 bg-green-500 border border-gray-500"
				/>,
			);
		} else {
			rightPlates.push(
				<View
					key={`2.5R-${i}`}
					className="w-1 h-4 bg-green-500 border border-gray-500"
				/>,
			);
		}
	}

	return (
		<View className="mb-4">
			<TextInput
				keyboardType="numeric"
				value={weight}
				onChangeText={handleChangeText}
				placeholder="Enter weight (lbs)"
				className="w-full p-3 bg-white rounded-lg shadow-sm"
			/>
			<View className="flex-row items-center justify-center mb-4">
				{leftPlates.reverse()}
				<Button
					title="Barbell"
					onPress={handleToggleBarbell}
					color={isBarbellAdded ? "#007bff" : "#cccccc"} // Change color based on state
				/>
				{rightPlates}
			</View>
			<View className="flex-row justify-around my-2.5">
				<PlateStepper
					plateWeight={45}
					onPlateAdded={() => handleAddPlate(45)}
					onPlateRemoved={() => handleRemovePlate(45)}
				/>
				<PlateStepper
					plateWeight={35}
					onPlateAdded={() => handleAddPlate(35)}
					onPlateRemoved={() => handleRemovePlate(35)}
				/>
				<PlateStepper
					plateWeight={25}
					onPlateAdded={() => handleAddPlate(25)}
					onPlateRemoved={() => handleRemovePlate(25)}
				/>
				<PlateStepper
					plateWeight={10}
					onPlateAdded={() => handleAddPlate(10)}
					onPlateRemoved={() => handleRemovePlate(10)}
				/>
				<PlateStepper
					plateWeight={5}
					onPlateAdded={() => handleAddPlate(5)}
					onPlateRemoved={() => handleRemovePlate(5)}
				/>
				<PlateStepper
					plateWeight={2.5}
					onPlateAdded={() => handleAddPlate(2.5)}
					onPlateRemoved={() => handleRemovePlate(2.5)}
				/>
			</View>
		</View>
	);
};

export default WeightInput;
