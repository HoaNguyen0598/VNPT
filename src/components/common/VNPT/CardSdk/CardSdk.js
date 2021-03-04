import React from "react";

const CardSdk = ({ title, img, vision, date }) => {
    return (
        <div>
            <div className="CardSdk">
                <h3 className="CardSdk_title">{title}</h3>
                <img className="CardSdk_img" src={img}></img>
                <a href="#">
                    <p>Hướng dẫn tích hợp</p>
                </a>
                <p className="CardSdk_vision">{vision}</p>
                <p className="CardSdk_date">{date}</p>
                <button className="CardSdk_btn">Download SDK</button>
            </div>
        </div>
    )
}

export default CardSdk;