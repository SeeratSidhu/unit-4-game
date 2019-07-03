
var crystalValue = [];
var crystalImage = ["https://us.silvexcraft.eu/30940-86339-thickbox/1122-mm-120-crystal-oceand--rivoli.jpg", "https://cdn.shopify.com/s/files/1/0270/0607/products/5302556.jpg?v=1509706015", "https://d13x80k168af0t.cloudfront.net/content/product/large/4470_001_L112S_UF_10_FV_PLcopy.jpg", "https://www.swarovski.com/medias/?context=bWFzdGVyfHJvb3R8NzE1MjZ8aW1hZ2UvanBlZ3xoNDcvaGFkLzkwMjA2OTkzNDQ5MjYuanBnfDk0OGJjZGJhODFlMDc3Y2RhZmJkZWRmNDYzNzJkODEwYjA5MGZmZDcxMDg3NjE0OTE1NmY4MDllNWM1YzRhZmY"];
var numWins = 0;
var numLosses = 0;
var scoreCount = 0;
var targetNumber;

function resetCounter() {
    scoreCount = 0;
    $("#scoreCounter").text(scoreCount);
};

function gamePlay() {
    
    targetNumber = Math.floor(Math.random() * (120 - 19 + 1) + 19);
    $("#targetNum").html("<h1>" + targetNumber + "<h1>");
    crystalValue = [];
    resetCounter();
    $("#crystals").empty();


    for (var i = 0; i < 4; i++) {
        var randValue = Math.floor(Math.random() * (12 - 1 + 1) + 1);
        crystalValue.push(randValue);
    }

    for (var j = 0; j < crystalValue.length; j++) {
        var imageCrystal = $("<img>");
        imageCrystal.addClass("crystal-image");
        imageCrystal.attr("src", crystalImage[j]);
        imageCrystal.attr("data-crystalValue", crystalValue[j]);
        $("#crystals").append(imageCrystal);

    }
};

gamePlay();

$("#crystal-div").on("click", '.crystal-image', function () {
    var userScore = parseInt($(this).attr("data-crystalValue"));
    scoreCount += userScore;
    console.log(userScore);
    $("#scoreCounter").text(scoreCount);
    $("#message").hide();

    if (scoreCount === targetNumber) {
        $("#message").text("You won!").show();
        numWins++;
        $("#wins").text(numWins);
        gamePlay();

    }
    else if (targetNumber < scoreCount) {
        $("#message").text("You lost!").show();
        numLosses++;
        $("#losses").text(numLosses);
        gamePlay();
    }

});

