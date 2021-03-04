import React from 'react'
import { useTranslation } from 'react-i18next';
import Nodata from '../../../../public/images/no_data.png'

const EmptyData = () => {
    const { t: translate } = useTranslation();
    return (
        <div className="data_null">
            <figure className="data_null--image">
                <img src={Nodata} alt="" />
                <span className="data_null--text text-uppercase">{translate('nodata')}</span>
            </figure>
        </div>
    )
}
export default EmptyData;