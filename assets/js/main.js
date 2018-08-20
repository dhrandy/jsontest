$.getJSON(
    "http://www.randy-gentry.com/jsontest/assets/json/tracks.json",
    function(data) {

      // console.log(data)

      var trackInfo = $("#track")

      var i = 0;

      for (i=0; i<10; i++) {
        var track = $('<td>').text(data.tracks[i].track);
        var location = $('<td>').text(data.tracks[i].location);
        var date = $('<td>').text(data.tracks[i].date);
        var border = $('<hr>')
        var row = $('<tr>');

        row.append(row, track, location, date);
        trackInfo.append(row);

        // console.log("track= " + data.tracks[0].track );

      };
      
    }
);
