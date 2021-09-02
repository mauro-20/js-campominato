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
var bombs = [1,2,3]
// while (bombs.length < 16) {
//   var bomb = Math.ceil(Math.random() * 100)
//   if (!bombs.includes(bomb)) {
//     bombs.push(bomb);
//   }
// }



// al clik di un quadrato 
field.addEventListener('click',
  function (e) {
    // if (!e.target.classList.contains('clicked')) {
    //   e.target.classList.add('clicked')
    //   alert(e.target.innerHTML)
    // }
    // console.log(e.target)
    var bombs = [1, 2, 3]
    var clickedSquare = parseInt(e.target.innerHTML)
    var white = []
    // 1.controllo che il target non sia gia presente nell'array white
    if (!white.includes(clickedSquare)) {
      // 2.controllo che il target non sia presente nell'array bombe
      if (bombs.includes(clickedSquare)) {
        //  2.1 se il target è presente nell'array bombe hai perso e visualizza il punteggio(lunghezza array white)
        alert('hai perso')
        console.log('punteggio: ', white.length)
      } else {
        console.log('terzo check');
        //  2.2 se il target non è presente nell'array bombe memorizzo il target in un array white
        white.push(clickedSquare)
        console.log(white)
        e.target.classList.add('clicked')
      }
    }
    console.log(white)
  }  
)