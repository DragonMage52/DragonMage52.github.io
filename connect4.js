/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var board = new Array(6);
var playerOne;
var playerTwo;
var turn = 0;
var end = 0;
var play = 0;

$(document).ready(function () {
    
    for (var i = 0; i < 6; i++) {
        for (var j = 0; j < 7; j++) {
            if (!board[i]) {
                board[i] = [];
            }
            board[i][j] = " ";
        }
    }

    $("#btnPlay").click(function () {
        playerOne = document.getElementById("inputPlayerOne").value;
        playerTwo = document.getElementById("inputPlayerOne").value;
        $.mobile.changePage("#pagetwo", {transition: "slide"});
        $("#playerTurn").text(playerOne + "'s Turn");
        var bw = $("#board").width() *.75;
        $("table").css({"height" :bw+"px"});
        var position = $("#board").offset();
        var left = position.left - $("#pagetwo").offset().left;
        alert(left);
        alert(position.top);
        $("#frontTable").css({"top" :position.top+'px'});
        $("#frontTable").css({"left" :left+'px'});
        $("#frontTable").css({"height" :bw+"px"});
        play = 1;
    });
    
});


