import { useEffect, useState } from 'react';

const getApiEndpoint = () => {
  const codespaceName = import.meta.env.VITE_CODESPACE_NAME?.trim();

  if (codespaceName) {
    return `https://${codespaceName}-8000.app.github.dev/api/leaderboard`;
  }

  return 'http://localhost:8000/api/leaderboard';
};

const parseData = (payload) => {
  if (Array.isArray(payload)) return payload;
  if (Array.isArray(payload?.results)) return payload.results;
  if (Array.isArray(payload?.data)) return payload.data;
  return [];
};

export default function Leaderboard() {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const response = await fetch(getApiEndpoint());
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const data = await response.json();
        setEntries(parseData(data));
      } catch (err) {
        setError(err.message || 'Failed to load leaderboard');
      } finally {
        setLoading(false);
      }
    };

    fetchLeaderboard();
  }, []);

  if (loading) return <p>Loading leaderboard...</p>;
  if (error) return <p className="text-danger">{error}</p>;

  return (
    <section className="card shadow-sm p-4">
      <h2>Leaderboard</h2>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Rank</th>
              <th>User</th>
              <th>Points</th>
              <th>Streak</th>
            </tr>
          </thead>
          <tbody>
            {entries.length === 0 ? (
              <tr>
                <td colSpan="4">No leaderboard entries available.</td>
              </tr>
            ) : (
              entries.map((entry) => (
                <tr key={entry._id || entry.username}>
                  <td>#{entry.rank}</td>
                  <td>{entry.username}</td>
                  <td>{entry.points}</td>
                  <td>{entry.streak} days</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
