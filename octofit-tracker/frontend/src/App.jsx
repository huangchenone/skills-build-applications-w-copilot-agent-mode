import { NavLink, Route, Routes } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';
import './App.css';

const navItems = [
  { label: 'Users', to: '/users' },
  { label: 'Teams', to: '/teams' },
  { label: 'Activities', to: '/activities' },
  { label: 'Leaderboard', to: '/leaderboard' },
  { label: 'Workouts', to: '/workouts' },
];

function App() {
  const codespaceName = import.meta.env.VITE_CODESPACE_NAME?.trim();
  const apiStatus = codespaceName
    ? `https://${codespaceName}-8000.app.github.dev/api`
    : 'http://localhost:8000/api';

  return (
    <div className="app-shell">
      <header className="topbar">
        <div>
          <p className="eyebrow">Octofit Tracker</p>
          <h1>Fitness dashboard</h1>
        </div>
        <div className="topbar-meta">
          <span className="badge">{codespaceName ? 'Codespaces' : 'Localhost'}</span>
          <span className="api-url text-muted">{apiStatus}</span>
        </div>
      </header>

      <nav className="nav-tabs" aria-label="Main navigation">
        {navItems.map(({ label, to }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            {label}
          </NavLink>
        ))}
      </nav>

      <main className="page-content">
        <div className="alert alert-info">
          Set <code>VITE_CODESPACE_NAME</code> in <code>.env.local</code> to use a Codespaces URL.
          If it is unset, the app falls back to localhost automatically.
        </div>

        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/users" element={<Users />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/workouts" element={<Workouts />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
