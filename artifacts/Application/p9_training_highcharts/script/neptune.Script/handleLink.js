var chartFunction = "";
var chartInterval = "";

function handleLink(link) {

    var objectName;

    if (sap.n) {
        objectName = sap.n.currentView.createId(link.getId());
        var arr = objectName.split("--");
        objectName = arr[1];
    } else {
        objectName = link.getId();
    }

    switch (objectName) {

        // Line
        case "linkLineCell11":
            chartFunction = chartLineBasic;
            break;

        case "linkLineCell12":
            chartFunction = chartLineAjax;
            break;

        case "linkLineCell13":
            chartFunction = chartLineDataLabels;
            break;

        case "linkLineCell21":
            chartFunction = chartLineAnnotations;
            break;

        case "linkLineCell22":
            chartFunction = chartLineTimeseries;
            break;

        case "linkLineCell23":
            chartFunction = chartLineSplineInverted;
            break;

        case "linkLineCell31":
            chartFunction = chartLineSplineSymbols;
            break;

        case "linkLineCell32":
            chartFunction = chartLineSplinePlot;
            break;

        case "linkLineCell33":
            chartFunction = chartLineTimeIrregular;
            break;

        case "linkLineCell41":
            chartFunction = chartLineLogarit;
            break;

        case "linkLineCell42":
            chartFunction = chartLine500k;
            break;


            // Combination
        case "linkCombCell11":
            chartFunction = combSync;
            break;

        case "linkCombCell12":
            chartFunction = combColumnLinePie;
            break;

        case "linkCombCell13":
            chartFunction = combDual;
            break;

        case "linkCombCell21":
            chartFunction = combMultiple;
            break;

        case "linkCombCell22":
            chartFunction = combRegression
            break;

        case "linkCombCell31":
            chartFunction = combAdvancedTimeline;
            break;

            // Area 
        case "linkAreaCell11":
            chartFunction = AreaBasic;
            break;

        case "linkAreaCell12":
            chartFunction = AreaNegative;
            break;

        case "linkAreaCell13":
            chartFunction = AreaStacked;
            break;

        case "linkAreaCell21":
            chartFunction = AreaPercentage;
            break;

        case "linkAreaCell22":
            chartFunction = AreaMissing;
            break;

        case "linkAreaCell23":
            chartFunction = AreaInverted;
            break;

        case "linkAreaCell31":
            chartFunction = AreaSpline;
            break;

        case "linkAreaCell32":
            chartFunction = AreaRange;
            break;

        case "linkAreaCell33":
            chartFunction = AreaRangeLine;
            break;

        case "linkAreaCell41":
            chartFunction = AreaStreamgraph;
            break;

            // Columns 
        case "linkColumnCell11":
            chartFunction = Bar;
            break;

        case "linkColumnCell12":
            chartFunction = BarStacked;
            break;

        case "linkColumnCell13":
            chartFunction = BarNegative;
            break;

        case "linkColumnCell21":
            chartFunction = Column;
            break;

        case "linkColumnCell22":
            chartFunction = ColumnNegative;
            break;

        case "linkColumnCell23":
            chartFunction = ColumnStacked;
            break;

        case "linkColumnCell31":
            chartFunction = ColumnStackedGrouped;
            break;

        case "linkColumnCell32":
            chartFunction = ColumnStackedPercentage;
            break;

        case "linkColumnCell33":
            chartFunction = ColumnRotated;
            break;

        case "linkColumnCell41":
            chartFunction = ColumnDrilldown;
            break;

        case "linkColumnCell42":
            chartFunction = ColumnFixed;
            break;

        case "linkColumnCell43":
            chartFunction = ColumnRange;
            break;

            // Pie 
        case "linkPieCell11":
            chartFunction = Pie;
            break;

        case "linkPieCell12":
            chartFunction = PieLegend;
            break;

        case "linkPieCell13":
            chartFunction = Donut;
            break;

        case "linkPieCell21":
            chartFunction = PieSemi;
            break;

        case "linkPieCell22":
            chartFunction = PieDrilldown;
            break;

        case "linkPieCell23":
            chartFunction = PieGradient;
            break;

        case "linkPieCell31":
            chartFunction = PieMonochrome;
            break;

            // Scatter
        case "linkScatterCell11":
            chartFunction = ScatterPlot;
            break;

        case "linkScatterCell12":
            chartFunction = Scatter1mill;
            break;

        case "linkScatterCell13":
            chartFunction = Bubble;
            break;

        case "linkScatterCell21":
            chartFunction = Bubble3D;
            break;

            // Dynamic
        case "linkDynamicCell11":
            chartFunction = SplineUpdate;
            break;

        case "linkDynamicCell12":
            chartFunction = ClickToAdd;
            break;

        case "linkDynamicCell13":
            chartFunction = MasterDetail;
            break;

            // 3D
        case "link3dCell11":
            chartFunction = column3d;
            break;

        case "link3dCell12":
            chartFunction = column3dnull;
            break;

        case "link3dCell13":
            chartFunction = column3dstacking;
            break;

        case "link3dCell21":
            chartFunction = pie3d;
            break;

        case "link3dCell22":
            chartFunction = donut3d;
            break;

        case "link3dCell23":
            chartFunction = scatter3d;
            break;

            // Gauge
        case "linkGaugeCell11":
            chartFunction = GaugeSeries;
            break;

        case "linkGaugeCell12":
            chartFunction = GaugeSolid;
            break;

        case "linkGaugeCell13":
            chartFunction = GaugeActivity;
            break;

        case "linkGaugeCell21":
            chartFunction = GaugeClock;
            break;

        case "linkGaugeCell22":
            chartFunction = GaugeDual;
            break;

        case "linkGaugeCell23":
            chartFunction = VUMeter;
            break;

            // Heat
        case "linkHeatCell11":
            chartFunction = HeatMap;
            break;

        case "linkHeatCell13":
            chartFunction = TileMap;
            break;

        case "linkHeatCell21":
            chartFunction = TreeMapColor;
            break;

        case "linkHeatCell22":
            chartFunction = TreeMapLevels;
            break;

        case "linkHeatCell23":
            chartFunction = TreeMapLarge;
            break;

            // More 
        case "linkMoreCell11":
            chartFunction = Polar;
            break;

        case "linkMoreCell12":
            chartFunction = Spiderweb;
            break;

        case "linkMoreCell13":
            chartFunction = Sunburst;
            break;

        case "linkMoreCell21":
            chartFunction = BoxPlot;
            break;

        case "linkMoreCell22":
            chartFunction = ErrorBar;
            break;

        case "linkMoreCell23":
            chartFunction = windBarb;
            break;

        case "linkMoreCell31":
            chartFunction = Waterfall;
            break;

        case "linkMoreCell32":
            chartFunction = Variwide;
            break;

        case "linkMoreCell33":
            chartFunction = VariablePie;
            break;

        case "linkMoreCell41":
            chartFunction = Histogram;
            break;

        case "linkMoreCell42":
            chartFunction = Bellcurve;
            break;

        case "linkMoreCell43":
            chartFunction = Funnel;
            break;

        case "linkMoreCell51":
            chartFunction = Pyramid;
            break;

        case "linkMoreCell52":
            chartFunction = Polygon;
            break;

        case "linkMoreCell53":
            chartFunction = Pareto;
            break;

        case "linkMoreCell61":
            chartFunction = Sankey;
            break;

        case "linkMoreCell62":
            chartFunction = XRange;
            break;

        case "linkMoreCell63":
            chartFunction = Wordcloud;
            break;


    }


    oPageChart.setTitle(link.getText());
    oApp.to(oPageChart);

    // Destroy Chart 
    var chart = $("#container").highcharts();
    if (chart) chart.destroy();

    // Reset events in examples 
    var cont = document.getElementById("container");
    if (cont) {
        cont.innerHTML = "";
        window.clearInterval(chartInterval);
        $('#container').unbind('mousemove touchmove touchstart');
    }

    setTimeout(function() {

        // Draw Chart
        chartFunction();

    }, 50);

}