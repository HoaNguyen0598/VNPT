import React from 'react'
import { useTranslation } from 'react-i18next'
import { formatCurrency1 } from '../../../../functions/Utils'

const ChartDonutDetail = props => {
    const { t: translate } = useTranslation(['loanProfileProject'])
    const { data } = props
    return (
        <div className="graph_detail h-100 mt-4 mt-md-0">
            <div className="graph_detail--item type-1">
                {translate('loan_amount')} ({data && data.loanAmountUnit || 'VND'})
                <span className={`number ${data && data.interestAmount || data && data.valuePrincipalSum ? '' : 'null'}`}>
                    {
                        data && data.loanAmount || data && data.valuePrincipalSum ? (
                            formatCurrency1(data && data.loanAmount || data && data.valuePrincipalSum) || '-') : '-'
                    }
                </span>
            </div>
            <div className="graph_detail--item type-2">
                {translate('total_interest')} ({data && data.interestAmountUnit || 'VND'})
                <span className={`number ${data && data.interestAmount || data && data.valueInterestSum ? '' : 'null'}`}>
                    {
                        data && data.interestAmount || data && data.valueInterestSum ? (
                            formatCurrency1(data && data.interestAmount || data && data.valueInterestSum) || '-'
                        ) : '-'
                    }</span>
            </div>
            <div className="graph_detail--item type-3">
                {translate('amount_to_paid')} ({data && data.payAmountUnit || 'VND'})
                <span className={`number ${data && data.interestAmount || data && data.valueInterestSum ? '' : 'null'}`}>
                    {
                        data && data.payAmount || data && data.valuePayTotalSum ? (
                            formatCurrency1(data && data.payAmount || data && data.valuePayTotalSum) || '-'
                        ) : '-'
                    }</span>
            </div>
        </div>
    )
}
export default ChartDonutDetail;