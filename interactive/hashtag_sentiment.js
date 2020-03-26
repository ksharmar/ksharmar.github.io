function draw_sentiment_socialdistancing() {
  // Define the chart to be drawn.
  var data = google.visualization.arrayToDataTable(_sentiment_data(region));
  var options = {title: 'Sentiment % (2020-03-09 - 2020-03-17)',
                 isStacked:false,
                 chartArea:{left:60,top:30,width:"300px",height:"250px"},
                 height: 350,
                 width: 500
               };
  // Instantiate and draw the chart.
  var chart = new google.visualization.ColumnChart(document.getElementById('country_sentiments'));
  chart.draw(data, options);
}
google.charts.setOnLoadCallback(draw_sentiment_socialdistancing);


function draw_sentiment_workfromhome() {
  // Define the chart to be drawn.
  var sentiment = 
  var data = google.visualization.arrayToDataTable(sentiment);
  var options = {title: 'Sentiment % (2020-03-09 - 2020-03-17)',
                isStacked:false,
                chartArea:{left:60,top:30,width:"300px",height:"250px"},
                height: 350,
                width: 500
              };
  // Instantiate and draw the chart.
  var chart = new google.visualization.ColumnChart(document.getElementById('country_sentiments'));
  chart.draw(data, options);
}
google.charts.setOnLoadCallback(draw_sentiment_workfromhome);


 // function show_sentiment_chart() {
 //     alert('show')
 //     // document.getElementById('').innerHTML = "Click map for sentiment. Map color intensity reflects positive <br/> to negative sentiment ratio. <br/><br/><p class='lead'>" + region + "<br/>";
 //     // document.getElementById('country_sentiments_desc').innerHTML = "Click map for sentiment. Map color intensity reflects positive <br/> to negative sentiment ratio. <br/><br/><p class='lead'>" + region + "<br/>";
 //     // draw_sentiment(region);
 // }
