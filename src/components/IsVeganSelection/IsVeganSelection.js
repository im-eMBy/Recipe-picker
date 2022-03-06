import reactDom from "react-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { IsVeganOption } from "./IsVeganOption";
import { NavButtons } from "../NavButtons";

import "../../scss/_is-vegan-selection.scss";

import vegetarianIcon from "../../images/icons/vegetarian.png";
import veganIcon from "../../images/icons/vegan.png";
import pescatarianIcon from "../../images/icons/fish.png"

export const IsVeganSelection = () => {
    const { isVegan } = useSelector((state) => state.query);
    const [sWindow, setSWindow] = useState(window.matchMedia("(max-width: 800px)").matches);

    useEffect(() => {
        const windowWatcher = window.matchMedia("(max-width: 800px)");
        const change = (ev) => setSWindow(ev.matches);
        windowWatcher.addEventListener("change", change);
        return () => {
            windowWatcher.removeEventListener("change", change);
        }
    }, [])
    useEffect(() => {
        const overlayElement = reactDom.findDOMNode(document.querySelector(".is-vegan__overlay"));
        if (sWindow) {
            overlayElement.style.left = `0%`;
            switch (isVegan) {
                case "no": overlayElement.style.top = `0%`; break;
                case "pescatarian": overlayElement.style.top = `25%`; break;
                case "vegetarian": overlayElement.style.top = `50%`; break;
                case "vegan": overlayElement.style.top = `75%`; break;
                default: overlayElement.style.top = `0%`; break;
            }
            return;
        }
        overlayElement.style.top = `0%`;
        switch (isVegan) {
            case "no": overlayElement.style.left = `0%`; break;
            case "pescatarian": overlayElement.style.left = `25%`; break;
            case "vegetarian": overlayElement.style.left = `50%`; break;
            case "vegan": overlayElement.style.left = `75%`; break;
            default: overlayElement.style.left = `0%`; break;
        }
    }, [isVegan, sWindow]);

    return <>
        <div className="is-vegan__outer-container">
            <h1 className="is-vegan__question">Are you on a plantbased diet?</h1>
            <div className="is-vegan__inner-container">
                <IsVeganOption option="no" />
                <IsVeganOption option="pescatarian" icon={pescatarianIcon} />
                <IsVeganOption option="vegetarian" icon={vegetarianIcon} />
                <IsVeganOption option="vegan" icon={veganIcon} />
                <div className="is-vegan__overlay"></div>
            </div>
        </div>
        <NavButtons />
    </>
}