import { useState } from 'react';
import { usePosts } from '../context/posts-context/posts-context';

export default function CreatePost() {
  const { addPost } = usePosts();

  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [description, setDescription] = useState('');
  //   const [author, setAuthor] = useState('');
  //   const [img, setImg] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      setMessage('Post created successfully!');
      await addPost({ title, subtitle, description });
    } catch (err) {
      setMessage('Post creation failed!');
      console.error(err);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="w-full rounded-3xl  shadow-slate-300/80 p-8 sm:p-10 space-y-8">
        {message !== '' ? (
          <div className="font-semibold text-red-400 transition-colors">
            {message}
          </div>
        ) : (
          ''
        )}
        <form onSubmit={onSubmit}>
          <div className="mb-6">
            <label
              htmlFor="title"
              className="block text-sm font-semibold text-slate-600"
            >
              Title
            </label>
            <input
              id="title"
              type="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              placeholder="Enter your title"
              className="w-full px-5 py-4 bg-white-20 border border-slate-200 rounded-2xl text-black-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 shadow-lg hover:shadow-xl hover:border-orange-500/60"
              disabled={loading}
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="subtitle"
              className="block text-sm font-semibold text-slate-600"
            >
              Subtitle
            </label>
            <input
              id="subtitle"
              type="subtitle"
              value={subtitle}
              onChange={(e) => setSubtitle(e.target.value)}
              required
              placeholder="Enter your subtitle"
              className="w-full px-5 py-4 bg-white-20 border border-slate-200 rounded-2xl text-black-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 shadow-lg hover:shadow-xl hover:border-orange-500/60"
              disabled={loading}
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="image-upload"
              className="block w-full h-48 border-2 border-dashed border-gray-300 rounded-md cursor-pointer flex flex-col items-center justify-center bg-[#f6f6f6] hover:bg-gray-50"
            >
              <div className="text-center">
                <div className="mb-2">
                  <button
                    type="button"
                    className="bg-[#8c0327] hover:bg-[#6b0220] text-white rounded-full py-2 px-4"
                  >
                    Select from the computer
                  </button>
                </div>
                <p className="text-gray-500">or drag photo here</p>
                <p className="text-gray-500 text-sm mt-1">PNG, JPG, SVG</p>
              </div>
            </label>
            <input
              id="img"
              //   value="img"
              type="file"
              accept="image/*"
              className="sr-only"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="description"
              className="block text-sm font-semibold text-slate-600"
            >
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              placeholder="Enter your description"
              rows={4}
              className="w-full px-5 py-4 bg-white-20 border border-slate-200 rounded-2xl text-black-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 shadow-lg hover:shadow-xl hover:border-orange-500/60"
              disabled={loading}
            />
          </div>

          <button
            type="submit"
            onClick={onSubmit}
            disabled={loading}
            className="w-full py-4 px-6 bg-gradient-to-r from-orange-500 to-orange-500 hover:from-orange-600 hover:to-orange-600 disabled:from-slate-600 disabled:to-slate-700 text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-orange-500/40 transition-all duration-300 transform disabled:cursor-not-allowed disabled:transform-none"
          >
            {'Create Post'}
          </button>
        </form>
      </div>
    </div>
  );
}
