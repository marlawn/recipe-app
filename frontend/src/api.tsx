import axios from 'axios';

const API_URL = "http://ec2-18-219-19-210.us-east-2.compute.amazonaws.com:8000/api";

// WORKS
export const getRecipes = () => {
    return axios.get(`${API_URL}/recipes/`);
}

// WORKS
export const getRecipeId = (id : number) => {
    return axios.get(`${API_URL}/recipes/${id}/`);
}

// WORKS
export const addRecipe = (recipeData : any) => {
    return axios.post(`${API_URL}/recipes/`, recipeData);
}

// WORKS
export const deleteRecipe = (id : number) => {
    return axios.delete(`${API_URL}/recipes/${id}`,);
}

export const addReview = (reviewData : any) => {
    return axios.post(`${API_URL}/reviews/`, reviewData);
}