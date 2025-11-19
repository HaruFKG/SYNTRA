$("#Iniciar").click(function() {
    $("#Form").show();
    $("#MenuIniciar").hide();
    document.getElementById("Form").innerHTML = "<form name='Personagem'>"+
    "<input type='text' name='Nick' id='Nome' placeholder='NickName'>"+
    "<button onclick='MostrarDados(event)'>Enviar</button>"+
    "</form> <button id='Voltar'>Voltar</button>";
});
$(document).on("click", "#Voltar", function() {
    $("#Form").hide();
    $("#MenuIniciar").show();
});

function MostrarDados(event){
    event.preventDefault();
    let nome = document.getElementById("Nome").value;
    document.getElementById("Form").innerHTML = `<h1>${nome}</h1>`
}

