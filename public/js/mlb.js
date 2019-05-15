$(function () {
    //Sportradar API GET
    var queryURL = "https://chriscastle.com/proxy/index.php?:proxy:http://api.sportradar.us/mlb/trial/v6.5/en/seasons/2019/REG/standings.json?api_key=j63rqup5ae67wc48658t78k4"

    $.ajax({
      dataType: "JSON",
      contentType: 'application/json',
      url: queryURL,
      method: "GET"
    })
      .then(function (response) {

        var tBody = $("tbody");
        var tRow = $("<tr>");



        //Get all the number of leagues in MLB
        var leagues = response.league.season.leagues;
        // for (l = 0; l < leagues.length; l++) {
        //   console.log("League Name: " + leagues[0].name);
        leagueResults = $("<tr><th colspan='5'>" + leagues[0].name + "</tr></th>")
        $(".national").append(leagueResults);
        //Get all the divisions in each league in MLB
        var divisions = response.league.season.leagues[0].divisions
        for (d = 0; d < divisions.length; d++) {
          console.log("Divisions: " + divisions[d].name);
          var divisionResults = $("<tr><th>" + divisions[d].name + "</th>" + "<th>" + "Win" + "</th>" + "<th>" + "Loss" + "</th>" + "<th>" + "Win %" + "</th>" + "<th>" + "GB" + "</tr></th>")
          $(".national").append(divisionResults);
          //Get all the teams in a division in each league in MLB
          var teams = response.league.season.leagues[0].divisions[d].teams
          for (t = 0; t < teams.length; t++) {
            console.log("Teams: " + teams[t].name + " Wins: " + teams[t].win + " Losses: " + teams[t].loss + " Win Percentage: " + teams[t].win_p + " Games Back: " + teams[t].games_back)
            var teamResults = $("<tr><td>" + teams[t].name + "</td>" + "<td>" + teams[t].win + "</td>" + "<td>" + teams[t].loss + "</td>" + "<td>" + teams[t].win_p + "<td>" + teams[t].games_back + "</td></tr>");
            $(".national").append(teamResults);
          };

          // }
        }

         //Get all the number of leagues in MLB
         var leagues = response.league.season.leagues;
        // for (l = 0; l < leagues.length; l++) {
        //   console.log("League Name: " + leagues[0].name);
        leagueResults = $("<tr><th colspan='5'>" + leagues[1].name + "</tr></th>")
        $(".american").append(leagueResults);
        //Get all the divisions in each league in MLB
        var divisions = response.league.season.leagues[1].divisions
        for (d = 0; d < divisions.length; d++) {
          console.log("Divisions: " + divisions[d].name);
          var divisionResults = $("<tr><th>" + divisions[d].name + "</th>" + "<th>" + "Win" + "</th>" + "<th>" + "Loss" + "</th>" + "<th>" + "Win %" + "</th>" + "<th>" + "GB" + "</tr></th>")
          $(".american").append(divisionResults);
          //Get all the teams in a division in each league in MLB
          var teams = response.league.season.leagues[1].divisions[d].teams
          for (t = 0; t < teams.length; t++) {
            console.log("Teams: " + teams[t].name + " Wins: " + teams[t].win + " Losses: " + teams[t].loss + " Win Percentage: " + teams[t].win_p + " GB: " + teams[t].games_back)
            var teamResults = $("<tr><td>" + teams[t].name + "</td>" + "<td>" + teams[t].win + "</td>" + "<td>" + teams[t].loss + "</td>" + "<td>" + teams[t].win_p + "<td>" + teams[t].games_back + "</td></tr>");
            $(".american").append(teamResults);
          };

          // }
        }

      });

  });