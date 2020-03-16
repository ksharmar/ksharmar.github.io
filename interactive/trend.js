// CHART 1 STARTS HERE

// google.charts.load('current', {'packages':['corechart']});
// google.charts.load('current', {'packages':['table']});
google.charts.setOnLoadCallback(drawChart1);

function drawChart1() {

  var oldData = google.visualization.arrayToDataTable([['usernames', '2020-03-14'],
            ['NicholsUprising', 5948],
            ['HtownBabyG', 5450],
            ['_theghettomonk', 4355],
            ['elkhalifag', 4273],
            ['TheyLoveDjJigga', 4149],
            ['BoBundyy', 3569],
            ['QHaRi', 3290],
            ['xoxotmdxoxo', 3233],
            ['hyejoohobi', 3093],
            ['Still_Bourgeois', 2880],
            ['Y2SHAF', 2743],
            ['EchoXrayMusic', 2665],
            ['redfishstream', 2602],
            ['realDonaldTrump', 2530],
            ['kiaudn', 2427],
            ['djdommb', 2415],
            ['ReadToriko', 2364],
            ['fmagsl', 2224],
            ['KenichiAL', 2115],
            ['EdwardTHardy', 2095]]);

  var newData = google.visualization.arrayToDataTable([['usernames', '2020-03-15'],
            ['micheljessica_', 8949],
            ['jovronavirus', 5089],
            ['LBGEEVEE', 3045],
            ['djdommb', 2956],
            ['thacondition', 2955],
            ['MrDre_', 2764],
            ['BarackObama', 2633],
            ['Conflits_FR', 2513],
            ['tyrathetaurus', 2377],
            ['tytfn0901', 2222],
            ['elkhalifag', 2163],
            ['edwardsuhadi', 2001],
            ['auronplay', 1912],
            ['AdamantxYves', 1886],
            ['DatBadBRi', 1818],
            ['sophthorntonn', 1779],
            ['shortshitmax', 1726],
            ['loxwtf', 1711],
            ['bang_bar0n', 1673],
            ['realDonaldTrump', 1556]]);

  var options_old = {
    title: 'Top Twitter usernames most retweeted, 2020-03-14'
  };

  var options_new = {
    title: 'Top Twitter usernames most retweeted, 2020-03-15'
  };

  // var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  // var chartBefore = new google.visualization.PieChart(document.getElementById('piechart_before'));
  var chartAfter = new google.visualization.PieChart(document.getElementById('piechart_after'));
  // var chartDiff = new google.visualization.PieChart(document.getElementById('piechart_diff'));
  // var diffData = chartDiff.computeDiff(oldData, newData);

  // chart.draw(odata, options);
  // chartBefore.draw(oldData, options_old);
  chartAfter.draw(newData, options_new);
  // chartDiff.draw(diffData, options);
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