import { ScrollView, Text, View, useColorScheme } from "react-native";
import { useStore } from "../../store";
import ExerciseSetCard from "./ExerciseSetCard";

const ExerciseSetLog = () => {
	const { exerciseSets } = useStore();

	return (
		<ScrollView className="mx-2 px-2">
			{exerciseSets.map((exerciseSet) => (
				<View key={exerciseSet.id} className="mb-1">
					<ExerciseSetCard exerciseSet={exerciseSet} />
				</View>
			))}
			<View className="h-4" />
		</ScrollView>
	);
};

export default ExerciseSetLog;
