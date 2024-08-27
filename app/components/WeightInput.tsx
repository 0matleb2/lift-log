import { useEffect, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

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
	const addButtonClasses: string[] = [];
	const addTextClasses: string[] = [];
	const removeButtonClasses: string[] = [];
	const removeTextClasses: string[] = [];

	if (plateWeight === 45 || plateWeight === 5) {
		addButtonClasses.push(...["bg-blue-500", "border", "border-blue-700"]);
		addTextClasses.push(...["text-white"]);
		removeButtonClasses.push(
			...["bg-blue-200", "border", "border-transparent"],
		);
	} else if (plateWeight === 35) {
		addButtonClasses.push(...["bg-yellow-500", "border", "border-yellow-700"]);
		addTextClasses.push(...["text-black"]);
		removeButtonClasses.push(
			...["bg-yellow-200", "border", "border-transparent"],
		);
	} else if (plateWeight === 25 || plateWeight === 2.5) {
		addButtonClasses.push(...["bg-green-500", "border", "border-green-700"]);
		addTextClasses.push(...["text-white"]);
		removeButtonClasses.push(
			...["bg-green-200", "border", "border-transparent"],
		);
	} else if (plateWeight === 10 || plateWeight === 1.25) {
		addButtonClasses.push(...["bg-white", "border", "border-gray-400"]);
		addTextClasses.push(...["text-black"]);
		removeButtonClasses.push(
			...["bg-gray-200", "border", "border-transparent"],
		);
	}

	return (
		<View className="items-center">
			<TouchableOpacity
				className={`${addButtonClasses.join(" ")} px-2 rounded-full`}
				onPress={onPlateAdded}
			>
				<Text className={`${addTextClasses.join(" ")} text-lg`}>+</Text>
			</TouchableOpacity>
			<Text className="my-1.25 text-lg">{plateWeight}</Text>
			<TouchableOpacity
				className={`${removeButtonClasses.join(" ")} px-2 rounded-full`}
				onPress={onPlateRemoved}
			>
				<Text className={`${removeTextClasses.join(" ")} text-lg`}>–</Text>
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

type PlateCount = {
	"45": number;
	"35": number;
	"25": number;
	"10": number;
	"5": number;
	"2.5": number;
	"1.25": number;
};

const getOptimizedPlateCounts = (plateWeight: number) => {
	let weight = plateWeight;

	if (weight < 0) {
		weight = 0;
	}

	let fortyFivePlateCount = 0;
	let thirtyFivePlateCount = 0;
	let twentyFivePlateCount = 0;
	let tenPlateCount = 0;
	let fivePlateCount = 0;
	let twoPointFivePlateCount = 0;
	let onePointTwoFivePlateCount = 0;

	fortyFivePlateCount = Math.floor(weight / 90) * 2;
	let weightRemainder = weight % 90;
	thirtyFivePlateCount = Math.floor(weightRemainder / 70) * 2;
	weightRemainder = weightRemainder % 70;
	twentyFivePlateCount = Math.floor(weightRemainder / 50) * 2;
	weightRemainder = weightRemainder % 50;
	tenPlateCount = Math.floor(weightRemainder / 20) * 2;
	weightRemainder = weightRemainder % 20;
	fivePlateCount = Math.floor(weightRemainder / 10) * 2;
	weightRemainder = weightRemainder % 10;
	twoPointFivePlateCount = Math.floor(weightRemainder / 5) * 2;
	weightRemainder = weightRemainder % 5;
	onePointTwoFivePlateCount = Math.floor(weightRemainder / 2.5) * 2;

	return {
		"45": fortyFivePlateCount,
		"35": thirtyFivePlateCount,
		"25": twentyFivePlateCount,
		"10": tenPlateCount,
		"5": fivePlateCount,
		"2.5": twoPointFivePlateCount,
		"1.25": onePointTwoFivePlateCount,
	};
};

const getPlateWeight = (plateCounts: PlateCount) => {
	return (
		plateCounts["45"] * 45 +
		plateCounts["35"] * 35 +
		plateCounts["25"] * 25 +
		plateCounts["10"] * 10 +
		plateCounts["5"] * 5 +
		plateCounts["2.5"] * 2.5
	);
};

const WeightInput = ({
	onChangeWeight,
	initialWeight = 0,
	initialBarbell = false,
}: WeightInputProps) => {
	const [weight, setWeight] = useState<number>(
		initialBarbell && initialWeight < 45 ? 45 : initialWeight,
	);
	const [isBarbellAdded, setIsBarbellAdded] = useState(initialBarbell);
	const [plateCounts, setPlateCounts] = useState(
		getOptimizedPlateCounts(initialWeight - (initialBarbell ? 45 : 0)),
	);

	const handleToggleBarbell = () => {
		const updatedIsBarbellAdded = !isBarbellAdded;
		const updatedWeight =
			getPlateWeight(plateCounts) + (updatedIsBarbellAdded ? 45 : 0);
		setIsBarbellAdded(updatedIsBarbellAdded);
		setWeight(updatedWeight);
		onChangeWeight(updatedWeight);
	};

	const handleAddPlate = (plateWeight: number) => {
		const updatedPlateCounts = { ...plateCounts };
		const previousCount =
			updatedPlateCounts[
				plateWeight.toString() as keyof typeof updatedPlateCounts
			];
		updatedPlateCounts[
			plateWeight.toString() as keyof typeof updatedPlateCounts
		] = previousCount + 1;
		const updatedWeight =
			getPlateWeight(updatedPlateCounts) + (isBarbellAdded ? 45 : 0);
		setPlateCounts(updatedPlateCounts);
		setWeight(updatedWeight);
		onChangeWeight(updatedWeight);
	};

	const handleRemovePlate = (plateWeight: number) => {
		const updatedPlateCounts = { ...plateCounts };
		const previousCount =
			updatedPlateCounts[
				plateWeight.toString() as keyof typeof updatedPlateCounts
			];
		if (previousCount === 0) {
			return;
		}
		const updatedWeight =
			getPlateWeight(updatedPlateCounts) + (isBarbellAdded ? 45 : 0);
		updatedPlateCounts[
			plateWeight.toString() as keyof typeof updatedPlateCounts
		] = previousCount - 1;
		setPlateCounts(updatedPlateCounts);
		setWeight(updatedWeight);
		onChangeWeight(updatedWeight);
	};

	const handleBlurText = (text: string) => {
		if (!text) {
			setWeight(0);
			setPlateCounts(getOptimizedPlateCounts(0));
			return;
		}
		const updatedWeight = Number(Number.parseFloat(text).toFixed(2));
		let updatedIsBarbellAdded = isBarbellAdded;
		if (updatedWeight < 45) {
			updatedIsBarbellAdded = false;
		}
		setPlateCounts(
			getOptimizedPlateCounts(updatedWeight - (updatedIsBarbellAdded ? 45 : 0)),
		);
		setIsBarbellAdded(updatedIsBarbellAdded);
		setWeight(updatedWeight);
		onChangeWeight(updatedWeight);
	};

	const fortyFivePlateCount = plateCounts["45"];
	const thirtyFivePlateCount = plateCounts["35"];
	const twentyFivePlateCount = plateCounts["25"];
	const tenPlateCount = plateCounts["10"];
	const fivePlateCount = plateCounts["5"];
	const twoPointFivePlateCount = plateCounts["2.5"];
	const onePointTwoFivePlateCount = plateCounts["1.25"];

	const leftPlates = [];
	const rightPlates = [];

	for (let i = 0; i < fortyFivePlateCount; i++) {
		if (i % 2 === 0) {
			leftPlates.push(
				<View
					key={`45L-${i}`}
					className="w-2.5 h-16 bg-blue-500 border-b-8 border-b-blue-700 border-x border-x-blue-600 border-t-8 border-t-blue-400"
				/>,
			);
		} else {
			rightPlates.push(
				<View
					key={`45R-${i}`}
					className="w-2.5 h-16 bg-blue-500 border-b-8 border-b-blue-700 border-x border-x-blue-600 border-t-8 border-t-blue-400"
				/>,
			);
		}
	}
	for (let i = 0; i < thirtyFivePlateCount; i++) {
		if (i % 2 === 0) {
			leftPlates.push(
				<View
					key={`35L-${i}`}
					className="w-2.5 h-14 bg-yellow-500 border-b-8 border-b-yellow-700 border-x border-x-yellow-600 border-t-8 border-t-yellow-400"
				/>,
			);
		} else {
			rightPlates.push(
				<View
					key={`35R-${i}`}
					className="w-2.5 h-14 bg-yellow-500 border-b-8 border-b-yellow-700 border-x border-x-yellow-600 border-t-8 border-t-yellow-400"
				/>,
			);
		}
	}
	for (let i = 0; i < twentyFivePlateCount; i++) {
		if (i % 2 === 0) {
			leftPlates.push(
				<View
					key={`25L-${i}`}
					className="w-2.5 h-12 bg-green-500 border-b-8 border-b-green-700 border-x border-x-green-600 border-t-8 border-t-green-400"
				/>,
			);
		} else {
			rightPlates.push(
				<View
					key={`25R-${i}`}
					className="w-2.5 h-12 bg-green-500 border-b-8 border-b-green-700 border-x border-x-green-600 border-t-8 border-t-green-400"
				/>,
			);
		}
	}
	for (let i = 0; i < tenPlateCount; i++) {
		if (i % 2 === 0) {
			leftPlates.push(
				<View
					key={`10L-${i}`}
					className="w-2 h-10 bg-gray-50 border-b-8 border-b-gray-400 border-x border-x-slate-400 border-t-8 border-t-gray-200"
				/>,
			);
		} else {
			rightPlates.push(
				<View
					key={`10R-${i}`}
					className="w-2 h-10 bg-gray-50 border-b-8 border-b-gray-400 border-x border-x-slate-400 border-t-8 border-t-gray-200"
				/>,
			);
		}
	}
	for (let i = 0; i < fivePlateCount; i++) {
		if (i % 2 === 0) {
			leftPlates.push(
				<View
					key={`5L-${i}`}
					className="w-1.5 h-7 bg-blue-500 border-b-8 border-b-blue-700 border-x border-x-blue-600 border-t-8 border-t-blue-400"
				/>,
			);
		} else {
			rightPlates.push(
				<View
					key={`5R-${i}`}
					className="w-1.5 h-7 bg-blue-500 border-b-8 border-b-blue-700 border-x border-x-blue-600 border-t-8 border-t-blue-400"
				/>,
			);
		}
	}
	for (let i = 0; i < twoPointFivePlateCount; i++) {
		if (i % 2 === 0) {
			leftPlates.push(
				<View
					key={`2.5L-${i}`}
					className="w-1.5 h-5 bg-green-500 border-b-4 border-b-green-700 border-x border-x-green-600 border-t-4 border-t-green-400"
				/>,
			);
		} else {
			rightPlates.push(
				<View
					key={`2.5R-${i}`}
					className="w-1.5 h-5 bg-green-500 border-b-4 border-b-green-700 border-x border-x-green-600 border-t-4 border-t-green-400"
				/>,
			);
		}
	}
	for (let i = 0; i < onePointTwoFivePlateCount; i++) {
		if (i % 2 === 0) {
			leftPlates.push(
				<View
					key={`1.25L-${i}`}
					className="w-1.5 h-4  bg-gray-50 border-b-4 border-b-gray-400 border-x border-x-slate-400 border-t-4 border-t-gray-200"
				/>,
			);
		} else {
			rightPlates.push(
				<View
					key={`1.25R-${i}`}
					className="w-1.5 h-4  bg-gray-50 border-b-4 border-b-gray-400 border-x border-x-slate-400 border-t-4 border-t-gray-200"
				/>,
			);
		}
	}

	const isPlateViewAccurate = weight % 2.5 === 0;

	return (
		<View className="mb-2">
			<WeightTextInput
				initialText={weight.toString()}
				onBlurText={handleBlurText}
			/>
			<View
				className={`mb-2 p-2 min-h-16 flex-row items-center justify-center border rounded-xl ${isPlateViewAccurate ? "border-transparent" : "border-red-300 bg-red-50"}`}
			>
				{leftPlates.reverse()}
				{getPlateWeight(plateCounts) !== 0 && (
					<View
						className={`${isBarbellAdded ? "flex-1" : "w-6"} h-2.5 bg-slate-300 border-b-2 border-slate-400 border-t-2 border-t-slate-200`}
					/>
				)}
				{rightPlates}
			</View>
			<View className="flex-row justify-around mb-2">
				<TouchableOpacity
					onPress={handleToggleBarbell}
					className={`p-1 rounded-full border ${isBarbellAdded ? "bg-gray-300 border-gray-500" : "bg-gray-200 border-transparent"} justify-center`}
				>
					{isBarbellAdded ? (
						<Text className="text-2xl">🏋️</Text>
					) : (
						<Text className="text-2xl opacity-50">🏋️</Text>
					)}
				</TouchableOpacity>
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
				<PlateStepper
					plateWeight={1.25}
					onPlateAdded={() => handleAddPlate(1.25)}
					onPlateRemoved={() => handleRemovePlate(1.25)}
				/>
			</View>
		</View>
	);
};

export default WeightInput;
