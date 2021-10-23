function chooseGame() {
    let gameList = ["Pokemon White", "Pokemon Black 2", "Pokemon Diamond", "Pokemon X", "Zelda BOTW", "League of Legends", "Rollercoaster Tycoon"];
    const randomGame = gameList[Math.floor(Math.random() * gameList.length)];
    document.getElementById("game").innerHTML = randomGame
}
