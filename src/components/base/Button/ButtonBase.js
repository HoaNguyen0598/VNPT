import { mapModifiers } from 'functions/Utils';
import React from 'react';

const ButtonBase = (props) => {
    const { onClick, className, block, size, color, modifiers, ...remaningProps } = props;
    const classNameModifiers = mapModifiers('rc_button', color, size, modifiers, block ? 'block' : undefined);
    return (
        <button
            className={`${classNameModifiers} ${className}`}
            onClick={onClick}
            {...remaningProps}
        >
            {props.children}
        </button>
    )
}

export default ButtonBase;