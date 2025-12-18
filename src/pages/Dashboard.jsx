import { useEffect, useState } from 'react';
import api from '../services/api';

export default function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    api.get('/dashboard/')
      .then(res => setData(res.data.modules))
      .catch(() => {
        localStorage.removeItem('token');
        window.location.href = '/';
      });
  }, []);

  return (
    <div style={{ padding: 40 }}>
      <h2>Dashboard</h2>
      <ul>
        {data.map(m => <li key={m}>{m}</li>)}
      </ul>
      <button onClick={() => {
        localStorage.removeItem('token');
        window.location.href = '/';
      }}>
        Logout
      </button>
    </div>
  );
}
