// var nume =[11, 2, 4, 5,1];
// nume.push(6);
// console.log(nume);
//
// for (var i = 0; i < nume.length; i++) {
//
//   if (nume[i]%2==0) console.log(nume[i]);
// };
//
//
// for (var i = 0; i < nume.length; i= Math.floor(Math.random() * (5-0+1)+0)) {
// console.log(nume[i]);
// };



// var iscritti = ["marco","luca","Giulia"];
//
// console.log(iscritti);
// console.log(iscritti[0]);
//
// iscritti.push("giovanni" , "Giulia");  //aggiunge elemento al mio array iscritti
//
// console.log("iscritti con aggiunta di 2 elementi" , iscritti);
// console.log("array indice 3", iscritti[3]);
// console.log("array indice 3 e 4", iscritti[3],iscritti[4]);
//
// var num = 6;
// num= num++;
// console.log("restituisci",  ++num);
// console.log("restituisci", num++);



// for (var i=0; i<10; i++) {
//   console.log(i);
// };
//
// for (var i=0; i<101; i++) {
//   console.log(i);
// };
//
// for (var i=0; i<=100; i++) {
//   console.log("da 0 a 100",i);
// };
//
// for (var i=100; i>=0; i--) {
//   console.log("da 100 a 0",i);
// };



// var nomi=["ciccio", "ciccia", "fifo", "fafo", "milo"];
// console.log(nomi);
//
// for (var i = 0; i < nomi.length; i++) {
//   console.log("risultato", i);
// }



// var utenteNumero= prompt("Dammi un numero :");
//
// for (var i=0; ind<10 && isNaN(utenteNumero); ind++){
//   var utenteNumero= prompt("Dammi un numero :");
//   console.log("tentativo:", ind);
// };
// alert("minchione!");



// Esercizio Dado - chi fa di piu vince

// dado1 crea bottone per generare numero random
// dado2 crea bottone per generare numero random

// confronta numeri usciti - chi fa di piu vince!

var dado = document.getElementById("dado");

  dado.addEventListener("click", function() {
  var dado1 = Math.floor(Math.random()* (6 - 1 + 1)+1); // (max-min + 1) + min
  console.log(dado1);
  var dado2 = Math.floor(Math.random()* (6 - 1 + 1)+1); // (max-min + 1) + min
  console.log(dado2);

  if (dado1 > dado2) {
    document.getElementById("risultato").innerHTML = "Ha vinto il Primo dado!" , dado1;
  }else if (dado1 < dado2) {
    document.getElementById("risultato").innerHTML = "Ha vinto il Secondo dado!", dado2;
  }else
  document.getElementById("risultato").innerHTML = "Pareggio!";
});



//
// dado1
// var dado1;
// var dado2;
//
// for (i=0; i<3; i++) {
// dado1 = Math.floor(Math.random() * 6+1);
// console.log(dado1);
//
// dado2 = Math.floor(Math.random() * 6+1);
// console.log(dado2);
//
// if(dado1>dado2) {
//   console.log("vince dado1");
// } else if(dado1<dado2){
//   console.log("vince dado2");
// }else{
//   console.log("pareggio");
// }
//
// };
