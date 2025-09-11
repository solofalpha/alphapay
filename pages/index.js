export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      {/* Big Title */}
      <h1 className="text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-430 via-purple-500 to-pink-500">
        AlphaPay 🚀
      </h1>

      {/* Subtitle */}
      <p className="text-lg text-gray-300 mb-10">
        If you see colors & gradients, Tailwind CSS is working!
      </p>

      {/* Example Button */}
      <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-indigo-500 hover:to-blue-400 transition">
        Test Button
      </button>
    </main>
  );
}