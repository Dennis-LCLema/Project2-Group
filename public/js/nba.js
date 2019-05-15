
var queryURL1 = "https://chriscastle.com/proxy/index.php?:proxy:http://api.sportradar.us/nba/trial/v5/en/seasons/2018/REG/standings.json?api_key=5ubv273hyr24v59j5c8sq3gn"

$.ajax({
    dataType: "JSON",
    contentType: 'application/json',
    url: queryURL1,
    method: "GET"
})
    .then(function (response) {

        var tBody = $("tbody");
        var tRow = $("<tr>");

        //Get all the number of conferences in NBA
        var conferences = response.conferences;
        // for (l = 0; l < leagues.length; l++) {
        //   console.log("League Name: " + leagues[0].name);
        conferenceResult = $("<tr><th colspan='5'>" + conferences[0].name + "</tr></th>")
        $(".american").append(conferenceResult);
        //Get all the divisions in each league in NBA
        var divisions = response.conferences[0].divisions
        for (d = 0; d < divisions.length; d++) {
            console.log("Divisions: " + divisions[d].name);
            var divisionResults = $("<tr><th>" + divisions[d].name + "</th>" + "<th>" + "Win" + "</th>" + "<th>" + "Loss" + "</th>" + "<th>" + "Win %" + "</th>" + "<th>" + "Games Behind" + "</tr></th>")
            $(".american").append(divisionResults);
            //Get all the teams in a division in each league in NBA
            var teams = response.conferences[0].divisions[d].teams
            for (t = 0; t < teams.length; t++) {
                console.log("Teams: " + teams[t].name + " Wins: " + teams[t].wins + " Losses: " + teams[t].losses + " Win %: " + teams[t].win_pct + " Games Behind: " + teams[t].games_behind.division)
                var teamResults = $("<tr><td>" + teams[t].name + "</td>" + "<td>" + teams[t].wins + "</td>" + "<td>" + teams[t].losses + "</td>" + "<td>" + teams[t].win_pct+ "<td>" + teams[t].games_behind.division + "</td></tr>");
                $(".american").append(teamResults);
            };
        };
        
        //Get all the number of conferences in NBA
        var conferences = response.conferences;
        // for (l = 0; l < leagues.length; l++) {
        //   console.log("League Name: " + leagues[0].name);
        conferenceResult = $("<tr><th colspan='5'>" + conferences[1].name + "</tr></th>")
        $(".national").append(conferenceResult);
        //Get all the divisions in each league in NBA
        var divisions = response.conferences[1].divisions
        for (d = 0; d < divisions.length; d++) {
            console.log("Divisions: " + divisions[d].name);
            var divisionResults = $("<tr><th>" + divisions[d].name + "</th>" + "<th>" + "Win" + "</th>" + "<th>" + "Loss" + "</th>" + "<th>" + "Win %" + "</th>" + "<th>" + "Games Behind" + "</tr></th>")
            $(".national").append(divisionResults);
            //Get all the teams in a division in each league in NBA
            var teams = response.conferences[1].divisions[d].teams
            for (t = 0; t < teams.length; t++) {
                console.log("Teams: " + teams[t].name + " Wins: " + teams[t].wins + " Losses: " + teams[t].losses + " Win %: " + teams[t].win_pct + " Games Behind: " + teams[t].games_behind.division)
                var teamResults = $("<tr><td>" + teams[t].name + "</td>" + "<td>" + teams[t].wins + "</td>" + "<td>" + teams[t].losses + "</td>" + "<td>" + teams[t].win_pct+ "<td>" + teams[t].games_behind.division + "</td></tr>");
                $(".national").append(teamResults);
            };
        };
    });