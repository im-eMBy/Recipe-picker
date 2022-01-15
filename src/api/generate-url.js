const API_URL = 'https://api.edamam.com/api/recipes/v2?type=public&random=true&imageSize=REGULAR';

const appIdCall = `&app_id=${process.env.REACT_APP_API_ID}`;
const apiKeyCall = `&app_key=${process.env.REACT_APP_API_KEY}`;

const pescatarianCall = '&health=pescatarian';
const vegetarianCall = '&health=vegetarian';
const veganCall = '&health=vegan';

const mainCourseCall = '&dishType=Main%20course';
const soupCall = '&dishType=Soup';
const starterCall = '&dishType=Starter';
const dessertCall = '&dishType=Dessert';
const saladCall = '&dishType=Salad';
const drinksCall = '&dishType=Drinks';
const condimentsCall = '&dishType=Condiments%20and%20sauces';

const cardiovascularCall = '&health=DASH';
const metabolicCall = '&health=sugar-conscious';
const kidneyCall = '&health=kidney-friendly';
const digestiveCall = '&health=fodmap-free';

const noPeanutsCall = '&health=peanut-free';
const noTreenutsCall = '&health=tree-nut-free';
const noWheatCall = '&health=wheat-free';
const noSoyCall = '&health=soy-free';
const noDairyCall = '&health=dairy-free';
const noEggsCall = '&health=egg-free';
const noFishCall = '&health=fish-free';
const noCrustaceansCall = '&health=crustacean-free';

const cuisineCall = '&cuisineType=';

const maxCalorieCall = '&nutrients%5BENERC_KCAL%5D=0-1000';
const minProteinCall = '&nutrients%5BPROCNT%5D=10%2B';

const minIngredientsCall = '&ingr=5%2B';

export const generateURL = (queryState) => {
    let url = API_URL + appIdCall + apiKeyCall;
    switch (queryState.isVegan) {
        case "pescatarian":
            url += pescatarianCall;
            break;
        case "vegetarian":
            url += vegetarianCall;
            break;
        case 'vegan':
            url += veganCall;
            break;
        default:
            //do nothing
            break;
    }
    if (queryState.allergies.treenuts) url += noTreenutsCall;
    if (queryState.allergies.peanuts) url += noPeanutsCall;
    if (queryState.allergies.wheat) url += noWheatCall;
    if (queryState.allergies.soy) url += noSoyCall;
    if (queryState.allergies.dairy) url += noDairyCall;
    if (queryState.allergies.eggs) url += noEggsCall;
    if (queryState.allergies.fish) url += noFishCall;
    if (queryState.allergies.crustaceans) url += noCrustaceansCall;
    if (queryState.clinical.cardiovascular) url += cardiovascularCall;
    if (queryState.clinical.metabolic) url += metabolicCall;
    if (queryState.clinical.kidney) url += kidneyCall;
    if (queryState.clinical.digestive) url += digestiveCall;
    switch (queryState.dishType) {
        case "main course":
            url += mainCourseCall;
            url += minProteinCall;
            url += minIngredientsCall;
            break;
        case "soup":
            url += soupCall;
            break;
        case "starter":
            url += starterCall;
            break;
        case "dessert":
            url += dessertCall;
            break;
        case "salad":
            url += saladCall;
            break;
        case "drinks":
            url += drinksCall
            break;
        case "condiments":
            url += condimentsCall;
            break;
        default:
            //do nothing
            break;
    }
    queryState.cuisineType.forEach(cuisine => {
        let param = cuisine;
        if (param.includes(" ")) {
            param = param.replace(/\s/g, '%20');
        }
        url += `${cuisineCall}${param}`;
    })
    url += `&q=${queryState.keyWords}`;
    if (url === API_URL + appIdCall + apiKeyCall + '&q=') url += maxCalorieCall;
    return url;
}