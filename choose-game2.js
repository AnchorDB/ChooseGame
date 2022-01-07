let gameList = [];

function chooseGame(e) {
    const randomGame = gameList[Math.floor(Math.random() * gameList.length)];
    document.getElementById("game").innerHTML = randomGame
    e.preventDefault;
}

function addGame() {
   games = document.getElementById("gameToAdd").value;
   gameList.push(games);
   return false;
}