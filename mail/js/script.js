

//aggiungo variabile bottone
var btn = document.getElementById("btn");
//aggiungo lista - array di elementi stringa
var lista= ["giacomo", "carlo", "maria", "umberto", "admin", "gino"];
console.log(lista);

//aggiungo un "ascoltatore" al click del mio bottone
btn.addEventListener("click", function(){

  var verifyMail = false;   //variabile booleana di appoggio
  var mail = document.getElementById("mail").value;
  console.log("hai digitato" , mail);

  for ( var i=0; lista.length > i ; i++) {
    var myMail = lista[i];
    if(mail == myMail) {
    verifyMail = true;
    }
  }

  // esco dal for e richiamo la variabile di appoggio
  if (verifyMail == true){
  document.getElementById("risultato").innerHTML = mail + " BENVENUTO!";
  } else{
    document.getElementById("risultato").innerHTML = " MI DISPIACE, LA TUA MAIL NON E'PRESENTE IN ARCHIVIO!";
  }
}); //chiudo addEventListener di btn
