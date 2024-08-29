import Muscle from "./Muscle";

class Exercise {
	name: string;
	primaryMuscles: Muscle[];
	secondaryMuscles: Muscle[];

	private constructor(
		name: string,
		primaryMuscles: Muscle[],
		secondaryMuscles: Muscle[],
	) {
		this.name = name;
		this.primaryMuscles = primaryMuscles;
		this.secondaryMuscles = secondaryMuscles;
	}

	static Squat = new Exercise(
		"Squat",
		[Muscle.Quadriceps, Muscle.GluteusMaximus],
		[
			Muscle.Hamstrings,
			Muscle.ErectorSpinae,
			Muscle.Gastrocnemius,
			Muscle.RectusAbdominis,
		],
	);

	static Deadlift = new Exercise(
		"Deadlift",
		[Muscle.Hamstrings, Muscle.GluteusMaximus, Muscle.ErectorSpinae],
		[
			Muscle.LatissimusDorsi,
			Muscle.Trapezius,
			Muscle.ForearmFlexors,
			Muscle.RectusAbdominis,
			Muscle.Quadriceps,
		],
	);

	static BenchPress = new Exercise(
		"Bench Press",
		[Muscle.PectoralisMajor],
		[Muscle.TricepsBrachii, Muscle.Deltoids, Muscle.RectusAbdominis],
	);

	static OverheadPress = new Exercise(
		"Overhead Press (Military Press)",
		[Muscle.Deltoids],
		[
			Muscle.TricepsBrachii,
			Muscle.PectoralisMajorClavicular,
			Muscle.RectusAbdominis,
		],
	);

	static BentOverRow = new Exercise(
		"Bent-Over Row",
		[Muscle.LatissimusDorsi, Muscle.Rhomboids],
		[Muscle.BicepsBrachii, Muscle.Infraspinatus, Muscle.ErectorSpinae],
	);

	static PullUp = new Exercise(
		"Pull-Up/Chin-Up",
		[Muscle.LatissimusDorsi, Muscle.BicepsBrachii],
		[Muscle.Rhomboids, Muscle.Deltoids, Muscle.RectusAbdominis],
	);

	static BarbellCurl = new Exercise(
		"Barbell/Dumbbell Curl",
		[Muscle.BicepsBrachii],
		[Muscle.Brachialis, Muscle.ForearmFlexors],
	);

	static TricepDips = new Exercise(
		"Tricep Dips",
		[Muscle.TricepsBrachii],
		[Muscle.PectoralisMajor, Muscle.Deltoids],
	);

	static Lunge = new Exercise(
		"Lunge",
		[Muscle.Quadriceps, Muscle.GluteusMaximus],
		[Muscle.Hamstrings, Muscle.Gastrocnemius, Muscle.RectusAbdominis],
	);

	static LegPress = new Exercise(
		"Leg Press",
		[Muscle.Quadriceps, Muscle.GluteusMaximus],
		[Muscle.Hamstrings, Muscle.Gastrocnemius],
	);

	static LegCurl = new Exercise(
		"Leg Curl",
		[Muscle.Hamstrings],
		[Muscle.Gastrocnemius],
	);

	static LegExtension = new Exercise("Leg Extension", [Muscle.Quadriceps], []);

	static CalfRaise = new Exercise(
		"Calf Raise",
		[Muscle.Gastrocnemius],
		[Muscle.Soleus],
	);

	static Shrugs = new Exercise(
		"Shrugs",
		[Muscle.Trapezius],
		[Muscle.ForearmFlexors, Muscle.Deltoids],
	);

	static FacePull = new Exercise(
		"Face Pull",
		[Muscle.Deltoids, Muscle.Rhomboids],
		[Muscle.BicepsBrachii, Muscle.ForearmExtensors],
	);

	static InclineBenchPress = new Exercise(
		"Incline Bench Press",
		[Muscle.PectoralisMajorClavicular],
		[Muscle.Deltoids, Muscle.TricepsBrachii],
	);

	static DeclineBenchPress = new Exercise(
		"Decline Bench Press",
		[Muscle.PectoralisMajorSternal],
		[Muscle.Deltoids, Muscle.TricepsBrachii],
	);

	static RomanianDeadlift = new Exercise(
		"Romanian Deadlift",
		[Muscle.Hamstrings, Muscle.GluteusMaximus],
		[Muscle.ErectorSpinae, Muscle.ForearmFlexors, Muscle.RectusAbdominis],
	);

	static ChestFly = new Exercise(
		"Chest Fly (Dumbbell or Machine)",
		[Muscle.PectoralisMajor],
		[Muscle.Deltoids],
	);

	static CableRow = new Exercise(
		"Cable Row",
		[Muscle.LatissimusDorsi, Muscle.Rhomboids],
		[Muscle.BicepsBrachii, Muscle.Deltoids, Muscle.ForearmFlexors],
	);

	static LatPulldown = new Exercise(
		"Lat Pulldown",
		[Muscle.LatissimusDorsi],
		[Muscle.BicepsBrachii, Muscle.Rhomboids, Muscle.Deltoids],
	);

	static FrontSquat = new Exercise(
		"Front Squat",
		[Muscle.Quadriceps],
		[
			Muscle.GluteusMaximus,
			Muscle.Hamstrings,
			Muscle.RectusAbdominis,
			Muscle.Deltoids,
		],
	);

	static HackSquat = new Exercise(
		"Hack Squat",
		[Muscle.Quadriceps],
		[Muscle.GluteusMaximus, Muscle.Hamstrings, Muscle.Gastrocnemius],
	);

	static GoodMornings = new Exercise(
		"Good Mornings",
		[Muscle.Hamstrings, Muscle.ErectorSpinae],
		[Muscle.GluteusMaximus, Muscle.RectusAbdominis],
	);

	static FarmersWalk = new Exercise(
		"Farmer’s Walk",
		[Muscle.ForearmFlexors, Muscle.Trapezius],
		[Muscle.RectusAbdominis, Muscle.Deltoids],
	);

	static ZercherSquat = new Exercise(
		"Zercher Squat",
		[Muscle.Quadriceps],
		[
			Muscle.GluteusMaximus,
			Muscle.Hamstrings,
			Muscle.RectusAbdominis,
			Muscle.ForearmFlexors,
			Muscle.BicepsBrachii,
		],
	);

	static SumoDeadlift = new Exercise(
		"Sumo Deadlift",
		[Muscle.Hamstrings, Muscle.GluteusMaximus, Muscle.Quadriceps],
		[Muscle.ErectorSpinae, Muscle.ForearmFlexors, Muscle.RectusAbdominis],
	);

	static PowerClean = new Exercise(
		"Power Clean",
		[Muscle.Quadriceps, Muscle.GluteusMaximus, Muscle.Hamstrings],
		[
			Muscle.ErectorSpinae,
			Muscle.Trapezius,
			Muscle.Deltoids,
			Muscle.RectusAbdominis,
		],
	);

	static CleanAndJerk = new Exercise(
		"Clean and Jerk",
		[
			Muscle.Quadriceps,
			Muscle.GluteusMaximus,
			Muscle.Hamstrings,
			Muscle.Deltoids,
			Muscle.TricepsBrachii,
		],
		[
			Muscle.ErectorSpinae,
			Muscle.Trapezius,
			Muscle.RectusAbdominis,
			Muscle.BicepsBrachii,
		],
	);

	static Snatch = new Exercise(
		"Snatch",
		[
			Muscle.Quadriceps,
			Muscle.GluteusMaximus,
			Muscle.Hamstrings,
			Muscle.Deltoids,
			Muscle.TricepsBrachii,
		],
		[Muscle.ErectorSpinae, Muscle.Trapezius, Muscle.RectusAbdominis],
	);

	static TBarRow = new Exercise(
		"T-Bar Row",
		[Muscle.LatissimusDorsi, Muscle.Rhomboids],
		[Muscle.BicepsBrachii, Muscle.Deltoids, Muscle.ErectorSpinae],
	);

	static HipThrust = new Exercise(
		"Hip Thrust",
		[Muscle.GluteusMaximus],
		[Muscle.Hamstrings, Muscle.RectusAbdominis],
	);

	static LandminePress = new Exercise(
		"Landmine Press",
		[Muscle.Deltoids, Muscle.PectoralisMajorClavicular],
		[Muscle.TricepsBrachii, Muscle.RectusAbdominis],
	);

	static all(): Exercise[] {
		return [
			Exercise.Squat,
			Exercise.Deadlift,
			Exercise.BenchPress,
			Exercise.OverheadPress,
			Exercise.BentOverRow,
			Exercise.PullUp,
			Exercise.BarbellCurl,
			Exercise.TricepDips,
			Exercise.Lunge,
			Exercise.LegPress,
			Exercise.LegCurl,
			Exercise.LegExtension,
			Exercise.CalfRaise,
			Exercise.Shrugs,
			Exercise.FacePull,
			Exercise.InclineBenchPress,
			Exercise.DeclineBenchPress,
			Exercise.RomanianDeadlift,
			Exercise.ChestFly,
			Exercise.CableRow,
			Exercise.LatPulldown,
			Exercise.FrontSquat,
			Exercise.HackSquat,
			Exercise.GoodMornings,
			Exercise.FarmersWalk,
			Exercise.ZercherSquat,
			Exercise.SumoDeadlift,
			Exercise.PowerClean,
			Exercise.CleanAndJerk,
			Exercise.Snatch,
			Exercise.TBarRow,
			Exercise.HipThrust,
			Exercise.LandminePress,
		];
	}
}

export default Exercise;
