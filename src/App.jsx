// import './App.css';
import { useAuth } from './context/auth-Context/auth-context.jsx';

function App() {
  const { user } = useAuth();

  return (
    <div>
      <h3>Welcome {user?.displayName}!</h3>
    </div>
  );
}

export default App;
