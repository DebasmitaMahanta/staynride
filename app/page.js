import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-blue-900">
      {/* Navigation Bar */}
      <nav className="flex items-center justify-between px-8 py-4 bg-white">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-blue-900">Stay’nRide</h1>
        </div>
        <div className="flex items-center gap-8">
          <a href="/" className="text-gray-700 hover:text-blue-900">Home</a>
          <a href="/about" className="text-gray-700 hover:text-blue-900">About Us</a>
          <a href="/gallery" className="text-gray-700 hover:text-blue-900">Gallery</a>
          <a href="/hostels" className="text-gray-700 hover:text-blue-900">Hostels</a>
          <a href="/contact" className="text-gray-700 hover:text-blue-900">Contact Us</a>
          <button className="px-6 py-2 bg-yellow-400 rounded-full text-gray-900 font-medium hover:bg-yellow-500">
            Login/Register
          </button>
          
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative min-h-[calc(100vh-80px)]">
        <div className="absolute inset-0 bg-[url('/hostel-bg.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="relative container mx-auto px-4 py-20 text-center">
          <h2 className="text-6xl font-bold mb-6 text-white">
            Find Your Perfect Stay
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto text-white">
            Affordable, comfortable, and unique hostels waiting for you. Book now and start your adventure!
          </p>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center bg-white rounded-full p-2">
              <input
                type="text"
                placeholder="Search Hostels"
                className="w-full px-6 py-3 rounded-full focus:outline-none text-gray-900"
              />
              <button className="px-8 py-3 bg-yellow-400 rounded-full text-gray-900 font-medium hover:bg-yellow-500 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Search
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}