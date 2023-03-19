const emailToogleMenu=document.querySelector('.navbar-email')
const desktopMenu=document.querySelector('.desktop-menu')
const burgerToogleMenu=document.querySelector('.menu')
const mobileMenu=document.querySelector('.mobile-menu')
const cartToogleMenu=document.querySelector('.navbar-shopping-cart')
const cardsContainer=document.querySelector('.cards-container')
const shoppingCartMenu=document.querySelector('#shoppingCartContainer')
const asideInfo=document.getElementById('product-detail')
const productDetailCloser=document.querySelector('.product-detail-close')

let productList=[]
productList.push({
    title: "Medicamentos prohibidos",
    subtitle: "Conoce qué medicamentos y sustancias no debes tomar durante el embarazo",
    image: "https://images.pexels.com/photos/5207306/pexels-photo-5207306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ,
    content: ""
})
productList.push({
    title: "Análisis de sangre",
    subtitle: "Conoce más sobre tus laboratorios",
    image: "https://images.pexels.com/photos/954585/pexels-photo-954585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ,
    content: ""
})
productList.push({
    title: "Ultrasonido obstétrico",
    subtitle: "Desubre en qué momentos debe realizarse y qué puedes encontrar",
    image: "https://images.pexels.com/photos/7089623/pexels-photo-7089623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ,
    content: ""
})
productList.push({
    title: "Cambios en el estilo de vida",
    subtitle: "¿Qué cambios puedo hacer en mi para que mi bebé esté feliz y sano?",
    image: "https://images.pexels.com/photos/414262/pexels-photo-414262.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ,
    content: ""
})
productList.push({
    title: "Monitoreo fetal",
    subtitle: "Descubre cómo conocer si tu bebé está bien en todo momento",
    image: "https://images.pexels.com/photos/5853667/pexels-photo-5853667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ,
    content: ""
})
productList.push({
    title: "Preguntas frecuentes",
    subtitle: "Analiza las respuestas a las preguntas más frecuentes",
    image: "https://images.pexels.com/photos/6991905/pexels-photo-6991905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ,
    content: ""
})
productList.push({
    title: "Violencia obstétrica",
    subtitle: "Si sufres cualquier forma de violencia en casa, esto podría serte útil",
    image: "https://images.pexels.com/photos/3802075/pexels-photo-3802075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ,
    content: ""
})
productList.push({
    title: "Planificación familiar",
    subtitle: "Descubre el método para no embarazarte ideal para tí",
    image: "https://degrees.fhi360.org/wp-content/uploads/2022/11/blog-fp-22-square-850X567.jpg" ,
    content: ""
})

/* 

<div class="product-card">
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
</div> 

*/



/*
<aside id="product-detail" class="inactive">
  <div class="product-detail-close">
  <img src="./assets/icons/icon_close.png" alt="close">
  </div>
  <img src="https://taracoleman.com/wp-content/uploads/2012/09/pexels-photo-414262-700x1024.jpeg" alt="Plato de comida">
  <div class="product-info">
  <p>Cambios en el estilo de vida</p>
  <p>Durante el embarazo, es importante que las mujeres adopten un estilo de vida saludable para asegurar su propia salud y la del feto. Algunos de los principales cambios en el estilo de vida recomendados para una mujer embarazada incluyen:

        Alimentación saludable: Las mujeres embarazadas deben asegurarse de obtener una nutrición adecuada para apoyar el crecimiento y desarrollo del feto. Se recomienda una dieta equilibrada que incluya una variedad de alimentos ricos en nutrientes, como frutas, verduras, proteínas magras y grasas saludables.
        
        Control del peso: Es importante que las mujeres embarazadas controlen su peso durante el embarazo. El aumento de peso recomendado puede variar según la edad gestacional de la paciente y su índice de masa corporal antes del embarazo.
        
        Actividad física: Las mujeres embarazadas deben mantenerse activas durante el embarazo siempre y cuando no tengan contraindicaciones médicas. El ejercicio regular puede ayudar a mantener una buena salud y disminuir el riesgo de complicaciones durante el embarazo y el parto. Se recomienda consultar con el médico antes de comenzar cualquier programa de ejercicio.
        
        Abstinencia de drogas, tabaco y alcohol: Las mujeres embarazadas deben evitar el consumo de drogas, tabaco y alcohol durante el embarazo, ya que pueden tener efectos negativos en el desarrollo fetal.
        
        Sueño adecuado: Las mujeres embarazadas deben asegurarse de obtener suficiente descanso y sueño de calidad durante el embarazo para mantener su salud física y mental.
        
        Manejo del estrés: El embarazo puede ser un momento emocionalmente estresante para las mujeres, por lo que es importante que aprendan a manejar el estrés y la ansiedad de manera efectiva. Se pueden utilizar técnicas como la meditación, el yoga o la terapia de conversación para ayudar a manejar el estrés durante el embarazo.
        
        Cuidado prenatal regular: Las mujeres embarazadas deben asistir regularmente a las citas de cuidado prenatal para monitorear su salud y la del feto, recibir pruebas y recibir educación sobre el embarazo y el parto.</p>
    <button class="primary-button add-to-cart-button">
      <img src="./assets/icons/check-circle.svg" alt="Leído">
      <p>Marcar como leído</p>
    </button>
  </div>
</aside>
}
 */

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
    productName.innerText=product.subtitle
    const productPrice=document.createElement('p')
    productPrice.innerText=product.title
    
    const productInfoDiv=document.createElement('div')
    productInfoDiv.append(productPrice,productName)
    const productInfoFigure=document.createElement('figure')
    const productImgCart=document.createElement('img')
    productImgCart.setAttribute('src','./assets/icons/heart.svg')
    
    productInfoFigure.appendChild(productImgCart)
    productInfo.append(productInfoDiv,productInfoFigure)

    productCard.append(productImg,productInfo)
    cardsContainer.appendChild(productCard)
}}

// function renderInfo(arr){
// for(product of arr){
//     //Aside
//     const asideInfo=document.createElement('aside')
//     asideInfo.setAttribute('id','product-detail')
//     asideInfo.classList.add('inactive')
//     // productDetailCloser.addEventListener('click', closeProductDetailAside)

    
//     //Div Close
//     const divClose=document.createElement('div')
//     divClose.classList.add('product-detail-close')
    
//     //Img Close
//     const imgClose=document.createElement('img')
//     imgClose.setAttribute('src','./assets/icons/icon_close.png')
//     imgClose.addEventListener('click',closeProductDetailAside)

//     divClose.appendChild(imgClose)

//     //Img General
//     const imgInfo=document.createElement('img')
//     imgInfo.setAttribute('src',product.image)

//     //Div Information
//     const divInfo=document.createElement('div')
//     divInfo.classList.add('product-info')
    
//     //p Information
//     const pInfoTitle=document.createElement('p')
//     pInfoTitle.innerText=product.title
//     const pInfoContent=document.createElement('p')
//     pInfoContent.innerText=product.content

//     divInfo.append(pInfoTitle,pInfoContent)
    
//     //Final Button
//     const infoButton=document.createElement('button')
//     infoButton.classList.add('primary-button')
//     infoButton.classList.add('add-to-cart-button')
//     const infoCheckImg=document.createElement('img')
//     infoCheckImg.setAttribute('src','./assets/icons/check-circle.svg')
//     const pButton=document.createElement('p')
//     pButton.innerText="Marcar como leído"
    
//     infoButton.append(infoCheckImg,pButton)
//     divInfo.appendChild(infoButton)

//     //Agrego todo al aside
//     asideInfo.append(divClose,imgInfo,divInfo)

    // const productCard=document.createElement('div')
    // productCard.classList.add('product-card')

    // const productImg=document.createElement('img')
    // productImg.setAttribute('src',product.image)
    // productImg.addEventListener('click',openProductDetailAside)
    
    // const productInfo=document.createElement('div')
    // productInfo.classList.add('product-info')
    
    // const productName=document.createElement('p')
    // productName.innerText=product.name
    // const productPrice=document.createElement('p')
    // productPrice.innerText=product.price
    
    // const productInfoDiv=document.createElement('div')
    // productInfoDiv.append(productPrice,productName)
    // const productInfoFigure=document.createElement('figure')
    // const productImgCart=document.createElement('img')
    // productImgCart.setAttribute('src','./assets/icons/heart.svg')

    // productInfoFigure.appendChild(productImgCart)
    // productInfo.append(productInfoDiv,productInfoFigure)

    // productCard.append(productImg,productInfo)
    // cardsContainer.appendChild(productCard)


renderProducts(productList)
renderInfo(productList)



emailToogleMenu.addEventListener('click', toggleDesktopMenu)
burgerToogleMenu.addEventListener('click', toggleMobileMenu)
cartToogleMenu.addEventListener('click', toggleCartMenu)
productDetailCloser.addEventListener('click', closeProductDetailAside)

function toggleDesktopMenu(){
    desktopMenu.classList.toggle("inactive")
    shoppingCartMenu.classList.add("inactive")
    asideInfo.classList.add("inactive")
}
function toggleMobileMenu(){
    mobileMenu.classList.toggle("inactive")
    shoppingCartMenu.classList.add("inactive")
    asideInfo.classList.add("inactive")
}
function toggleCartMenu(){
    shoppingCartMenu.classList.toggle("inactive")
    mobileMenu.classList.add("inactive")
    desktopMenu.classList.add("inactive")    
    asideInfo.classList.add("inactive")
}

function openProductDetailAside(){
    asideInfo.classList.remove("inactive")
    mobileMenu.classList.add("inactive")
    desktopMenu.classList.add("inactive")    
    shoppingCartMenu.classList.add("inactive")    
}

function closeProductDetailAside(){
    imgClose.classList.add("inactive")
}
