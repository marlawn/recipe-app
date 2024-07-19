import { useState } from "react";
import { addRecipe } from "../api";

export const AddRecipe = ({ onToggleShowHome } : { onToggleShowHome: any}) => {
  const [recipeName, setRecipeName] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');

  const handleSubmit = async () => {
    const newRecipe = {
      recipe_name: recipeName,
      description: description,
      ingredients: ingredients,
      instructions: instructions,
    }

    try {
      await addRecipe(newRecipe);
      setRecipeName('');
      setDescription('');
      setIngredients('');
      setInstructions('');
      onToggleShowHome();
    } catch (e) {
      console.error('Error creating recipe:', e);
    }
  }

  return (
    <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-500 bg-opacity-50'>
        <div className="relative flex flex-col bg-red-300 w-1/2 h-5/6 justify-center rounded-3xl">
            <button onClick={onToggleShowHome} className='absolute top-0 right-0 m-6'>X</button>

            <p className='flex justify-center text-xl'>Name of Recipe:</p>
            <div className='flex justify-center'>
              <input 
                className='w-2/3 align-middle border-4 rounded-xl border-white'
                value={recipeName}
                onChange={(e) => setRecipeName(e.target.value)} 
              />
            </div>
            
            <p className='flex justify-center text-xl'>Description:</p>
            <div className='flex justify-center'>
              <input 
                className='w-2/3 align-middle border-4 rounded-xl border-white'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            
            <p className='flex justify-center text-xl'>Ingredients:</p>
            <div className='flex justify-center'>
              <input 
                className='w-2/3 align-middle border-4 rounded-xl border-white'
                value={ingredients}  
                onChange={(e) => setIngredients(e.target.value)}
              />
            </div>
           
           <p className='flex justify-center text-xl'>Instructions:</p>
            <div className='flex justify-center'>
              <input 
                className='w-2/3 align-middle border-4 rounded-xl border-white' 
                value={instructions}
                onChange={(e) => setInstructions(e.target.value)}/>
            </div>
            
            <button className='absolute bottom-0 right-0 left-0 m-6 font-bold text-red-800 text-2xl' onClick={handleSubmit}>ADD</button>
        </div>
    </ div>
  )
}
