import { useSelector } from 'react-redux';
import { actionCreators } from '../state/action-creators';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';

import "../scss/_key-words-input.scss";

const mealsKeywords = ["Pizza", "Soup", "Salad", "Pasta", "Curry", "Sandwich", "Burger"]
const ingridientsKeywords = ["Rice", "Fish", "Tomato", "Pumpkin", "Strawberries"]

export const KeyWordsInput = () => {
    const { keyWords, isVegan, allergies, clinical } = useSelector((state) => state.query);
    const dispatch = useDispatch();
    const { setKeyWords } = bindActionCreators(actionCreators, dispatch);

    const getMealsKeywords = () => {
        return mealsKeywords.map(keyword => <button value={keyword} onClick={ev => setKeyWords(ev.target.value)}>{keyword}</button>)
    }
    const getIngridientsKeywords = () => {
        return ingridientsKeywords.map(keyword => <button value={keyword} onClick={ev => setKeyWords(ev.target.value)}>{keyword}</button>)
    }

    return <div className="key-words__container">
        <div className="key-words__suggestions">{getMealsKeywords()}</div>
        <div className="key-words__suggestions">{getIngridientsKeywords()}</div>
        <input value={keyWords} onChange={ev => setKeyWords(ev.target.value)} />
    </div>
}