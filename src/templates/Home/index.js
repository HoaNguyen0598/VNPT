import React, { useEffect, useState } from 'react';
import Card from 'components/common/VNPT/CardStatistic/CardStatistic';
import Table from 'templates/Elements/Table/Table';
import { Pagination } from 'antd';


import moment from 'moment';

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
    <div className="col-lg-3 col-md-6 col-sm-12 pb-2">
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
    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
        var date = new Date().getDate(); //Current Date
        var month = new Date().getMonth() + 1; //Current Month
        var year = new Date().getFullYear(); //Current Year
        var hours = new Date().getHours(); //Current Hours
        var min = new Date().getMinutes(); //Current Minutes
        var sec = new Date().getSeconds(); //Current Seconds
        setCurrentDate(
            hours + ':' + min + ', ' + date + '/'
            + month + '/' + year
        );
    }, []);
    return (
        <div className="rc_home">
            <div className="rc_home-statistic">

                <div className="row">
                    {cardStatistic}
                </div>

            </div>
            <div className="rc_home-table">
                <div className="rc_home-table-title">
                    <h4 className="left">Biểu đồ số lượng</h4>
                    <h3 className="right">Ngày cập nhật: {currentDate}</h3>
                </div>
                <div className="rc_home-table-body">
                    <Table />
                    <h4 className="rc_home-table-body text">Hour</h4>
                </div>
            </div>
            <div className="rc_home-table">
                <div className="rc_home-table-title">
                    <h4 className="left">Bảng thống kê tần xuất API</h4>
                    <h3 className="right">Ngày cập nhật: {currentDate}</h3>
                </div>
                <div className="rc_home-table-body">
                    <Table />
                </div>
                <div className="rc_home-table-pagination">
                    <Pagination
                        defaultCurrent={1} total={30}
                    />
                </div>
            </div>
        </div>

    )
};

export default Home;
