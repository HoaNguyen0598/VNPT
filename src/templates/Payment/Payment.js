import React from 'react';
import {DatePicker} from 'antd';
import Select from 'components/base/Select/Select';
import moment from 'moment';

const data = [
    { value: 1, label: 'Tất cả' },
    { value: 2, label: 'Thành công' },
    { value: 3, label: 'Không thành công' },
    { value: 4, label: 'Hòa' },
]
const dateFormat = 'MM/DD/YYYY';
const monthFormat = 'YYYY/MM';
const Payment = () => {
    return (
        <div className="rc_payment">
            <div className="payment_form">
                <div className="row">
                    <div className="col-md-7">
                        <div className="row">
                            <div className="col-3">Thời gian thanh toán</div>
                            <div className="col-4">
                                <DatePicker  defaultValue={moment('7/3/2021', dateFormat)} format={dateFormat}/>
                            </div>
                            <div className="col-4">
                            <DatePicker  defaultValue={moment('7/3/2021', dateFormat)} format={dateFormat}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-1">
                        <label>Trạng thái</label>
                    </div> 
                    <div className="col-md-3">
                        <Select 
                            data={data}
                            defaultValue={data[0].value}
                        />
                    </div>
                </div>
                <div>
                    <button className="btn-form">Tìm kiếm</button>
                </div>
                <div>
                    <table>
                        <tr>
                            <th>No.</th>
                            <th>Mã thanh toán</th>
                            <th>Tên gói</th>
                            <th>Thời gian thanh toán</th>
                            <th>Loại</th>
                            <th>Trạng thái TT</th>
                            <th>Tiền tệ</th>
                            <th>VAT (%)</th>
                            <th>Trước thuế</th>
                            <th>Thuế</th>
                            <th>Sau thuế</th>
                            <th>Lấy hóa đơn</th>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
};

export default Payment;
