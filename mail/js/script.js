
var btn = document.getElementById("btn");
var lista= ["giacomo", "carlo", "maria", "umberto", "admin", "gino"];
console.log(lista);

btn.addEventListener("click", function(){

  var mail = document.getElementById("mail").value;
  console.log("hai digitato" , mail);

  for ( var i=0; lista.length > i ; i++) {
    console.log(lista[i]);

    if(mail == lista[i]) {
      document.getElementById("risultato").innerHTML = "PUOI ACCEDERE!" + lista[i];
    } else{
      document.getElementById("risultato").innerHTML = " NON TI RICONOSCO!";
    }
  }

});
