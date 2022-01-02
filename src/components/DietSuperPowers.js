import { useSelector } from 'react-redux';
import { actionCreators } from '../state/action-creators';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import { SwitchButton } from './SwitchButton';

import "../scss/_diet-superpowers.scss";

import proteinIcon from '../images/icons/protein.png';
import sugarFreeIcon from '../images/icons/sugar-free.png';
import fiberIcon from '../images/icons/fiber.png';

export const DietSuperPowers = () => {
    const { isHighProtein, isNoSugar, isHighFiber} = useSelector((state) => state.query.superpowers);
    const dispatch = useDispatch();
    const { setIsHighProtein, setIsNoSugar, setIsHighFiber } = bindActionCreators(actionCreators, dispatch);

    const handleIsHighProteinChange = () => {
        setIsHighProtein(!isHighProtein);
    }
    const handleIsNoSugarChange = () => {
        setIsNoSugar(!isNoSugar);
    }
    const handleIsHighFiberChange = () => {
        setIsHighFiber(!isHighFiber);
    }

    return <div className="diet-superpowers__outer-container">
        <h1 className="diet-superpowers__question">Are you looking for recipie with superpowers?</h1>
        <div className="diet-superpowers__inner-container">
            <div className="diet-superpowers__item">
                <div className="icon-container diet-superpowers__icon-container">
                    <img src={proteinIcon} alt="" />
                </div>
                <span>High protein (at least 20g per portion)</span>
                <SwitchButton onChange={handleIsHighProteinChange} isActive={isHighProtein} />
            </div>
            <div className="diet-superpowers__item">
                <div className="icon-container diet-superpowers__icon-container">
                    <img src={sugarFreeIcon} alt="" />
                </div>
                <span>No sugar (max 4g per portion)</span>
                <SwitchButton onChange={handleIsNoSugarChange} isActive={isNoSugar} />
            </div>
            <div className="diet-superpowers__item">
                <div className="icon-container diet-superpowers__icon-container">
                    <img src={fiberIcon} alt="" />
                </div>
                <span>High in fiber (at least 5g per portion)</span>
                <SwitchButton onChange={handleIsHighFiberChange} isActive={isHighFiber} />
            </div>

        </div>
    </div>
}