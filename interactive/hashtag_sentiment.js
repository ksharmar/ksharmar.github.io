function draw_sentiment_socialdistancing() {
  // Define the chart to be drawn.
  var sentiment = [['Date', '+ Positive Sentiment', '- Negative Sentiment'],
 ['2020-03-09', 83, 17],
 ['2020-03-10', 64, 36],
 ['2020-03-11', 62, 38],
 ['2020-03-12', 62, 38],
 ['2020-03-13', 76, 24],
 ['2020-03-14', 7, 3],
 ['2020-03-15', 69, 31],
 ['2020-03-16', 69, 31],
 ['2020-03-17', 72, 28]];

  var data = google.visualization.arrayToDataTable(sentiment);
  var options = {title: 'Sentiment % (2020-03-09 - 2020-03-17)',
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
 ['2020-03-09', 100, 0],
 ['2020-03-10', 33, 67],
 ['2020-03-11', 63, 37],
 ['2020-03-12', 78, 22],
 ['2020-03-13', 78, 22],
 ['2020-03-14', 86, 14],
 ['2020-03-15', 85, 15],
 ['2020-03-16', 76, 24],
 ['2020-03-17', 78, 22]];
  var data = google.visualization.arrayToDataTable(sentiment);
  var options = {title: 'Sentiment % (2020-03-09 - 2020-03-17)',
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
