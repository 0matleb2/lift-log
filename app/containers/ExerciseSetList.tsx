import { ScrollView, Text, View } from "react-native";
import ExerciseSetListItem from "../components/ExerciseSetListItem";
import { useStore } from "../store";

const ExerciseSetList = () => {
	const { exerciseSets } = useStore();

	return (
		<View className="flex-1 bg-gray-100">
			<ScrollView
				contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 16 }}
			>
				{exerciseSets.map((exerciseSet) => (
					<ExerciseSetListItem key={exerciseSet.id} exerciseSet={exerciseSet} />
				))}
			</ScrollView>
		</View>
	);
};

export default ExerciseSetList;
