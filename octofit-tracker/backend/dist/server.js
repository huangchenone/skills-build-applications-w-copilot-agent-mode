import express from 'express';
import mongoose from 'mongoose';
import { pathToFileURL } from 'node:url';
import { Activity, LeaderboardEntry, Team, User, Workout } from './models/index.js';
const app = express();
const PORT = 8000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';
const codespaceName = process.env.CODESPACE_NAME;
const baseUrl = codespaceName
    ? `https://${codespaceName}-8000.app.github.dev`
    : `http://localhost:${PORT}`;
app.use((req, res, next) => {
    const origin = req.headers.origin || '*';
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    if (req.method === 'OPTIONS') {
        return res.sendStatus(204);
    }
    next();
});
app.use(express.json());
async function connectDatabase() {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log('MongoDB connected successfully to octofit_db');
    }
    catch (error) {
        console.error('MongoDB connection failed:', error);
        process.exit(1);
    }
}
app.get('/api/health', (req, res) => {
    res.json({
        status: 'OK',
        message: 'OctoFit Tracker API is running',
        apiBaseUrl: baseUrl,
        timestamp: new Date().toISOString()
    });
});
app.get('/api/users', async (req, res) => {
    try {
        const users = await User.find().lean();
        res.json(users);
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to fetch users', error: String(error) });
    }
});
app.post('/api/users', async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json(user);
    }
    catch (error) {
        res.status(400).json({ message: 'Failed to create user', error: String(error) });
    }
});
app.get('/api/teams', async (req, res) => {
    try {
        const teams = await Team.find().populate('members').populate('captainId').lean();
        res.json(teams);
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to fetch teams', error: String(error) });
    }
});
app.post('/api/teams', async (req, res) => {
    try {
        const team = await Team.create(req.body);
        res.status(201).json(team);
    }
    catch (error) {
        res.status(400).json({ message: 'Failed to create team', error: String(error) });
    }
});
app.get('/api/activities', async (req, res) => {
    try {
        const activities = await Activity.find().populate('userId').lean();
        res.json(activities);
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to fetch activities', error: String(error) });
    }
});
app.post('/api/activities', async (req, res) => {
    try {
        const activity = await Activity.create(req.body);
        res.status(201).json(activity);
    }
    catch (error) {
        res.status(400).json({ message: 'Failed to create activity', error: String(error) });
    }
});
app.get('/api/leaderboard', async (req, res) => {
    try {
        const leaderboard = await LeaderboardEntry.find().populate('userId').lean();
        res.json(leaderboard);
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to fetch leaderboard', error: String(error) });
    }
});
app.post('/api/leaderboard', async (req, res) => {
    try {
        const entry = await LeaderboardEntry.create(req.body);
        res.status(201).json(entry);
    }
    catch (error) {
        res.status(400).json({ message: 'Failed to create leaderboard entry', error: String(error) });
    }
});
app.get('/api/workouts', async (req, res) => {
    try {
        const workouts = await Workout.find().lean();
        res.json(workouts);
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to fetch workouts', error: String(error) });
    }
});
app.post('/api/workouts', async (req, res) => {
    try {
        const workout = await Workout.create(req.body);
        res.status(201).json(workout);
    }
    catch (error) {
        res.status(400).json({ message: 'Failed to create workout', error: String(error) });
    }
});
export async function startServer() {
    await connectDatabase();
    app.listen(PORT, () => {
        console.log(`OctoFit Tracker Backend running on port ${PORT}`);
        console.log(`API base URL: ${baseUrl}`);
    });
}
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
    startServer().catch((error) => {
        console.error('Failed to start server:', error);
        process.exit(1);
    });
}
//# sourceMappingURL=server.js.map