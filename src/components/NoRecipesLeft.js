import "../scss/_no-recipes-left.scss";

export const NoRecipesLeft = () => {

    return <div className="no-recipes-left">
        <h1>Sorry, no more recipes available. Try:</h1>
        <span>- search again, searches with the same settings may result in different results</span>
        <span>- try exclude fewer ingredients</span>
    </div>
}