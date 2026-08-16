import mongoose from 'mongoose';
import { Activity, LeaderboardEntry, Team, User, Workout } from '../models/index.js';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);
    console.log('Connected to octofit_db');

    await Promise.all([
      User.deleteMany({}),
      Team.deleteMany({}),
      Activity.deleteMany({}),
      LeaderboardEntry.deleteMany({}),
      Workout.deleteMany({})
    ]);

    const users = await User.insertMany([
      {
        name: 'Ava Thompson',
        email: 'ava@example.com',
        age: 16,
        fitnessLevel: 'Advanced',
        goals: ['Run a 5K', 'Increase endurance'],
        teamId: null
      },
      {
        name: 'Leo Martinez',
        email: 'leo@example.com',
        age: 17,
        fitnessLevel: 'Intermediate',
        goals: ['Build strength', 'Improve mobility'],
        teamId: null
      },
      {
        name: 'Nia Patel',
        email: 'nia@example.com',
        age: 15,
        fitnessLevel: 'Beginner',
        goals: ['Learn proper form', 'Stay active'],
        teamId: null
      }
    ]);

    const lightningTeam = await Team.create({
      name: 'Lightning',
      sport: 'Cross Country',
      captainId: users[0]._id,
      members: [users[0]._id, users[1]._id]
    });

    const cometTeam = await Team.create({
      name: 'Comets',
      sport: 'Strength',
      captainId: users[2]._id,
      members: [users[2]._id]
    });

    await User.findByIdAndUpdate(users[0]._id, { teamId: lightningTeam._id }, { new: true });
    await User.findByIdAndUpdate(users[1]._id, { teamId: lightningTeam._id }, { new: true });
    await User.findByIdAndUpdate(users[2]._id, { teamId: cometTeam._id }, { new: true });

    const updatedUsers = await User.find().lean();

    await Activity.insertMany([
      {
        userId: updatedUsers[0]._id,
        type: 'Running',
        durationMinutes: 42,
        caloriesBurned: 420,
        date: new Date('2026-08-10T06:00:00.000Z'),
        notes: 'Tempo run with hill intervals.'
      },
      {
        userId: updatedUsers[1]._id,
        type: 'Strength',
        durationMinutes: 35,
        caloriesBurned: 320,
        date: new Date('2026-08-11T15:00:00.000Z'),
        notes: 'Upper body and core session.'
      },
      {
        userId: updatedUsers[2]._id,
        type: 'Yoga',
        durationMinutes: 25,
        caloriesBurned: 180,
        date: new Date('2026-08-12T18:30:00.000Z'),
        notes: 'Mobility and recovery focus.'
      }
    ]);

    await LeaderboardEntry.insertMany([
      {
        userId: updatedUsers[0]._id,
        username: 'ava.thompson',
        points: 1250,
        rank: 1,
        streak: 8,
        teamId: lightningTeam._id
      },
      {
        userId: updatedUsers[1]._id,
        username: 'leo.martinez',
        points: 1090,
        rank: 2,
        streak: 5,
        teamId: lightningTeam._id
      },
      {
        userId: updatedUsers[2]._id,
        username: 'nia.patel',
        points: 980,
        rank: 3,
        streak: 3,
        teamId: cometTeam._id
      }
    ]);

    await Workout.insertMany([
      {
        title: '5K Pace Builder',
        category: 'Cardio',
        difficulty: 'Moderate',
        durationMinutes: 30,
        targetMuscles: ['Legs', 'Core'],
        instructions: ['Warm up for 5 minutes.', 'Run at tempo pace for 20 minutes.', 'Cool down with mobility work.'],
        equipment: ['Running shoes']
      },
      {
        title: 'Full Body Circuit',
        category: 'Strength',
        difficulty: 'Hard',
        durationMinutes: 40,
        targetMuscles: ['Chest', 'Back', 'Legs', 'Core'],
        instructions: ['Complete 3 rounds of each exercise.', 'Rest 45 seconds between sets.', 'Maintain controlled form.'],
        equipment: ['Dumbbells', 'Mat']
      },
      {
        title: 'Mobility Reset',
        category: 'Recovery',
        difficulty: 'Easy',
        durationMinutes: 20,
        targetMuscles: ['Hips', 'Hamstrings', 'Shoulders'],
        instructions: ['Hold each stretch for 30 seconds.', 'Breathe steadily.', 'Focus on full range of motion.'],
        equipment: ['Yoga mat']
      }
    ]);

    console.log('Database seeding complete');
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
