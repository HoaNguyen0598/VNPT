import React from 'react';
import CardSdk from 'components/common/VNPT/CardSdk/CardSdk';

const SdkDowload = () => {
    return (
        <div className="rc_sdk">
            <div className="row">
                <div className="col-3">
                    <CardSdk
                        title="eKYC SDK"
                        img="https://ekyc.vnpt.vn/admin-dashboard/assets/img/ios.png"
                        vision="Version: 1.0.3"
                        date="Release date: August 05, 2020"
                    />
                </div>
                <div className="col-3">
                    <CardSdk
                        title="eKYC SDK"
                        img="https://ekyc.vnpt.vn/admin-dashboard/assets/img/android.png"
                        vision="Version: 2.5.3"
                        date="Release date: August 05, 2021"
                    />
                </div>
            </div>
        </div>
    )
};

export default SdkDowload;
