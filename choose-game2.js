let gameList = [];
let gameToAdd = document.getElementById("gameToAdd");

// added event listener to form submit, new list submit

document.getElementById('formSubmit').addEventListener('submit', addGame);
document.querySelector('#reloadPage').addEventListener('mousedown', reloadList);

// add submitted game to games array

function addGame(e) {
   gameList.push(gameToAdd.value);
   gameToAdd.value = '';
   e.preventDefault();
}

// choose random game from games array

function chooseGame() {
    const randomGame = gameList[Math.floor(Math.random() * gameList.length)];
    document.getElementById("game").innerHTML = randomGame;
}

// create new List

function reloadList(){
    window.location.reload();
}
