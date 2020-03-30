// Plotting Top-K hashtags for each Type
var type1ChartDrawFun = {

  chartDraw : function(){

      var chartDateformat 	= 'yyyy-MM-dd';
      var chartLineCount    = 10;
      var controlLineCount	= 10;


      function drawDashboard() {

        var data = new google.visualization.DataTable();
        var options_series = {};
        
        data.addColumn('datetime', 'Day');
        data.addColumn('number', 'coronalockdown');
        data.addColumn('number', 'stayathomeandstaysafe');
        data.addColumn('number', 'viruscorona');
        data.addColumn('number', 'caresact');
        data.addColumn('number', 'belgique');
        data.addColumn('number', 'staysafenigeria');
        data.addColumn('number', 'conunamanoamiga');
        data.addColumn('number', 'readytoservethenation');
        data.addColumn('number', 'saturdaythoughts');
        data.addColumn('number', 'nationsalutescoronafighters');

        for (i = 0; i < 10; i++) {
          options_series[i] = {
              pointSize: 5,
              lineWidth: 2,
              selected: false
          };
        }

        data.addRows([
          [new Date(2020, 2, 20), 0, 0, 79, 0, 0, 0, 0, 0, 0, 0],
          [new Date(2020, 2, 21), 0, 0, 70, 0, 0, 0, 0, 0, 159, 0],
          [new Date(2020, 2, 22), 0, 0, 69, 0, 60, 0, 0, 0, 60, 0],
          [new Date(2020, 2, 23), 0, 0, 78, 0, 0, 0, 0, 0, 0, 0],
          [new Date(2020, 2, 24), 36, 0, 92, 34, 0, 0, 0, 0, 0, 0],
          [new Date(2020, 2, 25), 0, 0, 78, 0, 0, 0, 0, 0, 0, 0],
          [new Date(2020, 2, 26), 41, 0, 88, 64, 0, 0, 0, 0, 0, 0],
          [new Date(2020, 2, 27), 3305, 198, 102, 181, 123, 276, 0, 0, 0, 0],
          [new Date(2020, 2, 28), 5639, 1579, 855, 1045, 576, 350, 573, 561, 276, 487],
        ]);

        

        var chart = new google.visualization.ChartWrapper({
            chartType   : 'LineChart',
            containerId : 'type1LineChartArea',
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
                            vAxis			  : {title: 'the daily usage count',
                                            // logScale: true,
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
                                        },
                            series: options_series
                            }
          });

          var control = new google.visualization.ControlWrapper({
            controlType: 'ChartRangeFilter',
            containerId: 'type1ControlsArea',
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

          var dashboard = new google.visualization.Dashboard(document.getElementById('type1_Line_Controls_Chart'));
          // window.addEventListener('resize', function() { dashboard.draw(data); }, false);
          dashboard.bind([control], [chart]);
          dashboard.draw(data);

      }
      google.charts.setOnLoadCallback(drawDashboard);
  }
}
$(document).ready(function(){
  google.charts.load('current', {'packages':['line','controls']});
  type1ChartDrawFun.chartDraw(); //run chartDraw()
});


var type2ChartDrawFun = {

  chartDraw : function(){

      var chartDateformat 	= 'yyyy-MM-dd';
      var chartLineCount    = 10;
      var controlLineCount	= 10;


      function drawDashboard() {

        var data = new google.visualization.DataTable();

        data.addColumn('datetime' , 'Day');
        data.addColumn('number', 'coronavirus (merged)');
        data.addColumn('number', 'covid-india (merged)');
        data.addColumn('number', 'covid-china (merged)');
        data.addColumn('number', 'stayhome (merged)');
        data.addColumn('number', 'trump (merged)');
        data.addColumn('number', 'outbreak (merged)');
        data.addColumn('number', 'coronavirusupdates (merged)');
        data.addColumn('number', 'breaking');
        data.addColumn('number', 'lockdown');
        data.addColumn('number', 'chloroquine');


        data.addRows([
           [new Date(2020, 2, 20), 164021, 3478, 3555, 2243, 2576, 2303, 3552, 1560, 530, 428],
           [new Date(2020, 2, 21), 172951, 5522, 3725, 3227, 3398, 2336, 1476, 1616, 550, 545],
           [new Date(2020, 2, 22), 173589, 4973, 3566, 5208, 2924, 2945, 1224, 1511, 1012, 637],
           [new Date(2020, 2, 23), 184132, 4195, 3498, 4429, 3664, 2560, 1601, 1902, 1366, 1255],
           [new Date(2020, 2, 24), 184121, 5978, 3324, 4525, 3694, 2920, 1345, 1776, 1580, 1236],
           [new Date(2020, 2, 25), 186345, 4396, 4374, 3966, 3017, 2164, 756, 2681, 1391, 786],
           [new Date(2020, 2, 26), 189338, 4276, 7657, 3778, 3889, 2462, 725, 1498, 1132, 853],
           [new Date(2020, 2, 27), 195226, 4117, 7928, 3951, 4585, 5357, 1357, 1561, 1316, 596],
           [new Date(2020, 2, 28), 200260, 5890, 4360, 3380, 4490, 5936, 4938, 1459, 1636, 676],
        ]);
        

        var chart = new google.visualization.ChartWrapper({
            chartType   : 'LineChart',
            containerId : 'type2LineChartArea',
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
                            vAxis			  : {title: 'the daily usage count (log scale)',
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
                                        },
                            // series: options_series
                            }
          });

          var control = new google.visualization.ControlWrapper({
            controlType: 'ChartRangeFilter',
            containerId: 'type2ControlsArea',
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

          var dashboard = new google.visualization.Dashboard(document.getElementById('type2_Line_Controls_Chart'));
          // window.addEventListener('resize', function() { dashboard.draw(data); }, false);
          dashboard.bind([control], [chart]);
          dashboard.draw(data);

      }
      google.charts.setOnLoadCallback(drawDashboard);
  }
}
$(document).ready(function(){
  google.charts.load('current', {'packages':['line','controls']});
  type2ChartDrawFun.chartDraw(); //run chartDraw()
});


var type3ChartDrawFun = {

  chartDraw : function(){

      var chartDateformat 	= 'yyyy-MM-dd';
      var chartLineCount    = 10;
      var controlLineCount	= 10;


      function drawDashboard() {

        var data = new google.visualization.DataTable();

        data.addColumn('datetime' , 'Day');
        data.addColumn('number', 'covid-france (merged)');
        data.addColumn('number', 'dontbeaspreader');
        data.addColumn('number', 'stayhome (merged)');
        data.addColumn('number', 'quarantinelife');
        data.addColumn('number', 'confinementtotal');
        data.addColumn('number', 'update');
        data.addColumn('number', 'covid19malaysia');
        data.addColumn('number', 'bbb20');
        data.addColumn('number', 'covid19esp');
        data.addColumn('number', 'buzyn');


        data.addRows([
           [new Date(2020, 2, 9), 1184, 0, 0, 0, 0, 124, 0, 59, 0, 69],
           [new Date(2020, 2, 10), 1511, 0, 35, 0, 0, 78, 0, 22, 0, 74],
           [new Date(2020, 2, 11), 1281, 0, 47, 0, 0, 93, 0, 28, 0, 0],
           [new Date(2020, 2, 12), 559, 0, 29, 0, 0, 69, 0, 39, 0, 22],
           [new Date(2020, 2, 13), 392, 0, 105, 0, 0, 119, 0, 40, 0, 0],
           [new Date(2020, 2, 14), 975, 0, 382, 0, 0, 98, 0, 55, 0, 92],
           [new Date(2020, 2, 15), 1659, 0, 1501, 0, 0, 145, 0, 45, 0, 75],
           [new Date(2020, 2, 16), 2723, 2944, 1149, 1001, 1303, 158, 452, 198, 658, 46],
           [new Date(2020, 2, 17), 6121, 3128, 2039, 1748, 1271, 557, 923, 706, 221, 442],
        ]);

        var chart = new google.visualization.ChartWrapper({
            chartType   : 'LineChart',
            containerId : 'type3LineChartArea',
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
                            vAxis			  : {title: 'the daily usage count',
                                            // logScale: true,
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
                                        },
                            // series: options_series
                            }
          });

          var control = new google.visualization.ControlWrapper({
            controlType: 'ChartRangeFilter',
            containerId: 'type3ControlsArea',
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

          var dashboard = new google.visualization.Dashboard(document.getElementById('type3_Line_Controls_Chart'));
          // window.addEventListener('resize', function() { dashboard.draw(data); }, false);
          dashboard.bind([control], [chart]);
          dashboard.draw(data);

      }
      google.charts.setOnLoadCallback(drawDashboard);
  }
}
$(document).ready(function(){
  google.charts.load('current', {'packages':['line','controls']});
  type3ChartDrawFun.chartDraw(); //run chartDraw()
});



var type4ChartDrawFun = {

  chartDraw : function(){

      var chartDateformat 	= 'yyyy-MM-dd';
      var chartLineCount    = 10;
      var controlLineCount	= 10;


      function drawDashboard() {

        var data = new google.visualization.DataTable();

        data.addColumn('datetime' , 'Day');
        data.addColumn('number', 'coronavirus (merged)');
        data.addColumn('number', 'outbreak (merged)');
        data.addColumn('number', 'coronavirusupdates (merged)');
        data.addColumn('number', 'covid-china (merged)');
        data.addColumn('number', 'breaking');
        data.addColumn('number', 'covid-india (merged)');
        data.addColumn('number', 'yomequedoencasa');
        data.addColumn('number', 'flattenthecurve');
        data.addColumn('number', 'cuba');
        data.addColumn('number', 'macron');


        data.addRows([
           [new Date(2020, 2, 9), 164179, 8923, 1140, 2410, 2111, 1368, 0, 184, 336, 357],
           [new Date(2020, 2, 10), 155402, 5215, 1480, 2185, 1400, 834, 0, 537, 468, 358],
           [new Date(2020, 2, 11), 173191, 2691, 2904, 1697, 1677, 1163, 0, 946, 430, 598],
           [new Date(2020, 2, 12), 132571, 2043, 2365, 1604, 1893, 951, 299, 591, 455, 839],
           [new Date(2020, 2, 13), 126291, 2932, 2541, 2192, 1581, 1032, 663, 476, 301, 447],
           [new Date(2020, 2, 14), 156726, 2453, 3506, 3254, 1310, 1195, 1241, 715, 1246, 389],
           [new Date(2020, 2, 15), 164249, 3252, 7171, 2268, 2395, 1933, 1426, 955, 701, 272],
           [new Date(2020, 2, 16), 168842, 9006, 2791, 1832, 2407, 1981, 728, 907, 747, 1227],
           [new Date(2020, 2, 17), 180606, 10881, 948, 3503, 1310, 2400, 2071, 755, 792, 544],
        ]);

        var chart = new google.visualization.ChartWrapper({
            chartType   : 'LineChart',
            containerId : 'type4LineChartArea',
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
                                        },
                            // series: options_series
                            }
          });

          var control = new google.visualization.ControlWrapper({
            controlType: 'ChartRangeFilter',
            containerId: 'type4ControlsArea',
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

          var dashboard = new google.visualization.Dashboard(document.getElementById('type4_Line_Controls_Chart'));
          // window.addEventListener('resize', function() { dashboard.draw(data); }, false);
          dashboard.bind([control], [chart]);
          dashboard.draw(data);

      }
      google.charts.setOnLoadCallback(drawDashboard);
  }
}
$(document).ready(function(){
  google.charts.load('current', {'packages':['line','controls']});
  type4ChartDrawFun.chartDraw(); //run chartDraw()
});






// CHART 1 STARTS HERE
// chartDrawFun : Top-K hashtags
// var chartDrawFun = {

//   chartDraw : function(){
//       var chartData = '';

//       var chartDateformat 	= 'yyyy-MM-dd';
//       var chartLineCount    = 10;
//       var controlLineCount	= 10;


//       function drawDashboard() {

//         var data = new google.visualization.DataTable();

//         data.addColumn('datetime' , 'Day');
//         data.addColumn('number', 'coronavirus (merged)');
//         data.addColumn('number', 'outbreak (merged)');
//         data.addColumn('number', 'trump (merged)');
//         data.addColumn('number', 'coronavirusupdates (merged)');
//         data.addColumn('number', 'covid-china (merged)');
//         data.addColumn('number', 'covid-italy (merged)');
//         data.addColumn('number', 'coronaviruspandemic');
//         data.addColumn('number', 'coronapocalypse');
//         data.addColumn('number', 'covid-france (merged)');
//         data.addColumn('number', 'breaking');
//         data.addColumn('number', 'covid-india (merged)');
//         data.addColumn('number', 'covid-iran (merged)');
//         data.addColumn('number', 'wuhan');
//         data.addColumn('number', 'italia');
//         data.addColumn('number', 'yomequedoencasa');
//         data.addColumn('number', 'dontbeaspreader');
//         data.addColumn('number', 'flattenthecurve');
//         data.addColumn('number', 'cuba');
//         data.addColumn('number', 'pandemic');
//         data.addColumn('number', 'stayhome (merged)');
//         data.addColumn('number', 'macron');
//         data.addColumn('number', 'venezuela');
//         data.addColumn('number', 'coronavid19');
//         data.addColumn('number', 'pandemia');
//         data.addColumn('number', 'virus');
//         data.addColumn('number', 'quedateentucasa');
//         data.addColumn('number', 'iorestoacasa');
//         data.addColumn('number', 'socialdistancing');
//         data.addColumn('number', 'coronapocolypse');
//         data.addColumn('number', 'coronavirusitalia');
//         data.addColumn('number', 'codvid19');
//         data.addColumn('number', 'espa');
//         data.addColumn('number', 'wuhanvirus');
//         data.addColumn('number', 'familiesfirst');
//         data.addColumn('number', 'italie');
//         data.addColumn('number', 'urgente');
//         data.addColumn('number', 'coronaviru');
//         data.addColumn('number', 'coronavirusuk');
//         data.addColumn('number', 'koronawirus');
//         data.addColumn('number', 'sarscov2');
//         data.addColumn('number', 'afp');
//         data.addColumn('number', 'quarantinelife');
//         data.addColumn('number', 'quedateencasa');
//         data.addColumn('number', 'news');
//         data.addColumn('number', 'confinement');
//         data.addColumn('number', 'covid-australia (merged)');
//         data.addColumn('number', 'confinementtotal');
//         data.addColumn('number', 'weare');
//         data.addColumn('number', 'ultimahora');
//         data.addColumn('number', 'atenci');


//         data.addRows([
//           [new Date(2020, 2, 9), 164179, 8923, 4701, 1140, 2410, 2499, 26, 0, 1184, 2111, 1368,
//            1480, 794, 848, 0, 0, 184, 336, 424, 0, 357, 489, 1552, 50, 517,
//            0, 1208, 33, 0, 770, 64, 488, 802, 0, 733, 204, 332, 270, 151,
//            642, 326, 0, 0, 468, 0, 398, 0, 0, 243, 203],
//           [new Date(2020, 2, 10), 155402, 5215, 4388, 1480, 2185, 7077, 0, 0, 1511, 1400, 834,
//            1268, 864, 882, 0, 0, 537, 468, 557, 35, 358, 477, 908, 43, 584,
//            0, 972, 41, 0, 561, 239, 404, 449, 0, 795, 184, 522, 565, 754,
//            456, 247, 0, 0, 412, 0, 231, 0, 1957, 242, 112],
//           [new Date(2020, 2, 11), 173191, 2691, 2305, 2904, 1697, 2030, 46, 0, 1281, 1677, 1163,
//            1368, 1046, 756, 0, 0, 946, 430, 953, 47, 598, 164, 1051, 1873,
//            666, 0, 602, 112, 0, 493, 1292, 292, 366, 0, 570, 437, 310, 471,
//            1275, 451, 275, 0, 0, 361, 0, 237, 0, 503, 345, 251],
//           [new Date(2020, 2, 12), 132571, 2043, 3103, 2365, 1604, 972, 3769, 0, 559, 1893, 951,
//            758, 461, 640, 299, 0, 591, 455, 1262, 29, 839, 276, 543, 1155,
//            307, 0, 275, 212, 0, 196, 1113, 455, 365, 857, 215, 373, 287,
//            165, 248, 274, 278, 0, 315, 226, 0, 356, 0, 0, 316, 155],
//           [new Date(2020, 2, 13), 126291, 2932, 2756, 2541, 2192, 791, 3858, 1793, 392, 1581, 1032,
//            623, 582, 664, 663, 0, 476, 301, 478, 105, 447, 733, 215, 393,
//            240, 78, 267, 251, 0, 194, 330, 353, 484, 1204, 275, 312, 269,
//            156, 102, 233, 310, 0, 414, 237, 223, 281, 0, 0, 313, 178],
//           [new Date(2020, 2, 14), 156726, 2453, 2835, 3506, 3254, 1338, 6986, 7671, 975, 1310,
//            1195, 666, 1990, 1111, 1241, 0, 715, 1246, 409, 382, 389, 742,
//            156, 271, 354, 596, 234, 357, 30, 865, 233, 421, 308, 1021, 294,
//            261, 277, 155, 82, 177, 346, 0, 436, 212, 440, 199, 0, 0, 231,
//            460],
//           [new Date(2020, 2, 15), 164249, 3252, 2523, 7171, 2268, 1760, 1279, 5581, 1659, 2395,
//            1933, 880, 1066, 641, 1426, 0, 955, 701, 398, 1501, 272, 774,
//            156, 215, 695, 1672, 186, 738, 963, 311, 119, 518, 224, 193, 295,
//            496, 361, 285, 105, 294, 299, 0, 408, 201, 530, 317, 0, 0, 250,
//            389],
//           [new Date(2020, 2, 16), 168842, 9006, 1948, 2791, 1832, 1528, 711, 1113, 2723, 2407,
//            1981, 715, 494, 482, 728, 2944, 907, 747, 404, 1149, 1227, 580,
//            153, 260, 347, 1484, 150, 962, 2031, 165, 121, 359, 153, 77, 198,
//            536, 372, 326, 211, 208, 397, 1001, 569, 310, 835, 302, 1303, 0,
//            289, 371],
//           [new Date(2020, 2, 17), 180606, 10881, 2061, 948, 3503, 1189, 586, 416, 6121, 1310, 2400,
//            715, 334, 449, 2071, 3128, 755, 792, 446, 2039, 544, 726, 72,
//            249, 441, 231, 160, 1056, 696, 156, 115, 301, 382, 146, 101, 402,
//            475, 753, 144, 216, 298, 1748, 606, 270, 643, 288, 1271, 0, 223,
//            308],
//        ]);

//         var chart = new google.visualization.ChartWrapper({
//             chartType   : 'LineChart',
//             containerId : 'lineChartArea',
//             options     : {
//                             isStacked   : 'percent',
//                             focusTarget : 'category',
//                             height		  : 500,
//                             width			  : '100%',
//                             legend		  : { position: "right", textStyle: {fontSize: 13}},
//                             pointSize		: 5,
//                             tooltip		  : {textStyle : {fontSize:12}, showColorCode : true, trigger: 'both'},
//                             hAxis			  : {format: chartDateformat, 
//                                            gridlines:{count:chartLineCount,
//                                                       units: {
//                                                                 years : {format: ['yyyy']},
//                                                                 months: {format: ['MM']},
//                                                                 days  : {format: ['dd']}}
//                                                       },
//                                            textStyle: {fontSize:12}},
//                             vAxis			  : {title: 'the daily usage count (logscale)',
//                                            logScale: true,
//                                            minValue: 0,
//                                            viewWindow:{min:0},
//                                            gridlines:{count:-1},
//                                            textStyle:{fontSize:12}
//                                           },
//                             animation		: {startup: true,duration: 1000,easing: 'in' },
//                             annotations	: {pattern: chartDateformat,
//                                             textStyle: {
//                                             fontSize: 15,
//                                             bold: true,
//                                             italic: true,
//                                             color: '#871b47',
//                                             auraColor: '#d799ae',
//                                             opacity: 0.8,
//                                             pattern: chartDateformat
//                                           }
//                                         },
//                             // lineWidth: 2
//                             series: options_series
//                             }
//           });

//           google.visualization.events.addListener(chart, 'select', function() { highlightLine(chart, data); });

//           var control = new google.visualization.ControlWrapper({
//             controlType: 'ChartRangeFilter',
//             containerId: 'controlsArea',
//             options: {
//                 ui:{
//                       chartType: 'LineChart',
//                       chartOptions: {
//                       chartArea: {'width': '60%', 'height' : 80},
//                       hAxis: {'baselineColor': 'none', format: chartDateformat, textStyle: {fontSize:12},
//                           gridlines: {count:controlLineCount,
//                                       units: {
//                                         years : {format: ['yyyy']},
//                                         months: {format: ['MM']},
//                                         days  : {format: ['dd']}
//                                       }
//                                      }
//                             }
//                       }
//                 },
//                 filterColumnIndex: 0
//               }
//           });

//           var date_formatter = new google.visualization.DateFormat({ pattern: chartDateformat});
//           date_formatter.format(data, 0);

//           var dashboard = new google.visualization.Dashboard(document.getElementById('Line_Controls_Chart'));
//           // window.addEventListener('resize', function() { dashboard.draw(data); }, false);
//           dashboard.bind([control], [chart]);
//           dashboard.draw(data);

//       }
//       google.charts.setOnLoadCallback(drawDashboard);

//     }
// }
// $(document).ready(function(){
//   google.charts.load('current', {'packages':['line','controls']});
//   chartDrawFun.chartDraw(); //run chartDraw()
// });


// emergingChartDrawFun :Top-K emerging hashtags
// var emergingChartDrawFun = {

//   chartDraw : function(){

//       var chartDateformat 	= 'yyyy-MM-dd';
//       var chartLineCount    = 10;
//       var controlLineCount	= 10;


//       function drawDashboard() {

//         var data = new google.visualization.DataTable();

//         data.addColumn('datetime' , 'Day');
//         data.addColumn('number', 'coronavirus (merged)');
//         data.addColumn('number', 'covid-france (merged)');
//         data.addColumn('number', 'coronapocalypse');
//         data.addColumn('number', 'dontbeaspreader');
//         data.addColumn('number', 'outbreak (merged)');
//         data.addColumn('number', 'stayhome (merged)');
//         data.addColumn('number', 'yomequedoencasa');
//         data.addColumn('number', 'coronavirusupdates (merged)');
//         data.addColumn('number', 'coronapocolypse');
//         data.addColumn('number', 'coronaviruspandemic');
//         data.addColumn('number', 'quarantinelife');
//         data.addColumn('number', 'covid-india (merged)');
//         data.addColumn('number', 'quedateentucasa');
//         data.addColumn('number', 'confinementtotal');
//         data.addColumn('number', 'socialdistancing');
//         data.addColumn('number', 'confinement');
//         data.addColumn('number', 'cuarentenacoronavirus');
//         data.addColumn('number', 'covid-china (merged)');
//         data.addColumn('number', 'qu');
//         data.addColumn('number', 'quedateencasa');
//         data.addColumn('number', 'covid19malaysia');
//         data.addColumn('number', 'shipsgoingdown');
//         data.addColumn('number', 'rmstoiletpap');
//         data.addColumn('number', 'restezchezvous');
//         data.addColumn('number', 'cuba');
//         data.addColumn('number', 'demdebate');
//         data.addColumn('number', 'flattenthecurve');
//         data.addColumn('number', 'staythefhome');
//         data.addColumn('number', 'bbb20');
//         data.addColumn('number', 'quarantine');


//         data.addRows([
//            [new Date(2020, 2, 9), 164179, 1184, 0, 0, 8923, 0, 0, 1140, 0, 26, 0, 1368, 0, 0, 33,
//             0, 0, 2410, 0, 0, 0, 0, 0, 0, 336, 0, 184, 0, 59, 139],
//            [new Date(2020, 2, 10), 155402, 1511, 0, 0, 5215, 35, 0, 1480, 0, 0, 0, 834, 0, 0, 41, 0,
//             0, 2185, 0, 0, 0, 0, 0, 0, 468, 0, 537, 0, 22, 128],
//            [new Date(2020, 2, 11), 173191, 1281, 0, 0, 2691, 47, 0, 2904, 0, 46, 0, 1163, 0, 0, 112,
//             0, 0, 1697, 0, 0, 0, 0, 0, 0, 430, 0, 946, 0, 28, 74],
//            [new Date(2020, 2, 12), 132571, 559, 0, 0, 2043, 29, 299, 2365, 0, 3769, 0, 951, 0, 0,
//             212, 0, 0, 1604, 63, 315, 0, 0, 0, 0, 455, 0, 591, 0, 39, 43],
//            [new Date(2020, 2, 13), 126291, 392, 1793, 0, 2932, 105, 663, 2541, 0, 3858, 0, 1032, 78,
//             0, 251, 223, 0, 2192, 187, 414, 0, 0, 0, 0, 301, 0, 476, 0, 40,
//             55],
//            [new Date(2020, 2, 14), 156726, 975, 7671, 0, 2453, 382, 1241, 3506, 30, 6986, 0, 1195,
//             596, 0, 357, 440, 0, 3254, 268, 436, 0, 0, 0, 307, 1246, 0, 715,
//             0, 55, 101],
//            [new Date(2020, 2, 15), 164249, 1659, 5581, 0, 3252, 1501, 1426, 7171, 963, 1279, 0,
//             1933, 1672, 0, 738, 530, 235, 2268, 409, 408, 0, 0, 0, 585, 701,
//             38, 955, 601, 45, 181],
//            [new Date(2020, 2, 16), 168842, 2723, 1113, 2944, 9006, 1149, 728, 2791, 2031, 711, 1001,
//             1981, 1484, 1303, 962, 835, 1483, 1832, 503, 569, 452, 47, 47,
//             196, 747, 1259, 907, 508, 198, 857],
//            [new Date(2020, 2, 17), 180606, 6121, 416, 3128, 10881, 2039, 2071, 948, 696, 586, 1748,
//             2400, 231, 1271, 1056, 643, 312, 3503, 702, 606, 923, 1144, 1144,
//             576, 792, 0, 755, 155, 706, 304],
//         ]);

//         var chart = new google.visualization.ChartWrapper({
//             chartType   : 'LineChart',
//             containerId : 'emergingLineChartArea',
//             options     : {
//                             isStacked   : 'percent',
//                             focusTarget : 'category',
//                             height		  : 500,
//                             width			  : '100%',
//                             legend		  : { position: "right", textStyle: {fontSize: 13}},
//                             pointSize		: 5,
//                             tooltip		  : {textStyle : {fontSize:12}, showColorCode : true, trigger: 'both'},
//                             hAxis			  : {format: chartDateformat, 
//                                             gridlines:{count:chartLineCount,
//                                                       units: {
//                                                                 years : {format: ['yyyy']},
//                                                                 months: {format: ['MM']},
//                                                                 days  : {format: ['dd']}}
//                                                       },
//                                             textStyle: {fontSize:12}},
//                             vAxis			  : {title: 'the daily usage count (logscale)',
//                                             logScale: true,
//                                             minValue: 0,
//                                             viewWindow:{min:0},
//                                             gridlines:{count:-1},
//                                             textStyle:{fontSize:12}
//                                           },
//                             animation		: {startup: true,duration: 1000,easing: 'in' },
//                             annotations	: {pattern: chartDateformat,
//                                             textStyle: {
//                                             fontSize: 15,
//                                             bold: true,
//                                             italic: true,
//                                             color: '#871b47',
//                                             auraColor: '#d799ae',
//                                             opacity: 0.8,
//                                             pattern: chartDateformat
//                                           }
//                                         },
//                             // series: options_series
//                             }
//           });
          
//           google.visualization.events.addListener(chart, 'select', function() { highlightLine(chart, data); });

//           var control = new google.visualization.ControlWrapper({
//             controlType: 'ChartRangeFilter',
//             containerId: 'emergingControlsArea',
//             options: {
//                 ui:{
//                       chartType: 'LineChart',
//                       chartOptions: {
//                       chartArea: {'width': '60%', 'height' : 80},
//                       hAxis: {'baselineColor': 'none', format: chartDateformat, textStyle: {fontSize:12},
//                           gridlines: {count:controlLineCount,
//                                       units: {
//                                         years : {format: ['yyyy']},
//                                         months: {format: ['MM']},
//                                         days  : {format: ['dd']}
//                                       }
//                                       }
//                             }
//                       }
//                 },
//                 filterColumnIndex: 0
//               }
//           });

//           var date_formatter = new google.visualization.DateFormat({ pattern: chartDateformat});
//           date_formatter.format(data, 0);

//           var dashboard = new google.visualization.Dashboard(document.getElementById('Emerging_Line_Controls_Chart'));
//           // window.addEventListener('resize', function() { dashboard.draw(data); }, false);
//           dashboard.bind([control], [chart]);
//           dashboard.draw(data);

//       }
//       google.charts.setOnLoadCallback(drawDashboard);
//   }
// }
// $(document).ready(function(){
//   google.charts.load('current', {'packages':['line','controls']});
//   emergingChartDrawFun.chartDraw(); //run chartDraw()
// });
  


// drawChart_table :Top-K hashtags
// function drawChart_table() {
//   // Define the chart to be drawn.
//   var data = new google.visualization.DataTable();
//   data.addColumn('string', 'Hashtag');
//   data.addColumn('number', '2020-03-17');
//   data.addColumn('number', '2020-03-16');
//   data.addColumn('number', '2020-03-15');
//   data.addColumn('number', '2020-03-14');
//   data.addColumn('number', '2020-03-13');
//   data.addColumn('number', '2020-03-12');
//   data.addColumn('number', '2020-03-11');
//   data.addColumn('number', '2020-03-10');
//   data.addColumn('number', '2020-03-09');
//   data.addRows([
//        ['coronavirus (merged)', 180606, 168842, 164249, 156726, 126291,
//         132571, 173191, 155402, 164179],
//        ['outbreak (merged)', 10881, 9006, 3252, 2453, 2932, 2043, 2691,
//         5215, 8923],
//        ['trump (merged)', 2061, 1948, 2523, 2835, 2756, 3103, 2305, 4388,
//         4701],
//        ['coronavirusupdates (merged)', 948, 2791, 7171, 3506, 2541, 2365,
//         2904, 1480, 1140],
//        ['covid-china (merged)', 3503, 1832, 2268, 3254, 2192, 1604, 1697,
//         2185, 2410],
//        ['covid-italy (merged)', 1189, 1528, 1760, 1338, 791, 972, 2030,
//         7077, 2499],
//        ['coronaviruspandemic', 586, 711, 1279, 6986, 3858, 3769, 46, 0,
//         26],
//        ['coronapocalypse', 416, 1113, 5581, 7671, 1793, 0, 0, 0, 0],
//        ['covid-france (merged)', 6121, 2723, 1659, 975, 392, 559, 1281,
//         1511, 1184],
//        ['breaking', 1310, 2407, 2395, 1310, 1581, 1893, 1677, 1400, 2111],
//        ['covid-india (merged)', 2400, 1981, 1933, 1195, 1032, 951, 1163,
//         834, 1368],
//        ['covid-iran (merged)', 715, 715, 880, 666, 623, 758, 1368, 1268,
//         1480],
//        ['wuhan', 334, 494, 1066, 1990, 582, 461, 1046, 864, 794],
//        ['italia', 449, 482, 641, 1111, 664, 640, 756, 882, 848],
//        ['yomequedoencasa', 2071, 728, 1426, 1241, 663, 299, 0, 0, 0],
//        ['dontbeaspreader', 3128, 2944, 0, 0, 0, 0, 0, 0, 0],
//        ['flattenthecurve', 755, 907, 955, 715, 476, 591, 946, 537, 184],
//        ['cuba', 792, 747, 701, 1246, 301, 455, 430, 468, 336],
//        ['pandemic', 446, 404, 398, 409, 478, 1262, 953, 557, 424],
//        ['stayhome (merged)', 2039, 1149, 1501, 382, 105, 29, 47, 35, 0],
//        ['macron', 544, 1227, 272, 389, 447, 839, 598, 358, 357],
//        ['venezuela', 726, 580, 774, 742, 733, 276, 164, 477, 489],
//        ['coronavid19', 72, 153, 156, 156, 215, 543, 1051, 908, 1552],
//        ['pandemia', 249, 260, 215, 271, 393, 1155, 1873, 43, 50],
//        ['virus', 441, 347, 695, 354, 240, 307, 666, 584, 517],
//        ['quedateentucasa', 231, 1484, 1672, 596, 78, 0, 0, 0, 0],
//        ['iorestoacasa', 160, 150, 186, 234, 267, 275, 602, 972, 1208],
//        ['socialdistancing', 1056, 962, 738, 357, 251, 212, 112, 41, 33],
//        ['coronapocolypse', 696, 2031, 963, 30, 0, 0, 0, 0, 0],
//        ['coronavirusitalia', 156, 165, 311, 865, 194, 196, 493, 561, 770],
//        ['codvid19', 115, 121, 119, 233, 330, 1113, 1292, 239, 64],
//        ['espa', 301, 359, 518, 421, 353, 455, 292, 404, 488],
//        ['wuhanvirus', 382, 153, 224, 308, 484, 365, 366, 449, 802],
//        ['familiesfirst', 146, 77, 193, 1021, 1204, 857, 0, 0, 0],
//        ['italie', 101, 198, 295, 294, 275, 215, 570, 795, 733],
//        ['urgente', 402, 536, 496, 261, 312, 373, 437, 184, 204],
//        ['coronaviru', 475, 372, 361, 277, 269, 287, 310, 522, 332],
//        ['coronavirusuk', 753, 326, 285, 155, 156, 165, 471, 565, 270],
//        ['koronawirus', 144, 211, 105, 82, 102, 248, 1275, 754, 151],
//        ['sarscov2', 216, 208, 294, 177, 233, 274, 451, 456, 642],
//        ['afp', 298, 397, 299, 346, 310, 278, 275, 247, 326],
//        ['quarantinelife', 1748, 1001, 0, 0, 0, 0, 0, 0, 0],
//        ['quedateencasa', 606, 569, 408, 436, 414, 315, 0, 0, 0],
//        ['news', 270, 310, 201, 212, 237, 226, 361, 412, 468],
//        ['confinement', 643, 835, 530, 440, 223, 0, 0, 0, 0],
//        ['covid-australia (merged)', 288, 302, 317, 199, 281, 356, 237,
//         231, 398],
//        ['confinementtotal', 1271, 1303, 0, 0, 0, 0, 0, 0, 0],
//        ['weare', 0, 0, 0, 0, 0, 0, 503, 1957, 0],
//        ['ultimahora', 223, 289, 250, 231, 313, 316, 345, 242, 243],
//        ['atenci', 308, 371, 389, 460, 178, 155, 251, 112, 203]
//   ]);

//   var options = {
//      showRowNumber: false,
//      width: '80%', 
//      height: '80%',
//   };
        
//   // Instantiate and draw the chart.
//   var chart = new google.visualization.Table(document.getElementById('topk_hashtags'));
//   chart.draw(data, options);
// }
// google.charts.setOnLoadCallback(drawChart_table);


// drawChart_table :Top-K emerging hashtags
// function drawChart_table2() {
//   // Define the chart to be drawn.
//   var data = new google.visualization.DataTable();
//   data.addColumn('string', 'Hashtag');
//   data.addColumn('number', '2020-03-17');
//   data.addColumn('number', '2020-03-16');
//   data.addColumn('number', '2020-03-15');
//   data.addColumn('number', '2020-03-14');
//   data.addColumn('number', '2020-03-13');
//   data.addColumn('number', '2020-03-12');
//   data.addColumn('number', '2020-03-11');
//   data.addColumn('number', '2020-03-10');
//   data.addColumn('number', '2020-03-09');
//   data.addColumn('number', 'Slope');
//   data.addRows([
//     ['coronavirus (merged)', 180606, 168842, 164249, 156726, 126291,
//         132571, 173191, 155402, 164179, 1871.65],
//        ['covid-france (merged)', 6121, 2723, 1659, 975, 392, 559, 1281,
//         1511, 1184, 409.27],
//        ['coronapocalypse', 416, 1113, 5581, 7671, 1793, 0, 0, 0, 0,
//         397.27],
//        ['dontbeaspreader', 3128, 2944, 0, 0, 0, 0, 0, 0, 0, 355.73],
//        ['outbreak (merged)', 10881, 9006, 3252, 2453, 2932, 2043, 2691,
//         5215, 8923, 345.62],
//        ['stayhome (merged)', 2039, 1149, 1501, 382, 105, 29, 47, 35, 0,
//         245.98],
//        ['yomequedoencasa', 2071, 728, 1426, 1241, 663, 299, 0, 0, 0,
//         237.7],
//        ['coronavirusupdates (merged)', 948, 2791, 7171, 3506, 2541, 2365,
//         2904, 1480, 1140, 214.0],
//        ['coronapocolypse', 696, 2031, 963, 30, 0, 0, 0, 0, 0, 180.55],
//        ['coronaviruspandemic', 586, 711, 1279, 6986, 3858, 3769, 46, 0,
//         26, 167.6],
//        ['quarantinelife', 1748, 1001, 0, 0, 0, 0, 0, 0, 0, 166.58],
//        ['covid-india (merged)', 2400, 1981, 1933, 1195, 1032, 951, 1163,
//         834, 1368, 155.88],
//        ['quedateentucasa', 231, 1484, 1672, 596, 78, 0, 0, 0, 0, 155.27],
//        ['confinementtotal', 1271, 1303, 0, 0, 0, 0, 0, 0, 0, 149.88],
//        ['socialdistancing', 1056, 962, 738, 357, 251, 212, 112, 41, 33,
//         137.53],
//        ['confinement', 643, 835, 530, 440, 223, 0, 0, 0, 0, 109.62],
//        ['cuarentenacoronavirus', 312, 1483, 235, 0, 0, 0, 0, 0, 0,
//         102.78],
//        ['covid-china (merged)', 3503, 1832, 2268, 3254, 2192, 1604, 1697,
//         2185, 2410, 101.75],
//        ['qu', 702, 503, 409, 268, 187, 63, 0, 0, 0, 89.0],
//        ['quedateencasa', 606, 569, 408, 436, 414, 315, 0, 0, 0, 84.47],
//        ['covid19malaysia', 923, 452, 0, 0, 0, 0, 0, 0, 0, 84.13],
//        ['shipsgoingdown', 1144, 47, 0, 0, 0, 0, 0, 0, 0, 78.62],
//        ['rmstoiletpap', 1144, 47, 0, 0, 0, 0, 0, 0, 0, 78.62],
//        ['restezchezvous', 576, 196, 585, 307, 0, 0, 0, 0, 0, 72.82],
//        ['cuba', 792, 747, 701, 1246, 301, 455, 430, 468, 336, 66.57],
//        ['demdebate', 0, 1259, 38, 0, 0, 0, 0, 0, 0, 64.22],
//        ['flattenthecurve', 755, 907, 955, 715, 476, 591, 946, 537, 184,
//         58.93],
//        ['staythefhome', 155, 508, 601, 0, 0, 0, 0, 0, 0, 55.77],
//        ['bbb20', 706, 198, 45, 55, 40, 39, 28, 22, 59, 52.77],
//        ['quarantine', 304, 857, 181, 101, 55, 43, 74, 128, 139, 51.98]
//       ]);

//   var options = {
//      showRowNumber: false,
//      width: '80%', 
//      height: '80%',
//   };
        
//   // Instantiate and draw the chart.
//   var chart = new google.visualization.Table(document.getElementById('topk_emerging_hashtags'));
//   chart.draw(data, options);
// }
// google.charts.setOnLoadCallback(drawChart_table2);


