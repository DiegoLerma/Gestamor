const emailToogleMenu=document.querySelector('.navbar-email')
const desktopMenu=document.querySelector('.desktop-menu')
const burgerToogleMenu=document.querySelector('.menu')
const mobileMenu=document.querySelector('.mobile-menu')
const cartToogleMenu=document.querySelector('.navbar-shopping-cart')
const cardsContainer=document.querySelector('.cards-container')
const shoppingCartMenu=document.querySelector('#shoppingCartContainer')
const productDetailContainer=document.querySelector('#product-detail')
const productDetailCloser=document.querySelector('.product-detail-close')

emailToogleMenu.addEventListener('click', toggleDesktopMenu)
burgerToogleMenu.addEventListener('click', toggleMobileMenu)
cartToogleMenu.addEventListener('click', toggleCartMenu)
productDetailCloser.addEventListener('click', closeProductDetailAside)

function toggleDesktopMenu(){
    desktopMenu.classList.toggle("inactive")
    shoppingCartMenu.classList.add("inactive")
    productDetailContainer.classList.add("inactive")
}
function toggleMobileMenu(){
    mobileMenu.classList.toggle("inactive")
    shoppingCartMenu.classList.add("inactive")
    productDetailContainer.classList.add("inactive")
}
function toggleCartMenu(){
    shoppingCartMenu.classList.toggle("inactive")
    mobileMenu.classList.add("inactive")
    desktopMenu.classList.add("inactive")    
    productDetailContainer.classList.add("inactive")
}

function openProductDetailAside(){
    productDetailContainer.classList.remove("inactive")
    mobileMenu.classList.add("inactive")
    desktopMenu.classList.add("inactive")    
    shoppingCartMenu.classList.add("inactive")    
}

function closeProductDetailAside(){
    productDetailContainer.classList.add("inactive")
}

let productList=[]
productList.push({
    price: "Medicamentos prohibidos",
    name: "Conoce qué medicamentos y sustancias no debes tomar durante el embarazo",
    image: "https://images.pexels.com/photos/5207306/pexels-photo-5207306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ,
})
productList.push({
    price: "Análisis de sangre",
    name: "Conoce más sobre tus laboratorios",
    image: "https://images.pexels.com/photos/954585/pexels-photo-954585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ,
})
productList.push({
    price: "Ultrasonido obstétrico",
    name: "Desubre en qué momentos debe realizarse y qué puedes encontrar",
    image: "https://images.pexels.com/photos/7089623/pexels-photo-7089623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ,
})
productList.push({
    name: "¿Qué cambios puedo hacer en mi para que mi bebé esté feliz y sano?",
    price: "Cambios en el estilo de vida",
    image: "https://images.pexels.com/photos/414262/pexels-photo-414262.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ,
})
productList.push({
    name: "Descubre cómo conocer si tu bebé está bien en todo momento",
    price: "Monitoreo fetal",
    image: "https://images.pexels.com/photos/5853667/pexels-photo-5853667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ,
})
productList.push({
    name: "Analiza las respuestas a las preguntas más frecuentes",
    price: "Preguntas frecuentes",
    image: "https://images.pexels.com/photos/6991905/pexels-photo-6991905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ,
})
productList.push({
    name: "Si sufres cualquier forma de violencia en casa, esto podría serte útil",
    price: "Violencia obstétrica",
    image: "https://images.pexels.com/photos/3802075/pexels-photo-3802075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ,
})
productList.push({
    name: "Descubre el método para no embarazarte ideal para tí",
    price: "Planificación familiar",
    image: "https://degrees.fhi360.org/wp-content/uploads/2022/11/blog-fp-22-square-850X567.jpg" ,
})

/* <div class="product-card">
<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
<div class="product-info">
  <div>
    <p>$120,00</p>
    <p>Bike</p>
  </div>
  <figure>
    <img src="./icons/bt_add_to_cart.svg" alt="">
  </figure>
</div>
</div> */

function renderProducts(arr){
for(product of arr){
    const productCard=document.createElement('div')
    productCard.classList.add('product-card')

    const productImg=document.createElement('img')
    productImg.setAttribute('src',product.image)
    productImg.addEventListener('click',openProductDetailAside)
    
    const productInfo=document.createElement('div')
    productInfo.classList.add('product-info')

    
    const productName=document.createElement('p')
    productName.innerText=product.name
    const productPrice=document.createElement('p')
    productPrice.innerText=product.price
    
    const productInfoDiv=document.createElement('div')
    productInfoDiv.append(productPrice,productName)
    const productInfoFigure=document.createElement('figure')
    const productImgCart=document.createElement('img')
    productImgCart.setAttribute('src','./assets/icons/heart.svg')

    productInfoFigure.appendChild(productImgCart)
    productInfo.append(productInfoDiv,productInfoFigure)

    productCard.append(productImg,productInfo)
    cardsContainer.appendChild(productCard)
}
}

renderProducts(productList)