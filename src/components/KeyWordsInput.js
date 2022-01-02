import { useSelector } from 'react-redux';
import { actionCreators } from '../state/action-creators';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';

import "../scss/_key-words-input.scss";

export const KeyWordsInput = () => {
    const { keyWords, isVegan, allergies } = useSelector((state) => state.query);
    const dispatch = useDispatch();
    const { setKeyWords } = bindActionCreators(actionCreators, dispatch);

    return <div className="key-words-input__container">
        <input value={keyWords} onChange={ev => setKeyWords(ev.target.value)} />
    </div>
}