import { useAuth } from '../context/auth-Context/auth-context';
import { useNavigate } from 'react-router';

export default function LogOut() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login'); // or navigate('/') for home
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <button
      className="px-5 py-2.5 text-sm font-medium text-gray-300 hover:text-white hover:bg-orange-500/30 rounded-xl transition-all duration-300 border border-gray-700/50 hover:border-orange-500/50"
      onClick={handleLogout}
    >
      Log Out
    </button>
  );
}
