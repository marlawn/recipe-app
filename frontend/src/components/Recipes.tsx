import useFetchRecipeID from "../hooks/useFetchRecipeID";
import useFetchRecipes from "../hooks/useFetchRecipes";


export const Recipes = () => {
  const { recipes, loading, error } = useFetchRecipes();
  const recipe = useFetchRecipeID(1).recipe;

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;


  return (
    <>
    <div>{recipe}</div>
    <h1>Recipes</h1>
    <ul className="p-5 border-4">
        {recipes.map(recipe => (
          <li key={recipe['id']}>{recipe['title']}</li>
        ))}
        {/* <h1 className="text-2xl font-semibold">Title</h1>
        <p>Description</p> */}
    </ul>
    </>
  )
}
