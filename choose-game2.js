//variables

let gameList = [];
let gameToAdd = document.getElementById("gameToAdd");
let submittedGame = document.getElementById("game");

// added event listener to form submit, new list submit

document.getElementById('formSubmit').addEventListener('submit', addGame);
document.querySelector('#reloadPage').addEventListener('mousedown', reloadList);

// add submitted game to games array

function addGame(e) {
   gameList.push(gameToAdd.value);
   gameToAdd.value = '';
   e.preventDefault();
}

// choose random game from gamelist array

function chooseGame() {
    let randomGame = gameList[Math.floor(Math.random() * gameList.length)];

    // check if game has been entered
    if (gameList.length !== 0){
        setTimeout(function() {
            return submittedGame.innerHTML = randomGame;},
            500);
    } else {
        submittedGame.innerHTML = "Please Enter a Game Above";
    }
}

// create new List

function reloadList(){
    window.location.reload();
}

