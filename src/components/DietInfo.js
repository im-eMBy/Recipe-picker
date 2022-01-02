import { IsVeganSelection } from "./IsVeganSelection"
import { DietSuperPowers} from "./DietSuperPowers"
import { AllergiesSelection } from "./AllergiesSelection"
import { KeyWordsInput } from "./KeyWordsInput"

export const DietInfo = () => {

    return <div className="diet-info">
        <IsVeganSelection/>
        <DietSuperPowers/>
        <AllergiesSelection/>
        <KeyWordsInput/>
    </div>
}