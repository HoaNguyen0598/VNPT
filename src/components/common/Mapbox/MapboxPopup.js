import React from 'react';
const MapboxPopup = ({ img, name, address }) => {
    return (
        <div className="rc_map_popup">
            <div className="image">
                <figure>
                    <img src={img} />
                </figure>
            </div>
            <h1 class="bottom">{name}<label class="address">{address}</label></h1>
        </div>
    )
}
export default MapboxPopup;