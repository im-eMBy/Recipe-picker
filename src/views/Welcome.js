import { useSelector } from "react-redux";
import { actionCreators } from '../state/action-creators';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';

import "../scss/_welcome-view.scss";

export const WelcomeView = () => {
    const dispatch = useDispatch();
    const { setCurrentPage } = bindActionCreators(actionCreators, dispatch);

    return <div className="welcome-view">
        <div className="welcome-view__container">
            <h1>Recipe picker app</h1>
            <p>Hi, this React.js application uses Edamam API and lets you browse random recipes.</p>
            <p>First answer a few questions and then point out unwanted ingredients.</p>
            <p>You can skip every step by clicking "next" button to get totally random recipes.</p>
            <button className="welcome-view__start-button" onClick={() => setCurrentPage("preQuery")}>Let's get started!</button>
        </div>
    </div>
}