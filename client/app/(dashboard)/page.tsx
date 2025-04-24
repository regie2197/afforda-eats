export default function Home() {
  return (
    <div className="p-6">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-blue-1">Admin Dashboard</h1>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-700">Total Stores</h2>
          <p className="text-3xl font-bold text-blue-1">50</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-700">Total Menus</h2>
          <p className="text-3xl font-bold text-blue-1">400</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-700">Total Customers</h2>
          <p className="text-3xl font-bold text-blue-1">1,200</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-700">Pending Reviews</h2>
          <p className="text-3xl font-bold text-blue-1">15</p>
        </div>
      </div>

      {/* Recent Activity Section */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Recent Activity</h2>
        <ul className="space-y-4">
          <li className="flex justify-between items-center">
            <p className="text-gray-600">New vendor registration: <strong>John's Eatery</strong></p>
            <span className="text-sm text-gray-500">2 hours ago</span>
          </li>
          <li className="flex justify-between items-center">
            <p className="text-gray-600">New review for <strong>Pizza Palace</strong></p>
            <span className="text-sm text-gray-500">5 hours ago</span>
          </li>
          <li className="flex justify-between items-center">
            <p className="text-gray-600">Menu updated by <strong>Metro Diner</strong></p>
            <span className="text-sm text-gray-500">1 day ago</span>
          </li>
        </ul>
      </div>

      {/* Quick Actions Section */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Quick Actions</h2>
        <div className="flex flex-wrap gap-4">
          <button className="bg-blue-1 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-2">
            Manage Vendors
          </button>
          <button className="bg-blue-1 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-2">
            Moderate Reviews
          </button>
          <button className="bg-blue-1 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-2">
            View Analytics
          </button>
          <button className="bg-blue-1 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-2">
            Post Announcement
          </button>
        </div>
      </div>
    </div>
  );
}