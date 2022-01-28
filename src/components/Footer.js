import "../scss/_footer.scss";

export const Footer = () => {

    return <div className="footer">
        <div className="footer__inner-container">
            <p>Created by <a href="https://github.com/im-eMBy" target="_blank" rel="noreferrer">Michał Bieńko</a></p>
            <p>Icons made by&nbsp;
                <a href="https://www.flaticon.com/authors/freepik" title="monkik" target="_blank" rel="noreferrer">freepik</a>,&nbsp;
                <a href="https://www.flaticon.com/authors/monkik" title="monkik" target="_blank" rel="noreferrer">monkik</a> from&nbsp;
                <a href="https://www.flaticon.com/" title="Flaticon" target="_blank" rel="noreferrer">www.flaticon.com</a>
            </p>
            <div id="edamam-badge"></div>
        </div>
    </div>
}