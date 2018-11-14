$(document).ready(function () {

    var targetScore = 0;
    var totalScore = 0;
    var crystalNumber = [0, 0, 0, 0];
    var wins = 0;
    var losses = 0;

    function init () {
        targetScore = Math.floor(Math.random() * 102 + 19);
        totalScore = 0;
        console.log(targetScore);
        
        $("#target-score").html(targetScore);
        $("#total-score").html(totalScore);
        $("#wins").html("Wins: " + wins);
        $("#losses").html("Losses: " + losses);

        for (var i = 0; i < crystalNumber.length; i++) {
            crystalNumber[i] = Math.floor(Math.random() * 12 + 1);
            console.log(crystalNumber[i]);
        };
    }
    init();

    $(".number").on("click", function () {
        totalScore += crystalNumber[parseInt($(this).val())];
        $("#total-score").html(totalScore);

        if (totalScore === targetScore) {
            wins++;
            $("#msg").html("You won!!");
            init();
        }

        if (totalScore > targetScore) {
            losses++;
            $("#msg").html("You lost!!");
            init();
        }
    });
});