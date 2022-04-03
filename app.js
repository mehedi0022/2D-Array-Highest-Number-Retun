let rows = parseInt(prompt("How Many Player Perfrom In Your Turnament? "));
let cols = 2;

let playerInfo = new Array(rows);
    for( let n = 0; n < rows; n++){
        playerInfo [n] = new Array(cols);
    }


    for( let p = 0; p < rows; p++){
        playerInfo [p] [0] = prompt("Enter Player Name: ");
    }
    for( let q = 0; q < rows; q++){
        playerInfo [q] [1] = prompt("Enter Player Score: ");
    }



document.write("Printing All Player Score: <br/><hr/>");
for( let i = 0; i < playerInfo.length; i++){
    document.write(playerInfo [i] [0] + " = ");
    document.write(playerInfo [i] [1] + "<br/>");
}

function higestScore(scoreInfo){
    let maxScore = playerInfo [0] [1];
    for( let x = 1; x < playerInfo.length; x++){
        if(maxScore < playerInfo [x] [1]){
            maxScore = playerInfo [x] [1];
        }
    }
    return maxScore;
}


function higestScorer(playerNmaeInfo){
    let maxScorer = playerInfo [0] [1];
    let maxScorers = playerInfo [0] [0];
    for( let y = 1; y < playerInfo.length; y++){
        if(maxScorer < playerInfo [y] [1]){
            maxScorer = playerInfo [y] [1];
            maxScorers = playerInfo [y] [0];
        }
    }
    return maxScorers;
}




let bestScorers = higestScorer(playerInfo);
let bestScore = higestScore(playerInfo);
document.write("<br/><hr/>");
document.write("Most Runs Scorer <br/>");
document.write(bestScorers + " = " + bestScore);