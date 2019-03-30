var usuario = document.getElementById("usuario");
var senha = document.getElementById("senha");
var botao = document.getElementById("entrar");
var validar = document.querySelector("form");

/*botao.addEventListener("click", function(event){
	var mensagem = document.getElementById("validar");
	mensagem.textContent = "";
	if(usuario.value != "neto123"){
		mensagem.innerHTML = "Nome de usuário incorreto!";
		event.preventDefault();
	}
	else if(senha.value != "red123"){
		mensagem.innerHTML = "Senha incorreta!";
		event.preventDefault();
	}
});*/

$(validar).submit(function(){
	var mensagem = document.getElementById("validar");
	mensagem.textContent = "";
	if(usuario.value != "neto123"){
		mensagem.innerHTML = "Nome de usuário incorreto!";
		return false;
	}
	else if(senha.value != "red123"){
		mensagem.innerHTML = "Senha incorreta!";
		return false;
	}
	return true;
});
//$(senha).css({"background-color": "#333333"});



/*senha.addEventListener('invalid', function(event){
	//senha.setCustomValidity("email invalido");
	event.preventDefault();
	// verifica a validade e mostra o alert
	if (!senha.validity.valid) {
		alert(event);
	}
})*/


/*var array = new Array();

array.push(1);
array.push(2);
array.push(4);

$.each(array, function(index, item){
	alert(array[index]);
});*/
