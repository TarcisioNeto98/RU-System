var matricula = document.querySelector("input[name=matricula]");
var numero = document.querySelector("input[name=numero]");
var enviar = document.querySelector("form");
var cpf = document.querySelector("input[name=cpf]");

function CPF(strCPF) {
    var Soma;
    var Resto;
    Soma = 0;
  if (strCPF == "00000000000") return false;
     
  for (i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
  Resto = (Soma * 10) % 11;
   
    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10)) ) return false;
   
  Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;
   
    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11) ) ) return false;
    return true;
}

/*function eh_numero(numero){
	if(isNaN(parseFloat(numero))){
		return false;
	}
	return true;
}*/

$(enviar).submit(function(){
	if(!CPF(cpf.value) || !$.isNumeric(cpf.value)){
		alert("CPF invalido!");
		return false;
	}
	else if(!($.isNumeric(matricula.value)) || matricula.value.length != 6){
		alert("Matricula Invalida!");
		return false;
	}
	else if(!$.isNumeric(numero.value)){
		alert("Número de residência invalido!");
		return false;
	}
	return true;
});
