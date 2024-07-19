import { useState } from 'react';
import { addReview } from '../api';

export const RecipeDescription = ({ recipe, onClose }: { recipe: any; onClose: () => void }) => {
    const [rating, setRating] = useState<number | null>(null);

    const handleRatingSubmit = async () => {
        if (rating === null || rating < 1 || rating > 5) {
            alert('Please enter a rating between 1 and 5.');
            return;
        }

        const reviewData = {
            recipe: recipe.id,
            rating: rating,
        };

        try {
            const response = await addReview(reviewData);
            console.log('Review created:', response.data);
            setRating(null);
        } catch (error) {
            console.error('Error creating review:', error);
        }
    };

    return (
        <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-500 bg-opacity-50'>
            <div className="relative flex flex-col bg-red-300 w-1/2 h-5/6 justify-center rounded-3xl p-16">
                <button onClick={onClose} className='absolute top-0 right-0 m-6'>X</button>
                <p className='flex justify-center text-xl font-semibold'>Recipe Name:</p>
                <div className='flex justify-center mb-2'>{recipe.recipe_name}</div>
                <p className='flex justify-center text-xl font-semibold'>Description:</p>
                <div className='flex justify-center text-center mb-2'>{recipe.description}</div>
                <p className='flex justify-center text-xl font-semibold'>Ingredients:</p>
                <div className='flex justify-center text-center mb-2'>{recipe.ingredients}</div>
                <p className='flex justify-center text-xl font-semibold'>Instructions:</p>
                <div className='flex justify-center text-center mb-2'>{recipe.instructions}</div>
                
                <div className='flex flex-col items-center'>
                    <p className='text-xl font-semibold'>Rate this Recipe:</p>
                    <input
                        type='number'
                        value={rating ?? ''}
                        onChange={(e) => setRating(parseInt(e.target.value))}
                        className='w-1/3 p-2 border-4 rounded-xl border-white mb-2'
                        min={1}
                        max={5}
                        placeholder='Rate between 1 and 5'
                    />
                    <button
                        onClick={handleRatingSubmit}
                        className='font-bold text-red-800 text-2xl mt-2'>
                        Submit Review
                    </button>
                </div>
            </div>
        </div>
    )
}
