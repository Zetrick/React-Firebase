import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

export default function Create() {
  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [newIngredient, setNewIngredient] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const ingredientInput = useRef(null);
  const { postData, data, error } = useFetch(
    "http://localhost:3000/recipes/",
    "POST"
  );
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    postData({
      title,
      ingredients,
      method,
      cookingTime: cookingTime + " minutes",
    });
  };

  const handleAddIngredient = (e) => {
    e.preventDefault();
    if (!ingredients.includes(newIngredient) && newIngredient.trim() !== "") {
      setIngredients((prev) => [...prev, newIngredient.trim()]);
    }
    setNewIngredient("");
    ingredientInput.current.focus();
  };

  useEffect(() => {
    if (data && !error) navigate("/");
  }, [data, navigate, error]);

  return (
    <div className="flex justify-center">
      <div className="max-w-screen-lg w-2/3 p-2 m-10 rounded-xl navbar-gradient">
        <div className="flex flex-col rounded bg-zinc-100 p-4">
          {/**************************************** Form Title ****************************************/}

          <h2 className="mt-4 text-3xl font-bold text-center text-violet-400">
            Add a New Recipe
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col">
            {/**************************************** Recipe Title ****************************************/}

            <label className="flex items-center py-12 ml-8 uppercase border-b h-14">
              <span className="w-1/4 mr-4 text-xl text-center">Title: </span>
              <input
                type="text" //
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                required
                className="w-2/3 mx-4 rounded h-14 px-4 text-2xl"
              />
            </label>
            {/**************************************** Ingredients ****************************************/}

            <label className="flex items-center py-12 ml-8 uppercase border-b h-14">
              <span className="w-1/4 mr-4 text-xl text-center">
                Ingredients:{" "}
              </span>
              <input
                type="text"
                className="w-1/2 mx-4 rounded h-14 px-4 text-2xl"
                onChange={(e) => setNewIngredient(e.target.value)}
                value={newIngredient}
                ref={ingredientInput}
              />
              {/**************************************** Add Ingredient Button ****************************************/}
              <button
                className="border px-4 py-2 rounded bg-purple-500 text-white tracking-wider hover:brightness-105 ml-4"
                onClick={(e) => handleAddIngredient(e)}
              >
                Add
              </button>
            </label>
            {/**************************************** Ingredients List ****************************************/}
            <p className="ml-16 text-zinc-400">{ingredients.join(", ")}</p>
            {/**************************************** Method ****************************************/}

            <label className="flex items-center py-12 ml-8 uppercase border-b h-48">
              <span className="w-1/4 mr-4 text-xl text-center">Method: </span>
              <textarea
                value={method} //
                onChange={(e) => setMethod(e.target.value)}
                required
                className="w-2/3 mx-4 rounded h-36 px-4 text-lg resize-none py-2"
              />
            </label>
            {/**************************************** Cooking Time ****************************************/}

            <label className="flex items-center py-12 ml-8 uppercase border-b h-14">
              <span className="w-1/4 mr-4 text-xl text-center">
                Cooking Time (minutes):{" "}
              </span>
              <input
                type="number" //
                onChange={(e) => setCookingTime(e.target.value)}
                value={cookingTime}
                required
                className="w-2/3 mx-4 rounded h-14 px-4 text-2xl"
              />
            </label>
            {/**************************************** Submit Button ****************************************/}

            <div className="flex justify-center mt-8 mb-4">
              <button className="p-1 w-1/3 text-white bg-purple-500 border rounded border-purple-50 hover:brightness-105">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
