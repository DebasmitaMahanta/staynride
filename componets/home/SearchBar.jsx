export default function SearchBar() {
  return (
    <div className="max-w-3xl mx-auto">
      <form className="flex items-center bg-white rounded-full p-2">
        <input
          type="text"
          placeholder="Search Hostels"
          className="w-full px-6 py-3 rounded-full focus:outline-none text-gray-900"
        />
        <button 
          type="submit"
          className="px-8 py-3 bg-yellow-400 rounded-full text-gray-900 font-medium hover:bg-yellow-500 flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          Search
        </button>
      </form>
    </div>
  );
}