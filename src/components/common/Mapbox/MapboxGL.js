import React, { useState } from "react";
import ReactMapGL from "react-map-gl";
import { mapModifiers } from "../../../functions/Utils";

const MapboxGL = ({ width, height, lat, lng, modifiers }) => {
    const [map, setMap] = useState({
        longitude: lng,
        latitude: lat,
        zoom: 10
    });
    const mapSize = modifiers && modifiers.includes('fullheight') ?
        { width: '100%', height: '100%' }
        :
        { width: width || '370px', height: height || '370px' }
        ;
    const className = mapModifiers("rc-mapbox", modifiers);
    return (
        <div className={className}>
            <ReactMapGL
                {...map}
                {...mapSize}
                className="rc-mapbox_map"
                mapboxApiAccessToken="pk.eyJ1IjoiYnJpYW5iYW5jcm9mdCIsImEiOiJsVGVnMXFzIn0.7ldhVh3Ppsgv4lCYs65UdA"
                mapStyle="https://images.minerva.vn/Style/minerva"
                onViewportChange={setMap}
            >
            </ReactMapGL>
        </div>
    )
};

export default MapboxGL;