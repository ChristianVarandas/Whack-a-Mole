let BabyLeviatanTile;
let LeviatanTile;
let score = 0;
let gameOver = false;
let gameTiles = 9;
let time = 30;

window.onload = function() {
    setGame();
    document.querySelectorAll('.square').forEach(item => {
        item.addEventListener('click', selectTile)
      })

}

function setGame(){
    setInterval(timer, 1000);
    setInterval(setBaby, 1000);
    setInterval(setLeviatan, 2000);
}

function timer(){
    if(gameOver){return};
    document.getElementById("timer").innerText = "Tempo: " + time.toString();
    time --;
    if(time < 0){
        document.getElementById("score").innerText = "GAME OVER: " + score.toString(); 
        gameOver = true;
        window.location.href = "vitoria.html"
    }
}

function currentDifficulty(){

    difficulty = 2;
    console.log("primeiro");

if(difficulty == 2){
    console.log("segundo");
    for(let i = 9; i < 12; i++){
        let square = document.createElement("div");
        square.id = i.toString();
        square.className = "square";
        square.addEventListener("click", selectTile);

        document.getElementById("tela").appendChild(square);

    }
    gameTiles = 12;
    document.getElementById("tela").style.width = "840px";
    document.body.style.backgroundImage = 'url(../img/fundo1.jpeg)'
    document.body.style.color = 'white'
    console.log("eba")
}
}


function getRandomTile() {
    let num = Math.floor(Math.random() * gameTiles);
    return num.toString();
}

function setBaby(){
    if(gameOver){return;}
    if(BabyLeviatanTile){
        BabyLeviatanTile.innerHTML = "";
    }

let baby = document.createElement("img");
baby.src = "./img/inimigo.png";

let num = getRandomTile();
if (LeviatanTile && LeviatanTile.id == num) {
    return;
}
BabyLeviatanTile = document.getElementById(num);
BabyLeviatanTile.appendChild(baby);
}

function setLeviatan() {
    if (gameOver) {
        return;
    }
    if (LeviatanTile) {
        LeviatanTile.innerHTML = "";
    }
    let leviatan = document.createElement("img");
    leviatan.src = "img/babysac210.png";

    let num = getRandomTile();
    if (BabyLeviatanTile && BabyLeviatanTile.id == num) {
        return;
    }
    LeviatanTile = document.getElementById(num);
    LeviatanTile.appendChild(leviatan);
}

function selectTile() {
    if (gameOver) {return;}

    if(this == BabyLeviatanTile){
        if(score == 90){
            currentDifficulty();
        }
        score += 10;
        document.getElementById("score").innerText = score.toString();
        BabyLeviatanTile = 
        BabyLeviatanTile.innerHTML = "";
        

    }
    else if (this == LeviatanTile) {
        document.getElementById("score").innerText = "GAME OVER: " + score.toString(); 
        gameOver = true;
        window.location.href = "derrota.html"
    }
}