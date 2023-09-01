/* 

Consegna
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

*/

const btnPlay = document.querySelector('#btn_play');
const btnReset = document.querySelector('#btn_reset');
const limit = 100;

//al click del button si genera una griglia di gioco
btnPlay.addEventListener('click', function (e) {

    //console.log('click');

    btnPlay.style.display = 'none';
    btnReset.style.display = 'inline-block';
    const gridEl = document.querySelector('.grid');
    generateGrid(gridEl, limit);


});

btnReset.addEventListener('click', function (e) {
    btnPlay.style.display = 'inline-block';
    btnReset.style.display = 'none';

    for (let i = 0; i < limit; i++) {

        // Select the first element with class "cell"
        const cells = document.querySelector(".cell");
        //remove the selected element from the dom
        cells.remove();

    }
});

//griglia formata da 10 celle x 10 celle
//creo una funzione per generare la griglia
function generateGrid(domEl, limit) {

    //genero la griglia 
    for (let i = 0; i < limit; i++) {

        const cellEl = document.createElement('div');
        cellEl.className = 'cell';
        cellEl.append(i + 1);
        domEl.append(cellEl);
        //console.log(cellEl);

        //cliccando sulla cella, la cella si colora di azzurro ed emette un messaggio in console
        cellEl.addEventListener('click', function () {
            //console.log('click on', cellEl);
            this.classList.toggle('if_click');
        })
    }
}

