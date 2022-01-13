import { useSelector } from "react-redux";
import { actionCreators } from '../state/action-creators';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';

import { IsVeganSelection } from "../components/IsVeganSelection";
import { ClinicalDiets } from "../components/ClinicalDiets";
import { AllergiesSelection } from "../components/AllergiesSelection";
import { KeyWordsInput } from "../components/KeyWordsInput";
import { RecipesList } from "../components/RecipesList";
import { DishTypeSelection } from "../components/DishTypeSelection";
import { CuisineType } from "../components/CuisineType";

import { generateURL } from "../api/generate-url";
import { apiGetRecipies } from "../api/api-request";

import "../scss/_query-creator.scss";

export const PreQueryView = () => {
    const dispatch = useDispatch();
    const { setRecipes, setCurrentPage, setCurrentSubpage } = bindActionCreators(actionCreators, dispatch);
    const queryState = useSelector((state) => state.query);
    const { recipes, currentPage, currentSubpage } = useSelector((state) => state.app);
    const pages = ["query-1", "query-2", "query-3"];

    const handlePrevPage = () => {
        setCurrentSubpage(pages[pages.indexOf(currentSubpage) - 1]);
    }
    const handleNextPage = () => {
        if (currentSubpage === "query-3") {
            apiGetRecipies(generateURL(queryState), setRecipes);
            setCurrentPage("postQuery");
            return;
        }
        setCurrentSubpage(pages[pages.indexOf(currentSubpage) + 1]);
    }

    const getContent = () => {
        switch (currentSubpage) {
            case "query-1":
                return <>
                    <IsVeganSelection />
                    <AllergiesSelection />
                </>
            case "query-2":
                return <>
                    <ClinicalDiets />
                </>
            case "query-3":
                return <>
                    <DishTypeSelection />
                    <CuisineType />
                </>
            default:
                return <>
                    <IsVeganSelection />
                    <AllergiesSelection />
                </>
        }
    }

    return <div className="query-creator">
        {getContent()}
        <div className="query-creator__nav-buttons" style={currentSubpage === "query-1" ? { justifyContent: "flex-end" } : null}>
            {currentSubpage !== "query-1" ? <button className="query-creator__nav-button nav-button" onClick={() => handlePrevPage()}>Previous</button> : null}
            <button className="query-creator__nav-button nav-button" onClick={() => handleNextPage()}>Next</button>
        </div>
        <button style={{ backgroundColor: "green" }} onClick={() => { apiGetRecipies(generateURL(queryState), setRecipes) }}>Test</button>
    </div>
}