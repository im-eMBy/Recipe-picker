import { NavButtons } from "./NavButtons";

import "../scss/_welcome-view.scss";

export const WelcomeView = () => {
    return <>
        <div className="welcome-view__container">
            <h1>Recipe picker app</h1>
            <p>Hi, this React.js application uses Edamam API and lets you browse random recipes.</p>
            <p>First answer a few questions and then point out unwanted ingredients.</p>
            <p>You can skip every step by clicking "next" button to get totally random recipes.</p>
        </div>
        <NavButtons />
    </>
}