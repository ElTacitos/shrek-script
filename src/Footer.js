import "./Footer.css";
import ProgressBar from "./ProgressBar";
import Timer from "./Timer";

function Footer(props) {
    return (
        <div className="Footer">
            <span>Errors:{props.nbError}</span>
            <ProgressBar progress={props.charPassed}/>
            <Timer/>
        </div>
    )
}

export default Footer;