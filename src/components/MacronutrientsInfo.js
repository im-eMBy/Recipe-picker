
export const MacronutrientsInfo = ({ recipeData }) => {
    const portions = recipeData.yield;

    const protein = (recipeData.totalNutrients.PROCNT.quantity / portions).toFixed(1);
    const fat = (recipeData.totalNutrients.FAT.quantity / portions).toFixed(1);
    const fiber = (recipeData.totalNutrients.FIBTG.quantity / portions).toFixed(1);
    const carbs = ((recipeData.totalNutrients.CHOCDF.quantity / portions).toFixed(1) - fiber).toFixed(1);
    const energy = (protein * 4 + carbs * 4 + fat * 9 + fiber * 2).toFixed(0);
    const satFat = (recipeData.totalNutrients.FASAT.quantity / portions).toFixed(1);
    const sugar = (recipeData.totalNutrients.SUGAR.quantity / portions).toFixed(1);
    const proteinPercent = (protein * 400 / energy).toFixed(0);
    const fatPercent = (fat * 900 / energy).toFixed(0);
    const carbsPercent = 100 - proteinPercent - fatPercent;

    return <>
        <ul>
            <li>Energy: {energy}kcal</li>
            <li>Protein: {protein}g</li>
            <li>Carbs: {carbs}g</li>
            <li>Fat: {fat}g</li>
            <li>Satureted fat: {satFat}g</li>
            <li>Sugar: {sugar}g</li>
            <li>Fiber: {fiber}g</li>
        </ul>
        <span>Macro distribution (% of calories):</span>
        <ul>
            <li>Carbs - {carbsPercent}%</li>
            <li>Fat - {fatPercent}%</li>
            <li>Protein - {proteinPercent}%</li>
        </ul>
        <div className="recipe-preview__macro-graph">
            <div className="recipe-preview__macro-graph--carbs"></div>
            <div className="recipe-preview__macro-graph--fat" style={{ width: `${fatPercent}%` }}></div>
            <div className="recipe-preview__macro-graph--protein" style={{ width: `${proteinPercent}%` }}></div>
        </div>
    </>
}