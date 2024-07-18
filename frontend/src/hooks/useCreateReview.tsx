import { useState } from "react";
import api from "../api";


const useCreateReview = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const createReview = async (reviewData : any) => {
        setLoading(true);
        try {
            const response = await api.post("/reviews/", reviewData);
            setLoading(false);
            return response.data;
        } catch (e) {
            setError(e);
            setLoading(false);
            throw e;
        }
    };    

    return { createReview, loading, error }; 
}

export default useCreateReview