import { Text, View } from "react-native";
import LiftListElement from "../components/LiftListElement";
import { useLiftStore } from "../store";

const LiftList = () => {
	const { lifts } = useLiftStore();

	return (
		<View className="flex-1 items-center justify-center bg-gray-100">
			<Text className="text-lg text-gray-800 mt-4">Lifts:</Text>
			{lifts.map((lift) => (
				<LiftListElement key={lift.id} lift={lift} />
			))}
		</View>
	);
};

export default LiftList;
