import { Link } from "react-router-dom";

export default function RecipeList({ recipes, searchTerm }) {
  return (
    <div className="flex justify-center mt-10">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 max-w-screen-2xl first:ml-10 last:mr-10">
        {recipes
          .filter((recipe) => recipe.title.toUpperCase().includes(searchTerm.toUpperCase().trim()))
          .map((recipe) => {
            return (
              <Link
                to={`/recipes/${recipe.id}`}
                key={recipe.id}
                className="p-6 border rounded shadow border-zinc-300 cursor-pointer hover:-translate-x-1 hover:-translate-y-1 transition-all bg-white"
              >
                <h2 className="text-2xl text-center border-b-2 border-b-purple-500 pb-2">
                  {recipe.title}
                </h2>
                <h3 className="font-semibold ml-2 mt-4">Ingredients</h3>
                <ul className="mt-2 border-b-8 border-b-purple-500 pb-4  bg-gradient-to-b from-black to-zinc-300 text-transparent bg-clip-text">
                  {recipe.ingredients.map((ingredient, i) => {
                    if (i > 2) return null;
                    return <li key={i}>{`${i + 1}. ${ingredient}`}</li>;
                  })}
                </ul>
                <h3 className="font-semibold ml-2 mt-4">Instructions</h3>
                <p className="mt-2 bg-gradient-to-b from-black to-zinc-300 text-transparent bg-clip-text">
                  {recipe.method.substring(0, 100)}...
                </p>
                <p className=" -mb-5 -ml-4 mt-6 text-zinc-400">
                  Cook Time: {recipe.cookingTime}
                </p>
              </Link>
            );
          })}
      </div>
    </div>
  );
}
