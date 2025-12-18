import { useState } from 'react';
import api from '../services/api';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/token/', {
        username,
        password
      });

      localStorage.setItem('token', res.data.access);
      window.location.href = '/dashboard';
    } catch (err) {
      setError('Invalid login');
    }
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={submit}>
        <input placeholder='Username'
          value={username}
          onChange={e => setUsername(e.target.value)}
        /><br/><br/>
        <input type='password'
          placeholder='Password'
          value={password}
          onChange={e => setPassword(e.target.value)}
        /><br/><br/>
        <button>Login</button>
      </form>
    </div>
  );
}
