import { Temporal } from "@js-temporal/polyfill";
import { Button, Text, View } from "react-native";
import LiftList from "../containers/LiftList";
import { useLiftStore } from "../store";

const HomeScreen = () => {
	const addLift = useLiftStore((state) => state.addLift);

	return (
		<View className="flex-1 items-center justify-center bg-gray-100">
			<Text className="text-2xl font-bold text-blue-600">
				Welcome to Lift Log!
			</Text>
			<Text className="text-lg text-gray-600">
				Track your lifts and progress
			</Text>

			<Button
				title="Add Lift"
				onPress={() =>
					addLift({
						type: "Squat",
						weight: 100,
						reps: 10,
					})
				}
			/>

			<LiftList />
		</View>
	);
};

export default HomeScreen;
