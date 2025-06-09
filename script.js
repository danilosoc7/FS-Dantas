// Função que rola os cases
function scrollCases(direction) {
  const container = document.getElementById('casesCarousel');
  const slide = container.querySelector('.case-slide');
  const slideWidth = slide.offsetWidth + 30; // largura + gap
  container.scrollBy({
    left: direction * slideWidth,
    behavior: 'smooth'
  });
}


// Função que altera a cor do header ao rolar a página
window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  const scrollTop = window.scrollY;

  if (scrollTop > 10) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});


// Função que faz a animação dos números
function animateNumbers() {
  const counters = document.querySelectorAll('.numero');

  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    const duration = 1500; // duração da animação em milissegundos
    const start = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - start;
      const progress = Math.min(elapsed / duration, 1);
      const currentValue = Math.floor(progress * target);

      counter.innerText = currentValue;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        counter.innerText = target;
      }
    }

    requestAnimationFrame(update);
  });
}

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateNumbers();
      observer.disconnect(); // Remove se quiser rodar apenas uma vez
    }
  });
}, {
  threshold: 0.1
});

const targetSection = document.querySelector('#quem-somos');
if (targetSection) {
  observer.observe(targetSection);
}


// Função que abre e fecha o menu hamburguer
const toggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Fechar o menu quando clicar em um link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('show');
  });
});



// let slides = ['banner1.png', 'banner2.png'];
// let tam = slides.length;
// let satual = 0;
// let tmpSlider;

// function trocaAuto(){
//   satual++;
//   if (satual >= tam){
//     satual = 0;
//   }
//   document.getElementById('banner').style.backgroundImage = `url('${slides[satual]}')`;
// }

// function iniciarSlider(){
//   document.getElementById('banner').style.backgroundImage = `url('${slides[satual]}')`;
//   tmpSlider = setInterval(trocaAuto, 7000); // Trocar a cada 7 segundos.
// }

// function parar(){
//   clearInterval(tmpSlider);
// }

// function troca(dir){
//   satual += dir;
//   if (satual < 0){
//     satual = tam - 1;
//   } else if (satual >= tam){
//     satual = 0;
//   }
//   document.getElementById('banner').style.backgroundImage = `url('${slides[satual]}')`;
// }  
//   window.addEventListener('load', iniciarSlider); // Chamar a função iniciarSlider para começar a apresentação quando a página for carregada.




// if (document.readyState == 'loading') {
//   document.addEventListener('DOMContentLoaded', ready)
// } else {
//   ready()
// }

// var totalAmount = "0,00"

// function ready() {
//   // Botão remover produto
//   const removeCartProductButtons = document.getElementsByClassName("remove-product-button")
//   for (var i = 0; i < removeCartProductButtons.length; i++) {
//     removeCartProductButtons[i].addEventListener("click", removeProduct)
//   }

//   // Mudança valor dos inputs
//   const quantityInputs = document.getElementsByClassName("product-qtd-input")
//   for (var i = 0; i < quantityInputs.length; i++) {
//     quantityInputs[i].addEventListener("change", checkIfInputIsNull)
//   }

//   // Botão add produto ao carrinho
//   const addToCartButtons = document.getElementsByClassName("button-hover-background")
//   for (var i = 0; i < addToCartButtons.length; i++) {
//     addToCartButtons[i].addEventListener("click", addProductToCart)
//   }

//   // Botão comprar
//   const purchaseButton = document.getElementsByClassName("purchase-button")[0]
//   purchaseButton.addEventListener("click", makePurchase)
// }

// function removeProduct(event) {
//   event.target.parentElement.parentElement.remove()
//   updateTotal()
// }

// function checkIfInputIsNull(event) {
//   if (event.target.value === "0") {
//     event.target.parentElement.parentElement.remove()
//   }

//   updateTotal()
// }

// function addProductToCart(event) {
//   const button = event.target
//   const productInfos = button.parentElement.parentElement
//   const productImage = productInfos.getElementsByClassName("product-image")[0].src
//   const productName = productInfos.getElementsByClassName("product-title")[0].innerText
//   const productPrice = productInfos.getElementsByClassName("product-price")[0].innerText

//   const productsCartNames = document.getElementsByClassName("cart-product-title")
//   for (var i = 0; i < productsCartNames.length; i++) {
//     if (productsCartNames[i].innerText === productName) {
//       productsCartNames[i].parentElement.parentElement.getElementsByClassName("product-qtd-input")[0].value++
//       updateTotal()
//       return
//     }
//   }

//   let newCartProduct = document.createElement("tr")
//   newCartProduct.classList.add("cart-product")

//   newCartProduct.innerHTML =
//     `
//       <td class="product-identification">
//         <img src="${productImage}" alt="${productName}" class="cart-product-image">
//         <strong class="cart-product-title">${productName}</strong>
//       </td>
//       <td>
//         <span class="cart-product-price">${productPrice}</span>
//       </td>
//       <td>
//         <input type="number" value="1" min="0" class="product-qtd-input">
//         <button type="button" class="remove-product-button">Remover</button>
//       </td>
//     `

//   const tableBody = document.querySelector(".cart-table tbody")
//   tableBody.append(newCartProduct)
//   updateTotal()

//   newCartProduct.getElementsByClassName("remove-product-button")[0].addEventListener("click", removeProduct)
//   newCartProduct.getElementsByClassName("product-qtd-input")[0].addEventListener("change", checkIfInputIsNull)
// }

// function makePurchase() {
//   if (totalAmount === "0,00") {
//     alert("Seu carrinho está vazio!")
//   } else {   
//     alert(
//       `
//         Obrigado pela sua compra!
//         Valor do pedido: R$${totalAmount}\n
//         Volte sempre :)
//       `
//     )

//     document.querySelector(".cart-table tbody").innerHTML = ""
//     updateTotal()
//   }
// }

// // Atualizar o valor total do carrinho
// function updateTotal() {
//   const cartProducts = document.getElementsByClassName("cart-product")
//   totalAmount = 0

//   for (var i = 0; i < cartProducts.length; i++) {
//     const productPrice = cartProducts[i].getElementsByClassName("cart-product-price")[0].innerText.replace("R$", "").replace(",", ".")
//     const productQuantity = cartProducts[i].getElementsByClassName("product-qtd-input")[0].value

//     totalAmount += productPrice * productQuantity
//   }

//   totalAmount = totalAmount.toFixed(2)
//   totalAmount = totalAmount.replace(".", ",")
//   document.querySelector(".cart-total-container span").innerText = "R$" + totalAmount
// }