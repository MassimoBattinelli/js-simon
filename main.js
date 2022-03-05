
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
alert("Memorizza questi numeri\n" + numberToRemember + "\nQuando ti senti pronto premi invio");
//richiamo funzione dopo 30 secondi
setTimeout(checkNumber, 3000);