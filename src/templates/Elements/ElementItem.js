import React from 'react';

const ElementItem = ({ name, ...props }) => {
    return (
        <div style={{ marginBottom: 20 }} {...props}>
            <h3>{name}</h3>
            <div>
                {props.children}
            </div>
        </div>
    )
}

export default ElementItem;
