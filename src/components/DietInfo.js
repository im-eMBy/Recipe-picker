import { IsVeganSelection } from "./IsVeganSelection"
import { DietSuperPowers} from "./DietSuperPowers"
import { AllergiesSelection } from "./AllergiesSelection"

export const DietInfo = () => {

    return <div className="diet-info">
        <IsVeganSelection/>
        <DietSuperPowers/>
        <AllergiesSelection/>
    </div>
}