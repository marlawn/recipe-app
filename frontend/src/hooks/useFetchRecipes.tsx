import { useEffect, useState } from 'react'
import api from '../api';

const useFetchRecipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await api.get("/recipes/");
                setRecipes(response.data);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };
        fetchRecipes();
    }, []);
    return { recipes, loading, error };
}

export default useFetchRecipes;
