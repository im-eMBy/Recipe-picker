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

import { generateURL } from "../api/generate-url";
import { apiGetRecipies } from "../api/api-request";

export const DietInfo = () => {
    const dispatch = useDispatch();
    const { setResponseData } = bindActionCreators(actionCreators, dispatch);
    const queryState = useSelector((state) => state.query);
    const { responseData } = useSelector((state) => state.app);


    return <div className="diet-info">
        <IsVeganSelection />
        {/* <DietSuperPowers/> */}
        <ClinicalDiets />
        <AllergiesSelection />
        <KeyWordsInput />
        <button style={{ backgroundColor: "green" }} onClick={() => { apiGetRecipies(generateURL(queryState), setResponseData) }}>Test</button>
        <p>{generateURL(queryState)}</p>
        {responseData !== null ? <RecipesList /> : null}
    </div>
}