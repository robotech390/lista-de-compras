import { verificarListaComprados } from "./verificaListaComprados.js";
import { verificarListaVazia } from "./verificarListaVazia.js";

const listadeCompras = document.getElementById('lista-de-compras');
const listaComprados = document.getElementById('lista-comprados');

const excluirItem = (elemento) => {
    let confirmacao = confirm("Tem certeza que deseja excluir esse item?");

    if(confirmacao){
        elemento.remove();

        verificarListaVazia(listadeCompras);
        verificarListaComprados(listaComprados);
    }
}

export {excluirItem};