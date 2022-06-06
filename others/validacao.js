let botao = document.querySelector(".botão");
var usuario = document.querySelector(".nome");
var senha = document.querySelector(".senha");

function validaFormulario(){
    var usuario = document.querySelector(".nome")
    var senha = document.querySelector(".senha")

    if((usuario.value == "Alef" && senha.value == 12345678) || (usuario.value == "Mayllon" && senha.value == 12345678)){
        // se os programadores logarem no perfil
        alert("Entrei no perfil.")
        location.replace('../index.html')
		
    }
    else {
        alert("Você não entrou no perfil.")
    }
}

botao.addEventListener("click", validaFormulario)

document.addEventListener("keypress", (event) => {
    if (event.key === 'Enter') {
        if (usuario.value != '' && senha.value != '') {
            validaFormulario()
        }
    }
});