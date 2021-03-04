import React from 'react';
import Card from 'components/common/VNPT/CardStatistic/CardStatistic';


const CardStatistic = ({ }) => {
    return (
        <>
            <h3>CardStatistic</h3>
            <div style={{ display: 'flex' }}>
                <Card
                    img="https://ekyc.vnpt.vn/admin-dashboard/assets/img/chart.svg"
                    title="Tổng số"
                    number="0"
                />
                <Card
                    img="https://ekyc.vnpt.vn/admin-dashboard/assets/img/success.svg"
                    title="Thành công"
                    number="1"
                />
                <Card
                    img="https://ekyc.vnpt.vn/admin-dashboard/assets/img/client.svg"
                    title="Lỗi client"
                    number="0"
                />
            </div>
        </>
    )
}
export default CardStatistic;