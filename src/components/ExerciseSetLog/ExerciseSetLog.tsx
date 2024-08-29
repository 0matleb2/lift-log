import { ScrollView, View } from "react-native";
import { useStore } from "../../store";
import ExerciseSetLogItem from "./ExerciseSetLogItem";

const ExerciseSetLog = () => {
	const { exerciseSets } = useStore();

	return (
		<View className="flex-1 bg-gray-100">
			<ScrollView className="px-4 pb-4">
				{exerciseSets.map((exerciseSet) => (
					<ExerciseSetLogItem key={exerciseSet.id} exerciseSet={exerciseSet} />
				))}
			</ScrollView>
		</View>
	);
};

export default ExerciseSetLog;
