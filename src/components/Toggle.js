import React, {useState } from "react";

function Toggle() {
    const [state, setState] = useState("OFF");

    function handleClick() {
        setState(state => state === "ON" ? "OFF" : "ON");
    }

    const color = state === "ON" ? "red" : "white"

    return <button style={{background: color}} onClick={handleClick}>{state}</button>;
}

export default Toggle;
