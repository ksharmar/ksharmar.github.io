    var map = new Datamap({
        scope: 'world',
        element: document.getElementById('container1'),
        projection: 'mercator',
        height: 450,

        //@KS :  fill this with the color scheme for the number of tweets Unless we want a black map

        fills: {
          defaultFill: '#f0af0a',
          lt50: 'rgba(0,244,244,0.9)',
          gt50: 'red'
        },
        

        // @KS : fill this with the number of tweets of every country -- that will help to populate colors 
        data: {
          USA: {fillKey: 'lt50' },
          RUS: {fillKey: 'lt50' },
          CAN: {fillKey: 'lt50' },
          BRA: {fillKey: 'gt50' },
          ARG: {fillKey: 'gt50'},
          COL: {fillKey: 'gt50' },
          AUS: {fillKey: 'gt50' },
          ZAF: {fillKey: 'gt50' },
          MAD: {fillKey: 'gt50' }       
        },

        done: function(datamap) {
            datamap.svg.selectAll('.datamaps-subunit').on('click', function(geography) {
                // alert(geography.properties.name);
                // alert(geography.id);
                var g = geography.properties.name;
                showtext(g)
                screen.value = g;
            });
        }
    });


function showtext(name){
  // document.write(name)
  var screen  = document.getElementById('screen1');
  screen1.value = name+ " sentiment analysis";// content below this.";

  var screen  = document.getElementById('screen2');
  screen2.value = name+ " Popular hashtag";// content below this.";

  var screen  = document.getElementById('screen3');
  screen3.value = name+ " wordcloud"; // for emerging hash-tags content below this.";

  var screen  = document.getElementById('screen4');
  screen4.value = name+ " misinfo tweets"; // content below this.";

  var screen  = document.getElementById('screen5');
  screen5.value = name+ " Hashtag_sentiment";// content below this.";  
}

