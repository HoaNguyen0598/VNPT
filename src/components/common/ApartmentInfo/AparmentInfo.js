import React from 'react';
const AparmentInfo = ({ img, name, address }) => {
    return (
        <div className="rc_apartmentInfo">
            <div className="image">
                <figure>
                    <img src={img} />
                </figure>
            </div>
            <h1 class="bottom">{name}
                <div className="group d-flex">
                    <label class="address">{address} </label>
                    <i className="las la-map-marker"></i>
                </div>
            </h1>
        </div>
    )
}
export default AparmentInfo;