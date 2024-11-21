function GaugeActivity() {

    // Uncomment to style it like Apple Watch
    /*
    if (!Highcharts.theme) {
        Highcharts.setOptions({
            chart: {
                backgroundColor: 'black'
            },
            colors: ['#F62366', '#9DFF02', '#0CCDD6'],
            title: {
                style: {
                    color: 'silver'
                }
            },
            tooltip: {
                style: {
                    color: 'silver'
                }
            }
        });
    }
    // */

    /**
     * In the chart render event, add icons on top of the circular shapes
     */
    // function renderIcons() {

    //     // Move icon
    //     if (!this.series[0].icon) {
    //         this.series[0].icon = this.renderer.path(['M', -8, 0, 'L', 8, 0, 'M', 0, -8, 'L', 8, 0, 0, 8])
    //             .attr({
    //                 'stroke': '#303030',
    //                 'stroke-linecap': 'round',
    //                 'stroke-linejoin': 'round',
    //                 'stroke-width': 2,
    //                 'zIndex': 10
    //             })
    //             .add(this.series[2].group);
    //     }
    //     this.series[0].icon.translate(
    //         this.chartWidth / 2 - 10,
    //         this.plotHeight / 2 - this.series[0].points[0].shapeArgs.innerR -
    //         (this.series[0].points[0].shapeArgs.r - this.series[0].points[0].shapeArgs.innerR) / 2
    //     );

    //     // Exercise icon
    //     if (!this.series[1].icon) {
    //         this.series[1].icon = this.renderer.path(
    //                 ['M', -8, 0, 'L', 8, 0, 'M', 0, -8, 'L', 8, 0, 0, 8,
    //                     'M', 8, -8, 'L', 16, 0, 8, 8
    //                 ]
    //             )
    //             .attr({
    //                 'stroke': '#ffffff',
    //                 'stroke-linecap': 'round',
    //                 'stroke-linejoin': 'round',
    //                 'stroke-width': 2,
    //                 'zIndex': 10
    //             })
    //             .add(this.series[2].group);
    //     }
    //     this.series[1].icon.translate(
    //         this.chartWidth / 2 - 10,
    //         this.plotHeight / 2 - this.series[1].points[0].shapeArgs.innerR -
    //         (this.series[1].points[0].shapeArgs.r - this.series[1].points[0].shapeArgs.innerR) / 2
    //     );

    //     // Stand icon
    //     if (!this.series[2].icon) {
    //         this.series[2].icon = this.renderer.path(['M', 0, 8, 'L', 0, -8, 'M', -8, 0, 'L', 0, -8, 8, 0])
    //             .attr({
    //                 'stroke': '#303030',
    //                 'stroke-linecap': 'round',
    //                 'stroke-linejoin': 'round',
    //                 'stroke-width': 2,
    //                 'zIndex': 10
    //             })
    //             .add(this.series[2].group);
    //     }

    //     this.series[2].icon.translate(
    //         this.chartWidth / 2 - 10,
    //         this.plotHeight / 2 - this.series[2].points[0].shapeArgs.innerR -
    //         (this.series[2].points[0].shapeArgs.r - this.series[2].points[0].shapeArgs.innerR) / 2
    //     );
    // }

    // Highcharts.chart('Highchart', {

    //     chart: {
    //         type: 'solidgauge',
    //         height: '800px',
    //         events: {
    //             render: renderIcons
    //         }
    //     },

    //     title: {
    //         text: 'Activity',
    //         style: {
    //             fontSize: '24px'
    //         }
    //     },

    //     tooltip: {
    //         borderWidth: 0,
    //         backgroundColor: 'none',
    //         shadow: false,
    //         style: {
    //             fontSize: '16px'
    //         },
    //         pointFormat: '{series.name}<br><span style="font-size:2em; color: {point.color}; font-weight: bold">{point.y}%</span>',
    //         positioner: function(labelWidth) {
    //             return {
    //                 x: (this.chart.chartWidth - labelWidth) / 2,
    //                 y: (this.chart.plotHeight / 2) + 15
    //             };
    //         }
    //     },

    //     pane: {
    //         startAngle: 0,
    //         endAngle: 360,
    //         background: [{ // Track for Move
    //             outerRadius: '112%',
    //             innerRadius: '88%',
    //             backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[0])
    //                 .setOpacity(0.3)
    //                 .get(),
    //             borderWidth: 0
    //         }, { // Track for Exercise
    //             outerRadius: '87%',
    //             innerRadius: '63%',
    //             backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[1])
    //                 .setOpacity(0.3)
    //                 .get(),
    //             borderWidth: 0
    //         }, { // Track for Stand
    //             outerRadius: '62%',
    //             innerRadius: '38%',
    //             backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[2])
    //                 .setOpacity(0.3)
    //                 .get(),
    //             borderWidth: 0
    //         }]
    //     },

    //     yAxis: {
    //         min: 0,
    //         max: 100,
    //         lineWidth: 0,
    //         tickPositions: []
    //     },

    //     plotOptions: {
    //         solidgauge: {
    //             dataLabels: {
    //                 enabled: false
    //             },
    //             linecap: 'round',
    //             stickyTracking: false,
    //             rounded: true
    //         }
    //     },

    //     series: [{
    //         name: 'Move',
    //         data: [{
    //             color: Highcharts.getOptions().colors[0],
    //             radius: '112%',
    //             innerRadius: '88%',
    //             y: 80
    //         }]
    //     }, {
    //         name: 'Exercise',
    //         data: [{
    //             color: Highcharts.getOptions().colors[1],
    //             radius: '87%',
    //             innerRadius: '63%',
    //             y: 65
    //         }]
    //     }, {
    //         name: 'Stand',
    //         data: [{
    //             color: Highcharts.getOptions().colors[2],
    //             radius: '62%',
    //             innerRadius: '38%',
    //             y: 50
    //         }]
    //     }]
    // });

/**
 * In the chart render event, add icons on top of the circular shapes
 */
function renderIcons() {

    this.series.forEach(series => {
        if (!series.icon) {
            series.icon = this.renderer
                .text(
                    `<i class="fa fa-${series.options.custom.icon}"></i>`,
                    0,
                    0,
                    true
                )
                .attr({
                    zIndex: 10
                })
                .css({
                    color: series.options.custom.iconColor,
                    fontSize: '1.5em'
                })
                .add(this.series[2].group);
        }
        series.icon.attr({
            x: this.chartWidth / 2 - 15,
            y: this.plotHeight / 2 -
                series.points[0].shapeArgs.innerR -
                (
                    series.points[0].shapeArgs.r -
                    series.points[0].shapeArgs.innerR
                ) / 2 +
                8
        });
    });
}

const trackColors = Highcharts.getOptions().colors.map(color =>
    new Highcharts.Color(color).setOpacity(0.3).get()
);

Highcharts.chart('Highchart', {

    chart: {
        type: 'solidgauge',
        height: '110%',
        events: {
            render: renderIcons
        }
    },

    title: {
        text: 'Multiple KPI gauge',
        style: {
            fontSize: '24px'
        }
    },

    tooltip: {
        borderWidth: 0,
        backgroundColor: 'none',
        shadow: false,
        style: {
            fontSize: '16px'
        },
        valueSuffix: '%',
        pointFormat: '{series.name}<br>' +
            '<span style="font-size: 2em; color: {point.color}; ' +
            'font-weight: bold">{point.y}</span>',
        positioner: function (labelWidth) {
            return {
                x: (this.chart.chartWidth - labelWidth) / 2,
                y: (this.chart.plotHeight / 2) + 15
            };
        }
    },

    pane: {
        startAngle: 0,
        endAngle: 360,
        background: [{ // Track for Conversion
            outerRadius: '112%',
            innerRadius: '88%',
            backgroundColor: trackColors[0],
            borderWidth: 0
        }, { // Track for Engagement
            outerRadius: '87%',
            innerRadius: '63%',
            backgroundColor: trackColors[1],
            borderWidth: 0
        }, { // Track for Feedback
            outerRadius: '62%',
            innerRadius: '38%',
            backgroundColor: trackColors[2],
            borderWidth: 0
        }]
    },

    yAxis: {
        min: 0,
        max: 100,
        lineWidth: 0,
        tickPositions: []
    },

    plotOptions: {
        solidgauge: {
            dataLabels: {
                enabled: false
            },
            linecap: 'round',
            stickyTracking: false,
            rounded: true
        }
    },

    series: [{
        name: 'Conversion',
        data: [{
            color: Highcharts.getOptions().colors[0],
            radius: '112%',
            innerRadius: '88%',
            y: 80
        }],
        custom: {
            icon: 'filter',
            iconColor: '#303030'
        }
    }, {
        name: 'Engagement',
        data: [{
            color: Highcharts.getOptions().colors[1],
            radius: '87%',
            innerRadius: '63%',
            y: 65
        }],
        custom: {
            icon: 'comments-o',
            iconColor: '#ffffff'
        }
    }, {
        name: 'Feedback',
        data: [{
            color: Highcharts.getOptions().colors[2],
            radius: '62%',
            innerRadius: '38%',
            y: 50
        }],
        custom: {
            icon: 'commenting-o',
            iconColor: '#303030'
        }
    }]
});


}