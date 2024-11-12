let BabyLeviatanTile;
let LeviatanTile;
let score = 0;
let gameOver = false;
let gameTiles = 9;
let time = 30;
let id = "gameOverScreen";

window.onload = function() {
    if(document.getElementsByClassName("h2").innerText == "Pontuação: 0"){
        console.log("Eu criei um monstro")
    }
    setGame();
    document.querySelectorAll('.square').forEach(item => {
        item.addEventListener('click', selectTile)
      })
      console.log("é sim")
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
        createGameOver();
    }
}

function currentDifficulty(){
    for(let i = 9; i < 12; i++){
        let square = document.createElement("div");
        square.id = i.toString();
        square.className = "square";
        square.addEventListener("click", selectTile);

        document.getElementById("tela").appendChild(square);
        console.log(square)

    }
    gameTiles = 12;
    document.getElementById("tela").style.width = "840px";
    document.body.style.backgroundImage = "url(../jogo/img/fundo1.jpeg)"
    document.body.style.color = 'white'
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
    console.log(score)
}

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
        createGameOver();
    }
}

function createGameOver(){
    let screen = document.createElement("div");
    screen.id = "gameOverScreen";
    screen.className = "gameOverClass";
    screen.style.backgroundImage = "url(../jogo/img/fundo3.jpeg)"
    screen.style.margin = "0"
    screen.style.width = "400px"
    screen.style.height = "300px"
    screen.style.position = "absolute"
    screen.style.left = "0"
    screen.style.right = "0"
    screen.style.marginInline = "auto"
    screen.style.top = "180px"
    screen.textContent = "Game Over!" + score;
    screen.style.fontSize = "50px"
    document.getElementById("space").appendChild(screen);
}

/*let square = document.createElement("div");
square.id = i.toString();
square.className = "square";

document.getElementById("tela").appendChild(square);

position: absolute; 
  left: 0; 
  right: 0; 
  margin-inline: auto; 
  width: fit-content;*/