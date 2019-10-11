Highcharts.chart('container', {
  chart: {
      type: 'bar'
  },
  title: {
      text: 'Full-time Men Admitted vs. Full-Time Women Admitted'
  },
  subtitle: {
      text: '2018-2005'
  },
  xAxis: {
      categories: ['2018', '2017', '2016', '2015', '2014'],
      title: {
          text: null
      }
  },
  yAxis: {
      min: 0,
      title: {
          text: 'Number of Students',
          align: 'high'
      },
      labels: {
          overflow: 'justify'
      }
  },
  tooltip: {
      valueSuffix: null
  },
  plotOptions: {
      bar: {
          dataLabels: {
              enabled: true
          }
      }
  },
  legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'top',
      x: -40,
      y: 80,
      floating: true,
      borderWidth: 1,
      backgroundColor:
          Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
      shadow: true
  },
  credits: {
      enabled: false
  },
  series: [{
      name: 'Men',
      data: [13781,13981,14103,12748,12748]
  }, {
      name: 'Women',
      data: [15821,16231,16170,13761,12837]
  }]
});