import { excluirItem } from "./excluir.js";
import { editarItem } from "./editarItem.js";
import { verificarListaComprados } from "./verificaListaComprados.js";

const listaComprados = document.getElementById('lista-comprados')
const lista = document.getElementById('lista-de-compras');
let contador = 0;

export function criarItemDaLista(item){
    const novoItem = document.createElement('li');
    const container = document.createElement('div');
    container.classList.add("item-lista-container");

    const containerNovoItem = document.createElement('div');

    const containerCheck = document.createElement('div');
    containerCheck.classList.add('checkbox-container');
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('checkbox-input')
    checkbox.id = 'checkbox-' + contador++;

    const checkboxLabel = document.createElement('label');
    checkboxLabel.setAttribute('for', checkbox.id);

    checkboxLabel.addEventListener('click', (evento) => {
        const checkboxInput = evento.currentTarget.querySelector('.checkbox-input');
        const checkboxCustomizado = evento.currentTarget.querySelector('.checkbox-customizado');
        const itemTitulo = evento.currentTarget.closest('li').querySelector('#item-titulo');

        if(checkboxInput.checked){
            checkboxCustomizado.classList.add('checked');
            itemTitulo.style.textDecoration = 'line-through';
            listaComprados.appendChild(novoItem);

        }else{
            checkboxCustomizado.classList.remove('checked');
            itemTitulo.style.textDecoration = 'none';
            lista.appendChild(novoItem);
        }
   
        verificarListaComprados(listaComprados)
    });

    const checkboxCustomizado = document.createElement('div');
    checkboxCustomizado.classList.add('checkbox-customizado');

    checkboxLabel.appendChild(checkbox);
    checkboxLabel.appendChild(checkboxCustomizado);

    containerCheck.appendChild(checkboxLabel);
    containerNovoItem.appendChild(containerCheck);


    const nomeItem = document.createElement('p');
    nomeItem.id = "item-titulo";
    nomeItem.innerText = item.value;
    containerNovoItem.appendChild(nomeItem);

    const containerBotao = document.createElement('div');
    const botaoRemove = document.createElement('button');
    const botaoEdita = document.createElement('button');
    botaoRemove.classList.add('botao-acao');
    botaoEdita.classList.add('botao-acao');

    const imgRemover = document.createElement('img');
    imgRemover.src = 'img/delete.svg';
    imgRemover.alt = 'Remover';

    botaoRemove.addEventListener('click', () =>{ 
        excluirItem(novoItem);
    })


    const imgEdita = document.createElement('img');
    imgEdita.src = 'img/edit.svg';
    imgEdita.alt = 'Editar';

    botaoEdita.addEventListener("click", function(){
        editarItem(novoItem);
    });

    botaoRemove.appendChild(imgRemover);
    botaoEdita.appendChild(imgEdita);

    containerBotao.appendChild(botaoRemove);
    containerBotao.appendChild(botaoEdita);

    container.appendChild(containerNovoItem);
    container.appendChild(containerBotao);

    const itemData = document.createElement('p');
    itemData.innerText = `${new Date().toLocaleDateString('pt-BR', {weekday: "long"})} (${new Date().toLocaleDateString()}) às ${new Date().toLocaleTimeString("pt-br", {hour: "numeric", minute: 'numeric'})}`
    
    itemData.classList.add("item-lista-texto");

    novoItem.appendChild(container);
    novoItem.appendChild(itemData);

    return novoItem;
}