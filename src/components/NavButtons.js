import { useSelector } from "react-redux";
import { actionCreators } from '../state/action-creators';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';

export const NavButtons = ({onNext = undefined}) => {
    const dispatch = useDispatch();
    const { restartState, setRecipes, nextPage, prevPage } = bindActionCreators(actionCreators, dispatch);
    const { currentPage } = useSelector((state) => state.app);

    const handleNextPage = () => {
        if(onNext !== undefined) onNext();
        nextPage();
    }

    return <div className="nav-buttons">
        <button className="nav-button" onClick={prevPage} style={["is vegan", "allergies", "dish type", "cuisine"].includes(currentPage) ? null : { visibility: "hidden" }}>Previous</button>
        <button className="nav-button nav-button--reset" onClick={restartState} style={["welcome", "is vegan"].includes(currentPage) ? { visibility: "hidden" } : null}>Restart</button>
        <button className="nav-button" onClick={handleNextPage} style={currentPage === "recipe select" ? { visibility: "hidden" } : null}>Next</button>
    </div>
}