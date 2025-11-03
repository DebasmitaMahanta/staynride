"use client";

import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="w-full max-w-3xl mx-auto px-4">
      <form className="flex flex-col sm:flex-row items-stretch bg-white rounded-full overflow-hidden shadow-md focus-within:ring-2 focus-within:ring-yellow-400 transition-all duration-200">
        
        
        <input
          type="text"
          placeholder="Search Hostel"
          className="w-full px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base text-gray-900 focus:outline-none placeholder-gray-500"
        />

        
        <button
          type="submit"
          className="mt-2 sm:mt-0 sm:ml-2 flex justify-center items-center gap-2 px-6 py-2.5 sm:py-3 bg-yellow-400 text-gray-900 font-medium text-sm sm:text-base rounded-full hover:bg-yellow-500 transition-all duration-200"
        >
          <Search className="w-4 h-4 sm:w-5 sm:h-5" />
          <span>Search</span>
        </button>
      </form>
    </div>
  );
}
