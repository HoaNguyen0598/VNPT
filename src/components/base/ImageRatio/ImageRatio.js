import { mapModifiers } from 'functions/Utils';
import React from 'react'

const ImageRatio = ({ src, alt, ratio }) => {
    const className = mapModifiers('rc_imageratio', ratio)
    return (
        <div className={className}>
            <img className="rc_imageratio_img" src={src} alt={alt} />
        </div>
    )
}

export default ImageRatio;