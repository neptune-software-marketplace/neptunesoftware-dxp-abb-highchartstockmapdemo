function Pareto() {
    
    Highcharts.chart('Highchart', {
        chart: {
            renderTo: 'Highchart',
            type: 'column'
        },
        title: {
            text: 'Restaurants Complaints'
        },
        xAxis: {
            categories: ['Overpriced', 'Small portions', 'Wait time', 'Food is tasteless', 'No atmosphere', 'Not clean', 'Too noisy', 'Unfriendly staff']
        },
        yAxis: [{
            title: {
                text: ''
            }
        }, {
            title: {
                text: ''
            },
            minPadding: 0,
            maxPadding: 0,
            max: 100,
            min: 0,
            opposite: true,
            labels: {
                format: "{value}%"
            }
        }],
        series: [{
            type: 'pareto',
            name: 'Pareto',
            yAxis: 1,
            zIndex: 10,
            baseSeries: 1
        }, {
            name: 'Complaints',
            type: 'column',
            zIndex: 2,
            data: [755, 222, 151, 86, 72, 51, 36, 10]
        }]
    });

}