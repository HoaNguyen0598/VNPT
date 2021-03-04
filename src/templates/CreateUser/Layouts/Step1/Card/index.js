import { Card as CardAnt, Skeleton, Upload } from 'antd';
import React from 'react';


const Card = ({
    title,
    selected,
}) => {

    return (
        <>
            <Upload>
                <CardAnt className={selected ? 'cardActive' : ''} style={{ width: 320 }} title={title}>
                    <Skeleton avatar paragraph={{ rows: 2 }} />
                </CardAnt>
            </Upload>
        </>
    );
};

export default Card;