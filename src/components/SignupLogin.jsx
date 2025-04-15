import { useState } from 'react';
import './LoginSignup.css';


const SignupLogin = ({ onClose }) => {
  const [isSignup, setIsSignup] = useState(true);
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem('users')) || [];

    if (isSignup) {
      const userExists = users.find(user => user.email === form.email);
      if (userExists) {
        alert('User already exists with this email!');
        return;
      }

      users.push(form);
      localStorage.setItem('users', JSON.stringify(users));
      alert('Signup successful!');
    } else {
      const user = users.find(user => user.email === form.email && user.password === form.password);
      if (user) {
        alert(`Welcome back, ${user.name || 'User'}!`);
      } else {
        alert('Invalid email or password!');
        return;
      }
    }

    onClose();
  };


  return (
    <div id='container'>
      <div style={{ background: '#fff', padding: 30, borderRadius: 8, width: 300 }}>
        <h2 style={{ marginBottom: '0.5rem' }}>{isSignup ? 'Sign Up' : 'Login'}</h2>
        <form onSubmit={handleSubmit}>
          {isSignup && (
            <input
              type="text"
              name='name'
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              required
              style={{ display: 'block', width: '90%', marginBottom: 10, padding: '0.2rem' }}
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            style={{ display: 'block', width: '90%', marginBottom: 10, padding: '0.2rem' }}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
            style={{ display: 'block', width: '90%', marginBottom: 10, padding: '0.2rem' }}
          />

          <button type="submit" style={{ width: '30%', padding: '0.2rem', backgroundColor: 'black', color: 'white', borderRadius: '0.2rem' }}>
            {isSignup ? 'Sign Up' : 'Login'}
          </button>
        </form>
        <button onClick={() => setIsSignup(!isSignup)} style={{ marginTop: 10, padding: '0.2rem', backgroundColor: 'black', color: 'white', borderRadius: '0.2rem' }}>
          {isSignup ? 'Already have an account? Login' : 'New user? Sign Up'}
        </button>
        <button onClick={onClose} style={{ marginTop: 10, marginLeft: '0.2rem', padding: '0.2rem', backgroundColor: 'black', color: 'white', borderRadius: '0.2rem' }}>Close</button>
      </div>
    </div>
  );
}


export default SignupLogin;