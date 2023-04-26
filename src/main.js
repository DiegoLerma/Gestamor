const emailToogleMenu=document.querySelector('.navbar-email')
const desktopMenu=document.querySelector('.desktop-menu')
const burgerToogleMenu=document.querySelector('.menu')
const mobileMenu=document.querySelector('.mobile-menu')
const cartToogleMenu=document.querySelector('.navbar-shopping-cart')
const cardsContainer=document.querySelector('.cards-container')
const shoppingCartMenu=document.querySelector('#shoppingCartContainer')
const bodyContainer=document.querySelector('.body')
const productDetailCloser=document.querySelector('.product-detail-close')
const productInfoContainer=document.getElementsByClassName('productCardGeneral')



productList=[]

productList.push({
    title: "Becas UG",
    subtitle: "Becas institucionales que te permitiran continuar con tus estudios",
    image: "https://www.unionguanajuato.mx/wp-content/uploads/2021/03/universidad-de-guanajuato-escudo-1024x576.jpg" ,

    redirect(){
    window.location.href="https://www3.ugto.mx/desarrolloestudiantil/becas/becas-institucionales"
}
})
productList.push({
    title: "Becas JuventudES",
    subtitle: "Becas estatales dirigidas a estudiantes con embarazo",
    image: "https://juventudesgto.guanajuato.gob.mx/wp-content/uploads/Pagina-web-Convocatorias.png" ,

    redirect(){
        window.location.href="https://juventudesgto.guanajuato.gob.mx/index.php/convocatorias/"
    }
})
productList.push({
    title: "Becas Nacionales",
    subtitle: "Becas nacionales para ti",
    image: "https://gaceta.cch.unam.mx/sites/default/files/styles/imagen_articulos_1920x1080/public/2020-11/beca-benito-1.jpg?h=6664ba7b&itok=5n4lFVNm" ,

    redirect(){
        window.location.href="https://www.gob.mx/becasbenitojuarez"
    }})


function renderProducts(arr){
    for(product of arr){
    const productCard=document.createElement('div')
    productCard.classList.add('product-card')

    const productImg=document.createElement('img')
    productImg.setAttribute('src',product.image)
    console.log(product.url)
    productImg.addEventListener('click', product.redirect)
    
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
    productImgCart.setAttribute('src','../assets/icons/heart.svg')
    
    productInfoFigure.appendChild(productImgCart)
    productInfo.append(productInfoDiv,productInfoFigure)

    productCard.append(productImg,productInfo)
    cardsContainer.appendChild(productCard)
}}

function renderInfo(arr){
    for(product of arr){
    
        //Aside
        const productCardClass='product-detail-'+product.id
        const asideInfo=document.createElement('aside')
        asideInfo.classList.add('productCardGeneral')
        asideInfo.classList.add(productCardClass)
        closeProductDetailAside()
        
        
        //Div Close
        const productCardCloseClass='product-detail-close-'+product.id
        const divClose=document.createElement('div')
        divClose.classList.add(productCardCloseClass)
        divClose.classList.add('product-detail-close')
        
        //Img Close
        const imgClose=document.createElement('img')
        imgClose.setAttribute('src','../assets/icons/icon_close.png')
        divClose.addEventListener('click',closeProductDetailAside)
    
        divClose.appendChild(imgClose)
    
        //Img General
        const imgInfo=document.createElement('img')
        imgInfo.setAttribute('src',product.image)
        imgInfo.classList.add('productInfoImage')
        
        //Div Information
        const divInfo=document.createElement('div')
        divInfo.classList.add('product-info')
        
        //p Information
        const pInfoTitle=document.createElement('p')
        pInfoTitle.innerText=product.title
        pInfoTitle.classList.add('productInfoTitle')
        const pInfoContent=document.createElement('p')
        pInfoContent.innerText=product.content
        pInfoContent.classList.add('productInfoContent')
        
        divInfo.append(pInfoTitle,pInfoContent)
        
        //Final Button
        const infoButton=document.createElement('button')
        infoButton.classList.add('primary-button')
        infoButton.classList.add('add-to-cart-button')
        infoButton.addEventListener('click',closeProductDetailAside)
        const infoCheckImg=document.createElement('img')
        infoCheckImg.setAttribute('src','../assets/icons/check-circle.svg')
        const pButton=document.createElement('p')
        pButton.innerText="Marcar como leído"
        pButton.classList.add('productInfoButton')
        
        infoButton.append(infoCheckImg,pButton)
        divInfo.appendChild(infoButton)
    
        //Agrego todo al aside
        asideInfo.append(divClose,imgInfo,divInfo)
        bodyContainer.appendChild(asideInfo)
        // productDetailCloser.addEventListener('click', closeProductDetailAside)
    
    }}

renderProducts(productList)
renderInfo(productList)



emailToogleMenu.addEventListener('click', toggleDesktopMenu)
burgerToogleMenu.addEventListener('click', toggleMobileMenu)
cartToogleMenu.addEventListener('click', toggleCartMenu)
// productDetailCloser.addEventListener('click', closeProductDetailAside)

function toggleDesktopMenu(){
    desktopMenu.classList.toggle("inactive")
    shoppingCartMenu.classList.add("inactive")
    closeProductDetailAside()

}
function toggleMobileMenu(){
    mobileMenu.classList.toggle("inactive")
    shoppingCartMenu.classList.add("inactive")
    closeProductDetailAside()

}
function toggleCartMenu(){
    shoppingCartMenu.classList.toggle("inactive")
    mobileMenu.classList.add("inactive")
    desktopMenu.classList.add("inactive")    
    closeProductDetailAside()

}



function closeProductDetailAside(){
    for (let item of productInfoContainer)
    item.classList.add('inactive')
}

closeProductDetailAside()

