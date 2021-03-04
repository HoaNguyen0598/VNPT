import React from 'react';

const SummaryItem = () => {
    return (
        <div className="rc_summary" style={{ backgroundImage: "linear-gradient(to bottom, #7bce92, #38b6ac)" }}>
            <div className="icon" style={{ position: 'absolute' }}>
                <img src="https://via.placeholder.com/42" />
            </div>
            <div className="content text-center">
                <div className="number m-auto">5</div>
                <span className="unit">Tầng</span>
            </div>
        </div>
    )
}
export default SummaryItem;