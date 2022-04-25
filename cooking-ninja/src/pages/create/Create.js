import { useState } from "react";

export default function Create() {
  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [cookingTime, setCookingTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, method, cookingTime);
  }

  return (
    <div>
      <div className="max-w-screen-md p-3 m-10 rounded-xl navbar-gradient">
        <div className="flex flex-col rounded bg-zinc-100">
          <h2 className="text-center font-bold text-3xl mt-4 text-violet-400">Add a New Recipe</h2>
          <form onSubmit={handleSubmit} className="flex flex-col">
            <label className="ml-4 font-semibold h-14 mt-8 border-b uppercase flex items-center">
              <span>Recipe Title: </span>
              <input
                type="text" //
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                required
              />
            </label>
            {/* Ingredients go here */}
            <label className="ml-4 font-semibold h-14 mt-8 border-b uppercase flex items-center">
              <span>Recipe Method: </span>
              <textarea
                value={method} //
                onChange={(e) => setMethod(e.target.value)}
                required
              />
            </label>
            <label className="ml-4 font-semibold h-14 mt-8 border-b uppercase flex items-center">
              <span>Cooking Time (minutes): </span>
              <input
                type="number" //
                onChange={(e) => setCookingTime(e.target.value)}
                value={cookingTime}
                required
              />
            </label>
            <button className="p-1 text-white bg-purple-500 border rounded border-purple-50 hover:brightness-105">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
