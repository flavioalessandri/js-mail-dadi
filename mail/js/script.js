
var btn = document.getElementById("btn");
var lista= ["giacomo", "carlo", "maria", "umberto", "admin", "gino"];
console.log(lista);



btn.addEventListener("click", function(){
  var verifica;
  var mail = document.getElementById("mail").value;
  console.log("hai digitato" , mail);

  for ( var i=0; lista.length > i ; i++) {
    if(mail == lista[i]) {
      var ok = lista[i];
    } else{
      document.getElementById("risultato").innerHTML = " NON TI RICONOSCO!";
    }
  }
  document.getElementById("risultato").innerHTML = verifica;
});
