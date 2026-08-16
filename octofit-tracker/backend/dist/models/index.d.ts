import mongoose from 'mongoose';
export declare const User: mongoose.Model<{
    name: string;
    email: string;
    fitnessLevel: "Beginner" | "Intermediate" | "Advanced";
    goals: string[];
    age?: number | null | undefined;
    teamId?: mongoose.Types.ObjectId | null | undefined;
} & mongoose.DefaultTimestampProps, {}, {}, {}, mongoose.Document<unknown, {}, {
    name: string;
    email: string;
    fitnessLevel: "Beginner" | "Intermediate" | "Advanced";
    goals: string[];
    age?: number | null | undefined;
    teamId?: mongoose.Types.ObjectId | null | undefined;
} & mongoose.DefaultTimestampProps, {}, {
    timestamps: true;
}> & {
    name: string;
    email: string;
    fitnessLevel: "Beginner" | "Intermediate" | "Advanced";
    goals: string[];
    age?: number | null | undefined;
    teamId?: mongoose.Types.ObjectId | null | undefined;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    name: string;
    email: string;
    fitnessLevel: "Beginner" | "Intermediate" | "Advanced";
    goals: string[];
    age?: number | null | undefined;
    teamId?: mongoose.Types.ObjectId | null | undefined;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    name: string;
    email: string;
    fitnessLevel: "Beginner" | "Intermediate" | "Advanced";
    goals: string[];
    age?: number | null | undefined;
    teamId?: mongoose.Types.ObjectId | null | undefined;
} & mongoose.DefaultTimestampProps>, {}, mongoose.MergeType<mongoose.DefaultSchemaOptions, {
    timestamps: true;
}>> & mongoose.FlatRecord<{
    name: string;
    email: string;
    fitnessLevel: "Beginner" | "Intermediate" | "Advanced";
    goals: string[];
    age?: number | null | undefined;
    teamId?: mongoose.Types.ObjectId | null | undefined;
} & mongoose.DefaultTimestampProps> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export declare const Team: mongoose.Model<{
    name: string;
    sport: string;
    captainId: mongoose.Types.ObjectId;
    members: mongoose.Types.ObjectId[];
} & mongoose.DefaultTimestampProps, {}, {}, {}, mongoose.Document<unknown, {}, {
    name: string;
    sport: string;
    captainId: mongoose.Types.ObjectId;
    members: mongoose.Types.ObjectId[];
} & mongoose.DefaultTimestampProps, {}, {
    timestamps: true;
}> & {
    name: string;
    sport: string;
    captainId: mongoose.Types.ObjectId;
    members: mongoose.Types.ObjectId[];
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    name: string;
    sport: string;
    captainId: mongoose.Types.ObjectId;
    members: mongoose.Types.ObjectId[];
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    name: string;
    sport: string;
    captainId: mongoose.Types.ObjectId;
    members: mongoose.Types.ObjectId[];
} & mongoose.DefaultTimestampProps>, {}, mongoose.MergeType<mongoose.DefaultSchemaOptions, {
    timestamps: true;
}>> & mongoose.FlatRecord<{
    name: string;
    sport: string;
    captainId: mongoose.Types.ObjectId;
    members: mongoose.Types.ObjectId[];
} & mongoose.DefaultTimestampProps> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export declare const Activity: mongoose.Model<{
    date: NativeDate;
    type: "Running" | "Cycling" | "Yoga" | "Strength" | "Swimming" | "HIIT";
    userId: mongoose.Types.ObjectId;
    durationMinutes: number;
    caloriesBurned: number;
    notes: string;
} & mongoose.DefaultTimestampProps, {}, {}, {}, mongoose.Document<unknown, {}, {
    date: NativeDate;
    type: "Running" | "Cycling" | "Yoga" | "Strength" | "Swimming" | "HIIT";
    userId: mongoose.Types.ObjectId;
    durationMinutes: number;
    caloriesBurned: number;
    notes: string;
} & mongoose.DefaultTimestampProps, {}, {
    timestamps: true;
}> & {
    date: NativeDate;
    type: "Running" | "Cycling" | "Yoga" | "Strength" | "Swimming" | "HIIT";
    userId: mongoose.Types.ObjectId;
    durationMinutes: number;
    caloriesBurned: number;
    notes: string;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    date: NativeDate;
    type: "Running" | "Cycling" | "Yoga" | "Strength" | "Swimming" | "HIIT";
    userId: mongoose.Types.ObjectId;
    durationMinutes: number;
    caloriesBurned: number;
    notes: string;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    date: NativeDate;
    type: "Running" | "Cycling" | "Yoga" | "Strength" | "Swimming" | "HIIT";
    userId: mongoose.Types.ObjectId;
    durationMinutes: number;
    caloriesBurned: number;
    notes: string;
} & mongoose.DefaultTimestampProps>, {}, mongoose.MergeType<mongoose.DefaultSchemaOptions, {
    timestamps: true;
}>> & mongoose.FlatRecord<{
    date: NativeDate;
    type: "Running" | "Cycling" | "Yoga" | "Strength" | "Swimming" | "HIIT";
    userId: mongoose.Types.ObjectId;
    durationMinutes: number;
    caloriesBurned: number;
    notes: string;
} & mongoose.DefaultTimestampProps> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export declare const LeaderboardEntry: mongoose.Model<{
    userId: mongoose.Types.ObjectId;
    username: string;
    points: number;
    rank: number;
    streak: number;
    teamId?: mongoose.Types.ObjectId | null | undefined;
} & mongoose.DefaultTimestampProps, {}, {}, {}, mongoose.Document<unknown, {}, {
    userId: mongoose.Types.ObjectId;
    username: string;
    points: number;
    rank: number;
    streak: number;
    teamId?: mongoose.Types.ObjectId | null | undefined;
} & mongoose.DefaultTimestampProps, {}, {
    timestamps: true;
}> & {
    userId: mongoose.Types.ObjectId;
    username: string;
    points: number;
    rank: number;
    streak: number;
    teamId?: mongoose.Types.ObjectId | null | undefined;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    userId: mongoose.Types.ObjectId;
    username: string;
    points: number;
    rank: number;
    streak: number;
    teamId?: mongoose.Types.ObjectId | null | undefined;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    userId: mongoose.Types.ObjectId;
    username: string;
    points: number;
    rank: number;
    streak: number;
    teamId?: mongoose.Types.ObjectId | null | undefined;
} & mongoose.DefaultTimestampProps>, {}, mongoose.MergeType<mongoose.DefaultSchemaOptions, {
    timestamps: true;
}>> & mongoose.FlatRecord<{
    userId: mongoose.Types.ObjectId;
    username: string;
    points: number;
    rank: number;
    streak: number;
    teamId?: mongoose.Types.ObjectId | null | undefined;
} & mongoose.DefaultTimestampProps> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export declare const Workout: mongoose.Model<{
    durationMinutes: number;
    title: string;
    category: string;
    difficulty: "Easy" | "Moderate" | "Hard";
    targetMuscles: string[];
    instructions: string[];
    equipment: string[];
} & mongoose.DefaultTimestampProps, {}, {}, {}, mongoose.Document<unknown, {}, {
    durationMinutes: number;
    title: string;
    category: string;
    difficulty: "Easy" | "Moderate" | "Hard";
    targetMuscles: string[];
    instructions: string[];
    equipment: string[];
} & mongoose.DefaultTimestampProps, {}, {
    timestamps: true;
}> & {
    durationMinutes: number;
    title: string;
    category: string;
    difficulty: "Easy" | "Moderate" | "Hard";
    targetMuscles: string[];
    instructions: string[];
    equipment: string[];
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    durationMinutes: number;
    title: string;
    category: string;
    difficulty: "Easy" | "Moderate" | "Hard";
    targetMuscles: string[];
    instructions: string[];
    equipment: string[];
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    durationMinutes: number;
    title: string;
    category: string;
    difficulty: "Easy" | "Moderate" | "Hard";
    targetMuscles: string[];
    instructions: string[];
    equipment: string[];
} & mongoose.DefaultTimestampProps>, {}, mongoose.MergeType<mongoose.DefaultSchemaOptions, {
    timestamps: true;
}>> & mongoose.FlatRecord<{
    durationMinutes: number;
    title: string;
    category: string;
    difficulty: "Easy" | "Moderate" | "Hard";
    targetMuscles: string[];
    instructions: string[];
    equipment: string[];
} & mongoose.DefaultTimestampProps> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
//# sourceMappingURL=index.d.ts.map