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
            itemList += li>${item.nome} - ${item.quantidade}</li>
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
        console.error('Elementos não encontrados no DOM. Verifique seu código')
    } 
});

//section redes e carrossel
    //elementos do carrossel e botões de navegação
const carrossel = document.querySelector('.carrossel')
const items = document.querySelectorAll('.carrossel-item')
const totalItems = items.length;
const voltarButton = document.querySelector('.voltar')
const avancarButton = Document.querySelector('.avançar')
let correntIndex = 0;

//passagem do carrossel
function updateCarrossel() {
    carrossel.style.transform = `tranlateX(-${currentIndex * 100}%)`;
    updateIndicators();
}

//avançar carrossel
function nextItem() {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    updateCarrossel
}

//retroceder carrossel
function prevItem() {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    updateCarrossel();
} 

//click dos botões avançar/retroceder
avancarButton.addEventListener('click', nextItem)
voltarButton.addEventListener('click', prevItem)

//indicador para quantidade de cards no carrossel
function createIndicators() {
    const indicatorsContainer = document.querySelector('.indicators');
    for (let i = 0; i < totalItems; i++) {
        const indicator = document.createElement('div');
        indicator.classList.add('indicator');
        indicatorsContainer.appendChild(indicator);
    }
    document.querySelector('.carrossel-container').appendChild(indicatorsContainer);
}

//indicador de navegação
function updateIndicators() {
    const indicators = document.querySelectorAll('.indicator');
    indicators.forEach((indicator, index)  => {
        if (index === currentIndex) {
            indicator.classList.add('active')
        else {
                indicator.classList.remove('active')
            }
        }
    })
}
//inicia 
createIndicators();

//botão voltar ao início da pagina
document.getElementById('voltar-inicio').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
})


//subscrição de email
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('subscription-form');
    const emailInput = document.getElementById('email');
    const errorMessage = document.getElementById('error-message');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        //pra validar o email:
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const emailValue = emailInput.value;
        if (emailPattern.test(emailValue)) {
            errorMessage.style.display = 'none';
            alert('E-mail subscrito com sucesso!');
        else {
            errorMessage.textContent = 'Email inválido';
            errorMessage.style.display = 'block';
        }
    }

})

