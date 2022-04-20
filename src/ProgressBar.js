import './ProgressBar.css';

function ProgressBar(props) {
    const totalChars = 48029;
    return (
        <div className="ProgressBar">
            CHARS: {props.progress}/{totalChars}
            <svg className="Bar">
                <rect
                    width="100%"
                    height="100%"
                    fill="#2F2F2F"
                />
                <rect
                    width={`${props.progress*100/totalChars}%`}
                    height="100%"
                    fill="#FFCB74"
                />
            </svg>
        </div>
    );
}

export default ProgressBar;