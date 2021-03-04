import React, { useState } from "react";
import ReactMapboxGl, { Layer, Source, Marker, Popup } from 'react-mapbox-gl';

import 'mapbox-gl/dist/mapbox-gl.css';
import MarkerSrc from '../../../../public/images/marker.png'
import { useTranslation } from "react-i18next";

const ReactMapGL = ReactMapboxGl({
    accessToken: "pk.eyJ1IjoiYnJpYW5iYW5jcm9mdCIsImEiOiJsVGVnMXFzIn0.7ldhVh3Ppsgv4lCYs65UdA"
});

export const ProjectMapboxPopup = ({ name, address, irr, npv, acreage, investor }) => {
    const { t: translate } = useTranslation(["project"])
    return (
        <div className="m_map">
            <h1 className="top"> {name}
                <i className="address"> {address}</i>
            </h1>
            <div className="center">
                <p className="item">
                    <span className="irr_text">{translate('no_')} <i>IRR</i></span>
                    <span className="number">{irr}</span>
                </p>
                <p className="item">
                    <span className="npv_text">{translate('no_')} <i>NPV</i></span>
                    <span className="number">{npv}</span>
                </p>
            </div>
            <ul className="bottom">
                <li>{translate('acreage')} : <span className="value">{acreage}</span></li>
                <li className="investor">{translate('investor')} : <span className="value">{investor}</span></li>
            </ul>
        </div>
    )
}

const ProjectMapboxGL = ({ lat, lng, location, popupContent }) => {
    const viewport = {
        center: [lng, lat],
        zoom: [13],
        location: location,
    };
    const [isOpenPopup, setIsOpenPopup] = useState(true);
    const stateFillsLayer = {
        'id': 'state-fills',
        'type': 'fill',
        'sourceId': 'states',
        paint: {
            'fill-color': 'red',
            'fill-opacity': 0.35,
        }
    };

    const stateBordersLayer = {
        'id': 'state-borders',
        'type': 'line',
        'layout': {},
        'sourceId': 'states',
        paint: {
            'line-color': 'rgba(255, 0, 0, 0.8)',
            'line-width': 3,
        }
    };
    const tooglePopup = () => {
        setIsOpenPopup(!isOpenPopup);
    }

    const CustomMarker = ({ lat, lng }) => {
        return (
            <Marker
                coordinates={[lng, lat]}
                anchor="bottom"
                onClick={tooglePopup}
            >
                <div
                    className="marker cursor-pointer"
                // onClick={openPopup}
                >
                    <img style={{ width: 32, height: 37 }} src={MarkerSrc} alt='marker' />
                </div>
            </Marker>
        )
    };
    const CustomPopup = ({ marker, closePopup, ...props }) => {
        return (
            <Popup
                coordinates={[marker.longitude, marker.latitude]}
                offset={{ 'bottom-left': [12, -38], 'bottom': [0, -38], 'bottom-right': [-12, -38] }}
                closeButton={true}
                onClose={closePopup}
                dynamicPosition={true}
                className="rc_mapbox_popup"
                anchor='bottom'
            >
                <div className="rc_mapbox_popupcontent">
                    <span className="rc_mapbox_closeicon"
                        onClick={closePopup}
                    >x</span>
                    {props.children}
                </div>
            </Popup>
        )
    };

    const onStyleLoaded = (map) => {
        map.resize();
    }

    return (
        <div className='rc-mapbox'>
            <ReactMapGL
                className="rc-mapbox_map"
                style="https://images.minerva.vn/Style/minerva"
                containerStyle={{ width: '100%' }}
                {...viewport}
                onStyleLoad={(map) => onStyleLoaded(map)}
                animationOptions={{ animate: false }}
            >
                {location && <>
                    <Source geoJsonSource={{ data: location, type: 'geojson' }} id={'states'} /> <Layer {...stateFillsLayer} />
                    <Layer {...stateBordersLayer} />
                </>}

                {CustomMarker({ lat, lng })}
                {
                    isOpenPopup && <CustomPopup
                        marker={{ latitude: lat, longitude: lng }}
                        closePopup={() => setIsOpenPopup(false)}
                    >
                        {popupContent}
                    </CustomPopup>
                }
            </ReactMapGL>
        </div>
    )
};

export default ProjectMapboxGL;