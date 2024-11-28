import React, { useState } from "react";

interface SearchProps {
  onSearch: (query: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setQuery(value);
    onSearch(value); 
  };

  return (
    <div className="mb-6 flex justify-center">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search characters..."
        className="p-3 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mx-auto border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:text-black" 
      />
    </div>
  );
};

export default Search;
