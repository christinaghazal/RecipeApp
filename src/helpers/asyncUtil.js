import { APP_ID, APP_KEY } from "./constants.js";

 export async function fetchRecipes(query) {
    const baseURL = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=20`;
    const response = await fetch(baseURL);
    return await response.json();
}

