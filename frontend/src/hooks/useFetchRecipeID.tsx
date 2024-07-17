import { useEffect, useState } from "react";
import api from "../api"


const useFetchRecipeID = (id: any) => {

    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRecipeID = async () => {
            try {
                const recipeID = await api.get("/recipes/${id}");
                setRecipe(recipeID.data);
                setLoading(false);
            } catch (e) {
                setError(e);
                setLoading(false);
            }
        }

        fetchRecipeID();
    }, [id]);

    return { recipe, loading, error };
  }

export default useFetchRecipeID;