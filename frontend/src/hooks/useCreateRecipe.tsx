import { useState } from "react";


const useCreateRecipe = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const createRecipe = async (recipeData) => {
        setLoading(true);
        try {
            const response = await api.post('/recipes/', recipeData ); 
            setLoading(false);
        } catch (e) {
            setError(e);
            setLoading(false);
            throw e;
        }
    };

    return { createRecipe, loading, error };
}

export default useCreateRecipe