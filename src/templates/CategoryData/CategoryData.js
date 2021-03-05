import React from 'react';
import Table from 'components/base/Table/Table';

const CategoryData = () => {
    const columns = [
        {
            title: 'Tên gói',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Giá',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Thông tin gói',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Bắt đầu',
            key: 'start',
            dataIndex: 'start',

        },
        {
            title: 'Kết thúc',
            key: 'tags',
            dataIndex: 'tags',

        },
        {
            title: 'Còn lại',
            key: 'eror',
            dataIndex: 'eror',

        },
        {
            title: 'Trạng thái',
            key: 'status',
            dataIndex: 'status',

        },
    ];

    const data = [
        {
            key: '1',
            name: 'eKyc Free Trial',
            age: '10 VNĐ',
            address: `300 requests/ tháng
                    max 100 requests/ Giờ`,
            start: '15/10/2020',
            tags: '15/10/2020',
            eror: '0 ngày',
            status: 'Không hoạt động',
        },
    ];
    return (
        <div className="rc_categoryData">
            <div className="row">
                <div className="col-12">
                    <h2 className="rc_categoryData-title">Bạn đang dùng gói <span>eKyc Free Trial</span></h2>
                    <div className="rc_categoryData-date">
                        <p>Ngày hết hạn: 15/11/2020</p>
                        <a href="" className="rc_categoryData-btn">
                            <img src="https://ekyc.vnpt.vn/admin-dashboard/assets/img/Diamond.png" />
                        NÂNG CẤP GÓI CƯỚC
                    </a>
                    </div>
                    <div className="col-12">
                        <Table
                            dataSource={data}
                            columns={columns}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default CategoryData;
