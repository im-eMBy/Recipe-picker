//component for testing purpose

import { useSelector } from 'react-redux';

import { spicesFilter, labelFilter } from "../utilis/recipes-array-functions/filters";

export const RecipesList = () => {
    const { recipes } = useSelector((state) => state.app);
    const { keyWords } = useSelector((state) => state.query);

    // const filteredRecipes = spicesFilter(recipes);
    // const doubleFilteredRecipes = (labelFilter(filteredRecipes, keyWords));

    const getLinks = () => {
        // console.log(recipes);
        return recipes.map(recipe => <li>
            <a href={recipe.url} target="_blank" rel="noreferrer">{recipe.label}</a>
        </li>)
    }
    // const getFilteredLinks = () => { 
    //     // console.log(filteredRecipes);
    //     return filteredRecipes.map(recipe => <li>
    //         <a href={recipe.url} target="_blank" rel="noreferrer">{recipe.label}</a>
    //     </li>)
    // }
    // const getDoubleFilteredLinks = () => { 
    //     return doubleFilteredRecipes.map(recipe => <li>
    //         <a href={recipe.url} target="_blank" rel="noreferrer">{recipe.label}</a>
    //     </li>)
    // }

    return <>
        <h1>{recipes.length}</h1>
        <ul>
            {getLinks()}
        </ul>
        {/* <h1>Showing {filteredRecipes.length } out of: {responseData.count} found</h1>
        <ul>
            {getFilteredLinks()}
        </ul>
        <h1>Showing {doubleFilteredRecipes.length } out of: {responseData.count} found</h1>
        <ul>
            {getDoubleFilteredLinks()}
        </ul> */}
    </>
}