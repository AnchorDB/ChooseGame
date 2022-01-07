let gameList = [];

document.getElementById('formSubmit').addEventListener('submit', addGame);

function addGame(e) {
   games = document.getElementById("gameToAdd").value;
   gameList.push(games);
   e.preventDefault();
}

function chooseGame() {
    const randomGame = gameList[Math.floor(Math.random() * gameList.length)];
    document.getElementById("game").innerHTML = randomGame
}


console.log(gameList);