import Card from 'components/common/VNPT/Verification/Verification';
import Confirm from 'components/common/VNPT/Confirm/Confirm';
import React, { useEffect, useState } from 'react';
const data = [
    {
        src: "https://ekyc.bionicmachine.co/images/cmt.png",
        title: "Chứng minh thư, Thẻ căn cước",
    },
    {
        src: "https://ekyc.bionicmachine.co/images/passport.png",
        title: "Hộ chiếu",
    },
    {
        src: "https://ekyc.bionicmachine.co/images/car_id.png",
        title: "Chứng minh thư quân đội",
    },
    {
        src: "https://ekyc.bionicmachine.co/images/car_id.png",
        title: "Chứng minh thư, Thẻ căn cước",
    },
    {
        src: "https://ekyc.bionicmachine.co/images/car_id.png",
        title: "bằng lái xe",
    },
];

const Experience = () => {
    const [active, setActive] = useState()

    const cardData = data.map((item, index) =>
    (
        <div
            className={`col-5 rc_experience-card ${index == active ? 'active' : ''}`}
            onClick={() => setActive(index)}
        >
            <Card
                key={index}
                src={item.src}
                title={item.title}
            />
        </div>
    )
    )

    return (
        <div className="rc_experience">
            <h2>CHỌN LOẠI GIẤY TỜ</h2>
            <div className="">
                {cardData}
            </div>
            <div className="col-5 rc_experience-card">
                <Confirm />
            </div>
            <div className="col-5 rc_experience-card">
                <button className="rc_experience-btn">BẮT ĐẦU</button>
            </div>

        </div>
    )
};

export default Experience;
