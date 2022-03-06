import { useSelector } from 'react-redux';
import { NavButtons } from '../NavButtons';
import { AllergiesOption } from './AllergiesOption';

import "../../scss/_allergies-selection.scss";

import soyIcon from "../../images/icons/soy.png";
import peanutIcon from "../../images/icons/peanut.png";
import treenutsIcon from "../../images/icons/treenuts.png";
import wheatIcon from "../../images/icons/wheat.png";
import eggsIcon from "../../images/icons/eggs.png";
import dairyIcon from "../../images/icons/dairy.png";
import fishIcon from "../../images/icons/salmon.png";
import crustaceansIcon from "../../images/icons/crustaceans.png";

export const AllergiesSelection = () => {
   const { isVegan } = useSelector((state) => state.query);

   return <>
      <div className="allergy-selection__outer-container">
         <h1>Do you need to eleminate any allergens?</h1>
         <div className="allergy-selection__inner-container">
            <AllergiesOption name="Treenuts" icon={treenutsIcon} apiValue="tree-nut"/>
            <AllergiesOption name="Peanuts" icon={peanutIcon} apiValue="peanut" />
            <AllergiesOption name="Wheat" icon={wheatIcon} apiValue="wheat" />
            <AllergiesOption name="Soy" icon={soyIcon} apiValue="soy" />
            {isVegan === "vegan" ? null : <AllergiesOption name="Eggs" icon={eggsIcon} apiValue="egg" />}
            {isVegan === "vegan" ? null : <AllergiesOption name="Dairy" icon={dairyIcon} apiValue="dairy" />}
            {["vegetarian", "vegan"].includes(isVegan) ? null : <AllergiesOption name="Fish" icon={fishIcon} apiValue="fish" />}
            {["vegetarian", "vegan"].includes(isVegan) ? null : <AllergiesOption name="Crustaceans" icon={crustaceansIcon} apiValue="crustacean" />}
         </div>
      </div>
      <NavButtons />
   </>
}