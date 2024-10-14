export const editarItem = (elemento) => {
    let novoItem = prompt("Digite o novo nome do item:");

    if(novoItem !== null && novoItem.trim() !== ""){
        const itemTextoAtt = elemento.querySelector("#item-titulo");
        itemTextoAtt.textContent = novoItem

        const data = elemento.querySelector('.item-lista-texto')
        data.textContent = `${new Date().toLocaleDateString('pt-BR', {weekday: "long"})} (${new Date().toLocaleDateString()}) às ${new Date().toLocaleTimeString("pt-br", {hour: "numeric", minute: 'numeric'})}`
    
        const estavaComprado = elemento.querySelector('.checkbox-input').checked;

        if(estavaComprado){
            elemento.querySelector(".checkbox-input").checked = true;
            elemento.querySelector(".checkbox-customizado").classList.add("checked");
            itemTextoAtt.style.textDecoration = 'line-through';
        }
    }
}