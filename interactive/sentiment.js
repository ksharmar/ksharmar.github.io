// function mydrawChart() {
//   // Define the chart to be drawn.
//   var data = google.visualization.arrayToDataTable([
//      ['Year', 'Asia', 'Europe'],
//      ['2012',  900,      390],
//      ['2013',  1000,      400],
//      ['2014',  1170,      440],
//      ['2015',  1250,       480],
//      ['2016',  1530,      540]
//   ]);
//
//   var options = {title: 'Population (in millions)', isStacked:true};
//
//   // Instantiate and draw the chart.
//   var chart = new google.visualization.BarChart(document.getElementById('country_sentiments'));
//   chart.draw(data, options);
//  }

 function show_myplot() {
     // google.charts.load('current', {'packages':['corechart']});
     // mydrawChart();
 }

 export {show_myplot, mydrawChart};
