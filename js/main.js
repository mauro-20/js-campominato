//Il computer deve generare 16 numeri casuali tra 1 e 100 (bombe).
// I numeri non possono essere duplicati.
// In seguito il giocatore clicca sulle celle numerate(non può cliccare più volte sulla stessa cella)
// La partita termina quando il giocatore clicca su un numero “vietato” o clicca su tutte le celle che non sono delle bombe.
// Al termine della partita il software deve comunicare il punteggio.
//   BONUS: (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 => tra 1 e 80
// con difficoltà 2 => tra 1 e 50


/* squareGenerator genera un certo numero di quadrati
*  @param num numero di quadrati da generare 
*/
function squareGenerator(field, num) {
  for (var i = 1; i <= num; i++) {
    field.innerHTML += `<div class="square" id="square${i}"></div>`;
  }
}


var field = document.getElementById('field');
var winnerWin = document.getElementById('winner-win');
var winnerLost = document.getElementById('winner-lost');
var gameResult = document.getElementById('game-result');
var score = document.getElementById('score');
var squareNumber = 0;
var bombs = [];
var nBombs = 2;
var clicked = [];
var lost = false;


//al click di btn Gioca
document.getElementById('btn-start').addEventListener('click',
  function () {
    //reset variabile per iniziare il gioco
    lost = false;
    clicked = [];
    bombs = [];
    field.innerHTML = '';
    score.innerHTML = '';
    gameResult.classList.remove('visible');
    if (winnerWin.classList.contains('visible')) {
      winnerWin.classList.remove('visible');
    }
    if (winnerLost.classList.contains('visible')) {
      winnerLost.classList.remove('visible');
    }
    // selezione del livello in base alla scelta dell'utente
    var level = document.getElementById('level').value;
    switch (level) {
      case 'easy':
        squareNumber = 100;
        break;
      case 'medium':
        squareNumber = 80;
        break;
      case 'hard':
        squareNumber = 50;
        break;
    }
    // genero i quadrati
    squareGenerator(field, squareNumber);
    // genero 16 bombe
    while (bombs.length < nBombs) {
      var bomb = Math.ceil(Math.random() * squareNumber);
      if (!bombs.includes(bomb)) {
        bombs.push(bomb);
      }
    }
    console.log(bombs.sort());
  }
);

// al clik di un quadrato 
field.addEventListener('click',
  function (e) {
    var clickedItem = parseInt(e.target.id.slice(6));
    if (!lost) {
      // 1.controllo che il target non sia gia presente nell'array clicked
      if (!clicked.includes(clickedItem)) {
        // 2.controllo che il target non sia presente nell'array bombe
        if (bombs.includes(clickedItem)) {
          //  2.1 se il target è presente nell'array bombe hai perso e visualizza il punteggio(lunghezza array clicked)
          lost = true;
          document.getElementById('winner-lost').classList.add('visible');
          score.innerHTML = clicked.length;
          e.target.classList.add('bomb');
          // e.target.innerHTML = `<i class="fas fa-bomb"></i>`
          gameResult.classList.add('visible');
        } else {
          //  2.2 se il target non è presente nell'array bombe memorizzo il target in un array clicked
          clicked.push(clickedItem);
          e.target.classList.add('clicked');
          if (clicked.length + bombs.length == squareNumber) {
            document.getElementById('winner-win').classList.add('visible');
            gameResult.classList.add('visible');
          }
        }
      }
    } else {
      alert('Premi gioca per iniziare un\'altra partita');
    }
  }
);;

