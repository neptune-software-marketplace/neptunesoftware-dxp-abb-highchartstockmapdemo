function SingleLine() {
    
    $.getJSON("/proxy/" + encodeURIComponent("https://www.highcharts.com/samples/data/aapl-c.json"), function(data) {
        // Create the chart
        Highcharts.stockChart('containerStock', {


            rangeSelector: {
                selected: 1
            },

            title: {
                text: 'AAPL Stock Price'
            },

            series: [{
                name: 'AAPL',
                data: data,
                tooltip: {
                    valueDecimals: 2
                }
            }]
        });
    });


}