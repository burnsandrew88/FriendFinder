

var friendsData = require("../data/friends")

module.exports = function(app){
    app.get("/api/friends", function(req,res){
        res.json(friendsData);
    });
    app.post("/api/friends", function(req,res){
        console.log(req.body.answers);

    // Take in the user details (name, picture, answers)
    var user = req.body;

    for (var i = 0; i < user.answers.length;i++){
        user.answers[i] = parseInt(user.answers[i]);
    }
    // establish how to choose between chosen friend and total difference between user and arry of friends 
    var chosenFriendIndex = 0;
    var minimumDifference = 40;

    for (var x = 0; x < friends.length; x++){
        var totalDifference = 0;
        for(var z = 0; z < friends.answers.length; z++ ){
                var difference = Math.abs(user.answers[z]- friends[x].answers[z]);
                totalDifference += difference;
        }

        if(totalDifference < minimumDifference){
            chosenFriendIndex = i;
            minimumDifference = totalDifference
        }
    }
    // add our new user to arry
    friends.push(user);

    // returns back to browser

    res.json(friends[chosenFriendIndex]);
    });
    };
