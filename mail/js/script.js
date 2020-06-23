

//aggiungo variabile bottone
var btn = document.getElementById("btn");
//aggiungo lista - array di elementi stringa
var lista= ["giacomo", "carlo", "maria", "umberto", "admin", "gino"];
console.log(lista);

//aggiungo un "ascoltatore" al click del mio bottone
btn.addEventListener("click", function(){

  var verify = false;   //variabile booleana di appoggio
  var mail = document.getElementById("mail").value;
  console.log("hai digitato" , mail);

  for ( var i=0; lista.length > i ; i++) {
    if(mail == lista[i]) {
     verify = true;
    } else{
      document.getElementById("risultato").innerHTML = " NON TI RICONOSCO!";
    }
  }

  // esco dal for e richiamo la variabile di appoggio
  if (verify == true){
  document.getElementById("risultato").innerHTML = mail + " BENVENUTO!";
  }
});
