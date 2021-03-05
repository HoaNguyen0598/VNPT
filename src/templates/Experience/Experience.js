import React from 'react';
import Card from 'components/common/VNPT/Verification/Verification';
import Confirm from 'components/common/VNPT/Confirm/Confirm';
const Experience = () => {
    return (
        <div className="rc_experience">
            <h2>CHỌN LOẠI GIẤY TỜ</h2>
            <div className="col-5 rc_experience-card">
                <Card
                    src="https://ekyc.bionicmachine.co/images/cmt.png"
                    title="Chứng minh thư, Thẻ căn cước"
                />
            </div>
            <div className="col-5 rc_experience-card">
                <Card
                    src="https://ekyc.bionicmachine.co/images/passport.png"
                    title="Hộ chiếu"
                />
            </div>
            <div className="col-5 rc_experience-card">
                <Card
                    src="https://ekyc.bionicmachine.co/images/car_id.png"
                    title="Chứng minh thư quân đội"
                />
            </div>
            <div className="col-5 rc_experience-card">
                <Card
                    src="https://ekyc.bionicmachine.co/images/car_id.png"
                    title="bằng lái xe"
                />
            </div>
            <div className="col-5 rc_experience-card">
                <Card
                    src="https://ekyc.bionicmachine.co/images/car_id.png"
                    title="bằng lái xe"
                />
            </div>
            <div className="col-4 rc_experience-card">
                <Confirm />
            </div>
            <div className="col-5 rc_experience-card">
                <button className="rc_experience-btn">BẮT ĐẦU</button>
            </div>

        </div>
    )
};

export default Experience;
