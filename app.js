import { fetchRecipes } from "./src/helpers/asyncUtil.js";
import { generateHTML } from "./src/view/pagView.js";


 function handleRecipeSearch() {
    const searchForm = document.querySelector('#search-form');
    let searchQuery = '';
    
    searchForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        searchQuery = e.target.querySelector('input').value;
        const data = await fetchRecipes(searchQuery);
        generateHTML(data.hits);
    });
}
// Call the functions to set up event handlers
handleRecipeSearch();






