import React from "react";

const CardStatistic = ({ title, number, img }) => {
    return (
        <div className="statistic">
            <div className="card">
                <p className="card_title">
                    {title}
                    <img src={img} />
                </p>
                <div className="card_number">
                    <span>{number}</span>
                </div>
            </div>
        </div>
    )
}

export default CardStatistic;