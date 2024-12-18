/* Scrivi un programma che stampi i numeri da 1 a 100, ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz. */

//Ciclo che genera numeri da 1 a 100
for (let i = 1; i <= 100; i++) {
  //Controllo che il numero sia divisibile per 3 e 5
  if (i % 3 == 0 && i % 5 == 0) {
    console.log(`${i} FIZZBUZZ`);
  } else if (i % 3 == 0) {
    console.log(`${i} FIZZ`);
  } else if (i % 5 == 0) {
    console.log(`${i} BUZZ`);
  } else {
    console.log(i);
  }
}
