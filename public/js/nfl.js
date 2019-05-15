
var queryURL1 = "https://chriscastle.com/proxy/index.php?:proxy:http://api.sportradar.us/nfl/official/trial/v5/en/seasons/2018/standings.json?api_key=cmcpngnva9q7cqf48ubdy9mk"

$.ajax({
    dataType: "JSON",
    contentType: 'application/json',
    url: queryURL1,
    method: "GET"
})
    .then(function (response) {

        var tBody = $("tbody");
        var tRow = $("<tr>");

        //Get all the number of conferences in NFL
        var conferences = response.conferences;
        // for (l = 0; l < leagues.length; l++) {
        //   console.log("League Name: " + leagues[0].name);
        conferenceResult = $("<tr><th colspan='5'>" + conferences[0].name + "</tr></th>")
        $(".american").append(conferenceResult);
        //Get all the divisions in each league in NFL
        var divisions = response.conferences[0].divisions
        for (d = 0; d < divisions.length; d++) {
            console.log("Divisions: " + divisions[d].name);
            var divisionResults = $("<tr><th>" + divisions[d].name + "</th>" + "<th>" + "Win" + "</th>" + "<th>" + "Loss" + "</th>" + "<th>" + "Ties" + "</th>" + "<th>" + "Win %" + "</tr></th>")
            $(".american").append(divisionResults);
            //Get all the teams in a division in each league in NFL
            var teams = response.conferences[0].divisions[d].teams
            for (t = 0; t < teams.length; t++) {
                console.log("Teams: " + teams[t].name + " Wins: " + teams[t].wins + " Losses: " + teams[t].losses + " Ties: " + teams[t].ties + " Win %: " + teams[t].win_pct)
                var teamResults = $("<tr><td>" + teams[t].name + "</td>" + "<td>" + teams[t].wins + "</td>" + "<td>" + teams[t].losses + "</td>" + "<td>" + teams[t].ties+ "<td>" + teams[t].win_pct + "</td></tr>");
                $(".american").append(teamResults);
            };
        };
        
        //Get all the number of conferences in NFL
        var conferences = response.conferences;
        // for (l = 0; l < leagues.length; l++) {
        //   console.log("League Name: " + leagues[0].name);
        conferenceResult = $("<tr><th colspan='5'>" + conferences[1].name + "</tr></th>")
        $(".national").append(conferenceResult);
        //Get all the divisions in each league in NFL
        var divisions = response.conferences[1].divisions
        for (d = 0; d < divisions.length; d++) {
            console.log("Divisions: " + divisions[d].name);
            var divisionResults = $("<tr><th>" + divisions[d].name + "</th>" + "<th>" + "Win" + "</th>" + "<th>" + "Loss" + "</th>" + "<th>" + "Ties" + "</th>" + "<th>" + "Win %" + "</tr></th>")
            $(".national").append(divisionResults);
            //Get all the teams in a division in each league in NFL
            var teams = response.conferences[1].divisions[d].teams
            for (t = 0; t < teams.length; t++) {
                console.log("Teams: " + teams[t].name + " Wins: " + teams[t].wins + " Losses: " + teams[t].losses + " Ties: " + teams[t].ties + " Win %: " + teams[t].win_pct)
                var teamResults = $("<tr><td>" + teams[t].name + "</td>" + "<td>" + teams[t].wins + "</td>" + "<td>" + teams[t].losses + "</td>" + "<td>" + teams[t].ties+ "<td>" + teams[t].win_pct + "</td></tr>");
                $(".national").append(teamResults);
            };
        };
    });
