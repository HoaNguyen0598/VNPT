import React from 'react'
import { useTranslation } from 'react-i18next';

const ChartDonutNodata = props => {
    const { t: translate } = useTranslation(['loanProfileProject'])
    return (
        <div className="graph_null ml-4">
            <span className="text">{translate('accounting_for')}</span>
            <span className="line">-</span>
            <span className="text">{translate('total_pay')}</span>
        </div>
    )
}
export default ChartDonutNodata;