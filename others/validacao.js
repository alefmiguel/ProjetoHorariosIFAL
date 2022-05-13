let botao = document.querySelector(".botão")

botao.addEventListener("click", function(){
    var usuario = document.querySelector(".nome")
    var senha = document.querySelector(".senha")

    if((usuario.value == "Alef" && senha.value == 12345678) || (usuario.value == "Mayllon" && senha.value == 12345678)){
        // se os programadores logarem no perfil
        alert("Entrei no perfil.")
		
    }
    else {
        alert("Você não entrou no perfil.")
    }
})