import { useSelector } from "react-redux"

import { IsVeganSelection } from "./IsVeganSelection"
import { DietSuperPowers} from "./DietSuperPowers"
import { AllergiesSelection } from "./AllergiesSelection"
import { KeyWordsInput } from "./KeyWordsInput"
import { generateURL } from "../api/api-call"

export const DietInfo = () => {
    const queryState = useSelector((state) => state.query);
    console.log(process.env.REACT_APP_API_KEY);
    return <div className="diet-info">
        <IsVeganSelection/>
        <DietSuperPowers/>
        <AllergiesSelection/>
        <KeyWordsInput/>
        <button style={{backgroundColor:"green"}}>Test</button>
        <p>{generateURL(queryState)}</p>
    </div>
}