import seminarImage1 from "../../assets/images/home/homebg1.jpeg";

const posts = [
  {
    title: "Youth Seminar 2025 Recap",
    excerpt: "A week of innovation, collaboration, and problem-solving in Nyatike...",
    date: "August 25, 2025",
    category: "Mentorship & Training",
    image: seminarImage1,
  }
];

export default function Blogs() {
  return (
    <div className="min-h-screen py-12 px-6 lg:px-20">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Our Blog
      </h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, index) => (
          <div
            key={index}
            className="rounded-xl shadow-md hover:shadow-lg transition overflow-hidden"
          >
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <span className="text-sm text-green-600 font-medium">{post.category}</span>
              <h2 className="text-xl font-semibold mt-2 mb-3">
                {post.title}
              </h2>
              <p className="mb-4">{post.excerpt}</p>
              <div className="flex justify-between items-center text-sm">
                <span>{post.date}</span>
                <a href="/" className="text-blue-600 hover:underline">
                  Read More →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
