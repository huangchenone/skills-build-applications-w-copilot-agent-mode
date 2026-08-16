import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number, min: 0 },
    fitnessLevel: { type: String, enum: ['Beginner', 'Intermediate', 'Advanced'], default: 'Beginner' },
    goals: [{ type: String }],
    teamId: { type: mongoose.Schema.Types.ObjectId, ref: 'Team', default: null }
  },
  { timestamps: true }
);

const teamSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    sport: { type: String, required: true },
    captainId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
  },
  { timestamps: true }
);

const activitySchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    type: {
      type: String,
      enum: ['Running', 'Cycling', 'Yoga', 'Strength', 'Swimming', 'HIIT'],
      required: true
    },
    durationMinutes: { type: Number, required: true, min: 1 },
    caloriesBurned: { type: Number, default: 0, min: 0 },
    date: { type: Date, default: Date.now },
    notes: { type: String, default: '' }
  },
  { timestamps: true }
);

const leaderboardSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    username: { type: String, required: true },
    points: { type: Number, required: true, default: 0 },
    rank: { type: Number, required: true, default: 1 },
    streak: { type: Number, default: 0 },
    teamId: { type: mongoose.Schema.Types.ObjectId, ref: 'Team', default: null }
  },
  { timestamps: true }
);

const workoutSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    category: { type: String, required: true },
    difficulty: { type: String, enum: ['Easy', 'Moderate', 'Hard'], required: true },
    durationMinutes: { type: Number, required: true, min: 5 },
    targetMuscles: [{ type: String }],
    instructions: [{ type: String }],
    equipment: [{ type: String }]
  },
  { timestamps: true }
);

export const User = mongoose.model('User', userSchema);
export const Team = mongoose.model('Team', teamSchema);
export const Activity = mongoose.model('Activity', activitySchema);
export const LeaderboardEntry = mongoose.model('LeaderboardEntry', leaderboardSchema);
export const Workout = mongoose.model('Workout', workoutSchema);
