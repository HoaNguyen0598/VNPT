import Table from 'components/base/Table/Table';
import React from 'react'

const TableElement = () => {
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
    ];
    return (
        <>
            <h3>Table</h3>
            <div className="row">
                <div className="col-12">
                    <Table
                        dataSource={data}
                        columns={columns}
                    />
                </div>
            </div>
        </>
    )
}
export default TableElement;