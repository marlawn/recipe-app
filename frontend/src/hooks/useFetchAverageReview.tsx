// src/hooks/fetchAverageReview.js
import { useState, useEffect } from 'react';
import { getReviewForRecipe } from '../api';

const useFetchAverageReview = (recipeId : number) => {
  const [averageRating, setAverageRating] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const reviews = await getReviewForRecipe(recipeId);
        if (reviews.length === 0) {
          setAverageRating(null);
        } else {
          const totalRating = reviews.reduce((acc : any, review : any) => acc + review.rating, 0);
          const avgRating = totalRating / reviews.length;
          setAverageRating(avgRating);
        }
        setLoading(false);
      } catch (e) {
        setError(e);
        setLoading(false);
      }
    };

    fetchReviews();
  }, [recipeId]);

  return { averageRating, loading, error };
};

export default useFetchAverageReview;
