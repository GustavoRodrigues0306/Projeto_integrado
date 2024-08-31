// cadastro de desconto 5%
function ativarcupon() {
    let cupom = "PROMOGIN5";
    localStorage.setItem("cupomdesconto", cupom);
    alert(`Parabéns! O desconto de boas vindas será aplicado automaticamente ao final do pedido.`);
}

//aplicação do desconto no checkout
function aplicar-desconto-checkout(valor-total) {
    let cupom-ativo = localStorage.getItem("cupomdesconto");
    if (cupom-ativo === "PROMOGIN5") {
        let desconto = valorTotal * 0.05;
        let novo-total = valorTotal - desconto; 
        return novo-total; //valor com desconto
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


//menu superior direito: checkout, resumo pedidosmenu superior direito: checkout, resumo pedidos
