import { trend_top100 } from "../resources/trend_analysis/trend_top100.js"
import { trend_emerging100 } from "../resources/trend_analysis/trend_emerging100.js"

var chartDrawFun = {

    chartDraw : function(name){
        var chartData = '';

        var chartDateformat 	= 'yyyy-MM-dd';
        var chartLineCount    = 10;
        var controlLineCount	= 10;

        // var drawdata = trend_top100[name];
        var drawdata = trend_top100[name];

        function drawDashboard() {

            var data = new google.visualization.DataTable();

            data.addColumn('datetime' , 'Day');
            var i;
            for (i = 0; i < drawdata["hashtag"].length; i++) {
                data.addColumn('number', drawdata["hashtag"][i]);
            }

            var seqlen = drawdata["dates"].length;
            var i;
            var rows = [];
            for (i = 0; i < seqlen; i++) {
                var row = drawdata["rows"][i];
                var date = drawdata["dates"][i];
                row = [new Date(date[0], date[1] - 1, date[2]),].concat(row);
                rows.push(row);
            }
            data.addRows(rows);

            var chart = new google.visualization.ChartWrapper({
                chartType   : 'LineChart',
                containerId : 'lineChartArea',
                options     : {
                                isStacked   : 'percent',
                                focusTarget : 'category',
                                height		  : 500,
                                width			  : '100%',
                                legend		  : { position: "right", textStyle: {fontSize: 13}},
                                pointSize		: 5,
                                tooltip		  : {textStyle : {fontSize:12}, showColorCode : true, trigger: 'both'},
                                hAxis			  : {format: chartDateformat, 
                                                gridlines:{count:chartLineCount,
                                                        units: {
                                                                    years : {format: ['yyyy']},
                                                                    months: {format: ['MM']},
                                                                    days  : {format: ['dd']}}
                                                        },
                                                textStyle: {fontSize:12}},
                                vAxis			  : {title: 'the daily usage count (logscale)',
                                                logScale: true,
                                                minValue: 0,
                                                viewWindow:{min:0},
                                                gridlines:{count:-1},
                                                textStyle:{fontSize:12}
                                            },
                                animation		: {startup: true,duration: 1000,easing: 'in' },
                                annotations	: {pattern: chartDateformat,
                                                textStyle: {
                                                fontSize: 15,
                                                bold: true,
                                                italic: true,
                                                color: '#871b47',
                                                auraColor: '#d799ae',
                                                opacity: 0.8,
                                                pattern: chartDateformat
                                            }
                                            }
                                }
            });

            var control = new google.visualization.ControlWrapper({
                controlType: 'ChartRangeFilter',
                containerId: 'controlsArea',
                options: {
                    ui:{
                        chartType: 'LineChart',
                        chartOptions: {
                        chartArea: {'width': '60%', 'height' : 80},
                        hAxis: {'baselineColor': 'none', format: chartDateformat, textStyle: {fontSize:12},
                            gridlines: {count:controlLineCount,
                                        units: {
                                            years : {format: ['yyyy']},
                                            months: {format: ['MM']},
                                            days  : {format: ['dd']}
                                        }
                                        }
                                }
                        }
                    },
                    filterColumnIndex: 0
                }
            });

            var date_formatter = new google.visualization.DateFormat({ pattern: chartDateformat});
            date_formatter.format(data, 0);

            var dashboard = new google.visualization.Dashboard(document.getElementById('Line_Controls_Chart'));
            // window.addEventListener('resize', function() { dashboard.draw(data); }, false);
            dashboard.bind([control], [chart]);
            dashboard.draw(data);

        }
        google.charts.setOnLoadCallback(drawDashboard);

        }
    }

var emergingChartDrawFun = {

    chartDraw : function(name){
    
        var chartDateformat 	= 'yyyy-MM-dd';
        var chartLineCount    = 10;
        var controlLineCount	= 10;
    
        var drawdata = trend_emerging100[name];

        function drawDashboard() {
    
            var data = new google.visualization.DataTable();
    
            data.addColumn('datetime' , 'Day');
            var i;
            for (i = 0; i < drawdata["hashtag"].length; i++) {
                data.addColumn('number', drawdata["hashtag"][i]);
            }

            var seqlen = drawdata["dates"].length;
            var i;
            var rows = [];
            for (i = 0; i < seqlen; i++) {
                var row = drawdata["rows"][i];
                var date = drawdata["dates"][i];
                row = [new Date(date[0], date[1] - 1, date[2]),].concat(row);
                rows.push(row);
            }
            data.addRows(rows);
    
            var chart = new google.visualization.ChartWrapper({
                chartType   : 'LineChart',
                containerId : 'emergingLineChartArea',
                options     : {
                                isStacked   : 'percent',
                                focusTarget : 'category',
                                height		  : 500,
                                width			  : '100%',
                                legend		  : { position: "right", textStyle: {fontSize: 13}},
                                pointSize		: 5,
                                tooltip		  : {textStyle : {fontSize:12}, showColorCode : true, trigger: 'both'},
                                hAxis			  : {format: chartDateformat, 
                                                gridlines:{count:chartLineCount,
                                                        units: {
                                                                    years : {format: ['yyyy']},
                                                                    months: {format: ['MM']},
                                                                    days  : {format: ['dd']}}
                                                        },
                                                textStyle: {fontSize:12}},
                                vAxis			  : {title: 'the daily usage count (logscale)',
                                                logScale: true,
                                                minValue: 0,
                                                viewWindow:{min:0},
                                                gridlines:{count:-1},
                                                textStyle:{fontSize:12}
                                            },
                                animation		: {startup: true,duration: 1000,easing: 'in' },
                                annotations	: {pattern: chartDateformat,
                                                textStyle: {
                                                fontSize: 15,
                                                bold: true,
                                                italic: true,
                                                color: '#871b47',
                                                auraColor: '#d799ae',
                                                opacity: 0.8,
                                                pattern: chartDateformat
                                            }
                                            }
                                }
            });
    
            var control = new google.visualization.ControlWrapper({
                controlType: 'ChartRangeFilter',
                containerId: 'emergingControlsArea',
                options: {
                    ui:{
                        chartType: 'LineChart',
                        chartOptions: {
                        chartArea: {'width': '60%', 'height' : 80},
                        hAxis: {'baselineColor': 'none', format: chartDateformat, textStyle: {fontSize:12},
                            gridlines: {count:controlLineCount,
                                        units: {
                                            years : {format: ['yyyy']},
                                            months: {format: ['MM']},
                                            days  : {format: ['dd']}
                                        }
                                        }
                                }
                        }
                    },
                    filterColumnIndex: 0
                }
            });
    
            var date_formatter = new google.visualization.DateFormat({ pattern: chartDateformat});
            date_formatter.format(data, 0);
    
            var dashboard = new google.visualization.Dashboard(document.getElementById('Emerging_Line_Controls_Chart'));
            // window.addEventListener('resize', function() { dashboard.draw(data); }, false);
            dashboard.bind([control], [chart]);
            dashboard.draw(data);
    
        }
        google.charts.setOnLoadCallback(drawDashboard);
    }
    }

function show_hashtag_plot(name) {
    google.charts.load('current', {'packages':['line','controls']});
    chartDrawFun.chartDraw(name); //run chartDraw()
    emergingChartDrawFun.chartDraw(name);
}

export {show_hashtag_plot};