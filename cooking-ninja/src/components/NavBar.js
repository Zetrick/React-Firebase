import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

export default function NavBar({setSearchTerm}) {
  return (
    <div>
      <nav className="flex flex-wrap items-center justify-between p-10 font-semibold tracking-widest text-white navbar-gradient">
        <Link to="/" className="w-1/2 lg:w-1/3 lg:order-1">
          <h1 className="text-3xl">Cooking Ninja</h1>
        </Link>
        <SearchBar setSearchTerm={setSearchTerm} />
        <div className="flex justify-end w-1/2 lg:w-1/3 lg:order-3">
          <Link to="/create" className="p-2 text-lg transition-colors text-center border rounded hover:border-purple-300 px-10">Create Recipe</Link>
        </div>
      </nav>
    </div>
  );
}
