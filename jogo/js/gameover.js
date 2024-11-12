let GameScore = score
function selectTile() {
    if (gameOver) {return;}
    
    if(this == BabyLeviatanTile){
        if(score == 90){
            currentDifficulty();
        }
        score += 10;
        document.getElementById("score").innerText = "Pontuação: " + score.toString();
        BabyLeviatanTile = 
        BabyLeviatanTile.innerHTML = "";
        GameScore = score
        console.log(GameScore)
        }
    if(this == LeviatanTile) {
        document.getElementById("score").innerText = "GAME OVER: " + score.toString(); 
        gameOver = true;
        window.location.href = "derrota.html"
    }
}

