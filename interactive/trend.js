// drawLineChart1 : Top-K hashtags
// DEPRECATED: We use better LineChart
function drawLineChart1() {

  var data = new google.visualization.DataTable();
      data.addColumn('date', 'Day');
      data.addColumn('number', 'coronavirus');
      data.addColumn('number', 'covid19');
      data.addColumn('number', 'covid');
      data.addColumn('number', 'covid_19');
      data.addColumn('number', 'coronapocalypse');
      data.addColumn('number', 'coronaviruspandemic');
      data.addColumn('number', 'coronavirusupdates');
      data.addColumn('number', 'china');
      data.addColumn('number', 'corona');
      data.addColumn('number', 'wuhan');
      data.addColumn('number', 'coronaoutbreak');
      data.addColumn('number', 'breaking');
      data.addColumn('number', 'cuba');
      data.addColumn('number', 'yomequedoencasa');
      data.addColumn('number', 'edom');
      data.addColumn('number', 'italia');
      data.addColumn('number', 'bersatutangkalcorona');
      data.addColumn('number', 'familiesfirst');
      data.addColumn('number', 'italy');
      data.addColumn('number', 'coronavirusitalia');
      data.addColumn('number', 'co');
      data.addColumn('number', 'covid2019');
      data.addColumn('number', 'cov');
      data.addColumn('number', 'save');
      data.addColumn('number', 'trump');
      data.addColumn('number', 'venezuela');
      data.addColumn('number', 'restaacasa');
      data.addColumn('number', 'flattenthecurve');
      data.addColumn('number', 'agrigento');
      data.addColumn('number', 'lockdownindonesia');
      data.addColumn('number', 'coronavirusoutbreak');
      data.addColumn('number', 'cor');
      data.addColumn('number', 'france');
      data.addColumn('number', 'quedateentucasa');
      data.addColumn('number', 'coronavirusupdate');
      data.addColumn('number', 'coronavi');
      data.addColumn('number', 'covid_19uk');
      data.addColumn('number', 'hr6201');
      data.addColumn('number', 'iran');
      data.addColumn('number', 'coronauk');
      data.addColumn('number', 'coronavirusesp');
      data.addColumn('number', 'atenci');
      data.addColumn('number', 'confinement');
      data.addColumn('number', 'quedateencasa');
      data.addColumn('number', 'coronavir');
      data.addColumn('number', 'coronav');
      data.addColumn('number', 'espa');
      data.addColumn('number', 'paris');
      data.addColumn('number', 'coron');
      data.addColumn('number', 'pandemic');

      // zero-based month
      data.addRows([
        [new Date(2020, 2, 14), 77838, 54223, 8637, 7785, 7671, 6986, 2910, 2686, 2216, 1990,
          1778, 1310, 1246, 1241, 1163, 1111, 1028, 1021, 918, 865, 834,
          832, 821, 800, 786, 742, 718, 715, 709, 694, 670, 621, 599, 596,
          560, 527, 519, 515, 508, 491, 489, 460, 440, 436, 428, 424, 421,
          418, 410, 409],
        [new Date(2020, 2, 15),  83336, 50520, 18233, 3192, 5581, 1279, 6692, 1718, 2287, 1066,
          630, 2395, 701, 1426, 85, 641, 0, 193, 1195, 311, 919, 624, 420,
          120, 753, 774, 166, 955, 162, 434, 2612, 536, 621, 1672, 452,
          448, 101, 26, 642, 233, 296, 389, 530, 408, 680, 1277, 518, 597,
          363, 398],
        [new Date(2020, 2, 16), 86221, 59215, 10506, 2470, 1113, 711, 2430, 1450, 2773, 494, 286,
          2407, 747, 728, 29, 482, 0, 77, 719, 165, 992, 1404, 354, 29,
          634, 580, 0, 907, 0, 0, 8704, 499, 430, 1484, 326, 512, 58, 0,
          520, 45, 153, 371, 835, 569, 622, 1002, 359, 311, 421, 404],
        [new Date(2020, 2, 17), 88814, 64330, 5462, 4139, 416, 586, 673, 1872, 2758, 334, 314,
          1310, 792, 2071, 0, 449, 0, 146, 525, 156, 2502, 6472, 484, 158,
          543, 726, 0, 755, 0, 31, 10557, 392, 366, 231, 248, 469, 35, 0,
          553, 33, 98, 308, 643, 606, 400, 696, 301, 314, 480, 446],
      ]);

      var options = {
      //   chart: {
      //     title: 'Top-50 hashtags trend',
      //     subtitle: 'in the number of usage count',
      // },
        lineWidth: 4,
        hAxis: {
          format: "MMM d",
          // zero-based month
          ticks: [new Date(2020,2,14), 
                  new Date(2020,2,15), 
                  new Date(2020,2,16), 
                  new Date(2020,2,17)],
        },
        vAxis: {
          logScale: true,
          minValue: 0
        }
      };

      // var chart = new google.charts.Line(document.getElementById('topk_hashtags_line'));
      var chart = new google.visualization.LineChart(document.getElementById('topk_hashtags_line'));
      
      // chart.draw(data, google.charts.Line.convertOptions(options));
      chart.draw(data, options);

}
google.charts.setOnLoadCallback(drawLineChart1);
//////////



// CHART 1 STARTS HERE
// chartDrawFun : Top-K hashtags
var chartDrawFun = {

  chartDraw : function(){
      var chartData = '';

      var chartDateformat 	= 'yyyy-MM-dd';
      var chartLineCount    = 5;
      var controlLineCount	= 5;


      function drawDashboard() {

        var data = new google.visualization.DataTable();

        data.addColumn('datetime' , 'Day');
        data.addColumn('number', 'coronavirus');
        data.addColumn('number', 'covid19');
        data.addColumn('number', 'coronavirusoutbreak');
        data.addColumn('number', 'covid2019');
        data.addColumn('number', 'covid');
        data.addColumn('number', 'covid_19');
        data.addColumn('number', 'dontbeaspreader');
        data.addColumn('number', 'corona');
        data.addColumn('number', 'co');
        data.addColumn('number', 'covid19france');
        data.addColumn('number', 'covid-19');
        data.addColumn('number', 'yomequedoencasa');
        data.addColumn('number', 'china');
        data.addColumn('number', 'coronavirusfrance');
        data.addColumn('number', 'quarantinelife');
        data.addColumn('number', 'coronavirusenfrance');
        data.addColumn('number', 'breaking');
        data.addColumn('number', 'confinementtotal');
        data.addColumn('number', 'shipsgoingdown');
        data.addColumn('number', 'rmstoiletpap');
        data.addColumn('number', 'stayhomechallenge');
        data.addColumn('number', 'socialdistancing');
        data.addColumn('number', 'covid19malaysia');
        data.addColumn('number', 'chinesevirus');
        data.addColumn('number', 'cuba');
        data.addColumn('number', 'flattenthecurve');
        data.addColumn('number', 'coronavirusuk');
        data.addColumn('number', 'venezuela');
        data.addColumn('number', 'bbb20');
        data.addColumn('number', 'qu');
        data.addColumn('number', 'coronav');
        data.addColumn('number', 'coronapocolypse');
        data.addColumn('number', 'coronavirusupdates');
        data.addColumn('number', 'confinementotal');
        data.addColumn('number', 'confinement');
        data.addColumn('number', 'quedateencasa');
        data.addColumn('number', 'coronaviruspandemic');
        data.addColumn('number', 'restezchezvous');
        data.addColumn('number', 'update');
        data.addColumn('number', 'stayhome');
        data.addColumn('number', 'iran');
        data.addColumn('number', 'quedateenlacasa');
        data.addColumn('number', 'macron');
        data.addColumn('number', 'trump');
        data.addColumn('number', 'viruschino');
        data.addColumn('number', 'italy');
        data.addColumn('number', 'coronavirusinpakistan');
        data.addColumn('number', 'cuarentenanacional');
        data.addColumn('number', 'coronavirusindia');
        data.addColumn('number', 'cov');


        data.addRows([
          [new Date(2020, 2, 13), 64598, 42575, 800, 989, 2151, 9484, 0, 1922, 712, 50, 315, 663, 1617, 46, 0, 0, 1581, 0, 0, 0, 0, 251, 0, 51, 301, 476, 156, 733, 40, 187, 546, 0, 142, 0, 223, 414, 3858, 0, 119, 89, 492, 0, 447, 837, 0, 537, 0, 0, 192, 307],
          [new Date(2020, 2, 14), 77838, 54223, 670, 832, 8637, 7785, 0, 2216, 834, 54, 289, 1241, 2686, 261, 0, 0, 1310, 0, 0, 0, 0, 357, 0, 0, 1246, 715, 155, 742, 55, 268, 424, 30, 2910, 0, 440, 436, 6986, 307, 98, 276, 508, 0, 389, 786, 0, 918, 0, 0, 259, 821],
          [new Date(2020, 2, 15), 83336, 50520, 2612, 624, 18233, 3192, 0, 2287, 919, 27, 395, 1426, 1718, 643, 0, 263, 2395, 0, 0, 0, 0, 738, 0, 41, 701, 955, 285, 774, 45, 409, 1277, 963, 6692, 0, 530, 408, 1279, 585, 145, 1149, 642, 0, 272, 753, 0, 1195, 0, 0, 266, 420],
          [new Date(2020, 2, 16), 86221, 59215, 8704, 1404, 10506, 2470, 2944, 2773, 992, 941, 557, 728, 1450, 620, 1001, 645, 2407, 1303, 47, 47, 32, 962, 452, 0, 747, 907, 326, 580, 198, 503, 1002, 2031, 2430, 24, 835, 569, 711, 196, 158, 687, 520, 156, 1227, 634, 0, 719, 302, 0, 436, 354],
          [new Date(2020, 2, 17), 88814, 64330, 10557, 6472, 5462, 4139, 3128, 2758, 2502, 2221,
            2210, 2071, 1872, 1789, 1748, 1598, 1310, 1271, 1144, 1144, 1108, 1056, 923, 859, 792, 755, 753, 726, 706, 702, 696, 696, 673, 662, 643, 606, 586, 576, 557, 556, 553, 553, 544, 543, 539, 525, 508, 505, 503, 484]
        ]);

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
$(document).ready(function(){
  google.charts.load('current', {'packages':['line','controls']});
  chartDrawFun.chartDraw(); //run chartDraw()
});


// emergingChartDrawFun :Top-K emerging hashtags
// Emerging hashtags
var emergingChartDrawFun = {

  chartDraw : function(){

      var chartDateformat 	= 'yyyy-MM-dd';
      var chartLineCount    = 5;
      var controlLineCount	= 5;


      function drawDashboard() {

        var data = new google.visualization.DataTable();

        data.addColumn('datetime' , 'Day');
        data.addColumn('number', 'coronavirus');
        data.addColumn('number', 'covid19');
        data.addColumn('number', 'coronavirusoutbreak');
        data.addColumn('number', 'covid2019');
        data.addColumn('number', 'dontbeaspreader');
        data.addColumn('number', 'covid');
        data.addColumn('number', 'covid19france');
        data.addColumn('number', 'quarantinelife');
        data.addColumn('number', 'covid-19');
        data.addColumn('number', 'coronavirusfrance');
        data.addColumn('number', 'confinementtotal');
        data.addColumn('number', 'coronavirusenfrance');
        data.addColumn('number', 'co');
        data.addColumn('number', 'coronapocolypse');
        data.addColumn('number', 'shipsgoingdown');
        data.addColumn('number', 'rmstoiletpap');
        data.addColumn('number', 'yomequedoencasa');
        data.addColumn('number', 'covid19malaysia');
        data.addColumn('number', 'stayhomechallenge');
        data.addColumn('number', 'corona');
        data.addColumn('number', 'socialdistancing');
        data.addColumn('number', 'cuarentenacoronavirus');
        data.addColumn('number', 'chinesevirus');
        data.addColumn('number', 'bbb20');
        data.addColumn('number', 'coronavirusuk');
        data.addColumn('number', 'confinementotal');
        data.addColumn('number', 'stayhome');
        data.addColumn('number', 'coronavirusinpakistan');
        data.addColumn('number', 'qu');
        data.addColumn('number', 'quedateenlacasa');


        data.addRows([
          [new Date(2020, 2, 13), 64598, 42575, 800, 989, 0, 2151, 50, 0, 315, 46, 0, 0, 712, 0, 0, 0, 663, 0, 0, 1922, 251, 0, 51, 40, 156, 0, 89, 0, 187, 0],
          [new Date(2020, 2, 14), 77838, 54223, 670, 832, 0, 8637, 54, 0, 289, 261, 0, 0, 834, 30, 0, 0, 1241, 0, 0, 2216, 357, 0, 0, 55, 155, 0, 276, 0, 268, 0],
          [new Date(2020, 2, 15), 83336, 50520, 2612, 624, 0, 18233, 27, 0, 395, 643, 0, 263, 919, 963, 0, 0, 1426, 0, 0, 2287, 738, 235, 41, 45, 285, 0, 1149, 0, 409, 0],
          [new Date(2020, 2, 16), 86221, 59215, 8704, 1404, 2944, 10506, 941, 1001, 557, 620, 1303, 645, 992, 2031, 47, 47, 728, 452, 32, 2773, 962, 1483, 0, 198, 326, 24, 687, 302, 503, 156],
          [new Date(2020, 2, 17), 88814, 64330, 10557, 6472, 3128, 5462, 2221, 1748, 2210, 1789, 1271, 1598, 2502, 696, 1144, 1144, 2071, 923, 1108, 2758, 1056, 312, 859, 706, 753, 662, 556, 508, 702, 553]
        ]);

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
$(document).ready(function(){
  google.charts.load('current', {'packages':['line','controls']});
  emergingChartDrawFun.chartDraw(); //run chartDraw()
});
  


// drawChart_table :Top-K hashtags
// Hashtags
function drawChart_table() {
  // Define the chart to be drawn.
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Hashtag');
  data.addColumn('number', '2020-03-17');
  data.addColumn('number', '2020-03-16');
  data.addColumn('number', '2020-03-15');
  data.addColumn('number', '2020-03-14');
  data.addColumn('number', '2020-03-13');
  data.addRows([
    ['coronavirus', 88814, 86221, 83336, 77838, 64598],
    ['covid19', 64330, 59215, 50520, 54223, 42575],
    ['coronavirusoutbreak', 10557, 8704, 2612, 670, 800],
    ['covid2019', 6472, 1404, 624, 832, 989],
    ['covid', 5462, 10506, 18233, 8637, 2151],
    ['covid_19', 4139, 2470, 3192, 7785, 9484],
    ['dontbeaspreader', 3128, 2944, 0, 0, 0],
    ['corona', 2758, 2773, 2287, 2216, 1922],
    ['co', 2502, 992, 919, 834, 712],
    ['covid19france', 2221, 941, 27, 54, 50],
    ['covid-19', 2210, 557, 395, 289, 315],
    ['yomequedoencasa', 2071, 728, 1426, 1241, 663],
    ['china', 1872, 1450, 1718, 2686, 1617],
    ['coronavirusfrance', 1789, 620, 643, 261, 46],
    ['quarantinelife', 1748, 1001, 0, 0, 0],
    ['coronavirusenfrance', 1598, 645, 263, 0, 0],
    ['breaking', 1310, 2407, 2395, 1310, 1581],
    ['confinementtotal', 1271, 1303, 0, 0, 0],
    ['shipsgoingdown', 1144, 47, 0, 0, 0],
    ['rmstoiletpap', 1144, 47, 0, 0, 0],
    ['stayhomechallenge', 1108, 32, 0, 0, 0],
    ['socialdistancing', 1056, 962, 738, 357, 251],
    ['covid19malaysia', 923, 452, 0, 0, 0],
    ['chinesevirus', 859, 0, 41, 0, 51],
    ['cuba', 792, 747, 701, 1246, 301],
    ['flattenthecurve', 755, 907, 955, 715, 476],
    ['coronavirusuk', 753, 326, 285, 155, 156],
    ['venezuela', 726, 580, 774, 742, 733],
    ['bbb20', 706, 198, 45, 55, 40],
    ['qu', 702, 503, 409, 268, 187],
    ['coronav', 696, 1002, 1277, 424, 546],
    ['coronapocolypse', 696, 2031, 963, 30, 0],
    ['coronavirusupdates', 673, 2430, 6692, 2910, 142],
    ['confinementotal', 662, 24, 0, 0, 0],
    ['confinement', 643, 835, 530, 440, 223],
    ['quedateencasa', 606, 569, 408, 436, 414],
    ['coronaviruspandemic', 586, 711, 1279, 6986, 3858],
    ['restezchezvous', 576, 196, 585, 307, 0],
    ['update', 557, 158, 145, 98, 119],
    ['stayhome', 556, 687, 1149, 276, 89],
    ['iran', 553, 520, 642, 508, 492],
    ['quedateenlacasa', 553, 156, 0, 0, 0],
    ['macron', 544, 1227, 272, 389, 447],
    ['trump', 543, 634, 753, 786, 837],
    ['viruschino', 539, 0, 0, 0, 0],
    ['italy', 525, 719, 1195, 918, 537],
    ['coronavirusinpakistan', 508, 302, 0, 0, 0],
    ['cuarentenanacional', 505, 0, 0, 0, 0],
    ['coronavirusindia', 503, 436, 266, 259, 192],
    ['cov', 484, 354, 420, 821, 307]
  ]);

  var options = {
     showRowNumber: false,
     width: '80%', 
     height: '80%',
  };
        
  // Instantiate and draw the chart.
  var chart = new google.visualization.Table(document.getElementById('topk_hashtags'));
  chart.draw(data, options);
}
google.charts.setOnLoadCallback(drawChart_table);


// drawChart_table :Top-K emerging hashtags
// Hashtags
function drawChart_table2() {
  // Define the chart to be drawn.
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Hashtag');
  data.addColumn('number', '2020-03-17');
  data.addColumn('number', '2020-03-16');
  data.addColumn('number', '2020-03-15');
  data.addColumn('number', '2020-03-14');
  data.addColumn('number', '2020-03-13');
  data.addColumn('number', 'Slope');
  data.addRows([['coronavirus', 88814, 86221, 83336, 77838, 64598, 5681.5],
  ['covid19', 64330, 59215, 50520, 54223, 42575, 4850.2],
  ['coronavirusoutbreak', 10557, 8704, 2612, 670, 800, 2754.8],
  ['covid2019', 6472, 1404, 624, 832, 989, 1153.8],
  ['dontbeaspreader', 3128, 2944, 0, 0, 0, 920.0],
  ['covid', 5462, 10506, 18233, 8637, 2151, 849.1],
  ['covid19france', 2221, 941, 27, 54, 50, 522.9],
  ['quarantinelife', 1748, 1001, 0, 0, 0, 449.7],
  ['covid-19', 2210, 557, 395, 289, 315, 405.8],
  ['coronavirusfrance', 1789, 620, 643, 261, 46, 384.5],
  ['confinementtotal', 1271, 1303, 0, 0, 0, 384.5],
  ['coronavirusenfrance', 1598, 645, 263, 0, 0, 384.1],
  ['co', 2502, 992, 919, 834, 712, 373.8],
  ['coronapocolypse', 696, 2031, 963, 30, 0, 339.3],
  ['shipsgoingdown', 1144, 47, 0, 0, 0, 233.5],
  ['rmstoiletpap', 1144, 47, 0, 0, 0, 233.5],
  ['yomequedoencasa', 2071, 728, 1426, 1241, 663, 230.3],
  ['covid19malaysia', 923, 452, 0, 0, 0, 229.8],
  ['stayhomechallenge', 1108, 32, 0, 0, 0, 224.8],
  ['corona', 2758, 2773, 2287, 2216, 1922, 222.9],
  ['socialdistancing', 1056, 962, 738, 357, 251, 221.5],
  ['cuarentenacoronavirus', 312, 1483, 235, 0, 0, 210.7],
  ['chinesevirus', 859, 0, 41, 0, 51, 161.6],
  ['bbb20', 706, 198, 45, 55, 40, 147.5],
  ['coronavirusuk', 753, 326, 285, 155, 156, 136.5],
  ['confinementotal', 662, 24, 0, 0, 0, 134.8],
  ['stayhome', 556, 687, 1149, 276, 89, 134.5],
  ['coronavirusinpakistan', 508, 302, 0, 0, 0, 131.8],
  ['qu', 702, 503, 409, 268, 187, 126.5],
  ['quedateenlacasa', 553, 156, 0, 0, 0, 126.2]]);

  var options = {
     showRowNumber: false,
     width: '80%', 
     height: '80%',
  };
        
  // Instantiate and draw the chart.
  var chart = new google.visualization.Table(document.getElementById('topk_emerging_hashtags'));
  chart.draw(data, options);
}
google.charts.setOnLoadCallback(drawChart_table2);

// function drawChart_table2() {
//   // Define the chart to be drawn.
//   var data = new google.visualization.DataTable();
//   data.addColumn('string', 'Hashtag');
//   data.addColumn('number', 'Emerging on 2020-03-15');
//   data.addColumn('number', 'Ratio');
//   data.addRows([['covid', 18233, 2.11],
//   ['coronavirusupdates', 6692, 2.3],
//   ['coronavirusoutbreak', 2612, 3.9],
//   ['quedateentucasa', 1672, 2.81],
//   ['coronav', 1277, 3.01],
//   ['stayhome', 1149, 4.16],
//   ['coronapocolypse', 963, 32.1],
//   ['socialdistancing', 738, 2.07],
//   ['estevirusloparamosunidos', 702, 24.21],
//   ['coronavirusfrance', 643, 2.46],
//   ['saarc', 449, 11.82],
//   ['socialdistancingnow', 417, 6.62],
//   ['jimacosta', 417, 14.38],
//   ['pandemie', 385, 4.58],
//   ['per', 364, 3.25],
//   ['spain', 359, 2.3],
//   ['stayathome', 348, 3.31],
//   ['trumpplague', 338, 4.07],
//   ['municipales2020', 331, 2.21],
//   ['nationaldayofprayer', 331, 9.19],
//   ['covid19chile', 322, 7.32],
//   ['coronaviruspakistan', 322, 2.52],
//   ['coronavirusargentina', 304, 9.81],
//   ['panicshopping', 301, 12.54],
//   ['edouardphilippe', 290, 4.83],
//   ['embarazada', 269, 3.2],
//   ['municipale2020', 267, 4.85],
//   ['escudobolivarianoiii2020', 259, 10.36],
//   ['coronavirussa', 240, 5.71],
//   ['namaste', 225, 2.5],
//   ['vivelatino', 213, 3.55],
//   ['coronavirusenchile', 211, 7.54],
//   ['mequedoencasa', 201, 4.1],
//   ['mascherine', 195, 3.48],
//   ['president', 186, 6.2],
//   ['up', 170, 5.67],
//   ['israel', 162, 2.16],
//   ['suspendanlasclasesya', 162, 2.31],
//   ['coronavirusinsa', 155, 3.04],
//   ['indonesiabutuhpemimpin', 149, 2.76],
//   ['papafrancisco', 149, 5.32],
//   ['kashmir', 146, 4.87],
//   ['quedatencasa', 144, 2.29],
//   ['boristhebutcher', 143, 2.8],
//   ['staythefuckhome', 139, 2.11],
//   ['covid19nl', 134, 4.06],
//   ['coronavirusnl', 133, 3.32],
//   ['socialdistance', 127, 6.35],
//   ['coronavirusitaly', 126, 2.0],
//   ['coronavirusaustralia', 122, 2.39]]);

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



function drawChart_table3() {
  // Define the chart to be drawn.
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Hashtag');
  data.addColumn('number', 'New on 2020-03-15');
  data.addRows([['staythefhome', 601],
  ['coronaindia', 590],
  ['highriskcovid19', 541],
  ['nutrubberlemon', 414],
  ['bolsonaroday', 375],
  ['ultimominuto', 348],
  ['coronavirusenfrance', 263],
  ['dukungjokowibasmicorona', 245],
  ['cuarentenacoronavirus', 235],
  ['pompidou', 235],
  ['jagajarakdulu', 220],
  ['coranaturkiye', 192],
  ['awarenesstocombatcorona', 187],
  ['ume', 180],
  ['sundaythoughts', 172],
  ['latormentaperfecta', 160],
  ['restech', 157],
  ['lvmh', 157],
  ['covidcanada', 156],
  ['marr', 155],
  ['curevac', 152],
  ['ifightcorona', 144],
  ['sundaymorning', 142],
  ['iorestocasa', 140],
  ['cowurine', 138],
  ['canceltrump', 136],
  ['thingsyousaywhenyoucum', 133],
  ['maalesefpoz', 131],
  ['donald', 131],
  ['dailylie', 131],
  ['covid19colombia', 129],
  ['pazar', 126],
  ['lockusdown', 119],
  ['contedimettiti', 117],
  ['coronakatie', 114],
  ['cancelenclases', 111],
  ['malaysia', 110],
  ['shutdownnyc', 109],
  ['bencecorona', 108],
  ['westandwithitaly', 103],
  ['blanquer', 99],
  ['indonesianeedleader', 94],
  ['felizdomingo', 93],
  ['paisdepandereta', 92],
  ['jeniraipasvoter', 90],
  ['genx', 90],
  ['cristianoronaldo', 85],
  ['restezc', 83],
  ['irresponsables', 82],
  ['otyomequedoencasa', 81]]);

  var options = {
     showRowNumber: false,
     width: '80%', 
     height: '80%',
  };
        
  // Instantiate and draw the chart.
  var chart = new google.visualization.Table(document.getElementById('topk_new_hashtags'));
  chart.draw(data, options);
}
google.charts.setOnLoadCallback(drawChart_table3);




// CHART 2 STARTS HERE

google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {

    var data = google.visualization.arrayToDataTable(
      [['keywords', '2020-03-11', '2020-03-10', '2020-03-09'],
      ['virus', 0.29, 0.254, 0.236],
      ['corona', 0.23, 0.19, 0.201],
      ['people', 0.176, 0.232, 0.228],
      ['us', 0.149, 0.158, 0.128],
      ['cases', 0.141, 0.143, 0.138],
      ['trump', 0.119, 0.164, 0.187],
      ['dont', 0.117, 0.075, 0.081],
      ['health', 0.109, 0.089, 0.093],
      ['test', 0.106, 0.059, 0.047],
      ['take', 0.106, 0.043, 0.045],
      ['amp', 0.106, 0.104, 0.105],
      ['outbreak', 0.093, 0.101, 0.093],
      ['breaking', 0.092, 0.08, 0.088],
      ['new', 0.091, 0.102, 0.112],
      ['china', 0.09, 0.096, 0.076],
      ['due', 0.088, 0.085, 0.063],
      ['government', 0.088, 0.056, 0.04],
      ['cant', 0.085, 0.049, 0.04],
      ['italy', 0.084, 0.135, 0.136],
      ['1000', 0.077, 0.0, 0.024],
      ['pandemic', 0.077, 0.035, 0.046],
      ['go', 0.077, 0.056, 0.044],
      ['spread', 0.072, 0.101, 0.068],
      ['wont', 0.071, 0.027, 0.028],
      ['crisis', 0.071, 0.076, 0.053],
      ['time', 0.07, 0.08, 0.09],
      ['media', 0.068, 0.065, 0.068],
      ['ms', 0.067, 0.07, 0.049],
      ['work', 0.066, 0.06, 0.062],
      ['even', 0.066, 0.05, 0.041]]);

    var options = {
      title: 'Trendy keywords',
      chartArea: {width: '50%'},
      hAxis: {
        title: 'Weight',
        minValue: 0
      },
      vAxis: {
        title: 'List of keywords',
        textStyle: {
          fontSize: 14
        }
      }
    };
    var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}