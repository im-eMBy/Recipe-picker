import { useSelector } from 'react-redux';
import { actionCreators } from '../../state/action-creators';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';

export const AllergiesOption = ({name, icon, apiValue}) => {
    const { allergies } = useSelector((state) => state.query);
    const dispatch = useDispatch();
    const { addAllergy, removeAllergy } = bindActionCreators(actionCreators, dispatch);

    const isActive = allergies.includes(apiValue);

    const handleClick = () => {
        if(isActive) {
            removeAllergy(apiValue);
            return;
        }
        addAllergy(apiValue);
    }

    return <button
        onClick={handleClick}
        className={isActive ? "allergy-selection__allergy-button allergy-selection__allergy-button--active" : "allergy-selection__allergy-button"}>
        <span>{isActive ? `No ${name.toLowerCase()}` : name}</span>
        <div className="icon-container">
            <img src={icon} alt={`${name} allergy`} />
        </div>
    </button>
}