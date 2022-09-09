const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const menuIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const shoppIcon = document.querySelector('.icon-shopping')
const productDetail = document.querySelector('.product-detail')
const cardsContainer = document.querySelector('.cards-container')

menuEmail.addEventListener('click', toggleDesktopMenu)
menuIcon.addEventListener('click', toggleMobileMenu)
shoppIcon.addEventListener('click', toggleProductDetail)

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive')

}

function toggleProductDetail() {
    productDetail.classList.toggle('inactive')
}


const productList = []

productList.push(
    {
        name: 'Bike',
        price: 120,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
        name: 'Mackbook pro',
        price: 1200,
        image: 'https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP858/mbp16-gray.png'
    },
    {
        name: 'Smart Tv 80"',
        price: 520,
        image: 'https://compucentro.co/wp-content/uploads/UN55AU7000KXZL-Samsung-4K-55-frente-diagonal-2.png'
    },
    {
        name: 'ipad pro',
        price: 920,
        image: 'https://assets.stickpng.com/images/61d4a5448b51e20004664d4a.png'
    },{
        name: 'Bike',
        price: 120,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
        name: 'Mackbook pro',
        price: 1200,
        image: 'https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP858/mbp16-gray.png'
    },
    {
        name: 'Smart Tv 80"',
        price: 520,
        image: 'https://compucentro.co/wp-content/uploads/UN55AU7000KXZL-Samsung-4K-55-frente-diagonal-2.png'
    },
    {
        name: 'ipad pro',
        price: 920,
        image: 'https://assets.stickpng.com/images/61d4a5448b51e20004664d4a.png'
    },{
        name: 'Bike',
        price: 120,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
        name: 'Mackbook pro',
        price: 1200,
        image: 'https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP858/mbp16-gray.png'
    },
    {
        name: 'Smart Tv 80"',
        price: 520,
        image: 'https://compucentro.co/wp-content/uploads/UN55AU7000KXZL-Samsung-4K-55-frente-diagonal-2.png'
    },
    {
        name: 'ipad pro',
        price: 920,
        image: 'https://assets.stickpng.com/images/61d4a5448b51e20004664d4a.png'
    }
)

function renderProducts (arrayProducts){

    for (product of arrayProducts){
        
        const productCard = document.createElement('div')
        productCard.classList.add('product-card')
    
        const img = document.createElement('img')
        img.setAttribute('src', product.image)
    
        const productInfo = document.createElement('div')
        productInfo.classList.add('product-info')
    
        const productInfoDiv = document.createElement('div')
    
        const productPrice = document.createElement('p')
        productPrice.innerText = '$' + product.price
        const productName = document.createElement('p')
        productName.innerText = product.name
    
        const productInfoFigure = document.createElement('figure')
        
        const productImgCard = document.createElement('img')
        productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg')
    
        productInfoFigure.appendChild(productImgCard)
        productInfoDiv.append(productPrice, productName)
        productInfo.append(productInfoDiv, productInfoFigure)
        productCard.append(img, productInfo)
        
        cardsContainer.appendChild(productCard)
        
    
    }
}

renderProducts(productList)
