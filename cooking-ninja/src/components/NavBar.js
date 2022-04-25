import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <nav className="flex justify-between items-center p-10 font-semibold tracking-widest text-white navbar-gradient">
        <Link to="/">
          <h1 className="text-3xl">Cooking Ninja</h1>
        </Link>
        <Link to="/create" className="border rounded p-2 text-lg hover:border-purple-300 transition-colors ">Create Recipe</Link>
      </nav>
    </div>
  );
}
