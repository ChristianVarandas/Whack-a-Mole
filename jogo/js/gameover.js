let score = 0;


function selectTile() {
    if (gameOver) {return;}

    if(this == BabyLeviatanTile){
        if(score == 90){
            currentDifficulty();
        }
        score += 10;
        document.getElementById("PontoFim").innerText = score.toString();
        BabyLeviatanTile = 
        BabyLeviatanTile.innerHTML = "";
    }
}
