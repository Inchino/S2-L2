/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

let num = 18;
let num1 = 9;

if(num > num1){
  console.log("Il primo numero è maggiore");
}else if(num == num1){
  console.log("I due numeri sono uguali");
}else{
  console.log("Il secondo numero è maggiore");
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

let num3 = 3;

if(num3 == 5){
  console.log("Equal");
}else{
  console.log("Not equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

let num4 = 15;

if(num4 % 5 == 0){
  console.log("Divisibile per 5");
}else{
  console.log("Non divisibile per 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

let num5 = 4;
let num6 = 4;

// Forma estesa

if(num5 == 8){
  console.log("Il primo numero è uguale ad 8");
}else if(num6 == 8){
  console.log("Il secondo numero è uguale ad 8");
}else if(num5 + num6 == 8){
  console.log("La somma è uguale ad 8");
}else if(num5 - num6 == 8 || num6 - num5 == 8){
  console.log("La differenza tra i due numeri è uguale ad 8");
}else{
  console.log("I due numeri sono diversi da 8 e la loro somma o differenza non è 8!");
}

// Forma breve

if(num5 == 8 || num6 == 8){
  console.log("Uno tra il primo o il secondo numero è uguale ad 8");
}else if(num5 + num6 == 8 || num5 - num6 == 8 || num6 - num5 == 8){
  console.log("La somma o la differenza tra i due numeri è uguale ad 8");
}else{
  console.log("I due numeri sono diversi da 8 e la loro somma o differenza non è 8!");
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let totalShoppingCart = 40;
let finalShoppingCart = 0;

if(totalShoppingCart <= 50){
  finalShoppingCart = totalShoppingCart + 10;
  console.log("Totale minore o uguale a 50eur, saranno aggiunti 10eur per la spedizione. Totale da pagare:",finalShoppingCart);
}else{
  finalShoppingCart = totalShoppingCart;
  console.log("Hai diritto alla spedizione gratuita. Totale da pagare:",finalShoppingCart);
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

let sale = 0;
let saleShoppingCart = 0;

sale = totalShoppingCart * 0.2;
saleShoppingCart = totalShoppingCart - sale;

console.log("Sconto applicato del 20%, totale:",saleShoppingCart);

if(saleShoppingCart <= 50){
  finalShoppingCart = saleShoppingCart + 10;
  console.log("Totale minore o uguale a 50eur, saranno aggiunti 10eur per la spedizione. Totale da pagare:",finalShoppingCart);
}else{
  finalShoppingCart = saleShoppingCart;
  console.log("Hai diritto alla spedizione gratuita. Totale da pagare:",finalShoppingCart);
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

let num7 = 76;
let num8 = 74;
let num9 = 79;

if(num7 > num8 && num8 > num9){
  console.log("Primo:",num7,"Secondo:",num8,"Terzo:",num9);
}else if(num8 > num7 && num7 > num9){
  console.log("Primo:",num8,"Secondo:",num7,"Terzo:",num9);
}else if(num9 > num7 && num7 > num8){
  console.log("Primo:",num9,"Secondo:",num7,"Terzo:",num8);
}else{
  console.log("Primo:",num9,"Secondo:",num8,"Terzo:",num7);
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

let string = "casa";

if(typeof string === "number"){
  console.log("Datatype equal!");
}else{
  console.log("Datatype not equal!");
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let num10 = 11;

if(num10 % 2 == 0){
  console.log("Il numero è pari");
}else{
  console.log("Il numero è dispari");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
*/

  let val = 4;

  if (val < 10 && val >= 5) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }


/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me.city = "Toronto";
console.log(me)


/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName;
console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

me.skills[2] = 0;
console.log(me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

const array = [];


/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */ 
