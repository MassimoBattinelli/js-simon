
//quante numeri deve memorizzare l'utente?
var quantiNumeri = 2;
//definisco array vuoto per inserire i numeri
var numeriEsatti = [];
//generazione numeri
for (var i = 0; i < quantiNumeri; i++) {
    var randomNumber = Math.floor(Math.random() *100 + 1);
    numeriEsatti.push(randomNumber);
}
//stampo numeri generati
var numberToRemember = numeriEsatti.join(" ");
console.log(numberToRemember);
alert("Memorizza questi numeri\n" + numberToRemember + "\n");
//richiamo funzione dopo 30 secondi
setTimeout(checkNumber, 3000);

function checkNumber() {
    //richiesta inerimento numeri da utente
    var numberToCheck = [];
    for (var i = 0; i < quantiNumeri; i++) {
        number = parseInt(prompt("Inserisci un numero alla volta quello cher ti ricordi"));
        numberToCheck.push(number);
    }
    console.log(numberToCheck);
    var correctNumber = [];
    var counter = 0;
    //controllo numeri corretti
    for (var i=0; i<quantiNumeri; i++) {
        if (numeriEsatti.includes(numberToCheck[i])) {
            correctNumber.push(numberToCheck[i])
            counter ++;
        }
    }
    console.log(correctNumber);
    var messaggioNumeriCorretti = "Hai inserito correttemante " + counter + " numeri" + "\n" + correctNumber;
    alert(messaggioNumeriCorretti);
}