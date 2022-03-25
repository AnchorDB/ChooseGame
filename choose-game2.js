// classes

class GameList {
    constructor(gameList = []) {
        this.gameList = gameList;
    } 

    addGame(e) {
        let gameToAdd = document.getElementById("gameToAdd");

        games.gameList.push(gameToAdd.value);
        gameToAdd.value = '';
        e.preventDefault();
     }

     chooseGame() {
        let submittedGame = document.getElementById("game");
        let randomGame = games.gameList[Math.floor(Math.random() * games.gameList.length)];
    
        // check if game has been entered
        if (games.gameList.length !== 0){
            setTimeout(function() {
                return submittedGame.innerHTML = randomGame;},
                500);
        } else {
            submittedGame.innerHTML = "Please Enter a Game Above";

            setTimeout(function(){
                return submittedGame.innerHTML = " ";
            }, 2000);
        }
    }   

    reloadList(){
        window.location.reload();
    }

}

// instantiate

const games = new GameList([]);

// Event Listeners

document.getElementById('formSubmit').addEventListener('submit', games.addGame);
document.querySelector('#reloadPage').addEventListener('mousedown', games.reloadList);

