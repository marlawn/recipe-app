import React from 'react'

interface Recipe {
    recipe_name: string;
    description: string;
    ingredients: string;
    instructions: string;
}

export const RecipeDescription : React.FC = ({ recipe, onClose } : { recipe : any, onClose : any }) => {
    return (
        <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-500 bg-opacity-50'>
            <div className="relative flex flex-col bg-red-300 w-1/2 h-4/6 justify-center rounded-3xl p-16">
                <button onClick={onClose} className='absolute top-0 right-0 m-6'>X</button>
                <p className='flex justify-center text-xl font-semibold'>Recipe Name:</p>
                <div className='flex justify-center mb-2'>{recipe.recipe_name}</div>
                <p className='flex justify-center text-xl font-semibold'>Description:</p>
                <div className='flex justify-center text-center mb-2'>{recipe.description}</div>
                <p className='flex justify-center text-xl font-semibold'>Ingredients:</p>
                <div className='flex justify-center text-center mb-2'>{recipe.ingredients}</div>
                <p className='flex justify-center text-xl font-semibold'>Instructions:</p>
                <div className='flex justify-center text-center mb-2'>{recipe.instructions}</div>
            </div>
        </ div>
      )
}