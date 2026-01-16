import { useState } from 'react';
import { NavLink } from 'react-router';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../firebase/index.jsx';

const auth = getAuth(app);

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        alert('Logged in successfully!');
        setEmail('');
        setPassword('');
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert('Login failed!');
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div>
      <div>
        <form onSubmit={onSubmit}>
          <div>
            <label htmlFor="email-address">Email address</label>
            <input
              id="email-address"
              type="email"
              label="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Email address"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              label="Create password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Password"
            />
          </div>
          <button type="submit">Login</button>
        </form>

        <p>
          Don't have an account? <NavLink to="/register">Register</NavLink>
        </p>
      </div>
    </div>
  );
}
