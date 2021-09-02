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
function squareGenerator(num) {
  var field = document.getElementById('field');
  
  for (var i = 1; i <= num; i++){
    field.innerHTML += `<div class="square">${i}</div>`
  }

  field.style.width = `${Math.ceil(Math.sqrt(num)) * 100}px`

}


// chiedo all'utente il numero di quadrati da inserire
var squareNumber = prompt('inserisci il numero di quadrati');

// genero i quadrati
squareGenerator(squareNumber)

// genero 16 bombe
var bombs = []
while (bombs.length < 16) {
  var bomb = Math.ceil(Math.random() * squareNumber)
  if (!bombs.includes(bomb)) {
    bombs.push(bomb);
  }
}
console.log(bombs.sort());
// dichiaro l'array per memorizzare i quadrati cliccati
var clicked = []


// al clik di un quadrato 
field.addEventListener('click',
  function (e) {
   
    var clickedSquare = parseInt(e.target.innerHTML)
    
    // 1.controllo che il target non sia gia presente nell'array clicked
    if (!clicked.includes(clickedSquare)) {
      // 2.controllo che il target non sia presente nell'array bombe
      if (bombs.includes(clickedSquare)) {
        //  2.1 se il target è presente nell'array bombe hai perso e visualizza il punteggio(lunghezza array clicked)
        alert('hai perso')
        console.log('punteggio: ', clicked.length)
      } else {
        //  2.2 se il target non è presente nell'array bombe memorizzo il target in un array clicked
        clicked.push(clickedSquare)
        e.target.classList.add('clicked')
        if (clicked.length + bombs.length == squareNumber ) {
          alert('Hai Vinto!!!')
        }
      }
    }
    console.log(clicked)
  }  
)