import { Row, Col, Card } from 'antd';
import React from 'react';


const Step2 = () => {

    return (
        <div className="rc_step2">
            <Row align='middle'
                justify='center'
            >
                <Col span={3}>
                    <Card bordered={false}>
                        Card content
                    </Card>
                </Col>
                <Col span={8}>
                    <Card bordered={false}>
                        Card content
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Step2;