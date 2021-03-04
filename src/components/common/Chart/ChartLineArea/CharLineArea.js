import React from 'react';
import Chart from 'react-apexcharts';
import PropTypes from 'prop-types';

const ChartLineArea = ({ series, label }) => {
    const options = {
        chart: {
            zoom: {
                enabled: false,
            },
            toolbar: {
                show: false,
            }
        },
        colors: ['#00E396'],
        xaxis: {
            categories: label,
            labels: {
                formatter: function (val) {
                    return val
                }
            }
        },
        yaxis: {
            labels: {
                minWidth: 40
            }
        },
        dataLabels: {
            enabled: false,
            hover: {
                size: 0
            }
        },
        stroke: {
            curve: 'straight'
        },
        toolbar: {
            tools: {
                selection: false,
            },
        },
        markers: {
            size: 0,
            hover: {
                size: 6
            }
        },
        tooltip: {
            followCursor: false,
            theme: 'dark',
            style: {
                color: '#7bce92'
            },
            x: {
                show: false
            },
            marker: {
                show: false
            },
            y: {
                title: {
                    formatter: function () {
                        return ''
                    }
                },
            },
        },
        grid: {
            clipMarkers: false
        },
    }
    return (
        <Chart
            width={350}
            options={options}
            series={series}
            type="area"
            height={350}
        />
    )
}
const { object, array } = PropTypes;

ChartLineArea.propTypes = {
    options: object,
    series: array,
    label: array,
}
export default ChartLineArea;