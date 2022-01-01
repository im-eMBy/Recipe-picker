import { useSelector } from 'react-redux';
import { actionCreators } from '../state/action-creators';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';

import "../scss/_allergies-selection.scss";

import soyIcon from "../images/icons/soy.png";
import peanutIcon from "../images/icons/peanut.png"

export const AllergiesSelection = () => {
   const { isVegan } = useSelector((state) => state.dietInfo);
   const dispatch = useDispatch();
   const { setIsHighProtein } = bindActionCreators(actionCreators, dispatch);


   return <div className="allergies-selection__outer-container">
      <h1>Wanna eleminate some allergens?</h1>
      <div className="allergies-selection__inner-container">
         <button className="allergie-selection__allergy-button">
            <span>Treenuts</span>
            <div className="icon-container">
               <img src={peanutIcon} alt="" />
            </div></button>
         <button className="allergie-selection__allergy-button">
            <span>Peanuts</span>
            <div className="icon-container">
               <img src={peanutIcon} alt="" />
            </div>
         </button>
         <button className="allergie-selection__allergy-button">
            <span>Wheat</span>
            <div className="icon-container">
               <img src={soyIcon} alt="" />
            </div>
         </button>
         <button className="allergie-selection__allergy-button">
            <span>Soy</span>
            <div className="icon-container">
               <img src={soyIcon} alt="" />
            </div>
         </button>
         <button className="allergie-selection__allergy-button">
            <span>Dairy</span>
            <div className="icon-container">
               <img src={peanutIcon} alt="" />
            </div>
         </button>
         <button className="allergie-selection__allergy-button">
            <span>Eggs</span>
            <div className="icon-container">
               <img src={peanutIcon} alt="" />
            </div>
         </button>
         <button className="allergie-selection__allergy-button"><span>Fish</span>
            <div className="icon-container">
               <img src={peanutIcon} alt="" />
            </div>
         </button>
         <button className="allergie-selection__allergy-button">
            <span>Crustceans</span>
            <div className="icon-container">
               <img src={peanutIcon} alt="" />
            </div>
         </button>
      </div>

   </div>
}