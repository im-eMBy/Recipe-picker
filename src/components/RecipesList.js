import { useSelector } from 'react-redux';


export const RecipesList = () => {
    const { responseData } = useSelector((state) => state.app);

    const getLinks = () => {
        const recipes = responseData.hits.map(hit => hit.recipe);
        console.log(recipes);
        // const filteredRecipes = recipes.filter(recipe => !recipe.label.includes("Spice"));
        // console.log(filteredRecipes);
        return recipes.map(recipe => <li>
            <a href={recipe.url} target="_blank" rel="noreferrer">{recipe.label}</a>
        </li>)
    }

    return <>
    <h1>Showing 20 out of: {responseData.count} found</h1>
        <ul>
            {getLinks()}
        </ul>
    </>
}