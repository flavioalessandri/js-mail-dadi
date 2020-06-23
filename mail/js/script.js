
var btn = document.getElementById("btn");
var lista= ["giacomo", "carlo", "maria", "umberto", "admin"]
console.log(lista);

btn.addEventListener("click", function(){

  var mail = document.getElementById("mail").value;
  console.log(mail);

  for ( var i=0; lista.length > i ; i++  ) {

    if(mail === lista[i])  {
      document.getElementById("risultato").innerHTML = "PUOI ACCEDERE!";
    }else{
      document.getElementById("risultato").innerHTML = " NON TI RICONOSCO!";
    }

  };

});
