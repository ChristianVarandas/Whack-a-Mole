let currMoleTile;
let currPlantTile;
let score = 0;
let gameOver = false;
let gameTiles = 9

window.onload = function() {
    setGame();
    document.querySelectorAll('.square').forEach(item => {
        item.addEventListener('click', selectTile)
      })

}

function setGame(){
    /*for(let i = 0;i<9;i++){
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click",selectTile);
        document.getElementById("grid").appendChild(tile);

    }*/
    setInterval(setMole, 1000);
    setInterval(setPlant, 2000);
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
    console.log("eba")
}
}


function getRandomTile() {
    let num = Math.floor(Math.random() * gameTiles);
    return num.toString();
}

function setMole(){
    if(gameOver){return;}
    if(currMoleTile){
        currMoleTile.innerHTML = "";
    }

let mole = document.createElement("img");
mole.src = "./img/monty-mole210.png";

let num = getRandomTile();
if (currPlantTile && currPlantTile.id == num) {
    return;
}
currMoleTile = document.getElementById(num);
currMoleTile.appendChild(mole);
}

function setPlant() {
    if (gameOver) {
        return;
    }
    if (currPlantTile) {
        currPlantTile.innerHTML = "";
    }
    let plant = document.createElement("img");
    plant.src = "img/babysac210.png";

    let num = getRandomTile();
    if (currMoleTile && currMoleTile.id == num) {
        return;
    }
    currPlantTile = document.getElementById(num);
    currPlantTile.appendChild(plant);
}

function selectTile() {
    if (gameOver) {return;}

    if(this == currMoleTile){
        if(score == 90){
            currentDifficulty();
        }
        score += 10;
        document.getElementById("score").innerText = score.toString();
        currMoleTile = 
        currMoleTile.innerHTML = "";
        

    }
    else if (this == currPlantTile) {
        document.getElementById("score").innerText = "GAME OVER: " + score.toString(); 
        gameOver = true;
    }
}