import { useSelector } from "react-redux";
import { actionCreators } from '../state/action-creators';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';

import { IsVeganSelection } from "../components/IsVeganSelection";
import { AllergiesSelection } from "../components/AllergiesSelection";
import { DishTypeSelection } from "../components/DishTypeSelection";
import { CuisineType } from "../components/CuisineType";

import { generateURL } from "../api/generate-url";
import { apiGetRecipies } from "../api/api-request";

import "../scss/_pre-query-view.scss";

export const PreQueryView = () => {
    const dispatch = useDispatch();
    const { restartState, setRecipes, setCurrentPage, setCurrentSubpage } = bindActionCreators(actionCreators, dispatch);
    const queryState = useSelector((state) => state.query);
    const { currentSubpage } = useSelector((state) => state.app);
    const pages = ["is vegan", "allergies", "dish type", "cuisine"];

    const handlePrevPage = () => {
        setCurrentSubpage(pages[pages.indexOf(currentSubpage) - 1]);
    }
    const handleNextPage = () => {
        if (currentSubpage === "cuisine") {
            apiGetRecipies(generateURL(queryState), setRecipes);
            setCurrentPage("postQuery");
            return;
        }
        setCurrentSubpage(pages[pages.indexOf(currentSubpage) + 1]);
    }

    const getContent = () => {
        switch (currentSubpage) {
            case "is vegan":
                return <IsVeganSelection />
            case "allergies":
                return <AllergiesSelection />
            case "dish type":
                return <DishTypeSelection />
            case "cuisine":
                return <CuisineType />
            default:
                return <>
                    <IsVeganSelection />
                    <AllergiesSelection />
                </>
        }
    }

    return <div className="query-creator">
        {getContent()}
        <div className="query-creator__nav-buttons" style={currentSubpage === "is vegan" ? { justifyContent: "flex-end" } : null}>
            <button className="query-creator__nav-button nav-button" onClick={() => handlePrevPage()} style={currentSubpage === "is vegan" ? {display: "none"} : null}>Previous</button>
            <button className="query-creator__nav-button nav-button" onClick={() => restartState()} style={currentSubpage === "is vegan" ? {display: "none"} : null}>Restart</button>
            <button className="query-creator__nav-button nav-button" onClick={() => handleNextPage()}>Next</button>
        </div>
    </div>
}