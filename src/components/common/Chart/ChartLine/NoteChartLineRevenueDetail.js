import React from 'react'
import { useTranslation } from 'react-i18next'
import InputDatePicker from '../../../base/Input/InputDatePicker'

const NoteChartLineRevenueDetail = props => {
    const { t: translate } = useTranslation();
    return (
        <div className="d-flex flex-wrap justify-content-start flex-sm-nowrap justify-content-sm-between">
            <div className="sales_status">
                <p className="title w-100 mb-2">{translate('notes')}</p>
                <p className="item">
                    <span className="square sales_internal_bg "></span>
                    <span className="text uni_text_219dfd">{translate('preferential_interest_rate')}</span>
                </p>
                <p class="item">
                    <span className="square  status-commisson-bg-01"></span>
                    <span className="text uni_text_e94c4c">{translate('preferential_interest_after_rate')}</span>
                </p>
            </div>
            <div className="sales_select-dates">
                <div className="item from">
                    <div className="text">{translate('text_from')}</div>
                    <InputDatePicker isClear />
                </div>
                <div className="item to">
                    <div className="text">{translate('text_to')}</div>
                    <InputDatePicker isClear />
                </div>
            </div>
        </div>
    )
}
export default NoteChartLineRevenueDetail