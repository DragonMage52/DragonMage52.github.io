/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* global red, black */

var board = new Array(6);
var turn = 0;
var end = 0;
var play = 1;
var blackChip = '<img src="images/blackCircle.gif" style="max-height: 100%; max-width: 100%">';
var redChip = '<img src="images/redCircle.png" style="max-height: 100%; max-width: 100%">';

$(document).ready(function () {

    for (var i = 0; i < 6; i++) {
        for (var j = 0; j < 7; j++) {
            if (!board[i]) {
                board[i] = [];
            }
            board[i][j] = " ";
        }
    }
    
    $("#playerTurn").text("Player One's Turn");
    
    var bw = $("#board").width() * .76;
        $("table").css({"height": bw + "px"});
        var hd = $("#00").height();
        $(".column").css({"height": hd + "px"});
        var position = $("#board").offset();
        var left = position.left - $("#pagetwo").offset().left;
        $("#frontTable").css({"top": (position.top) + 'px'});
        $("#frontTable").css({"left": left + 'px'});
        $("#frontTable").css({"height": bw + "px"});

    $(".column").bind("touchmove", function (e) {
        if (play === 1) {
            //alert("touchstart");
            var id = e.target.id;
            $(".column:not(#" + id + ")").empty();
            if (!(e.target.firstChild)) {
                if (turn % 2 === 0) {
                    $(e.target).append(blackChip);
                } else {
                    $(e.target).append(redChip);
                }
            }
        }
    });

    $(".column").click(function (e) {
        var col = 0;
        var id = this.id;
        switch (id) {
            case "column0":
                col = 0;
                break;
            case "column1":
                col = 1;
                break;
            case "column2":
                col = 2;
                break;
            case "column3":
                col = 3;
                break;
            case "column4":
                col = 4;
                break;
            case "column5":
                col = 5;
                break;
            case "column6":
                col = 6;
                break;
        }
        var i = 0;
        while (board[i][col] === " ") {
            play = 0;
            if (i + 1 < 6) {
                if (board[i + 1][col] !== " ") {
                    if (turn % 2 === 0) {
                        $("#" + i + "" + col).css({"background-color": "black"});
                        alert("#" + i + "" + col);
                        board[i][col] = "X";
                        turn++;
                    } else {
                        $("#" + i + "" + col).css({"background-color": "red"});
                        alert("#" + i + "" + col);
                        board[i][col] = "O";
                        turn++;
                    }
                    break;
                }
            } else if (i + 1 === 6) {
                if (turn % 2 === 0) {
                    $("#" + i + "" + col).css({"background-color": "black"});
                    alert("#" + i + "" + col);
                    board[i][col] = "X";
                    turn++;
                } else {
                    $("#" + i + "" + col).css({"background-color": "red"});
                    alert("#" + i + "" + col);
                    board[i][col] = "O";
                    turn++;
                }
                break;
            }
            i++;
        }
        play = 1;
    });
});





