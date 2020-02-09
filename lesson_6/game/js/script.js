var moves = ['rock','scissors','paper'];
var indexOfComputer,
    resultOfGame,
    user;

for(;user !== null;) {

    indexComputer = parseInt(Math.random()*moves.length);
    user = prompt('Computer make your move. Your turn (enter rock, scissors or paper):');

    if(user === null) {
        alert('Game over!');
        break;
    }

    var userChoice = user.toLowerCase();
    var indexUser = moves.indexOf(userChoice);  

    if(moves.includes(userChoice)) {
               
        if(indexUser == indexComputer) {
            resultOfGame = 'draw!';
        } else if((indexUser === 2 && indexComputer === 0) || indexUser<indexComputer) {
            resultOfGame = 'you win!';
        } else {
            resultOfGame = 'you lose!';
        }
        
        alert('Computer choice: ' + moves[indexComputer] + '\nYour choice: ' + userChoice + '\nResulat of Game: ' + resultOfGame.toUpperCase());

    } else {
        alert('You have entered incorrect data!');
    }

}