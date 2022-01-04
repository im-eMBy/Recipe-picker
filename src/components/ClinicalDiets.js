import { useSelector } from 'react-redux';
import { actionCreators } from '../state/action-creators';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import { SwitchButton } from './SwitchButton';

import "../scss/_clinical-diets.scss";

import cardiovascularIcon from "../images/icons/cardiovascular.png";
import metabolicIcon from "../images/icons/metabolic.png";
import digestiveIcon from "../images/icons/digestive.png";
import kidneyIcon from "../images/icons/kidney.png";

export const ClinicalDiets = () => {
    const { cardiovascular, metabolic, kidney, digestive } = useSelector((state) => state.query.clinical);
    const dispatch = useDispatch();
    const { setClinicalCardiovascular, setClinicalMetabolic, setClinicalDigestive, setClinicalKidney } = bindActionCreators(actionCreators, dispatch);

    return <div className="clinical-diets__outer-container">
        <h1 className="clinical-diets__question">Are you looking for a recipes that meets clinical recommendations?</h1>
        <p>Note: check only necessary options, each selected option significantly reduces the number of available recipes.</p>
        <div className="clinical-diets__inner-container">
            <div className="clinical-diets__item">
                <div className="icon-container clinical-diets__icon-container">
                    <img src={cardiovascularIcon} alt="" />
                </div>
                <span>Compliant with DASH diet for cardiovascular health</span>
                <SwitchButton onChange={() => setClinicalCardiovascular(!cardiovascular)} isActive={cardiovascular} />
            </div>
            <div className="clinical-diets__item">
                <div className="icon-container clinical-diets__icon-container">
                    <img src={metabolicIcon} alt="" />
                </div>
                <span>Low in sugar for metabolic health</span>
                <SwitchButton onChange={() => setClinicalMetabolic(!metabolic)} isActive={metabolic} />
            </div>
            <div className="clinical-diets__item">
                <div className="icon-container clinical-diets__icon-container">
                    <img src={digestiveIcon} alt="" />
                </div>
                <span>Compliant with low FODMAP diet for digestive comfort</span>
                <SwitchButton onChange={() => setClinicalDigestive(!digestive)} isActive={digestive} />
            </div>
            <div className="clinical-diets__item">
                <div className="icon-container clinical-diets__icon-container">
                    <img src={kidneyIcon} alt="" />
                </div>
                <span>With lower intake of phosphorus, potasium and sodium for kidney health</span>
                <SwitchButton onChange={() => setClinicalKidney(!kidney)} isActive={kidney} />
            </div>
        </div>
    </div>
}