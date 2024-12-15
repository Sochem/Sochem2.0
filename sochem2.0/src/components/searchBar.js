import React from "react";

const SearchBar = () => {
  return (
    <div className="p-4">
      <input
        className="lg:w-full border-2 rounded-sm border-gray-100 p-2 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Search for Events"
      />
    </div>
  );
};

export default SearchBar;
