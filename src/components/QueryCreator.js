import { useSelector } from "react-redux";
import { actionCreators } from '../state/action-creators';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';

import { IsVeganSelection } from "./IsVeganSelection";
import { DietSuperPowers } from "./DietSuperPowers";
import { ClinicalDiets } from "./ClinicalDiets";
import { AllergiesSelection } from "./AllergiesSelection";
import { KeyWordsInput } from "./KeyWordsInput";
import { RecipesList } from "./RecipesList";
import { DishTypeSelection } from "./DishTypeSelection";
import { CuisineType } from "./CuisineType";

import { generateURL } from "../api/generate-url";
import { apiGetRecipies } from "../api/api-request";

import "../scss/_query-creator.scss";

export const QueryCreator = () => {
    const dispatch = useDispatch();
    const { setRecipes, setCurrentPage } = bindActionCreators(actionCreators, dispatch);
    const queryState = useSelector((state) => state.query);
    const { recipes, currentPage } = useSelector((state) => state.app);
    const pages = ["query-1", "query-2", "query-3"];

    const handlePrevPage = () => {
        setCurrentPage(pages[pages.indexOf(currentPage) - 1]);
    }
    const handleNextPage = () => {
        setCurrentPage(pages[pages.indexOf(currentPage) + 1]);
    }

    const getContent = () => {
        switch (currentPage) {
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
        <div className="query-creator__nav-buttons">
            {currentPage !== "query-1" ? <button className="query-creator__nav-button nav-button" onClick={() => handlePrevPage()}>Previous</button> : null}
            <button className="query-creator__nav-button nav-button" onClick={() => handleNextPage()}>Next</button>
        </div>
        <button style={{ backgroundColor: "green" }} onClick={() => { apiGetRecipies(generateURL(queryState), setRecipes) }}>Test</button>
        {recipes !== null ? <RecipesList /> : null}
    </div>
}