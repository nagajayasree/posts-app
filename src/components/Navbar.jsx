import { NavLink } from 'react-router';

export default function Navbar() {
  return (
    <div style={{ background: '#333', padding: '1rem' }}>
      <ul
        style={{
          listStyle: 'none',
          display: 'flex',
          gap: '1rem',
          margin: 0,
          padding: 0,
        }}
      >
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => ({
              color: isActive ? 'orange' : 'white',
            })}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/posts"
            style={({ isActive }) => ({
              color: isActive ? 'orange' : 'white',
            })}
          >
            Posts
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            style={({ isActive }) => ({
              color: isActive ? 'orange' : 'white',
            })}
          >
            Login
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/register"
            style={({ isActive }) => ({
              color: isActive ? 'orange' : 'white',
            })}
          >
            Register
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profile"
            style={({ isActive }) => ({
              color: isActive ? 'orange' : 'white',
            })}
          >
            Profile
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
