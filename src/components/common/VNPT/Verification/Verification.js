import React, { useEffect, useState } from 'react';

const Verification = ({ src, title }) => {
    return (
        <div className="Verification">
            <img src={src} />
            <span>{title}</span>
        </div>
    )
}

export default Verification;