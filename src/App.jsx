// import './App.css';
import { useAuth } from './context/auth-Context/auth-context.jsx';

function App() {
  const { user } = useAuth();
  // console.log(user ? 'logged in' : 'not logged in');

  return (
    <div>
      <h3>{user ? `Welcome ${user?.displayName}!` : 'Welcome!'}</h3>
    </div>
  );
}

export default App;
