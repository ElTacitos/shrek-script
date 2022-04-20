import "./Input.css"

function Input(props) {
    let inputValue = "";

    function handleKeyDown(event) {
        inputValue = "";
        props.handleKeyDown(event.key);
    }

    function voidHandler() {
        return false;
    }

    return (
        <div className="Input">
            <input
                onKeyDown={handleKeyDown}
                onChange={voidHandler}
                type="textfield"
                value={inputValue}
            />
            <svg className="Caret">
                <rect fill="white" width="0.75rem" height="0.1rem"/>
            </svg>
        </div>
    );
}

export default Input;