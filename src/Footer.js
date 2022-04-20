import "./Footer.css";
import ProgressBar from "./ProgressBar";

function Footer(props) {
    return (
        <div className="Footer">
            <span>Errors:{props.nbError}</span>
            <ProgressBar progress={props.charPassed}/>
            <span>Timer</span>
        </div>
    )
}

export default Footer;