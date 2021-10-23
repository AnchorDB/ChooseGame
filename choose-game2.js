let gameList = [];

function chooseGame() {
    const randomGame = gameList[Math.floor(Math.random() * gameList.length)];
    document.getElementById("game").innerHTML = randomGame
}

function addGame() {
   games = document.getElementById("gameToAdd").value;
   gameList.push(games);
   return false;
}