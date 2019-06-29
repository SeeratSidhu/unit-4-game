
var crystalValue = [];
var crystalImage = ["https://us.silvexcraft.eu/30940-86339-thickbox/1122-mm-120-crystal-oceand--rivoli.jpg", "https://cdn.shopify.com/s/files/1/0270/0607/products/5302556.jpg?v=1509706015", "https://d13x80k168af0t.cloudfront.net/content/product/large/4470_001_L112S_UF_10_FV_PLcopy.jpg", "https://www.swarovski.com/medias/?context=bWFzdGVyfHJvb3R8NzE1MjZ8aW1hZ2UvanBlZ3xoNDcvaGFkLzkwMjA2OTkzNDQ5MjYuanBnfDk0OGJjZGJhODFlMDc3Y2RhZmJkZWRmNDYzNzJkODEwYjA5MGZmZDcxMDg3NjE0OTE1NmY4MDllNWM1YzRhZmY"];
var numWins = 0;
var numLosses = 0;
var scoreCount = 0;
var targetNumber;


function randomNumber(min, max) {
    targetNumber = Math.floor(Math.random() * (max - min + 1) + min);
    return targetNumber;
};

function setCrystal(min, max) {
    for (var i = 0; i < 4; i++) {
        var randValue = Math.floor(Math.random() * (max - min + 1) + min);
        crystalValue.push(randValue);
    }

    for (var j = 0; j < crystalValue.length; j++) {
        var imageCrystal = $("<img>");
        imageCrystal.addClass("crystal-image");
        imageCrystal.attr("src", crystalImage[j]);
        imageCrystal.attr("data-crystalValue", crystalValue[j]);
        $("#crystals").append(imageCrystal);

    }

    console.log(crystalValue);

};

function resetGame(){
    crystalValue = [];
    scoreCount = 0;
    $("#targetNum").html("");
    $("#crystals").html("");
    $("#scoreCounter").text(scoreCount);
    $("#targetNum").html("<h1>" + randomNumber(19, 120) + "<h1>");
    setCrystal(1, 12);
}

$(document).ready(function () {
    $("#targetNum").html("<h1>" + randomNumber(19, 120) + "<h1>");
    setCrystal(1, 12);



    $(".crystal-image").on("click", function () {
        var userScore = parseInt($(this).attr("data-crystalValue"));
        scoreCount += userScore;
        console.log(userScore);
        $("#scoreCounter").text(scoreCount);

        if (scoreCount === targetNumber){
           numWins++;
           $("#wins").text(numWins);
           resetGame();
       }
       else if(targetNumber < scoreCount){
            numLosses++;
            $("#losses").text(numLosses);
           resetGame();
       }

    });

});