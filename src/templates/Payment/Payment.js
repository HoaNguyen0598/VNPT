import React, { useState } from 'react';
//import {DatePicker} from 'antd';
import Select from 'components/base/Select/Select';
import moment from 'moment';
import DatePicker from "react-datepicker";

const data = [
    { value: 1, label: 'Tất cả' },
    { value: 2, label: 'Thành công' },
    { value: 3, label: 'Không thành công' },
    { value: 4, label: 'Hòa' },
]
const dateFormat = 'MM/DD/YYYY';
const Payment = () => {
    const [startDate, setStartDate] = useState(new Date());
    const onChange = (values) => {
        console.log('value: ', values)
    }
    return (
        <div className="rc_payment">
            <div className="payment_form">
                <div className="row payment_form-header">
                    <div className="col-md-7 col-sm-12">
                        <div className="row">
                            <div className="col-lg-2 col-md-12 col-sm-12">Thời gian thanh toán</div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-1 col-sm-12">
                        <label>Trạng thái</label>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-12">
                        <Select
                            data={data}
                            defaultValue={data[0].value}
                        />
                    </div>
                </div>
                <div>
                    <button className="btn-form">Tìm kiếm</button>
                </div>
                <div className="payment-table">
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
