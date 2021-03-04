import React from 'react'
import { mapModifiers } from 'functions/Utils';

const IconCustom = ({ iconName, size }) => {
    const className = mapModifiers('rc_icon', iconName, size)
    return (
        <span className={className}></span>
    )
}

export default IconCustom;