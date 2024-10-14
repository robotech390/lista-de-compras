import { criarItemDaLista } from "./criarItemDaLista.js";
import { verificarListaVazia } from "./verificarListaVazia.js";

const item = document.getElementById('input-item');
const lista = document.getElementById('lista-de-compras');


export function adicionarItem(evento){
    evento.preventDefault();
    
    if(item.value === ""){
        alert("Por favor, insira um item");
        return;
    }

    const itemdaLista = criarItemDaLista(item)
    lista.appendChild(itemdaLista);
    verificarListaVazia(lista);
    item.value = "";
}