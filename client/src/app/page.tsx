import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Header */}
      <header className="bg-green-600 text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-xl font-bold">
            <Link href="/">Afforda Eats</Link>
          </h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link href="/login" className="hover:underline">
                  Login
                </Link>
              </li>
              <li>
                <Link href="/register" className="hover:underline">
                  Register
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Afforda Eats</h1>
        <p className="text-lg mb-6">
          Discover affordable and delicious food in Metro Manila.
        </p>
        <Link
          href="/register"
          className="px-6 py-3 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700"
        >
          Get Started
        </Link>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 text-center">
        <p>&copy; 2025 Afforda Eats. All rights reserved.</p>
      </footer>
    </div>
  );
}