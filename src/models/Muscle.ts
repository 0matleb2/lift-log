class Muscle {
	name: string;
	description: string;

	private constructor(name: string, description: string) {
		this.name = name;
		this.description = description;
	}

	static Quadriceps = new Muscle(
		"Quadriceps",
		"Group of muscles on the front of the thigh (Rectus Femoris, Vastus Lateralis, Vastus Medialis, Vastus Intermedius)",
	);

	static GluteusMaximus = new Muscle(
		"Gluteus Maximus",
		"The main extensor muscle of the hip, part of the glutes, responsible for hip extension and rotation.",
	);

	static Hamstrings = new Muscle(
		"Hamstrings",
		"Group of muscles on the back of the thigh (Biceps Femoris, Semitendinosus, Semimembranosus), responsible for knee flexion and hip extension.",
	);

	static ErectorSpinae = new Muscle(
		"Erector Spinae",
		"Group of muscles that run along the spine, responsible for extending and stabilizing the spine.",
	);

	static Gastrocnemius = new Muscle(
		"Gastrocnemius",
		"Upper calf muscle, responsible for plantar flexion of the foot.",
	);

	static Soleus = new Muscle(
		"Soleus",
		"Lower calf muscle, beneath the Gastrocnemius, also involved in plantar flexion of the foot.",
	);

	static RectusAbdominis = new Muscle(
		"Rectus Abdominis",
		"Muscle of the abdomen, often referred to as 'Abs', responsible for flexing the lumbar spine.",
	);

	static TransverseAbdominis = new Muscle(
		"Transverse Abdominis",
		"Deep abdominal muscle, crucial for core stability and compressing the abdomen.",
	);

	static Obliques = new Muscle(
		"Obliques",
		"Muscles on the sides of the abdomen (Internal and External Obliques), involved in trunk rotation and lateral flexion.",
	);

	static Trapezius = new Muscle(
		"Trapezius",
		"Upper back muscle extending from the neck to the mid-back, involved in moving, rotating, and stabilizing the shoulder blades.",
	);

	static ForearmFlexors = new Muscle(
		"Forearm Flexors",
		"Muscles on the front of the forearm, responsible for flexion of the wrist and fingers.",
	);

	static ForearmExtensors = new Muscle(
		"Forearm Extensors",
		"Muscles on the back of the forearm, responsible for extension of the wrist and fingers.",
	);

	static PectoralisMajor = new Muscle(
		"Pectoralis Major",
		"Major chest muscle responsible for movements of the shoulder joint, such as flexion, adduction, and internal rotation.",
	);

	static PectoralisMajorClavicular = new Muscle(
		"Pectoralis Major (Clavicular Head)",
		"Upper part of the Pectoralis Major, often referred to as 'Upper Chest', involved in shoulder flexion.",
	);

	static PectoralisMajorSternal = new Muscle(
		"Pectoralis Major (Sternal Head)",
		"Lower part of the Pectoralis Major, often referred to as 'Lower Chest', involved in horizontal adduction of the shoulder.",
	);

	static Deltoids = new Muscle(
		"Deltoids",
		"Shoulder muscles (Anterior, Lateral, and Posterior) responsible for arm abduction, flexion, and rotation.",
	);

	static BicepsBrachii = new Muscle(
		"Biceps Brachii",
		"Main upper arm muscle on the front, responsible for elbow flexion and forearm supination.",
	);

	static TricepsBrachii = new Muscle(
		"Triceps Brachii",
		"Main upper arm muscle on the back, responsible for elbow extension.",
	);

	static LatissimusDorsi = new Muscle(
		"Latissimus Dorsi",
		"Large back muscle, responsible for shoulder adduction, extension, and internal rotation.",
	);

	static Rhomboids = new Muscle(
		"Rhomboids",
		"Upper back muscles located between the shoulder blades, responsible for scapular retraction and rotation.",
	);

	static TeresMajor = new Muscle(
		"Teres Major",
		"Small muscle in the upper back, beneath the Rhomboids, involved in shoulder adduction and internal rotation.",
	);

	static Infraspinatus = new Muscle(
		"Infraspinatus",
		"A rotator cuff muscle located on the back of the shoulder, responsible for external rotation of the arm.",
	);

	static Supraspinatus = new Muscle(
		"Supraspinatus",
		"A rotator cuff muscle located on the top of the shoulder, involved in shoulder abduction.",
	);

	static Subscapularis = new Muscle(
		"Subscapularis",
		"A rotator cuff muscle located on the front of the shoulder, involved in internal rotation of the arm.",
	);

	static SerratusAnterior = new Muscle(
		"Serratus Anterior",
		"Muscle on the side of the chest, under the arm, responsible for the protraction and stabilization of the scapula.",
	);

	static Brachialis = new Muscle(
		"Brachialis",
		"Muscle beneath the Biceps, primarily responsible for elbow flexion.",
	);

	static Adductors = new Muscle(
		"Adductors",
		"Muscles on the inner thigh responsible for hip adduction.",
	);

	static Abductors = new Muscle(
		"Abductors",
		"Muscles on the outer thigh responsible for hip abduction.",
	);

	static GluteusMedius = new Muscle(
		"Gluteus Medius",
		"Part of the glutes, involved in hip abduction and stabilization of the pelvis.",
	);

	static GluteusMinimus = new Muscle(
		"Gluteus Minimus",
		"Smallest of the glutes, involved in hip abduction and stabilization of the pelvis.",
	);

	static Piriformis = new Muscle(
		"Piriformis",
		"A small muscle in the glutes, important for hip rotation.",
	);

	// Method to return all muscles
	static all(): Muscle[] {
		return [
			Muscle.Quadriceps,
			Muscle.GluteusMaximus,
			Muscle.Hamstrings,
			Muscle.ErectorSpinae,
			Muscle.Gastrocnemius,
			Muscle.Soleus,
			Muscle.RectusAbdominis,
			Muscle.TransverseAbdominis,
			Muscle.Obliques,
			Muscle.Trapezius,
			Muscle.ForearmFlexors,
			Muscle.ForearmExtensors,
			Muscle.PectoralisMajor,
			Muscle.PectoralisMajorClavicular,
			Muscle.PectoralisMajorSternal,
			Muscle.Deltoids,
			Muscle.BicepsBrachii,
			Muscle.TricepsBrachii,
			Muscle.LatissimusDorsi,
			Muscle.Rhomboids,
			Muscle.TeresMajor,
			Muscle.Infraspinatus,
			Muscle.Supraspinatus,
			Muscle.Subscapularis,
			Muscle.SerratusAnterior,
			Muscle.Brachialis,
			Muscle.Adductors,
			Muscle.Abductors,
			Muscle.GluteusMedius,
			Muscle.GluteusMinimus,
			Muscle.Piriformis,
		];
	}
}

export default Muscle;
