import React from "react";
import { Checkbox as CheckboxAnt } from "antd";
import { mapModifiers } from "functions/Utils";

const Checkbox = (props) => {
    const { variant, ...attr } = props;
    const className = mapModifiers("rc_checkbox", variant);
    return (
        <CheckboxAnt className={className} {...attr}>
            {props.children}
        </CheckboxAnt>
    );
};
export default Checkbox;
