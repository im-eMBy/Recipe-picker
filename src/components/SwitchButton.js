import '../scss/_switch-button.scss';

export const SwitchButton = ({ onChange, isActive }) => {

    return <button className={isActive ? "switch-button switch-button--active" : "switch-button"} onClick={() => onChange()}>
        <span className={isActive ? "switch-button__circle switch-button__circle--active" : "switch-button__circle"}></span>
    </button>
}