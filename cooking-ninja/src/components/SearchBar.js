import { useState, useEffect } from "react";

export default function SearchBar({ setSearchTerm }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Here");
  };

  const [search, updateSearch] = useState("");

  useEffect(() => {
    setSearchTerm(search);
  }, [search, setSearchTerm]);

  return (
    <div className="flex justify-center order-last w-1/2 max-w-md mx-auto mt-8 lg:w-1/3 lg:order-2 basis-full lg:basis-auto lg:mx-0 lg:mt-0">
      <form
        onSubmit={handleSubmit}
        className="flex items-center w-full bg-white rounded h-14"
      >
        <input
          className="w-full h-full pl-4 rounded outline-none text-zinc-700"
          type=" "
          onChange={(e) => updateSearch(e.target.value)}
          value={search}
          placeholder="Search"
        />
      </form>
    </div>
  );
}
