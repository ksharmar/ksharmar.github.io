// CHART 1 STARTS HERE

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart1);

function drawChart1() {

  var oldData = google.visualization.arrayToDataTable([['usernames', '2020-03-10'],
            ['__ariannalp', 4521],
            ['labisbeticah', 4509],
            ['iatemuggles', 3882],
            ['humanworkplace', 3667],
            ['winyeemichelle', 3528],
            ['ReturnsGrinch', 3442],
            ['realDonaldTrump', 3268],
            ['leppuccino', 3163],
            ['Nyscalo', 3063],
            ['OfficiallyAlly', 3000],
            ['hengsuaycountry', 2849],
            ['TheJSpence', 2801],
            ['SweeneyABC', 2456],
            ['uhhhsalty', 2450],
            ['chloerxbecca', 2394],
            ['kidmanscill', 2383],
            ['telushk', 2172],
            ['BernieSanders', 2112],
            ['Conflits_FR', 1944],
            ['keywilliamss', 1935]]);

  var newData = google.visualization.arrayToDataTable([['usernames', '2020-03-11'],
            ['tastefullytayy', 8599],
            ['VL0ko', 7817],
            ['the_real_bnell', 4854],
            ['yvescloudedcat', 4664],
            ['realDonaldTrump', 4619],
            ['JardinTaylor', 4558],
            ['WHO', 4382],
            ['kidmanscill', 3977],
            ['tedlieu', 3732],
            ['spectatorindex', 3477],
            ['Disneyland2go', 3388],
            ['fohmilton', 3095],
            ['ByMikeBaker', 2993],
            ['thisisjustaride', 2882],
            ['Lou16em', 2849],
            ['_AyeeCarlos_', 2716],
            ['Conflits_FR', 2645],
            ['rudeboy_junda', 2378],
            ['PlAClD_', 2360],
            ['seannphorn', 2081]]);

  var options_old = {
    title: 'Top Twitter usernames most retweeted, 2020-03-10'
  };

  var options_new = {
    title: 'Top Twitter usernames most retweeted, 2020-03-11'
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