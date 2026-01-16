import React, { useState } from 'react';
import { NavLink } from 'react-router';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gray-900/95 backdrop-blur-xl shadow-2xl sticky top-0 z-50 border-b border-orange-500/20">
      {/* Web Navigation */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex-shrink-0">
            <NavLink to="/" className="flex items-center gap-2 group">
              <img
                src="/logo.png"
                alt="Logo"
                className="h-10 w-10 lg:h-12 lg:w-12 rounded-xl shadow-lg group-hover:scale-105 transition-all duration-300"
              />
              <span className="hidden lg:block text-xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Posts App
              </span>
            </NavLink>
          </div>

          <ul className="hidden lg:flex items-center gap-2 lg:gap-4 mx-auto list-none m-0 p-0">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `px-4 py-2 lg:px-6 lg:py-3 rounded-2xl font-medium text-sm lg:text-base transition-all duration-300 shadow-md ${
                    isActive
                      ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-orange-500/40 scale-105'
                      : 'text-gray-300 hover:text-white hover:bg-orange-500/20 hover:shadow-orange-500/25'
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/posts"
                className={({ isActive }) =>
                  `px-4 py-2 lg:px-6 lg:py-3 rounded-2xl font-medium text-sm lg:text-base transition-all duration-300 shadow-md ${
                    isActive
                      ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-orange-500/40 scale-105'
                      : 'text-gray-300 hover:text-white hover:bg-orange-500/20 hover:shadow-orange-500/25'
                  }`
                }
              >
                Posts
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  `px-4 py-2 lg:px-6 lg:py-3 rounded-2xl font-medium text-sm lg:text-base transition-all duration-300 shadow-md ${
                    isActive
                      ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-orange-500/40 scale-105'
                      : 'text-gray-300 hover:text-white hover:bg-orange-500/20 hover:shadow-orange-500/25'
                  }`
                }
              >
                Profile
              </NavLink>
            </li>
          </ul>

          <div className="hidden lg:flex items-center gap-3">
            <NavLink
              to="/login"
              className="px-5 py-2.5 text-sm font-medium text-gray-300 hover:text-white hover:bg-orange-500/30 rounded-xl transition-all duration-300 border border-gray-700/50 hover:border-orange-500/50"
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              className="px-6 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold text-sm rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Sign Up
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 ml-4 rounded-xl text-gray-400 hover:text-white hover:bg-orange-500/20 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-200"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                className={!isOpen ? 'block' : 'hidden'}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path
                className={isOpen ? 'block' : 'hidden'}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-orange-500/20 bg-gray-900/95 backdrop-blur-xl animate-in slide-in-from-top-2 duration-200">
          <div className="max-w-6xl mx-auto px-4 pb-8 pt-4 space-y-3">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block w-full text-left px-6 py-4 rounded-2xl font-medium text-base transition-all shadow-md ${
                  isActive
                    ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-orange-500/40'
                    : 'text-gray-300 hover:text-white hover:bg-orange-500/30 hover:shadow-orange-500/25'
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/posts"
              className={({ isActive }) =>
                `block w-full text-left px-6 py-4 rounded-2xl font-medium text-base transition-all shadow-md ${
                  isActive
                    ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-orange-500/40'
                    : 'text-gray-300 hover:text-white hover:bg-orange-500/30 hover:shadow-orange-500/25'
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              Posts
            </NavLink>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                `block w-full text-left px-6 py-4 rounded-2xl font-medium text-base transition-all shadow-md ${
                  isActive
                    ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-orange-500/40'
                    : 'text-gray-300 hover:text-white hover:bg-orange-500/30 hover:shadow-orange-500/25'
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              Profile
            </NavLink>
            <div className="pt-4 border-t border-gray-800/50 flex flex-col sm:flex-row gap-3">
              <NavLink
                to="/login"
                className="px-6 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-orange-500/30 rounded-xl border border-gray-700/50 hover:border-orange-500/50 transition-all"
                onClick={() => setIsOpen(false)}
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
                onClick={() => setIsOpen(false)}
              >
                Sign Up
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
