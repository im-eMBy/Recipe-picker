import { spicesFilter } from "../utilis/recipes-array-functions/filters";

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
export async function apiGetRecipies(url, successCallback) {
    let firstRes = null;
    let secondRes = null;
    let thirdRes = null;

    firstRes = await singleGetFetch(url);
    console.log(firstRes);
    secondRes = await singleGetFetch(url);
    console.log(secondRes);
    thirdRes = await singleGetFetch(url);
    console.log(thirdRes);

    let recipesList = [...firstRes.hits.map(hit => hit.recipe), ...secondRes.hits.map(hit => hit.recipe), ...thirdRes.hits.map(hit => hit.recipe)];


    //filtering recipes before setting array to state
    if(url.includes("&dishType=Main%20course"))  recipesList = spicesFilter(recipesList);
   
    successCallback(recipesList);
}