import reactDom from 'react-dom';
import { useSelector } from 'react-redux';
import { actionCreators } from '../state/action-creators';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import "../scss/_is-vegan-selection.scss";

import vegetarianIcon from '../images/icons/vegetarian.png';
import veganIcon from '../images/icons/vegan.png';
import pescatarianIcon from '../images/icons/fish.png'

export const IsVeganSelection = () => {
    const { isVegan } = useSelector((state) => state.query);
    const dispatch = useDispatch();
    const { setIsVegan } = bindActionCreators(actionCreators, dispatch);

    useEffect(() => {
        const overlayElement = reactDom.findDOMNode(document.querySelector(".is-vegan__overlay"));
        switch (isVegan) {
            case "no": overlayElement.style.left = `0%`; break;
            case "pescatarian": overlayElement.style.left = `25%`; break;
            case "vegetarian": overlayElement.style.left = `50%`; break;
            case "vegan": overlayElement.style.left = `75%`; break;
            default: overlayElement.style.left = `0%`; break;
        }
    }, [isVegan]);
    
    const handleClick = (ev) => {
        setIsVegan(ev.currentTarget.value);
    }

    return <div className='is-vegan__container'>
        <h1 className='is-vegan__question'>Are you on a plantbased diet?</h1>
        <div className="is-vegan__selection">
            <button className="is-vegan__option" value='no' onClick={(ev) => handleClick(ev)}>No</button>
            <button className="is-vegan__option" value='pescatarian' onClick={(ev) => handleClick(ev)}>
                <div className="icon-container is-vegan__icon-container">
                    <img src={pescatarianIcon} alt="" />
                </div>
                <span>Pescatarian</span>
            </button>
            <button className="is-vegan__option" value='vegetarian' onClick={(ev) => handleClick(ev)}>
                <div className="icon-container is-vegan__icon-container">
                    <img src={vegetarianIcon} alt="" />
                </div>
                <span>Vegetarian</span>
            </button>
            <button className="is-vegan__option" value='vegan' onClick={(ev) => handleClick(ev)}>
                <div className="icon-container is-vegan__icon-container">
                    <img src={veganIcon} alt="" />
                </div>
                <span>Vegan</span>
            </button>
            <div className="is-vegan__overlay"></div>
        </div>
    </div>
}