const msgVazia = document.getElementById("mensagem-lista-vazia");

export function verificarListaVazia(lista){

    console.log(lista);
    

    if(lista.querySelectorAll("li").length === 0){
        msgVazia.style.display = "block";
    }else{
        msgVazia.style.display = "none";
    }
}