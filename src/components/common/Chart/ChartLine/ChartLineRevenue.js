import React from 'react';
import Chart from 'react-apexcharts';
import PropTypes from 'prop-types';

const ChartLineRevenue = (options) => {
    return (
        <Chart className="rc_ChartLine" options={options.options} series={options.options.series} width='100%' />
    )
}
export default ChartLineRevenue;

const { object } = PropTypes;

ChartLineRevenue.defaultProps = {
    options: {
        series: [
            {
                name: "Lãi suất ưu đãi",
                data: [28, 29, 33, 36, 32, 32, 33]
            },
            {
                name: "Lãi suất sau ưu đãi",
                data: [12, 11, 14, 18, 17, 13, 13]
            }
        ],
        colors: ['#219dfd', '#e94c4c'],
        chart: {
            height: 550,
            type: 'line',
            dropShadow: {
                enabled: true,
                color: '#000', //color của Shadow
                top: 18,
                left: 7,
                blur: 10,
                opacity: 0.2
            },
            toolbar: {
                show: false
            }
        },
        dataLabels: {
            enabled: false,
        },
        markers: {
            size: 6,
            colors: ['#219dfd', '#e94c4c'],
            shape: 'square'
        },
        stroke: {
            curve: 'smooth',
            colors: ['#219dfd', '#e94c4c']
        },
        title: {
            text: 'Chú thích ',
            align: 'left'
        },
        grid: {
            borderColor: '#e7e7e7',
            row: {
                colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns gridView
                opacity: 0.5
            },
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            title: {
                text: ''
            }
        },
        yaxis: {
            label: true,
            title: {
                text: '%'
            },
            min: 5,
            max: 40,
            position: 'top',
        },
        legend: {
            show: false,
            position: 'top',
            horizontalAlign: 'left',
            floating: true,
            offsetY: -10,
            offsetX: 0,
        },
    }

}
ChartLineRevenue.propTypes = {
    options: object
}