// CHART 1 STARTS HERE
// drawLineChart1 : Top-K hashtags
google.charts.setOnLoadCallback(drawLineChart1);

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
       title: 'Top-50 hashtags trend of daily usage counts',
        hAxis: {
          format: "MMM d",
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





function drawChart_table() {
  // Define the chart to be drawn.
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Hashtag');
  data.addColumn('number', '2020-03-15');
  data.addColumn('number', '2020-03-14');
  data.addRows([['coronavirus', 83336, 77838],
  ['covid19', 50520, 54223],
  ['covid', 18233, 8637],
  ['coronavirusupdates', 6692, 2910],
  ['coronapocalypse', 5581, 7671],
  ['covid_19', 3192, 7785],
  ['coronavirusoutbreak', 2612, 670],
  ['breaking', 2395, 1310],
  ['corona', 2287, 2216],
  ['china', 1718, 2686],
  ['quedateentucasa', 1672, 596],
  ['yomequedoencasa', 1426, 1241],
  ['coronaviruspandemic', 1279, 6986],
  ['coronav', 1277, 424],
  ['italy', 1195, 918],
  ['stayhome', 1149, 276],
  ['wuhan', 1066, 1990],
  ['coronapocolypse', 963, 30],
  ['flattenthecurve', 955, 715],
  ['co', 919, 834],
  ['venezuela', 774, 742],
  ['trump', 753, 786],
  ['socialdistancing', 738, 357],
  ['estevirusloparamosunidos', 702, 29],
  ['cuba', 701, 1246],
  ['virus', 695, 354],
  ['coronavir', 680, 428],
  ['coronavirusfrance', 643, 261],
  ['iran', 642, 508],
  ['italia', 641, 1111],
  ['coronaoutbreak', 630, 1778],
  ['covid2019', 624, 832],
  ['france', 621, 599],
  ['staythefhome', 601, 0],
  ['paris', 597, 418],
  ['coronaindia', 590, 0],
  ['restezchezvous', 585, 307],
  ['highriskcovid19', 541, 0],
  ['cor', 536, 621],
  ['confinement', 530, 440],
  ['espa', 518, 421],
  ['urgente', 496, 261],
  ['coronavirusupdate', 452, 560],
  ['saarc', 449, 38],
  ['coronavi', 448, 527],
  ['lockdownindonesia', 434, 694],
  ['cov', 420, 821],
  ['socialdistancingnow', 417, 63],
  ['jimacosta', 417, 29],
  ['nutrubberlemon', 414, 0]]);

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


function drawChart_table2() {
  // Define the chart to be drawn.
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Hashtag');
  data.addColumn('number', 'Emerging on 2020-03-15');
  data.addColumn('number', 'Ratio');
  data.addRows([['covid', 18233, 2.11],
  ['coronavirusupdates', 6692, 2.3],
  ['coronavirusoutbreak', 2612, 3.9],
  ['quedateentucasa', 1672, 2.81],
  ['coronav', 1277, 3.01],
  ['stayhome', 1149, 4.16],
  ['coronapocolypse', 963, 32.1],
  ['socialdistancing', 738, 2.07],
  ['estevirusloparamosunidos', 702, 24.21],
  ['coronavirusfrance', 643, 2.46],
  ['saarc', 449, 11.82],
  ['socialdistancingnow', 417, 6.62],
  ['jimacosta', 417, 14.38],
  ['pandemie', 385, 4.58],
  ['per', 364, 3.25],
  ['spain', 359, 2.3],
  ['stayathome', 348, 3.31],
  ['trumpplague', 338, 4.07],
  ['municipales2020', 331, 2.21],
  ['nationaldayofprayer', 331, 9.19],
  ['covid19chile', 322, 7.32],
  ['coronaviruspakistan', 322, 2.52],
  ['coronavirusargentina', 304, 9.81],
  ['panicshopping', 301, 12.54],
  ['edouardphilippe', 290, 4.83],
  ['embarazada', 269, 3.2],
  ['municipale2020', 267, 4.85],
  ['escudobolivarianoiii2020', 259, 10.36],
  ['coronavirussa', 240, 5.71],
  ['namaste', 225, 2.5],
  ['vivelatino', 213, 3.55],
  ['coronavirusenchile', 211, 7.54],
  ['mequedoencasa', 201, 4.1],
  ['mascherine', 195, 3.48],
  ['president', 186, 6.2],
  ['up', 170, 5.67],
  ['israel', 162, 2.16],
  ['suspendanlasclasesya', 162, 2.31],
  ['coronavirusinsa', 155, 3.04],
  ['indonesiabutuhpemimpin', 149, 2.76],
  ['papafrancisco', 149, 5.32],
  ['kashmir', 146, 4.87],
  ['quedatencasa', 144, 2.29],
  ['boristhebutcher', 143, 2.8],
  ['staythefuckhome', 139, 2.11],
  ['covid19nl', 134, 4.06],
  ['coronavirusnl', 133, 3.32],
  ['socialdistance', 127, 6.35],
  ['coronavirusitaly', 126, 2.0],
  ['coronavirusaustralia', 122, 2.39]]);

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
