import { useEffect, useState } from "react";
import { getRecipes } from "../api";
import { RecipeDescription } from "./RecipeDescription";

interface Recipe {
  recipe_name: string;
  description: string;
}

export const Recipes: React.FC = () => {

  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  useEffect(() => {
    getRecipes()
      .then(response => {
        setRecipes(response.data);
      })
      .catch(e => {
        console.error('error fetching recipes:', e);
      })
  }, []);

  const handleClick = (recipe : any) => {
    setSelectedRecipe(recipe);
  }

  const handleClose = () => {
    setSelectedRecipe(null);
  }

  return (
    <div>
      {recipes.map(recipe => (
        <div className="p-5 border-4 cursor-pointer" onClick={() => handleClick(recipe)}>
          <h1 className="text-2xl font-semibold">{recipe.recipe_name}</h1>
          <p className="italic">{recipe.description}</p>
        </div>
      ))}
      {selectedRecipe && <RecipeDescription recipe={selectedRecipe} onClose={handleClose} />}
    </div>
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