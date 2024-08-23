import { Temporal } from "@js-temporal/polyfill";
import { Text } from "react-native";
import type { Lift } from "../store";

interface LiftProps {
	lift: Lift;
}

const LiftListElement = ({ lift }: LiftProps) => {
	const liftDate = Temporal.PlainDateTime.from(lift.date);

	return (
		<Text className="text-md text-gray-800">
			{lift.type} - {lift.weight} kg x {lift.reps} reps on{" "}
			{liftDate.toLocaleString("en", {
				weekday: "short",
				day: "numeric",
				month: "short",
				year: "numeric",
				hour: "numeric",
				minute: "numeric",
			})}
		</Text>
	);
};

export default LiftListElement;
