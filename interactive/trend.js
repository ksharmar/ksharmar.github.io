// drawLineChart1 : Top-K hashtags
// DEPRECATED: We use better LineChart
function drawLineChart1() {

  var data = new google.visualization.DataTable();
      data.addColumn('date', 'Day');
      data.addColumn('number', 'coronavirus');
      data.addColumn('number', 'covid19');
      data.addColumn('number', 'covid');
      data.addColumn('number', 'coronavirusoutbreak');
      data.addColumn('number', 'covid_19');
      data.addColumn('number', 'covid2019');
      data.addColumn('number', 'corona');
      data.addColumn('number', 'coronaviruspandemic');
      data.addColumn('number', 'coronapocalypse');
      data.addColumn('number', 'breaking');
      data.addColumn('number', 'china');
      data.addColumn('number', 'italy');
      data.addColumn('number', 'coronavirusupdates');
      data.addColumn('number', 'coronavirusupdate');
      data.addColumn('number', 'co');
      data.addColumn('number', 'wuhan');
      data.addColumn('number', 'trump');
      data.addColumn('number', 'coronaoutbreak');
      data.addColumn('number', 'iran');
      data.addColumn('number', 'italia');
      data.addColumn('number', 'yomequedoencasa');
      data.addColumn('number', 'coronav');
      data.addColumn('number', 'dontbeaspreader');
      data.addColumn('number', 'flattenthecurve');
      data.addColumn('number', 'cuba');
      data.addColumn('number', 'covid-19');
      data.addColumn('number', 'pandemic');
      data.addColumn('number', 'covid19france');
      data.addColumn('number', 'macron');
      data.addColumn('number', 'venezuela');
      data.addColumn('number', 'covi');
      data.addColumn('number', 'coronavid19');
      data.addColumn('number', 'pandemia');
      data.addColumn('number', 'coronavirusfrance');
      data.addColumn('number', 'coronavir');
      data.addColumn('number', 'virus');
      data.addColumn('number', 'coronavi');
      data.addColumn('number', 'quedateentucasa');
      data.addColumn('number', 'iorestoacasa');
      data.addColumn('number', 'cor');
      data.addColumn('number', 'coro');
      data.addColumn('number', 'coron');
      data.addColumn('number', 'socialdistancing');
      data.addColumn('number', 'cov');
      data.addColumn('number', 'coronapocolypse');
      data.addColumn('number', 'coronavirusitalia');
      data.addColumn('number', 'codvid19');
      data.addColumn('number', 'france');
      data.addColumn('number', 'espa');
      data.addColumn('number', 'wuhanvirus');

      // zero-based month
      data.addRows([
        [new Date(2020, 2, 9), 91660, 49389, 4873, 8537, 838, 9821, 2301, 26, 0, 2111, 1920,
          1912, 245, 887, 879, 794, 1107, 372, 1151, 848, 0, 580, 0, 184,
          336, 445, 424, 309, 357, 489, 158, 1552, 50, 453, 508, 517, 734,
          0, 1208, 372, 534, 440, 33, 299, 0, 770, 64, 293, 488, 802],
        [new Date(2020, 2, 10), 86237, 49981, 2728, 5028, 804, 8107, 2836, 0, 0, 1400, 1717,
          5814, 128, 1256, 719, 864, 1153, 184, 1079, 882, 0, 531, 0, 537,
          468, 370, 557, 889, 358, 477, 205, 908, 43, 244, 392, 584, 427,
          0, 972, 635, 557, 386, 41, 265, 0, 561, 239, 291, 404, 449],
        [new Date(2020, 2, 11), 87462, 67289, 2031, 2414, 1264, 2810, 5593, 46, 0, 1677, 1219,
          1445, 164, 2721, 680, 1046, 653, 270, 1152, 756, 0, 691, 0, 946,
          430, 406, 953, 505, 598, 164, 2313, 1051, 1873, 161, 466, 666,
          335, 0, 602, 317, 401, 370, 112, 510, 0, 493, 1292, 536, 292, 366],
        [new Date(2020, 2, 12), 65684, 51676, 1953, 1243, 5508, 970, 2304, 3769, 0, 1893, 1138,
          728, 69, 2278, 790, 461, 1095, 788, 650, 640, 299, 548, 0, 591,
          455, 423, 1262, 106, 839, 276, 516, 543, 1155, 115, 325, 307,
          214, 0, 275, 307, 370, 534, 212, 262, 0, 196, 1113, 229, 455, 365],
        [new Date(2020, 2, 13), 64598, 42575, 2151, 800, 9484, 989, 1922, 3858, 1793, 1581, 1617,
          537, 142, 2384, 712, 582, 837, 2129, 492, 664, 663, 546, 0, 476,
          301, 315, 478, 50, 447, 733, 254, 215, 393, 46, 351, 240, 416,
          78, 267, 363, 406, 437, 251, 307, 0, 194, 330, 227, 353, 484],
        [new Date(2020, 2, 14), 77838, 54223, 8637, 670, 7785, 832, 2216, 6986, 7671, 1310, 2686,
          918, 2910, 560, 834, 1990, 786, 1778, 508, 1111, 1241, 424, 0,
          715, 1246, 289, 409, 54, 389, 742, 328, 156, 271, 261, 428, 354,
          527, 596, 234, 621, 312, 410, 357, 821, 30, 865, 233, 599, 421, 308],
        [new Date(2020, 2, 15), 83336, 50520, 18233, 2612, 3192, 624, 2287, 1279, 5581, 2395,
          1718, 1195, 6692, 452, 919, 1066, 753, 630, 642, 641, 1426, 1277,
          0, 955, 701, 395, 398, 27, 272, 774, 359, 156, 215, 643, 680,
          695, 448, 1672, 186, 536, 396, 363, 738, 420, 963, 311, 119, 621, 518, 224],
        [new Date(2020, 2, 16), 86221, 59215, 10506, 8704, 2470, 1404, 2773, 711, 1113, 2407,
          1450, 719, 2430, 326, 992, 494, 634, 286, 520, 482, 728, 1002,
          2944, 907, 747, 557, 404, 941, 1227, 580, 367, 153, 260, 620,
          622, 347, 512, 1484, 150, 499, 520, 421, 962, 354, 2031, 165, 121, 430, 359, 153],
        [new Date(2020, 2, 17), 88814, 64330, 5462, 10557, 4139, 6472, 2758, 586, 416, 1310,
          1872, 525, 673, 248, 2502, 334, 543, 314, 553, 449, 2071, 696,
          3128, 755, 792, 2210, 446, 2221, 544, 726, 318, 72, 249, 1789,
          400, 441, 469, 231, 160, 392, 367, 480, 1056, 484, 696, 156, 115, 366, 301, 382],
      ]);

      var options = {
      //   chart: {
      //     title: 'Top-50 hashtags trend',
      //     subtitle: 'in the number of usage count',
      // },
        lineWidth: 10,
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
      var chartLineCount    = 10;
      var controlLineCount	= 10;


      function drawDashboard() {

        var data = new google.visualization.DataTable();

        data.addColumn('datetime' , 'Day');
        data.addColumn('number', 'coronavirus');
        data.addColumn('number', 'covid19');
        data.addColumn('number', 'covid');
        data.addColumn('number', 'coronavirusoutbreak');
        data.addColumn('number', 'covid_19');
        data.addColumn('number', 'covid2019');
        data.addColumn('number', 'corona');
        data.addColumn('number', 'coronaviruspandemic');
        data.addColumn('number', 'coronapocalypse');
        data.addColumn('number', 'breaking');
        data.addColumn('number', 'china');
        data.addColumn('number', 'italy');
        data.addColumn('number', 'coronavirusupdates');
        data.addColumn('number', 'coronavirusupdate');
        data.addColumn('number', 'co');
        data.addColumn('number', 'wuhan');
        data.addColumn('number', 'trump');
        data.addColumn('number', 'coronaoutbreak');
        data.addColumn('number', 'iran');
        data.addColumn('number', 'italia');
        data.addColumn('number', 'yomequedoencasa');
        data.addColumn('number', 'coronav');
        data.addColumn('number', 'dontbeaspreader');
        data.addColumn('number', 'flattenthecurve');
        data.addColumn('number', 'cuba');
        data.addColumn('number', 'covid-19');
        data.addColumn('number', 'pandemic');
        data.addColumn('number', 'covid19france');
        data.addColumn('number', 'macron');
        data.addColumn('number', 'venezuela');
        data.addColumn('number', 'covi');
        data.addColumn('number', 'coronavid19');
        data.addColumn('number', 'pandemia');
        data.addColumn('number', 'coronavirusfrance');
        data.addColumn('number', 'coronavir');
        data.addColumn('number', 'virus');
        data.addColumn('number', 'coronavi');
        data.addColumn('number', 'quedateentucasa');
        data.addColumn('number', 'iorestoacasa');
        data.addColumn('number', 'cor');
        data.addColumn('number', 'coro');
        data.addColumn('number', 'coron');
        data.addColumn('number', 'socialdistancing');
        data.addColumn('number', 'cov');
        data.addColumn('number', 'coronapocolypse');
        data.addColumn('number', 'coronavirusitalia');
        data.addColumn('number', 'codvid19');
        data.addColumn('number', 'france');
        data.addColumn('number', 'espa');
        data.addColumn('number', 'wuhanvirus');


        data.addRows([
          [new Date(2020, 2, 9), 91660, 49389, 4873, 8537, 838, 9821, 2301, 26, 0, 2111, 1920,
            1912, 245, 887, 879, 794, 1107, 372, 1151, 848, 0, 580, 0, 184,
            336, 445, 424, 309, 357, 489, 158, 1552, 50, 453, 508, 517, 734,
            0, 1208, 372, 534, 440, 33, 299, 0, 770, 64, 293, 488, 802],
          [new Date(2020, 2, 10), 86237, 49981, 2728, 5028, 804, 8107, 2836, 0, 0, 1400, 1717,
            5814, 128, 1256, 719, 864, 1153, 184, 1079, 882, 0, 531, 0, 537,
            468, 370, 557, 889, 358, 477, 205, 908, 43, 244, 392, 584, 427,
            0, 972, 635, 557, 386, 41, 265, 0, 561, 239, 291, 404, 449],
          [new Date(2020, 2, 11), 87462, 67289, 2031, 2414, 1264, 2810, 5593, 46, 0, 1677, 1219,
            1445, 164, 2721, 680, 1046, 653, 270, 1152, 756, 0, 691, 0, 946,
            430, 406, 953, 505, 598, 164, 2313, 1051, 1873, 161, 466, 666,
            335, 0, 602, 317, 401, 370, 112, 510, 0, 493, 1292, 536, 292, 366],
          [new Date(2020, 2, 12), 65684, 51676, 1953, 1243, 5508, 970, 2304, 3769, 0, 1893, 1138,
            728, 69, 2278, 790, 461, 1095, 788, 650, 640, 299, 548, 0, 591,
            455, 423, 1262, 106, 839, 276, 516, 543, 1155, 115, 325, 307,
            214, 0, 275, 307, 370, 534, 212, 262, 0, 196, 1113, 229, 455, 365],
          [new Date(2020, 2, 13), 64598, 42575, 2151, 800, 9484, 989, 1922, 3858, 1793, 1581, 1617,
            537, 142, 2384, 712, 582, 837, 2129, 492, 664, 663, 546, 0, 476,
            301, 315, 478, 50, 447, 733, 254, 215, 393, 46, 351, 240, 416,
            78, 267, 363, 406, 437, 251, 307, 0, 194, 330, 227, 353, 484],
          [new Date(2020, 2, 14), 77838, 54223, 8637, 670, 7785, 832, 2216, 6986, 7671, 1310, 2686,
            918, 2910, 560, 834, 1990, 786, 1778, 508, 1111, 1241, 424, 0,
            715, 1246, 289, 409, 54, 389, 742, 328, 156, 271, 261, 428, 354,
            527, 596, 234, 621, 312, 410, 357, 821, 30, 865, 233, 599, 421, 308],
          [new Date(2020, 2, 15), 83336, 50520, 18233, 2612, 3192, 624, 2287, 1279, 5581, 2395,
            1718, 1195, 6692, 452, 919, 1066, 753, 630, 642, 641, 1426, 1277,
            0, 955, 701, 395, 398, 27, 272, 774, 359, 156, 215, 643, 680,
            695, 448, 1672, 186, 536, 396, 363, 738, 420, 963, 311, 119, 621, 518, 224],
          [new Date(2020, 2, 16), 86221, 59215, 10506, 8704, 2470, 1404, 2773, 711, 1113, 2407,
            1450, 719, 2430, 326, 992, 494, 634, 286, 520, 482, 728, 1002,
            2944, 907, 747, 557, 404, 941, 1227, 580, 367, 153, 260, 620,
            622, 347, 512, 1484, 150, 499, 520, 421, 962, 354, 2031, 165, 121, 430, 359, 153],
          [new Date(2020, 2, 17), 88814, 64330, 5462, 10557, 4139, 6472, 2758, 586, 416, 1310,
            1872, 525, 673, 248, 2502, 334, 543, 314, 553, 449, 2071, 696,
            3128, 755, 792, 2210, 446, 2221, 544, 726, 318, 72, 249, 1789,
            400, 441, 469, 231, 160, 392, 367, 480, 1056, 484, 696, 156, 115, 366, 301, 382],
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
      var chartLineCount    = 10;
      var controlLineCount	= 10;


      function drawDashboard() {

        var data = new google.visualization.DataTable();

        data.addColumn('datetime' , 'Day');
        data.addColumn('number', 'covid');
        data.addColumn('number', 'covid19');
        data.addColumn('number', 'coronavirusupdates');
        data.addColumn('number', 'covid_19');
        data.addColumn('number', 'coronapocalypse');
        data.addColumn('number', 'dontbeaspreader');
        data.addColumn('number', 'coronavirusoutbreak');
        data.addColumn('number', 'yomequedoencasa');
        data.addColumn('number', 'coronapocolypse');
        data.addColumn('number', 'coronaviruspandemic');
        data.addColumn('number', 'quarantinelife');
        data.addColumn('number', 'quedateentucasa');
        data.addColumn('number', 'confinementtotal');
        data.addColumn('number', 'coronavirusenfrance');
        data.addColumn('number', 'socialdistancing');
        data.addColumn('number', 'co');
        data.addColumn('number', 'coronavirusfrance');
        data.addColumn('number', 'covid-19');
        data.addColumn('number', 'covid19france');
        data.addColumn('number', 'stayhome');
        data.addColumn('number', 'confinement');
        data.addColumn('number', 'cuarentenacoronavirus');
        data.addColumn('number', 'qu');
        data.addColumn('number', 'quedateencasa');
        data.addColumn('number', 'covid19malaysia');
        data.addColumn('number', 'shipsgoingdown');
        data.addColumn('number', 'rmstoiletpap');
        data.addColumn('number', 'stayhomechallenge');
        data.addColumn('number', 'restezchezvous');
        data.addColumn('number', 'cuba');


        data.addRows([
          [new Date(2020, 2, 9), 4873, 49389, 245, 838, 0, 0, 8537, 0, 0, 26, 0, 0, 0, 25, 33,
            879, 453, 445, 309, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 336],
          [new Date(2020, 2, 10), 2728, 49981, 128, 804, 0, 0, 5028, 0, 0, 0, 0, 0, 0, 0, 41, 719,
            244, 370, 889, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 468],
          [new Date(2020, 2, 11), 2031, 67289, 164, 1264, 0, 0, 2414, 0, 0, 46, 0, 0, 0, 0, 112,
            680, 161, 406, 505, 29, 0, 0, 0, 0, 0, 0, 0, 0, 0, 430],
          [new Date(2020, 2, 12), 1953, 51676, 69, 5508, 0, 0, 1243, 299, 0, 3769, 0, 0, 0, 17,
            212, 790, 115, 423, 106, 16, 0, 0, 63, 315, 0, 0, 0, 0, 0, 455],
          [new Date(2020, 2, 13), 2151, 42575, 142, 9484, 1793, 0, 800, 663, 0, 3858, 0, 78, 0, 0,
            251, 712, 46, 315, 50, 89, 223, 0, 187, 414, 0, 0, 0, 0, 0, 301],
          [new Date(2020, 2, 14), 8637, 54223, 2910, 7785, 7671, 0, 670, 1241, 30, 6986, 0, 596, 0,
            0, 357, 834, 261, 289, 54, 276, 440, 0, 268, 436, 0, 0, 0, 0, 307, 1246],
          [new Date(2020, 2, 15), 18233, 50520, 6692, 3192, 5581, 0, 2612, 1426, 963, 1279, 0,
            1672, 0, 263, 738, 919, 643, 395, 27, 1149, 530, 235, 409, 408, 0, 0, 0, 0, 585, 701],
          [new Date(2020, 2, 16), 10506, 59215, 2430, 2470, 1113, 2944, 8704, 728, 2031, 711, 1001,
            1484, 1303, 645, 962, 992, 620, 557, 941, 687, 835, 1483, 503, 569, 452, 47, 47, 32, 196, 747],
          [new Date(2020, 2, 17), 5462, 64330, 673, 4139, 416, 3128, 10557, 2071, 696, 586, 1748,
            231, 1271, 1598, 1056, 2502, 1789, 2210, 2221, 556, 643, 312, 702, 606, 923, 1144, 1144, 1108, 576, 792],
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
  data.addColumn('number', '2020-03-12');
  data.addColumn('number', '2020-03-11');
  data.addColumn('number', '2020-03-10');
  data.addColumn('number', '2020-03-09');
  data.addRows([
    ['coronavirus', 88814, 86221, 83336, 77838, 64598, 65684, 87462,
        86237, 91660],
       ['covid19', 64330, 59215, 50520, 54223, 42575, 51676, 67289,
        49981, 49389],
       ['covid', 5462, 10506, 18233, 8637, 2151, 1953, 2031, 2728, 4873],
       ['coronavirusoutbreak', 10557, 8704, 2612, 670, 800, 1243, 2414,
        5028, 8537],
       ['covid_19', 4139, 2470, 3192, 7785, 9484, 5508, 1264, 804, 838],
       ['covid2019', 6472, 1404, 624, 832, 989, 970, 2810, 8107, 9821],
       ['corona', 2758, 2773, 2287, 2216, 1922, 2304, 5593, 2836, 2301],
       ['coronaviruspandemic', 586, 711, 1279, 6986, 3858, 3769, 46, 0,
        26],
       ['coronapocalypse', 416, 1113, 5581, 7671, 1793, 0, 0, 0, 0],
       ['breaking', 1310, 2407, 2395, 1310, 1581, 1893, 1677, 1400, 2111],
       ['china', 1872, 1450, 1718, 2686, 1617, 1138, 1219, 1717, 1920],
       ['italy', 525, 719, 1195, 918, 537, 728, 1445, 5814, 1912],
       ['coronavirusupdates', 673, 2430, 6692, 2910, 142, 69, 164, 128,
        245],
       ['coronavirusupdate', 248, 326, 452, 560, 2384, 2278, 2721, 1256,
        887],
       ['co', 2502, 992, 919, 834, 712, 790, 680, 719, 879],
       ['wuhan', 334, 494, 1066, 1990, 582, 461, 1046, 864, 794],
       ['trump', 543, 634, 753, 786, 837, 1095, 653, 1153, 1107],
       ['coronaoutbreak', 314, 286, 630, 1778, 2129, 788, 270, 184, 372],
       ['iran', 553, 520, 642, 508, 492, 650, 1152, 1079, 1151],
       ['italia', 449, 482, 641, 1111, 664, 640, 756, 882, 848],
       ['yomequedoencasa', 2071, 728, 1426, 1241, 663, 299, 0, 0, 0],
       ['coronav', 696, 1002, 1277, 424, 546, 548, 691, 531, 580],
       ['dontbeaspreader', 3128, 2944, 0, 0, 0, 0, 0, 0, 0],
       ['flattenthecurve', 755, 907, 955, 715, 476, 591, 946, 537, 184],
       ['cuba', 792, 747, 701, 1246, 301, 455, 430, 468, 336],
       ['covid-19', 2210, 557, 395, 289, 315, 423, 406, 370, 445],
       ['pandemic', 446, 404, 398, 409, 478, 1262, 953, 557, 424],
       ['covid19france', 2221, 941, 27, 54, 50, 106, 505, 889, 309],
       ['macron', 544, 1227, 272, 389, 447, 839, 598, 358, 357],
       ['venezuela', 726, 580, 774, 742, 733, 276, 164, 477, 489],
       ['covi', 318, 367, 359, 328, 254, 516, 2313, 205, 158],
       ['coronavid19', 72, 153, 156, 156, 215, 543, 1051, 908, 1552],
       ['pandemia', 249, 260, 215, 271, 393, 1155, 1873, 43, 50],
       ['coronavirusfrance', 1789, 620, 643, 261, 46, 115, 161, 244, 453],
       ['coronavir', 400, 622, 680, 428, 351, 325, 466, 392, 508],
       ['virus', 441, 347, 695, 354, 240, 307, 666, 584, 517],
       ['coronavi', 469, 512, 448, 527, 416, 214, 335, 427, 734],
       ['quedateentucasa', 231, 1484, 1672, 596, 78, 0, 0, 0, 0],
       ['iorestoacasa', 160, 150, 186, 234, 267, 275, 602, 972, 1208],
       ['cor', 392, 499, 536, 621, 363, 307, 317, 635, 372],
       ['coro', 367, 520, 396, 312, 406, 370, 401, 557, 534],
       ['coron', 480, 421, 363, 410, 437, 534, 370, 386, 440],
       ['socialdistancing', 1056, 962, 738, 357, 251, 212, 112, 41, 33],
       ['cov', 484, 354, 420, 821, 307, 262, 510, 265, 299],
       ['coronapocolypse', 696, 2031, 963, 30, 0, 0, 0, 0, 0],
       ['coronavirusitalia', 156, 165, 311, 865, 194, 196, 493, 561, 770],
       ['codvid19', 115, 121, 119, 233, 330, 1113, 1292, 239, 64],
       ['france', 366, 430, 621, 599, 227, 229, 536, 291, 293],
       ['espa', 301, 359, 518, 421, 353, 455, 292, 404, 488],
       ['wuhanvirus', 382, 153, 224, 308, 484, 365, 366, 449, 802]
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
  data.addColumn('number', '2020-03-12');
  data.addColumn('number', '2020-03-11');
  data.addColumn('number', '2020-03-10');
  data.addColumn('number', '2020-03-09');
  data.addColumn('number', 'Slope');
  data.addRows([
    ['covid', 5462, 10506, 18233, 8637, 2151, 1953, 2031, 2728, 4873,
        1079.63],
       ['covid19', 64330, 59215, 50520, 54223, 42575, 51676, 67289,
        49981, 49389, 941.25],
       ['coronavirusupdates', 673, 2430, 6692, 2910, 142, 69, 164, 128,
        245, 408.58],
       ['covid_19', 4139, 2470, 3192, 7785, 9484, 5508, 1264, 804, 838,
        405.58],
       ['coronapocalypse', 416, 1113, 5581, 7671, 1793, 0, 0, 0, 0,
        397.27],
       ['dontbeaspreader', 3128, 2944, 0, 0, 0, 0, 0, 0, 0, 355.73],
       ['coronavirusoutbreak', 10557, 8704, 2612, 670, 800, 1243, 2414,
        5028, 8537, 315.52],
       ['yomequedoencasa', 2071, 728, 1426, 1241, 663, 299, 0, 0, 0,
        237.7],
       ['coronapocolypse', 696, 2031, 963, 30, 0, 0, 0, 0, 0, 180.55],
       ['coronaviruspandemic', 586, 711, 1279, 6986, 3858, 3769, 46, 0,
        26, 167.6],
       ['quarantinelife', 1748, 1001, 0, 0, 0, 0, 0, 0, 0, 166.58],
       ['quedateentucasa', 231, 1484, 1672, 596, 78, 0, 0, 0, 0, 155.27],
       ['confinementtotal', 1271, 1303, 0, 0, 0, 0, 0, 0, 0, 149.88],
       ['coronavirusenfrance', 1598, 645, 263, 0, 0, 17, 0, 0, 25, 145.6],
       ['socialdistancing', 1056, 962, 738, 357, 251, 212, 112, 41, 33,
        137.53],
       ['co', 2502, 992, 919, 834, 712, 790, 680, 719, 879, 130.55],
       ['coronavirusfrance', 1789, 620, 643, 261, 46, 115, 161, 244, 453,
        126.37],
       ['covid-19', 2210, 557, 395, 289, 315, 423, 406, 370, 445, 124.42],
       ['covid19france', 2221, 941, 27, 54, 50, 106, 505, 889, 309,
        113.27],
       ['stayhome', 556, 687, 1149, 276, 89, 16, 29, 21, 0, 112.03],
       ['confinement', 643, 835, 530, 440, 223, 0, 0, 0, 0, 109.62],
       ['cuarentenacoronavirus', 312, 1483, 235, 0, 0, 0, 0, 0, 0,
        102.78],
       ['qu', 702, 503, 409, 268, 187, 63, 0, 0, 0, 89.0],
       ['quedateencasa', 606, 569, 408, 436, 414, 315, 0, 0, 0, 84.47],
       ['covid19malaysia', 923, 452, 0, 0, 0, 0, 0, 0, 0, 84.13],
       ['shipsgoingdown', 1144, 47, 0, 0, 0, 0, 0, 0, 0, 78.62],
       ['rmstoiletpap', 1144, 47, 0, 0, 0, 0, 0, 0, 0, 78.62],
       ['stayhomechallenge', 1108, 32, 0, 0, 0, 0, 0, 0, 0, 75.47],
       ['restezchezvous', 576, 196, 585, 307, 0, 0, 0, 0, 0, 72.82],
       ['cuba', 792, 747, 701, 1246, 301, 455, 430, 468, 336, 66.57]]);

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