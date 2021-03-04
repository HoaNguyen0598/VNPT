import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import Chart from 'react-apexcharts';
import { useTranslation } from 'react-i18next';

const DonutChart = ({ series }) => {
    const { t: translate } = useTranslation(['loanProfileProject'])
    const options = {
        states: {
            active: {
                allowMultipleDataPointsSelection: true,
                filter: (a, b) => {
                    return {
                        name: 'series-2',
                        value: 0.35,
                    }
                }
            },
        },
        dataLabels: {
            enabled: false,
        },
        legend: { show: false },
        fill: {
            colors: ['#fd7e14', '#51c471']

        },
        colors: ['#fd7e14', '#51c471'],
        tooltip: {
            enabled: false,
        },
        plotOptions: {
            pie: {
                donut: {
                    labels: {
                        show: true,
                        name: {
                            show: true,
                            fontSize: '15px',
                            formatter: function (val, no) {
                                if (val === 'Total') {
                                    return translate('total')
                                }
                                return translate('accounting_for')
                            }
                        },
                        value: {
                            show: true,
                            fontSize: '30px',
                            formatter: function (val) {
                                return `${val} %`
                            },
                        },
                        total: {
                            show: true,
                            showAlways: false,
                            fontSize: '15px',
                            color: '#000',
                            formatter: function (w) {
                                return `${w.globals.seriesTotals.reduce((a, b) => {
                                    return a + b
                                }, 0)} %`
                            }
                        }
                    },
                }
            }
        },
    }
    return (
        <Chart
            width={350}
            options={options}
            series={series}
            type="donut"
            height={375}
        />
    );
}

const { object, array, number, shape } = PropTypes;

DonutChart.propTypes = {
    options: object,
    series: array,
    // options: shape({
    //     chart: object,
    //     colors: array,
    //     labels: array
    // }),
    total: number
}

DonutChart.defaultProps = {
    options: {
        // chart: {
        //     type: 'donut',
        //     width: 500,
        // },
        // labels: labels,
        dataLabels: {
            enabled: false,
        },
        labels: ["Apartment", "Villa"],
        legend: { show: false, horizontalAlign: "center", position: "bottom" },
        fill: {
            // colors: colors,
            colors: ['#fd7e14', '#51c471']

        },
        // colors: colors,
        colors: ['#fd7e14', '#51c471'],
        tooltip: {
            enabled: false,
        },
        plotOptions: {
            pie: {
                donut: {
                    labels: {
                        show: true,
                        name: {
                            show: true,
                            fontSize: '15px',
                            formatter: function (val) {
                                return 'Accounting for'
                            }
                        },
                        value: {
                            show: true,
                            fontSize: '30px',
                            formatter: function (val) {
                                return `${val} % \n`
                            },
                        },
                        total: {
                            show: true,
                            showAlways: false,
                            label: 'Accounting for',
                            fontSize: '15px',
                            color: '#000',
                            formatter: function (w) {
                                return `${w.globals.seriesTotals.reduce((a, b) => {
                                    return a + b
                                }, 0)} %`
                            }
                        }
                    },
                }
            }
        },
    },

    series: [Math.round(3 / 3 * 100 * 10) / 10],
    total: 0,
}

export default DonutChart