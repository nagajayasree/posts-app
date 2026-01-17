import { useState } from 'react';
import { useNavigate, NavLink } from 'react-router';
import { useAuth } from '../context/auth-Context/auth-context';

export default function Login() {
  const { login } = useAuth();

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      setMessage('');
      await login(email, password);
      navigate('/');
    } catch (err) {
      setMessage('Failed to log in');
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4 sm:p-8">
      <div className="w-full max-w-md bg-slate-900/70 backdrop-blur-xl border border-slate-700/70 rounded-3xl shadow-2xl shadow-slate-900/80 p-8 sm:p-10 space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          {/* Status Message */}

          {message !== '' ? (
            <div className="font-semibold text-red-400 transition-colors">
              {message}
            </div>
          ) : (
            ''
          )}

          <div className="w-20 h-20 mx-auto bg-gradient-to-r from-indigo-500 to-sky-500 rounded-2xl flex items-center justify-center shadow-xl shadow-indigo-700/40">
            <svg
              className="w-10 h-10 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>

          <div className="space-y-2">
            <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white via-sky-100 to-sky-300 bg-clip-text text-transparent">
              Welcome Back
            </h2>
            <p className="text-slate-300 text-sm lg:text-base max-w-xs mx-auto leading-relaxed">
              Log in to your account to continue
            </p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={onSubmit} className="space-y-6">
          <div className="space-y-2">
            <label
              htmlFor="email-address"
              className="block text-sm font-semibold text-slate-200"
            >
              Email Address
            </label>
            <input
              id="email-address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
              className="w-full px-5 py-4 bg-slate-800/70 border border-slate-600 rounded-2xl text-slate-50 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300 shadow-lg hover:shadow-xl hover:border-sky-500/60"
              disabled={loading}
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-slate-200"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
              className="w-full px-5 py-4 bg-slate-800/70 border border-slate-600 rounded-2xl text-slate-50 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300 shadow-lg hover:shadow-xl hover:border-sky-500/60"
              disabled={loading}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 px-6 bg-gradient-to-r from-indigo-500 to-sky-500 hover:from-indigo-600 hover:to-sky-600 disabled:from-slate-600 disabled:to-slate-700 text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-sky-500/40 transition-all duration-300 transform disabled:cursor-not-allowed disabled:transform-none"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Signing in...
              </span>
            ) : (
              'Log In'
            )}
          </button>
        </form>

        <p className="text-center text-sm text-slate-300 pt-4">
          Don't have an account?{' '}
          <NavLink
            to="/register"
            className="font-semibold text-sky-400 hover:text-sky-300 hover:underline transition-colors duration-200"
          >
            Create one here!
          </NavLink>
        </p>
      </div>
    </div>
  );
}
