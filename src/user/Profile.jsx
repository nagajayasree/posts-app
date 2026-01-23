import { useAuth } from '../context/auth-Context/auth-context';
import { PencilSquareIcon } from '@heroicons/react/24/solid';

export default function Profile() {
  const { user } = useAuth();

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-white border-b border-gray-200 rounded-xl shadow-lg overflow-hidden transition-colors duration-200">
          <div className="relative h-48">
            <img
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800"
              alt="Cover"
              className="w-full h-full object-cover"
            />
            <div className="absolute -bottom-12 left-6">
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800"
                alt="Profile"
                className="w-24 h-24 rounded-xl object-cover border-4 border-white shadow-lg"
              />
            </div>
          </div>

          <div className="pt-16 px-6 pb-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  {user.displayName}
                </h1>
                <p className="text-orange-600">
                  {user.about || 'Fetch Game Expert 🐶'}
                </p>
              </div>
              <button className="inline-flex items-center px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors duration-200 text-sm font-medium">
                Edit Profile
                <PencilSquareIcon className="h-6 w-6 ml-2" />
              </button>
            </div>

            <p className="mt-6 text-gray-900">
              {user.info ||
                `Hi, I'm a naughty, cutie, tail-wagging adventurer who lives for fetch sessions, belly rubs, and cozy couch naps. This is a good girl! knows basic commands and loves daily walks, treats, and making new human friends.`}
            </p>

            <div className="mt-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-3">
                Interests
              </h2>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-lg text-sm font-medium">
                  Playing fetch with toys
                </span>
                <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-lg text-sm font-medium">
                  Food/Treats
                </span>
                <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-lg text-sm font-medium">
                  Naps
                </span>
                <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-lg text-sm font-medium">
                  Frisbee
                </span>
              </div>
            </div>

            <div className="mt-6">
              <h2 className="text-lg font-semibold text-gray-900">Contact</h2>
              <a
                href=""
                className="inline-flex items-center text-orange-600 hover:underline"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                {user.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
