import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Hero Section */}
      <header className="bg-cover bg-center h-[400px] flex items-center justify-center text-white" style={{ backgroundImage: "url('/hero-banner.jpg')" }}>
        <div className="text-center px-4">
          <h1 className="text-4xl font-bold mb-4">Welcome to Afforda Eats</h1>
          <p className="text-lg">Discover affordable and delicious food in Metro Manila.</p>
          <div className="mt-6">
            <input
              type="text"
              placeholder="Search for food, vendors, or locations..."
              className="px-4 py-2 rounded-l-md border-none focus:outline-none w-64"
            />
            <button className="px-4 py-2 bg-green-600 text-white rounded-r-md hover:bg-green-700">
              Search
            </button>
          </div>
        </div>
      </header>

      {/* Featured Vendors Section */}
      <section className="py-12 px-6">
        <h2 className="text-2xl font-bold mb-6 text-center">Featured Food Vendors</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {["Vendor 1", "Vendor 2", "Vendor 3"].map((vendor, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src={`/vendor-${index + 1}.jpg`}
                alt={vendor}
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{vendor}</h3>
                <p className="text-sm text-gray-600">Affordable and delicious meals available here.</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recent Reviews Section */}
      <section className="py-12 px-6 bg-gray-200">
        <h2 className="text-2xl font-bold mb-6 text-center">Recent Reviews</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { user: "John Doe", review: "The food here is amazing and affordable!" },
            { user: "Jane Smith", review: "Great experience, highly recommend Vendor 2!" },
            { user: "Anonymous", review: "Loved the variety of food options available." },
          ].map((review, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4">
              <p className="text-sm text-gray-800">"{review.review}"</p>
              <p className="text-sm text-gray-600 mt-2">- {review.user}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 px-6 text-center bg-green-600 text-white">
        <h2 className="text-2xl font-bold mb-4">Are you a food vendor?</h2>
        <p className="mb-6">Join Afforda Eats and reach more customers today!</p>
        <a
          href="/register"
          className="px-6 py-3 bg-white text-green-600 font-semibold rounded-md hover:bg-gray-100"
        >
          Register Your Store
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 text-center">
        <p>&copy; 2025 Afforda Eats. All rights reserved.</p>
      </footer>
    </div>
  );
}