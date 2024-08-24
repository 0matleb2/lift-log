import { Temporal } from "@js-temporal/polyfill";
import AsyncStorage from "@react-native-async-storage/async-storage";
import uuid from "react-native-uuid";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import type { ExerciseSet } from "./models/ExerciseSet";

interface Store {
	exerciseSets: ExerciseSet[];
	addExerciseSet: (lift: Omit<ExerciseSet, "id" | "date">) => void;
}

export const useStore = create<Store>()(
	persist(
		(set) => ({
			exerciseSets: [],
			addExerciseSet: (exerciseSet) =>
				set((state) => ({
					exerciseSets: [
						{
							...exerciseSet,
							id: uuid.v4().toString(),
							date: Temporal.Now.plainDateTimeISO().toString(),
						},
						...state.exerciseSets,
					],
				})),
		}),
		{
			name: "exercise-set-stor2",
			storage: createJSONStorage(() => AsyncStorage),
		},
	),
);
