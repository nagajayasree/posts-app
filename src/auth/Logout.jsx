import { useAuth } from '../context/auth-Context/auth-context';

export default function LogOut() {
  const { logout } = useAuth();

  return (
    <button
      className="px-5 py-2.5 text-sm font-medium text-gray-300 hover:text-white hover:bg-orange-500/30 rounded-xl transition-all duration-300 border border-gray-700/50 hover:border-orange-500/50"
      onClick={logout}
    >
      Log Out
    </button>
  );
}
