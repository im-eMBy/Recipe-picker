import { useSelector } from "react-redux";
import { actionCreators } from '../state/action-creators';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';

import { IngredientsSelection } from "../components/IngredientsSelection";
import { RecipeSelect } from "../components/RecipeSelect";
import { Loading } from "../components/Loading";

import "../scss/_post-query-view.scss";

export const PostQueryView = () => {
    const dispatch = useDispatch();
    const { setCurrentSubpage } = bindActionCreators(actionCreators, dispatch);
    const { recipes, currentSubpage } = useSelector((state) => state.app);

    const pages = ["ingredients - meats", "ingredients - vegetables", "ingredients - grains", "ingredients - dairy", "single recipe select"];

    const handleNextPage = () => {
        const next = pages[pages.indexOf(currentSubpage) + 1];
        setCurrentSubpage(next);
    }

    const getContent = () => {
        if (recipes === null) return <>
            <h1>Loading</h1>
            <div style={{ position: "relative", width: "100px", height: "50px" }}>
                <Loading />
            </div>
        </>
        switch (currentSubpage) {
            case "ingredients - meats":
                return <IngredientsSelection nextPage={handleNextPage} ingredientsTypes={["meats", "poultry", "seafood", "cured meats"]} />
            case "ingredients - vegetables":
                return <IngredientsSelection nextPage={handleNextPage} ingredientsTypes={["vegetables", "fruit"]} />
            case "ingredients - grains":
                return <IngredientsSelection nextPage={handleNextPage} ingredientsTypes={["grains", "bread, rolls and tortillas"]} />
            case "ingredients - dairy":
                return <IngredientsSelection nextPage={handleNextPage} ingredientsTypes={["dairy", "cheese"]} />
            case "single recipe select":
                return <RecipeSelect />
            default:
                return <RecipeSelect />;
        }
    }

    return <div className="post-query-view">
        {getContent()}
    </div>
}