const API_URL = 'https://api.edamam.com/api/recipes/v2?type=public&random=true';

const maxCalorieCall = '&nutrients%5BENERC_KCAL%5D=0-1000';

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

export const generateURL = (queryState) => {
    let url = API_URL + appIdCall + apiKeyCall;
    url += `&q=${queryState.keyWords}`;
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
    switch (queryState.dishType) {
        case "main course":
            url += mainCourseCall;
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
    return url;
}