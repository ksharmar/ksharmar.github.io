       //basic map config with custom fills, mercator projection
  map = new Datamap({
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
        }
        // ,

//  start of the map here
        // done: function(map) {
          // map.svg.selectAll('.datamaps-subunit').on('click', function(geo) {
            // var localData = map.options.data[geo.id]
            // document.write (localData)

//            if (localData) {
//              load(Tweets(localData))       
            // }
          // })
        // }
// <!-- End of map here  -->

      })
