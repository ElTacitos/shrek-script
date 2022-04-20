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
        <div>
            <input
                onKeyDown={handleKeyDown}
                onChange={voidHandler}
                type="textfield"
                value={inputValue}
            />
        </div>
    );
}

export default Input;