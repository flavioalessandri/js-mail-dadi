
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
