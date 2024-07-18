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
        <div className="p-5 border-4 flex flex-row">
          <div className="flex flex-4 flex-col cursor-pointer" onClick={() => handleClick(recipe)}>
            <h1 className="text-2xl font-semibold">{recipe.recipe_name}</h1>
            <p className="italic">{recipe.description}</p>
          </div>
          <button className='flex flex-1 justify-end items-center cursor-default pl-3'>
            <div className="text-red-700 font-extrabold text-3xl cursor-pointer">X</div>
          </button>
        </div>
      ))}
      {selectedRecipe && <RecipeDescription recipe={selectedRecipe} onClose={handleClose} />}
    </div>
  )
}