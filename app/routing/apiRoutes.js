

var friendsData = require("../data/friends")

module.exports = function(app){
    app.get("/api/friends", function(req,res){
        res.json(friendsData);
    });
    app.post("/api/friends", function(req,res){
        res.json(req.body.scores);

    // Take in the user details (name, picture, answers)
    var newUser = req.body;
    console.log(newUser);

    for (var i = 0; i < newUser.scores.length;i++){
        newUser.scores[i] = parseInt(newUser.scores[i]);
    }
    // establish how to choose between chosen friend and total difference between user and arry of friends 
    var chosenFriendIndex = 0;
    var minimumDifference = 40;

    for (var i = 0; i < friendsData.length; i++){
        var totalDifference = 0;
        for(var z = 0; z < friendsData[i].scores.length; z++ ){
                var difference = Math.abs(newUser.scores[z]- friendsData[i].scores[z]);
                totalDifference += difference;
        }

        if(totalDifference < minimumDifference){
            chosenFriendIndex = i;
            minimumDifference = totalDifference
        }
    }
    // add our new user to arry
    friendsData.push(newUser);

    // returns back to browser

    res.json(friendsData[chosenFriendIndex]);
    });
    };
