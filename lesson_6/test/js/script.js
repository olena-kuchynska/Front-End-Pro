var moves = ['rock','scissors','paper'];
var resultOfGame;

var indexComputer = parseInt(Math.random()*moves.length);
//var indexComputer = 0;
//var computer = moves[indexComputer];
var user = prompt('Computer make your move. Your turn (enter rock, scissors or paper):');



if(user!==null) {
    var userChoice = user.toLowerCase();
    var indexUser = moves.indexOf(userChoice)

    if (moves.includes(userChoice)) {
        
        //console.log(computer);
        //console.log(user);
        
        if(indexUser==indexComputer) {
            resultOfGame = 'draw!';
        } else if((indexUser===2 && indexComputer===0)|| indexUser<indexComputer) {
            resultOfGame = 'you win!';
        } else {
            resultOfGame = 'you lose!';
        }        

    } else {
        alert('You have entered incorrect data!');
    }

} else {
    alert('Game over!');
}

alert('Computer choice: ' + moves[indexComputer] + '\nYour choice: ' + user + '\nResulat of Game: ' + resultOfGame.toUpperCase());








