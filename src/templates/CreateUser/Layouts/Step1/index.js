import { Row, Col } from 'antd';
import React from 'react';
import Card from './Card';


const Step1 = () => {

    return (
        <div className="rc_step1">
            <Row align='middle'
                justify='center'
            >
                <Col><Card title={'CHỨNG MINH NHÂN DÂN'} selected /></Col>
                <Col offset={1}><Card title={'CĂN CƯỚC CÔNG DÂN'} /></Col>
                <Col offset={1}><Card title={'HỘ CHIẾU'} /></Col>
            </Row>
        </div>
    );
};

export default Step1;