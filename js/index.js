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
    } else {
        return valorTotal; //valor sem desconto
}}

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
            itemList +=`<li>${item.nome} - ${item.quantidade}</li>`
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

    } else {
        console.error('Elementos não encontrados no DOM. Verifique seu código')
    }
  
});

//section redes e carrossel
//carrossel youtube

const imgsCarrossel = document.getElementById("carrosselimg");
const carrosselimg = document.querySelectorAll("#carrosselimg img");

let idx = 0;

function carrossel(){
  idx++;
     if(idx > carrosselimg.length -1){
         idx = 0;
     }

     imgsCarrossel.style.transform = `translateX(${-idx*600}px)`;
 }
 setInterval(carrossel, 1800);
 console.log()

// inicio carrossel luth
// document.addEventListener('DOMContentLoaded', () => {
// const carrossel = document.querySelector('.carrossel')
// const items = document.querySelectorAll('.carrossel-item')
// const totalItems = items.length;
// const voltarButton = document.querySelector('.voltar')
// const avancarButton = document.querySelector('.avançar')
// let currentIndex = 0;

// avancarButton.addEventListener('click',()=> {
//     let itemwidth = items[0].clientWidth //pega a largura do 1 item
//     carrossel.scrollLeft += itemwidth //faz o scroll do carrossel
//  })
// fim carrossel luth
//passagem do carrossel
// function updateCarrossel() {
//     carrossel.style.transform = `tranlateX(-${currentIndex * 100}%)`;
//     updateIndicators();
// }

// //avançar carrossel
// function nextItem() {
//     currentIndex = (currentIndex - 1 + totalItems) % totalItems;
//     console.log("avança carrossel", currentIndex) //TESTE
//     updateCarrossel
// }

// //retroceder carrossel
// function prevItem() {
//     currentIndex = (currentIndex - 1 + totalItems) % totalItems;
//     console.log("retrocede carrossel", currentIndex) //TESTE
//     updateCarrossel();
// } 

//click dos botões avançar/retroceder
// avancarButton.addEventListener('click', nextItem)
// voltarButton.addEventListener('click', prevItem)
// console.log

//indicador para quantidade de cards no carrossel
// function createIndicators() {
//     const indicatorsContainer = document.querySelector('.indicators');
//     for (let i = 0; i < totalItems; i++) {
//         const indicator = document.createElement('div');
//         indicator.classList.add('indicator');
//         indicatorsContainer.appendChild(indicator);
//     }
//     document.querySelector('.carrossel-container').appendChild(indicatorsContainer);
// console.log
// }

// //indicador de navegação
// function updateIndicators() {
//     const indicators = document.querySelectorAll('.indicator');
//     indicators.forEach((indicator, index)  => {
//         if (index === currentIndex) {
//             indicator.classList.add('active')
//         } else {
//                 indicator.classList.remove('active')
//             }
//         })
// console.log
// }


//inicia 
// createIndicators();
// updateCarrossel();
// })

//MIX PRODUTOS: aula youtube
ginJson.map((item, index ) => {
    console.log(item)
    let ginItem = document.querySelector('.models .gin-item').cloneNode(true)
    //console.log(pizzaItem)
    document.querySelector('.gin-area').append(ginItem)

    // preencher os dados de cada pizza
    ginItem.querySelector('.gin-item--img img').src = item.img
    ginItem.querySelector('.gin-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`
    ginItem.querySelector('.gin-item--name').innerHTML = item.name
    ginItem.querySelector('.pizza-item--desc').innerHTML = item.description

})


//adiciona e remove do carrinho :produtos
//     const updateQuantidade = (index, quantidade) => {
//         const quantidadeElement = document.getElementById(`quantidade-${index}`);
//         let atualquantidade = parseInt(quantidadeElement.textContent);
//         atualquantidade = increment ? atualquantidade + 1 : Math.max(0, atualquantidade -1);quantidadeElement.textContent = atualquantidade;
//     }
// //botão de adicionar: produtos
//     document.querySelectorAll('.add-button').forEach(button => {
//         button.addEventListener('click', function() {
//             const index = parseInt(this.getAttribute('data-index'));
//             console.log("Adicionando produto", index); //TESTE adição de produto
//             updateQuantidade(index, true);
//         })
//     })
// //botão remover: produtos
//     document.querySelectorAll('.remove-button').forEach(button => {
//         button.addEventListener('click', function() {
//             const index = parseInt(this.getAttribute('data-index'));
//             console.log("Removendo produto", index); //TESTE remoçao de produto
//             updateQuantidade(index, false);
//         })
//     })
// }

//botão voltar ao início da pagina
document.getElementById('voltar-inicio').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
console.log
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
        console.log('Email digitado:', emailValue); //TESTE
        if (emailPattern.test(emailValue)) {
            errorMessage.style.display = 'none';
            console.log('Email válido'); //TESTE
            alert('E-mail subscrito com sucesso!');
        } else {
            errorMessage.textContent = 'Email inválido';
            errorMessage.style.display = 'block';
            console.log('Email inválido'); //TESTE
        }
    })
})

