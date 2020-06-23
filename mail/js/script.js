
var btn = document.getElementById("btn");
var lista= ["giacomo", "carlo", "maria", "umberto", "admin", "gino"];
console.log(lista);



btn.addEventListener("click", function(){
  var verify = false;
  var mail = document.getElementById("mail").value;
  console.log("hai digitato" , mail);

  for ( var i=0; lista.length > i ; i++) {
    if(mail == lista[i]) {
     verify = true;
    } else{
      document.getElementById("risultato").innerHTML = " NON TI RICONOSCO!";
    }
  }

  if (verify == true){
  document.getElementById("risultato").innerHTML = mail + " BENVENUTO!";
  }
});
