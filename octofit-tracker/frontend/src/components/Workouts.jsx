import { useEffect, useState } from 'react';

const getApiEndpoint = () => {
  const codespaceName = import.meta.env.VITE_CODESPACE_NAME?.trim();

  if (codespaceName) {
    return `https://${codespaceName}-8000.app.github.dev/api/workouts`;
  }

  return 'http://localhost:8000/api/workouts';
};

const parseData = (payload) => {
  if (Array.isArray(payload)) return payload;
  if (Array.isArray(payload?.results)) return payload.results;
  if (Array.isArray(payload?.data)) return payload.data;
  return [];
};

export default function Workouts() {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await fetch(getApiEndpoint());
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const data = await response.json();
        setWorkouts(parseData(data));
      } catch (err) {
        setError(err.message || 'Failed to load workouts');
      } finally {
        setLoading(false);
      }
    };

    fetchWorkouts();
  }, []);

  if (loading) return <p>Loading workouts...</p>;
  if (error) return <p className="text-danger">{error}</p>;

  return (
    <section className="card shadow-sm p-4">
      <h2>Workouts</h2>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Difficulty</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            {workouts.length === 0 ? (
              <tr>
                <td colSpan="4">No workouts available.</td>
              </tr>
            ) : (
              workouts.map((workout) => (
                <tr key={workout._id || workout.title}>
                  <td>{workout.title}</td>
                  <td>{workout.category}</td>
                  <td>{workout.difficulty}</td>
                  <td>{workout.durationMinutes} min</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
