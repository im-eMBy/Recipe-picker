export const apiGetRecipies = (url, successCallback) => {
    fetch(url, {
        method: 'GET'
    })
        .then(response => response.json())
        .then(data => {
            successCallback(data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}