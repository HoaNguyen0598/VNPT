/* eslint-disable react-hooks/exhaustive-deps */
// eslint-disable-next-line
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { examAction } from "../../store/action";
import ExampleItem from "./ExampleItem";

import CardStatistic from 'components/common/VNPT/CardStatistic/CardStatistic';

const Example = props => {
    const dispatch = useDispatch();


    return (
        <div className="album py-5 bg-light">
            <div className="container">
                <CardStatistic
                    title="Tổng số"
                    img="https://ekyc.vnpt.vn/admin-dashboard/assets/img/chart.svg"
                    number="0"
                />
            </div>
        </div>
    )
}
export default Example;