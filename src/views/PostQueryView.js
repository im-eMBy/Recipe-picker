import { useSelector } from "react-redux";
import { actionCreators } from '../state/action-creators';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import { useEffect } from "react";

import { RecipesList } from "../components/RecipesList";
import { IngredientsSelection } from "../components/IngredientsSelection";

import "../scss/_post-query-view.scss";

export const PostQueryView = () => {
    const dispatch = useDispatch();
    const { setRecipes, setCurrentPage, setCurrentSubpage } = bindActionCreators(actionCreators, dispatch);
    const queryState = useSelector((state) => state.query);
    const { recipes, currentPage, currentSubpage } = useSelector((state) => state.app);

    useEffect(() => {
        if (queryState.isVegan !== "no") { setCurrentSubpage("ingredients - vegetables/fruits"); return }
        setCurrentSubpage("ingredients - meats");
    }, []);

    const pages = ["ingredients - meats", "ingredients - vegetables/fruits", "ingredients - grains"]

    const handleNextPage = () => {
        setCurrentSubpage(pages[pages.indexOf(currentSubpage) + 1]);
    }

    return <div className="post-query-view">
        {recipes !== null ? <IngredientsSelection nextPage={handleNextPage} ingredientType1="vegetables" ingredientType2="fruits" /> : null}
        {/* {recipes !== null ? <RecipesList /> : null} */}
    </div>
}