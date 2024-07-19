import { useEffect, useState } from "react";
import { getRecipes, deleteRecipe } from "../api";
import { RecipeDescription } from "./RecipeDescription";

interface Recipe {
  id: number;
  recipe_name: string;
  description: string;
}

export const Recipes: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  useEffect(() => {
    getRecipes()
      .then(response => {
        setRecipes(response.data);
      })
      .catch(e => {
        console.error('error fetching recipes:', e);
      });
  }, []);

  const handleClick = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleClose = () => {
    setSelectedRecipe(null);
  };

  const handleDelete = (id: number) => {
    deleteRecipe(id)
      .then(() => {
        // Remove the deleted recipe from the state
        setRecipes(recipes.filter(recipe => recipe.id !== id));
        // Close the selected recipe if it's the one being deleted
        if (selectedRecipe && selectedRecipe.id === id) {
          setSelectedRecipe(null);
        }
      })
      .catch(e => {
        console.error('error deleting recipe:', e);
      });
  };

  return (
    <div>
      {recipes.map(recipe => (
        <div key={recipe.id} className="p-5 border-4 flex flex-row">
          <div className="flex-4 flex flex-col cursor-pointer" onClick={() => handleClick(recipe)}>
            <h1 className="text-2xl font-semibold">{recipe.recipe_name}</h1>
            <p className="italic">{recipe.description}</p>
          </div>
          <button className="flex-1 flex justify-end items-center cursor-pointer pl-3" onClick={() => handleDelete(recipe.id)}>
            <div className="text-red-700 font-extrabold text-3xl">X</div>
          </button>
        </div>
      ))}
      {selectedRecipe && <RecipeDescription recipe={selectedRecipe} onClose={handleClose} />}
    </div>
  );
};
