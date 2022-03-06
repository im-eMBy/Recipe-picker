import { dessertFilter, sourcesFilter, spicesFilter } from "../utilis/filters";

const singleGetFetch = (url) => {
    return new Promise(res => {
        fetch(url, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(data => {
                res(data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    })

}
export async function apiGetRecipes(url, callback) {
    const firstRes = await singleGetFetch(url);
    // console.log(firstRes);
    let recipesList = [...firstRes.hits.map(hit => hit.recipe)];
    if (firstRes.count > 40) {
        const secondRes = await singleGetFetch(url);
        // console.log(secondRes);
        recipesList = [...recipesList, ...secondRes.hits.map(hit => hit.recipe)];
    }
    if (firstRes.count > 100) {
       const thirdRes = await singleGetFetch(url);
        // console.log(thirdRes);
        recipesList = [...recipesList, ...thirdRes.hits.map(hit => hit.recipe)];
    }

    //filtering recipes before setting array to state
    if (url.includes("&dishType=Main%20course")) recipesList = spicesFilter(recipesList);
    if (url.includes("&dishType=Dessert")) recipesList = dessertFilter(recipesList);
    recipesList = sourcesFilter(recipesList);
    recipesList = recipesList.filter((el, i, array) => array.findIndex(e => e.label === el.label) === i);

    callback(recipesList);
}