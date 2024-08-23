import { Temporal } from "@js-temporal/polyfill"; // Import Temporal API
import AsyncStorage from "@react-native-async-storage/async-storage";
import uuid from "react-native-uuid";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export interface Lift {
	id: string;
	type: string;
	weight: number;
	reps: number;
	date: string;
}

interface LiftStoreState {
	lifts: Lift[];
	addLift: (lift: Omit<Lift, "id" | "date">) => void;
}

export const useLiftStore = create<LiftStoreState>()(
	persist(
		(set) => ({
			lifts: [],
			addLift: (lift) =>
				set((state) => ({
					lifts: [
						{
							...lift,
							id: uuid.v4().toString(),
							date: Temporal.Now.plainDateTimeISO().toString(),
						},
						...state.lifts,
					],
				})),
		}),
		{
			name: "lift-store",
			storage: createJSONStorage(() => AsyncStorage),
		},
	),
);
