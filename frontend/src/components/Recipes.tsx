import { useEffect, useState } from "react";
import { getRecipes } from "../api";

export const Recipes: React.FC = () => {

  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    getRecipes()
      .then(response => {
        setRecipes(response.data);
      })
      .catch(e => {
        console.error('error fetching recipes:', e);
      })
  })

  return (
    <>
      {recipes.map(recipe => (
        <div className="p-5 border-4">
          <h1 className="text-2xl font-semibold">{recipe.recipe_name}</h1>
          <p className="italic">{recipe.description}</p>
        </div>
      ))}
      <span className="border-b-4" />
    </>
  )
}

// FULL RECIPE
{/* <div className="p-5 border-4">
  <h1 className="text-2xl font-semibold">{recipe.recipe_name}</h1>
  <p className="italic mb-2">{recipe.description}</p>
  <ul>
    <li><h2 className="font-semibold">Ingredients: </h2>{recipe.ingredients}</li>
    <li><h2 className="font-semibold">Instructions: </h2>{recipe.instructions}</li>
  </ul>
</div> */}