import React from "react";
import { mapModifiers } from "functions/Utils";

const InputDisplayValue = ({ value, modifiers }) => {
    return (
        <label className={mapModifiers('rc_inputdisplayvalue', modifiers)}>{value}</label>
    )
}

export default InputDisplayValue;