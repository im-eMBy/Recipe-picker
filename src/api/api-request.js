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
    if(firstRes._links.next !== undefined) {
        secondRes = await singleGetFetch(firstRes._links.next.href);
        console.log(secondRes);
        if(secondRes._links.next !== undefined) {
            thirdRes = await singleGetFetch(secondRes._links.next.href);
            console.log(thirdRes);
        }
    }
    let recipesList = firstRes.hits.map(hit => hit.recipe);
    if(secondRes !== null) recipesList = [...recipesList, ...secondRes.hits.map(hit => hit.recipe)];
    if(thirdRes !== null) recipesList = [...recipesList, ...thirdRes.hits.map(hit => hit.recipe)];
    successCallback(recipesList);
}