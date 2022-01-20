import { useSelector } from "react-redux";
import { actionCreators } from '../state/action-creators';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import { useEffect } from "react";

import { RecipesList } from "../components/RecipesList";
import { IngredientsSelection } from "../components/IngredientsSelection";
import { SingleRecipeSelect } from "../components/SingleRecipeSelect";

import "../scss/_post-query-view.scss";

export const PostQueryView = () => {
    const dispatch = useDispatch();
    const { setRecipes, setCurrentPage, setCurrentSubpage } = bindActionCreators(actionCreators, dispatch);
    const queryState = useSelector((state) => state.query);
    const { recipes, currentPage, currentSubpage } = useSelector((state) => state.app);

    useEffect(() => {
        // if (recipes.length < 11)
        if (queryState.isVegan !== "no") { setCurrentSubpage("ingredients - vegetables"); return }
        setCurrentSubpage("ingredients - meats");
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const pages = ["ingredients - meats", "ingredients - vegetables", "ingredients - grains", "ingredients - dairy", "single recipe select", "recipes list"];

    const handleNextPage = () => {
        const next = pages[pages.indexOf(currentSubpage) + 1];
        setCurrentSubpage(next);
    }

    const getContent = () => {
        if (recipes === null) return <h1>Loading...</h1>
        switch (currentSubpage) {
            case "ingredients - meats":
                return <IngredientsSelection nextPage={handleNextPage} ingredientsTypes={["meats", "poultry", "seafood", "cured meats"]} />
            case "ingredients - vegetables":
                return <IngredientsSelection nextPage={handleNextPage} ingredientsTypes={["vegetables", "fruit"]} />
            case "ingredients - grains":
                return <IngredientsSelection nextPage={handleNextPage} ingredientsTypes={["grains", "bread, rolls and tortillas"]} />
            case "ingredients - dairy":
                return <IngredientsSelection nextPage={handleNextPage} ingredientsTypes={["dairy", "cheese"]} />
            //"bread, rolls and tortillas", "grains", "fruits", "vegetables", "meats", "poultry", "dairy", "cheese"
            case "single recipe select":
                return <SingleRecipeSelect nextPage={handleNextPage} />
            case "recipes list":
                return <RecipesList />
            default:
                return null;
        }
    }

    return <div className="post-query-view">
        {getContent()}
        {/* {recipes !== null ? <RecipesList /> : null} */}
    </div>
}