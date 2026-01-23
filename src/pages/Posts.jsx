import posts from '../data/posts.json';

export default function Posts() {
  return (
    <div className="max-w-6xl mx-auto p-4 space-y-4">
      {posts.map((post) => (
        <div
          key={post.postid}
          className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
        >
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-30 md:h-34 object-cover"
          />

          <div className="p-4 md:p-6">
            <h3 className="text-xl md:text-2xl font-bold mb-2">{post.title}</h3>
            <p className="text-gray-600 italic mb-2">{post.subtitle}</p>
            <p className="text-gray-800 mb-3 text-sm md:text-base">
              {post.description}
            </p>
            <span className="font-semibold text-blue-600 text-sm md:text-base">
              {post.author}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
