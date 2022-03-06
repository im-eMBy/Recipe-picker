import { actionCreators } from "../../state/action-creators";
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";

export const IsVeganOption = ({ option, icon }) => {
    const dispatch = useDispatch();
    const { setIsVegan } = bindActionCreators(actionCreators, dispatch);

    return <button className="is-vegan__option" onClick={() => setIsVegan(option)}>
        {icon ?
            <div className="icon-container is-vegan__icon-container">
                <img src={icon} alt={option} />
            </div>
            : null}
        <span>{option[0].toUpperCase() + option.substring(1)}</span>
    </button>
}