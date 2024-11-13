let BabyLeviatanTile;
let LeviatanTile;
let score = 0;
let gameOver = false;
let gameTiles = 9;
let time = 30;
let id = "gameOverScreen";
let mensagemFim = ""
let tempoJogo = 1000

window.onload = function() {
    setInterval(timer, 1000);
    setInterval(setGame, 1000);
    document.querySelectorAll('.square').forEach(item => {
        item.addEventListener('click', selectTile)
      })
}

function setGame(){
    setBaby()
    setLeviatan()
    console.log("a")
}

function timer(){
    if(gameOver){return};
    document.getElementById("timer").innerText = "Tempo: " + time.toString();
    time --;
    if(time < 0){
        document.getElementById("score").innerText = "GAME OVER: " + score.toString(); 
        gameOver = true;
        mensagemFim = "Acabou o tempo!"
        createGameOver();
    }
}

function increaseDifficulty(){
    /*for(let i = 9; i < 12; i++){
        let square = document.createElement("div");
        square.id = i.toString();
        square.id = "extraTile";
        square.className = "square";
        square.addEventListener("click", selectTile);

        document.getElementById("gameGrid").appendChild(square);

        tempoJogo = 650
    }
    gameTiles = 12;
    document.getElementById("gameGrid").style.width = "840px";*/
    document.body.style.backgroundImage = "url(../img/fundo1.jpeg)"
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
baby.src = "../img/babysac210.png";

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
    leviatan.src = "../img/inimigo.png";

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
    
    if(this == LeviatanTile){
        if(score == 90){
            increaseDifficulty();
        }
        score += 10;
        document.getElementById("score").innerText = "Pontuação: " + score.toString();
        LeviatanTile = 
        LeviatanTile.innerHTML = "";
        GameScore = score
        console.log(GameScore)
        }
    if(this == BabyLeviatanTile) {
        document.getElementById("score").innerText = "GAME OVER: " + score.toString(); 
        gameOver = true;
        mensagemFim = "Game Over!"
        createGameOver();
    }
}



function createGameOver(){
    let screen = document.createElement("h2");
    let restartButton = document.createElement("button")
    let finalScore = document.createElement("h3")

    //propriedades do quadrado e fundo
    screen.style.backgroundImage = "url(../img/fundo3.jpeg)"
    screen.style.margin = "0"
    screen.style.width = "98%"
    screen.style.height = "85%"
    screen.style.position = "absolute"
    screen.style.left = "0"
    screen.style.right = "0"
    screen.style.marginInline = "auto"
    screen.style.top = "100px"
    screen.textContent = mensagemFim.toString();
    screen.style.fontSize = "150px"
    screen.style.border = "5px solid black"
    

    //propriedades do botão
    restartButton.style.position = "absolute"
    restartButton.style.fontSize = "50px"
    restartButton.addEventListener("click", restartGame)
    restartButton.style.width = "270px"
    restartButton.style.height = "180px"
    restartButton.style.left = "0"
    restartButton.style.right = "0"
    restartButton.style.marginInline = "auto"
    restartButton.style.top = "530px"
    restartButton.textContent = "Reiniciar"
    restartButton.style.border = "5px solid black"
    restartButton.style.borderRadius = "20px"


    //texto da pontuação final
    finalScore.style.position = "absolute"
    finalScore.style.fontSize = "35px"
    finalScore.textContent = "Pontuação Final: " + score
    finalScore.style.left = "0"
    finalScore.style.right = "0"
    finalScore.style.marginInline = "auto"
    finalScore.style.fontSize = "80px"
    finalScore.style.top = "240px"

    document.getElementById("score").innerText = "";
    document.getElementById("title").style.fontSize = "50px"
    document.getElementById("space").appendChild(screen);
    document.getElementById("space").appendChild(finalScore)

    document.getElementById("space").appendChild(restartButton);

}


  function restartGame(){
    let upSpace = document.getElementById("space")
    gameOver = false
    while(upSpace.hasChildNodes()){
        upSpace.removeChild(upSpace.firstChild);
    }

    //voltando os elementos com estilo original
    document.getElementById("title").style.fontSize = "2em"
    document.getElementById("title").style.fontWeight= "bold"
    document.getElementById("score").innerText = "Pontuação: 0"
    document.body.style.backgroundImage = "url(../img/fundo2.jpeg)"
    document.body.style.color = 'black'
    time = 30;
    score = 0
    gameTiles = 9

    /*for(let x = 0; x < 3; x++){
        let gameGrid = document.getElementById("gameGrid")
        gameGrid.removeChild(gameGrid.firstChild)
    }*/
}