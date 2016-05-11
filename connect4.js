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

    var width = $(window).width();
    $("#board").css({"width": (width * .84) + "px"});
    $("#board").css({"height": (width * .64) + "px"});
    $(".column").css({"width": ((width * .78)/7) + "px"});

    var tw = $("#00").width() * .82;
    var th = $("#00").height() * .82;
    if (tw > th) {
        $("td").css({"width": tw + "px"});
        $("td").css({"height": tw + "px"});
        $(".column").css({"height": tw + "px"});
    } else {
        $("td").css({"width": th + "px"});
        $("td").css({"height": th + "px"});
        $(".column").css({"height": th + "px"});
    }


    $(".column").on("mouseover touchstart", function (e) {
        if (play === 1 && end === 0) {
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
        if (play === 1 && end === 0) {
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
                            $("#" + i + "" + col).append(blackChip);
                            board[i][col] = "X";
                        } else {
                            $("#" + i + "" + col).append(redChip);
                            board[i][col] = "O";
                        }
                        break;
                    }
                } else if (i + 1 === 6) {
                    if (turn % 2 === 0) {
                        $("#" + i + "" + col).append(blackChip);
                        board[i][col] = "X";
                    } else {
                        $("#" + i + "" + col).append(redChip);
                        board[i][col] = "O";
                    }
                    break;
                }
                i++;
            }

            var count = 0;
            var row, j;
            var letter;
            if (turn % 2 === 0) {
                letter = 'X';
            } else {
                letter = 'O';
            }
            for (var s = 0; s < 8; s++) {
                row = i;
                j = col;
                if (s % 2 === 0) {
                    count = 0;
                }
                while (board[row][j] === letter) {
                    if (!(row === i && j === col)) {
                        count++;
                    }

                    switch (s) {
                        case 0:
                            row--;
                            break;
                        case 1:
                            row++;
                            break;
                        case 2:
                            row--;
                            j++;
                            break;
                        case 3:
                            row++;
                            j--;
                            break;
                        case 4:
                            j++;
                            break;
                        case 5:
                            j--;
                            break;
                        case 6:
                            row++;
                            j++;
                            break;
                        case 7:
                            row--;
                            j--;
                    }
                    if (count >= 3) {
                        end = 1;
                        if (turn % 2 === 0) {
                            $("#playerTurn").text("Player One Wins");
                        } else {
                            $("#playerTurn").text("Player Two Wins");
                        }
                    }
                    if (row > 5 || row < 0 || j > 6 || j < 0) {
                        break;
                    }
                }
            }
            turn++;
            play = 1;
            if (end === 0) {
                if (turn % 2 === 0) {
                    $("#playerTurn").text("Player One's Turn");
                } else {
                    $("#playerTurn").text("Player Two's Turn");
                }
            }
        }
    });

    $("#btnNewGame").click(function () {
        $("tr").children().empty();
        for (var i = 0; i < 6; i++) {
            for (var j = 0; j < 7; j++) {
                if (!board[i]) {
                    board[i] = [];
                }
                board[i][j] = " ";
            }
        }

        $("#playerTurn").text("Player One's Turn");

        turn = 0;
        end = 0;
        play = 1;
    });
});





