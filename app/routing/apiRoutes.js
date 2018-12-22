

var friends = require("../data/friends")

module.exports = function(app){
    app.get("/api/friends", function(req,res){
        res.json(friends);
    });
    app.post("/api/friends", function(req,res){
        // res.json(req.body.scores);

    // Take in the user details (name, picture, answers)
    var newUser = req.body;
    console.log(newUser);
    var userResponse = newUser.scores;
    var match = {
        difference: 500
    };

    

    for (var i = 0; i < friends.length; i++){
        var totalDifference = 0;
        for(var z = 0; z < userResponse.length; z++ ){
                totalDifference += Math.abs(parseInt(friends[i].scores[z])- parseInt(userResponse[z]));
        }

        if(totalDifference <= match.difference){
            match.friendName = friends[i].friendName;
            match.Image = friends[i].Image;
            match.difference = totalDifference
        }
    }
    
    // push to the arry 
    friends.push(newUser);

    // returns back to browser

    res.json(match);

   
    });
    };
