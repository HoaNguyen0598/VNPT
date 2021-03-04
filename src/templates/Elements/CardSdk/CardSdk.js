import React from 'react';
import Card from 'components/common/VNPT/CardSdk/CardSdk';


const CardSdk = () => {
    return (
        <>
            <h3>CardSdk</h3>
            <div style={{ display: 'flex' }}>
                <div style={{ paddingRight: '10px' }}>
                    <Card
                        title="eKYC SDK"
                        img="https://ekyc.vnpt.vn/admin-dashboard/assets/img/ios.png"
                        vision="Version: 1.0.3"
                        date="Release date: August 05, 2020"
                    />
                </div>
                <div>
                    <Card
                        title="eKYC SDK"
                        img="https://ekyc.vnpt.vn/admin-dashboard/assets/img/android.png"
                        vision="Version: 2.5.3"
                        date="Release date: August 05, 2021"
                    />
                </div>
            </div>
        </>
    )
}
export default CardSdk;