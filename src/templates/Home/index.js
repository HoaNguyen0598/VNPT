import React, { useEffect, useState } from 'react';
import Card from 'components/common/VNPT/CardStatistic/CardStatistic';
import Table from 'components/base/Table/Table';
import { Pagination } from 'antd';
import DropdownPurple from 'components/base/Dropdown/DropdownPurple';

const columns = [
    {
        title: 'Tên Api',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Đường dẫn',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Tổng số',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Thành công',
        key: 'tags',
        dataIndex: 'tags',

    },
    {
        title: 'Lỗi client',
        key: 'tags',
        dataIndex: 'tags',

    },
    {
        title: 'Lỗi hệ thống',
        key: 'eror',
        dataIndex: 'eror',

    },
];

const data = [
    {
        key: '1',
        name: 'Add face',
        age: '/face-service/face/add',
        address: 0,
        tags: 0,
        eror: 0,
    },
    {
        key: '2',
        name: 'Card liveness',
        age: '/ai/v1/card/liveness',
        address: 0,
        tags: 0,
        eror: 0,
    },
    {
        key: '3',
        name: 'Classify id',
        age: '/ai/v1/classify/id',
        address: 0,
        tags: 0,
        eror: 0,
    },
    {
        key: '4',
        name: 'Face compare ',
        age: '/ai/v1/face/compare',
        address: 0,
        tags: 0,
        eror: 0,
    },
    {
        key: '5',
        name: 'Face compare ',
        age: '/ai/v1/face/compare',
        address: 0,
        tags: 0,
        eror: 0,
    },
    {
        key: '6',
        name: 'Face compare ',
        age: '/ai/v1/face/compare',
        address: 0,
        tags: 0,
        eror: 0,
    },
    {
        key: '7',
        name: 'Face compare ',
        age: '/ai/v1/face/compare',
        address: 0,
        tags: 0,
        eror: 0,
    },
    {
        key: '8',
        name: 'Face compare ',
        age: '/ai/v1/face/compare',
        address: 0,
        tags: 0,
        eror: 0,
    },
    {
        key: '9',
        name: 'Face compare ',
        age: '/ai/v1/face/compare',
        address: 0,
        tags: 0,
        eror: 0,
    },
    {
        key: '10',
        name: 'Card liveness ',
        age: '/ai/v1/classify/id',
        address: 0,
        tags: 0,
        eror: 0,
    },
    {
        key: '11',
        name: 'Card liveness ',
        age: '/ai/v1/classify/id',
        address: 0,
        tags: 0,
        eror: 0,
    },
    {
        key: '12',
        name: 'Card liveness ',
        age: '/ai/v1/classify/id',
        address: 0,
        tags: 0,
        eror: 0,
    },
    {
        key: '13',
        name: 'Card liveness ',
        age: '/ai/v1/classify/id',
        address: 0,
        tags: 0,
        eror: 0,
    },
    {
        key: '14',
        name: 'Card liveness ',
        age: '/ai/v1/classify/id',
        address: 0,
        tags: 0,
        eror: 0,
    },

];

const dataCard = [
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

const dataDrop = [
    {
        value: '1',
        label: 'Hôm nay'
    },
    {
        value: '2',
        label: 'Hôm qua'
    },
    {
        value: '3',
        label: 'Trong tháng'
    },
    {
        value: '4',
        label: 'Gần đây nhất'
    },
]

const cardStatistic = dataCard.map((item, index) =>
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

const pageSize = 6;

const getData = (current, pageSize) => {
    // Normally you should get the data from the server
    return data.slice((current - 1) * pageSize, current * pageSize);
};

// Custom pagination component
const MyPagination = ({ total, onChange, current }) => {
    return (
        <Pagination
            onChange={onChange}
            total={total}
            current={current}
            pageSize={pageSize}
        />
    );
};

const Home = () => {
    const [currentDate, setCurrentDate] = useState('');
    const [current, setCurrent] = useState(1);

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
            <div className="row rc_home-title pt-4">
                <h2 className="col-auto">Bảng điều khiển</h2>
                <div className="rc_home-title-drop">
                    <span>Lọc: </span>
                    <div className="btnDrop">
                        Tùy chọn <i class="fas fa-caret-down" />
                    </div>
                </div>
            </div>
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
                    <div className="row">
                        <div className="col-12">
                            <Table
                                columns={columns}
                                dataSource={getData(current, pageSize)}
                            />
                        </div>
                    </div>
                    <h4 className="rc_home-table-body text">Hour</h4>
                </div>
            </div>
            <div className="rc_home-table">
                <div className="rc_home-table-title">
                    <h4 className="left">Bảng thống kê tần xuất API</h4>
                    <h3 className="right">Ngày cập nhật: {currentDate}</h3>
                </div>
                <div className="rc_home-table-body">
                    <div className="row">
                        <div className="col-12">
                            <Table
                                columns={columns}
                                dataSource={getData(current, pageSize)}
                            />
                        </div>
                    </div>
                </div>
                <div className="rc_home-table-pagination">
                    <MyPagination
                        total={data.length}
                        current={current}
                        onChange={setCurrent}
                    />
                </div>
            </div>
        </div>

    )
};

export default Home;
