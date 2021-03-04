import React from 'react';
import CardStatistic from './CardStatistic/CardStatistic';
import CardSdk from './CardSdk/CardSdk';
import Verification from './Verification/Verification';
import Confirm from './Confirm/Confirm';
import Select from './Select/Select';
import DatePicker from './DatePicker/DatePicker';
import Table from './Table/Table';

const Elements = () => {
    return (
        <div>
            <h1 style={{ color: 'white' }}>Element</h1>
            <CardStatistic />
            <CardSdk />
            <Verification />
            <Confirm />
            <Select />
            <DatePicker />
            <Table />
        </div>
    )
};

export default Elements;
