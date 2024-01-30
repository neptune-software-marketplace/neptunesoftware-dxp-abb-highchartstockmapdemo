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

        // General
        case "linkGeneralCell11":
            chartFunction = SingleLine;
            break;

        case "linkGeneralCell12":
            chartFunction = TwoPanes;
            break;

        case "linkGeneralCell13":
            chartFunction = Compare;
            break;
            
        case "linkGeneralCell21":
            chartFunction = Points52k;
            break;

        case "linkGeneralCell22":
            chartFunction = Points17mill;
            break;

        case "linkGeneralCell23":
            chartFunction = Intraday;
            break; 
            
        case "linkGeneralCell31":
            chartFunction = IntradayBreaks;
            break;

        case "linkGeneralCell32":
            chartFunction = IntradayCandlestick;
            break;

        case "linkGeneralCell33":
            chartFunction = FlagMarking;
            break;                    
            
    }


    oPageChart.setTitle(link.getText());
    oApp.to(oPageChart);

    setTimeout(function() {

        // Reset events in examples 
        var cont = document.getElementById("container");
        if (cont) {
            cont.innerHTML = "";
            window.clearInterval(chartInterval);
            $('#container').unbind('mousemove touchmove touchstart');
        }

        // Draw Chart
        chartFunction();

    }, 1);

}