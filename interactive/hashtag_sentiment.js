function draw_sentiment_socialdistancing() {
  // Define the chart to be drawn.
  var sentiment = [['Date', '+ Positive Sentiment', '- Negative Sentiment'],
 ['2020-03-09', 0.83, 0.17],
 ['2020-03-10', 0.64, 0.36],
 ['2020-03-11', 0.62, 0.38],
 ['2020-03-12', 0.62, 0.38],
 ['2020-03-13', 0.76, 0.24],
 ['2020-03-14', 0.7, 0.3],
 ['2020-03-15', 0.69, 0.31],
 ['2020-03-16', 0.69, 0.31],
 ['2020-03-17', 0.72, 0.28]];

  var data = google.visualization.arrayToDataTable(sentiment);
  var options = {title: 'Sentiment % (2020-03-09 - 2020-03-17)',
                 isStacked:false,
                 chartArea:{left:60,top:30,width:"300px",height:"250px"},
                 height: 350,
                 width: 500
               };
  // Instantiate and draw the chart.
  var chart = new google.visualization.ColumnChart(document.getElementById('sentiment_socialdistancing_plot'));
  chart.draw(data, options);
}
google.charts.setOnLoadCallback(draw_sentiment_socialdistancing);


function draw_sentiment_workfromhome() {
  // Define the chart to be drawn.
  var sentiment = [['Date', '+ Positive Sentiment', '- Negative Sentiment'],
 ['2020-03-09', 1.0, 0.0],
 ['2020-03-10', 0.33, 0.67],
 ['2020-03-11', 0.63, 0.37],
 ['2020-03-12', 0.78, 0.22],
 ['2020-03-13', 0.78, 0.22],
 ['2020-03-14', 0.86, 0.14],
 ['2020-03-15', 0.85, 0.15],
 ['2020-03-16', 0.76, 0.24],
 ['2020-03-17', 0.78, 0.22]];
  var data = google.visualization.arrayToDataTable(sentiment);
  var options = {title: 'Sentiment % (2020-03-09 - 2020-03-17)',
                isStacked:false,
                chartArea:{left:60,top:30,width:"300px",height:"250px"},
                height: 350,
                width: 500
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
