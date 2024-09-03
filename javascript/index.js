// cadastro de desconto 5%
function ativarcupon() {
    let cupom = "PROMOGIN5";
    localStorage.setItem("cupomdesconto", cupom);
    alert(`Parabéns! O desconto de boas vindas será aplicado automaticamente ao final do pedido.`);
}

//aplicação do desconto no checkout
function aplicarDescontoCheckout(valorTotal) {
    let cupomAtivo = localStorage.getItem("cupomdesconto");
    if (cupomAtivo === "PROMOGIN5") {
        let desconto = valorTotal * 0.05;
        let novoTotal = valorTotal - desconto; 
        return novoTotal; //valor com desconto
    }
    else {
        return valorTotal; //valor sem desconto
    }
}

//inserir página de checkout:
// Exemplo: valor total antes do desconto
//const total = 100.00; 
//const totalComDesconto = aplicarDescontoCheckout(total);

//console.log("Valor total com desconto:", totalComDesconto);


//menu superior direito: resumo pedidos:


document.addEventListener('DOMContentLoaded', function() {
    const resumoButton = document.getElementById('resumo-pedidos');
    const resumoContainer = document.getElementById('resumo-container');

    if (resumoButton && resumoContainer) {
        //exemplo de itens
        const items = [
            { nome: 'Gin Azedinho 1L', quantidade: 1},
            { nome: 'Gin Docinho 1L', quantidade: 3}
        ];

        //lista de itens
        let itemList = '<ul>';
        items.forEach(item => {
            itemList += li>${item.nome} - ${item.quantidade}</li>;
        });
        itemList += '</ul>'; 

        //mouse passa por cima: exibe lista
        resumoButton.addEventListener('mouseover', function() {
            resumoContainer.innerHTML = itemList;
            resumoContainer.style.display = 'block';
        });

        //click no botão: tbm exibe lista
        resumoButton.addEventListener('click', function() {
            event.preventDefault();
            resumoContainer.innerHTML = itemList;
            resumoContainer.style.display = 'block';
        });

        //mouse sai de cima: some a lista
        resumoButton.addEventListener('mouseout', function() {
            resumoContainer.style.display = 'none';
        });
        //click fora
        document.addEventListener('click', function(event) {
            if (!resumoButton.contains(event.target) && !resumoContainer.contains(event.target)) {
                resumoContainer.style.display = 'none';
            }
        });

    else {
        console.error('Elementos não encontrados no DOM');
    } 
});
