import React from 'react';
import Card from 'components/common/VNPT/CardStatistic/CardStatistic';
import Table from 'templates/Elements/Table/Table';

const data = [
    {
        img: "https://ekyc.vnpt.vn/admin-dashboard/assets/img/chart.svg",
        title: "Tổng số",
        number: "0",
    },
    {
        img: "https://ekyc.vnpt.vn/admin-dashboard/assets/img/success.svg",
        title: "Thành công",
        number: "1",
    },
    {
        img: "https://ekyc.vnpt.vn/admin-dashboard/assets/img/client.svg",
        title: "Lỗi client",
        number: "0",
    },
    {
        img: "https://ekyc.vnpt.vn/admin-dashboard/assets/img/system_error.svg",
        title: "Lỗi hệ thống",
        number: "0",
    },
]

const cardStatistic = data.map((item, index) =>
(
    <div className="col-3">
        <Card
            key={index}
            img={item.img}
            title={item.title}
            number={item.number}
        />
    </div>
)
)
const Home = () => {
    return (
        <div className="rc_home">
            <div className="rc_home-statistic">
                <div className="col-12">
                    <div className="row">
                        {cardStatistic}
                    </div>
                </div>
            </div>
            <div className="rc_home-table">
                <div className="rc_home-table-title">
                    <h4 className="left">Bảng thống kê tần xuất API</h4>
                    <h3 className="right">Ngày cập nhật: 15:29, 05/03/2021</h3>
                </div>
                <div className="rc_home-table-body">
                    <Table />
                </div>
            </div>
        </div>

    )
};

export default Home;
