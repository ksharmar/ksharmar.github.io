function draw_sentiment_socialdistancing() {
  // Define the chart to be drawn.
  var sentiment = [['Date', '+ Positive Sentiment', '- Negative Sentiment'],
['2020-03-22', 70.84, 29.16],
['2020-03-23', 66.09, 33.91],
['2020-03-24', 68.99, 31.01],
['2020-03-25', 69.22, 30.78],
['2020-03-26', 74.37, 25.63],
['2020-03-27', 71.47, 28.53],
['2020-03-28', 70.83, 29.17],
['2020-03-29', 73.01, 26.99],
['2020-03-30', 66.12, 33.88]
];

  var data = google.visualization.arrayToDataTable(sentiment);
  var options = {title: 'Sentiment % (2020-03-22 - 2020-03-30)',
                 isStacked:false,
                 chartArea:{left:60,top:30,width:"300px",height:"250px"},
                 height: 350,
                 width: 500,
                 vAxis: {
                   viewWindow: {
                       min: 0,
                       max: 100
                   },
                 }
               };
  // Instantiate and draw the chart.
  var chart = new google.visualization.ColumnChart(document.getElementById('sentiment_socialdistancing_plot'));
  chart.draw(data, options);
}
google.charts.setOnLoadCallback(draw_sentiment_socialdistancing);


function draw_sentiment_workfromhome() {
  // Define the chart to be drawn.
  var sentiment = [['Date', '+ Positive Sentiment', '- Negative Sentiment'],
  ['2020-03-22', 80.12, 19.88],
  ['2020-03-23', 70.32, 29.68],
  ['2020-03-24', 67.15, 32.85],
  ['2020-03-25', 77.71, 22.29],
  ['2020-03-26', 75.67, 24.33],
  ['2020-03-27', 73.72, 26.28],
  ['2020-03-28', 84.32, 15.68],
  ['2020-03-29', 67.88, 32.12],
  ['2020-03-30', 78.01, 21.99]]
  var data = google.visualization.arrayToDataTable(sentiment);
  var options = {title: 'Sentiment % (2020-03-22 - 2020-03-30)',
                isStacked:false,
                chartArea:{left:60,top:30,width:"300px",height:"250px"},
                height: 350,
                width: 500,
                vAxis: {
                  viewWindow: {
                      min: 0,
                      max: 100
                  },
                }
              };
  // Instantiate and draw the chart.
  var chart = new google.visualization.ColumnChart(document.getElementById('sentiment_workfromhome_plot'));
  chart.draw(data, options);
}
google.charts.setOnLoadCallback(draw_sentiment_workfromhome);


 // function show_sentiment_chart() {
 //     alert('show')
 //     // document.getElementById('').innerHTML = "Click map for sentiment. Map color intensity reflects positive <br/> to negative sentiment ratio. <br/><br/><p class='lead'>" + region + "<br/>";
 //     // document.getElementById('country_sentiments_desc').innerHTML = "Click map for sentiment. Map color intensity reflects positive <br/> to negative sentiment ratio. <br/><br/><p class='lead'>" + region + "<br/>";
 //     // draw_sentiment(region);
 // }
