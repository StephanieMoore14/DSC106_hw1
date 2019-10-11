Highcharts.chart('container', {

    title: {
        text: 'Full-time Men Admitted vs. Full-Time Women Admitted'
    },

    subtitle: {
        text: '2018-2005'
    },

    yAxis: {
        title: {
            text: 'Number of Students'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2010
        }
    },

    series: [{
        name: 'Men',
        data: [13781,13981,14103,12748,11758,11866,10917,8707,8365,7816,8517,8419,9210,7580]
    }, {
        name: 'Women',
        data: [15821,16231,16170,13761,12837,12966,12046,10269,9991,9863,11200,10759,12135,10311]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});