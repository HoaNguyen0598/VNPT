import React from 'react';
import Card from 'components/common/VNPT/Verification/Verification';


const CardStatistic = ({ }) => {
    return (
        <>
            <h3>Verification</h3>
            <div style={{ width: '400px' }}>
                <Card
                    src="https://ekyc.bionicmachine.co/images/cmt.png"
                    title="Chứng minh thư, Thẻ căn cước"
                />
                <Card
                    src="https://ekyc.bionicmachine.co/images/passport.png"
                    title="Hộ chiếu"
                />
                <Card
                    src="https://ekyc.bionicmachine.co/images/car_id.png"
                    title="Chứng minh thư quân đội"
                />
            </div>
        </>
    )
}
export default CardStatistic;