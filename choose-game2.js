let gameList = [];

// added event listener to form submit

document.getElementById('formSubmit').addEventListener('submit', addGame);

// add submitted game to games array

function addGame(e) {
   games = document.getElementById("gameToAdd").value;
   gameList.push(games);
   e.preventDefault();
}

// choose random game from games array

function chooseGame() {
    const randomGame = gameList[Math.floor(Math.random() * gameList.length)];
    document.getElementById("game").innerHTML = randomGame
}


console.log(gameList);