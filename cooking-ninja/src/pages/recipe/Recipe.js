import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

export default function Recipe() {
  const { id } = useParams();

  const {
    data: recipe,
    isPending,
    error,
  } = useFetch(`http://localhost:3000/recipes/${id}`);

  return (
    <div className="max-w-2xl mx-auto mt-14">
      {error && <h1>{error}</h1>}
      {isPending && <h1>Loading...</h1>}
      {recipe && (
        <div className="p-6 border mx-6 mt-4 rounded shadow border-zinc-300 bg-white" >
            <h2 className="text-2xl text-center border-b-2 border-b-purple-500 pb-4">{recipe.title}</h2>
            <h3 className="font-semibold ml-2 mt-4">Ingredients</h3>
            <ul className="mt-2 border-b-8 border-b-purple-500 pb-4">
              {recipe.ingredients.map((ingredient, i) => {
                return <li key={i} >{`${i+1}. ${ingredient}`}</li>;
              })}
            </ul>
            <h3 className="font-semibold ml-2 mt-4">Instructions</h3>
            <p className="mt-2 leading-loose">{recipe.method}</p>
            <p className=" -mb-5 -ml-4 mt-6 text-zinc-400">Cook Time: {recipe.cookingTime}</p>
          </div>
      )}
    </div>
  );
}
