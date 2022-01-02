import { useSelector } from 'react-redux';
import { actionCreators } from '../state/action-creators';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';

import "../scss/_allergies-selection.scss";

import soyIcon from "../images/icons/soy.png";
import peanutIcon from "../images/icons/peanut.png";
import treenutsIcon from "../images/icons/treenuts.png";
import wheatIcon from "../images/icons/wheat.png";
import eggsIcon from "../images/icons/eggs.png";
import dairyIcon from "../images/icons/dairy.png";
import fishIcon from "../images/icons/salmon.png";
import crustceansIcon from "../images/icons/crustceans.png";

export const AllergiesSelection = () => {
   const { isVegan, allergies } = useSelector((state) => state.query);
   const dispatch = useDispatch();
   const { setAllergyPeanuts, setAllergyTreenuts, setAllergyWheat, setAllergySoy, setAllergyDairy, setAllergyEggs, setAllergyFish, setAllergyCrustceans } = bindActionCreators(actionCreators, dispatch);

   const getFirstRow = () => {
      return <>
         <button
            onClick={() => setAllergyTreenuts(!allergies.treenuts)}
            className={allergies.treenuts ? "allergy-selection__allergy-button allergy-selection__allergy-button--active" : "allergy-selection__allergy-button"}>
            <span>{allergies.treenuts ? "No treenuts" : "Treenuts"}</span>
            <div className="icon-container">
               <img src={treenutsIcon} alt="" />
            </div></button>
         <button
            onClick={() => setAllergyPeanuts(!allergies.peanuts)}
            className={allergies.peanuts ? "allergy-selection__allergy-button allergy-selection__allergy-button--active" : "allergy-selection__allergy-button"}>
            <span>{allergies.peanuts ? "No peanuts" : "Peanuts"}</span>
            <div className="icon-container">
               <img src={peanutIcon} alt="" />
            </div>
         </button>
         <button
            onClick={() => setAllergyWheat(!allergies.wheat)}
            className={allergies.wheat ? "allergy-selection__allergy-button allergy-selection__allergy-button--active" : "allergy-selection__allergy-button"}>
            <span>{allergies.wheat ? "No wheat" : "Wheat"}</span>
            <div className="icon-container">
               <img src={wheatIcon} alt="" />
            </div>
         </button>
         <button
            onClick={() => setAllergySoy(!allergies.soy)}
            className={allergies.soy ? "allergy-selection__allergy-button allergy-selection__allergy-button--active" : "allergy-selection__allergy-button"}>
            <span>{allergies.soy ? "No soy" : "Soy"}</span>
            <div className="icon-container">
               <img src={soyIcon} alt="" />
            </div>
         </button>
      </>
   }
   const getSecondRow = () => {
      if (isVegan === "vegan") return null;
      return <>
         <button
            onClick={() => setAllergyDairy(!allergies.dairy)}
            className={allergies.dairy ? "allergy-selection__allergy-button allergy-selection__allergy-button--active" : "allergy-selection__allergy-button"}>
            <span>{allergies.dairy ? "No dairy" : "Dairy"}</span>
            <div className="icon-container">
               <img src={dairyIcon} alt="" />
            </div>
         </button>
         <button
            onClick={() => setAllergyEggs(!allergies.eggs)}
            className={allergies.eggs ? "allergy-selection__allergy-button allergy-selection__allergy-button--active" : "allergy-selection__allergy-button"}>
            <span>{allergies.eggs ? "No eggs" : "Eggs"}</span>
            <div className="icon-container">
               <img src={eggsIcon} alt="" />
            </div>
         </button>
         {isVegan !== "vegetarian" ? <>
            <button
               onClick={() => setAllergyFish(!allergies.fish)}
               className={allergies.fish ? "allergy-selection__allergy-button allergy-selection__allergy-button--active" : "allergy-selection__allergy-button"}>
               <span>{allergies.fish ? "No fish" : "Fish"}</span>
               <div className="icon-container">
                  <img src={fishIcon} alt="" />
               </div>
            </button>
            <button
               onClick={() => setAllergyCrustceans(!allergies.crustceans)}
               className={allergies.crustceans ? "allergy-selection__allergy-button allergy-selection__allergy-button--active" : "allergy-selection__allergy-button"}>
               <span>{allergies.crustceans ? "No crustceans" : "Crustceans"}</span>
               <div className="icon-container">
                  <img src={crustceansIcon} alt="" />
               </div>
            </button>
         </> : null}
      </>
   }

   return <div className="allergy-selection__outer-container">
      <h1>Do you need to eleminate any allergens?</h1>
      <div className="allergy-selection__inner-container">
         {getFirstRow()}
         {getSecondRow()}
      </div>
   </div>
}