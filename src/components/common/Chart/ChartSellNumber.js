import React, { useState } from 'react'
import Chart from 'react-apexcharts'
import PropTypes from 'prop-types';

const ChartSellNumber = ({ series, options }) => {
    return (
        <Chart className="rc_ChartSellNumber" options={options} series={series} type="bar" height={500} width='100%' />
    )
}
export default ChartSellNumber

const { array, object } = PropTypes;

ChartSellNumber.defaultProps = {
    series: [{
        name: 'New',
        data: [44, 55, 41, 37, 22]
    }, {
        name: 'Pending',
        data: [53, 32, 33, 52, 13]
    }, {
        name: 'Finish',
        data: [12, 17, 11, 9, 15]
    }, {
        name: 'Stop',
        data: [9, 7, 5, 8, 6]
    }, {
        name: 'Approval',
        data: [25, 12, 19, 32, 25]
    }],
    options: {
        chart: {
            type: 'bar',
            height: 350,
            stacked: true,
        },
        plotOptions: {
            bar: {
                horizontal: true,
            },
        },
        stroke: {
            width: 1,
            colors: ['#fff']
        },
        title: {
            text: ''
        },
        xaxis: {
            categories: ['VTP Project', 'Sunrise City', 'Adora Garden', 'Royal City', 'Luxury Palace'],
            labels: {
                formatter: function (val) {
                    return val
                }
            }
        },
        yaxis: {
            title: {
                text: undefined
            },
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return val + "K"
                }
            }
        },
        fill: {
            opacity: 1
        },
        legend: {
            position: 'top',
            horizontalAlign: 'left',
            offsetX: 40,
        }
    },
}

ChartSellNumber.propTypes = {
    series: array,
    options: object,
}