const $ = document

let productsArray = [
    { id: 1, src: "../../img/product-1.png", title: "Quality pet food", price: 17 , count:1},
    { id: 2, src: "../../img/product-2.png", title: "Quality pet food", price: 10 , count:1},
    { id: 3, src: "../../img/product-3.png", title: "Quality pet food", price: 54 , count:1},
    { id: 4, src: "../../img/product-4.png", title: "Quality pet food", price: 7.5 , count:1},
  
    { id: 5, src: "../../img/product-1.png", title: "Quality pet food", price: 16 , count:1},
    {
      id: 6,
      src: "../../img/product-2.png",
      title: "Quality pet food",
      price: 22.5, 
      count:1,
    },
    { id: 7, src: "../../img/product-3.png", title: "Quality pet food", price: 30 , count:1},
    { id: 8, src: "../../img/product-4.png", title: "Quality pet food", price: 14 , count:1},
  
    {
      id: 9,
      src: "../../img/product-1.png",
      title: "Quality pet food",
      price: 18.5,
      count:1,
    },
    { id: 10, src: "../../img/product-2.png", title: "Quality pet food", price: 40 , count:1},
    {
      id: 11,
      src: "../../img/product-3.png",
      title: "Quality pet food",
      price: 11.5,
      count:1,
    },
    { id: 12, src: "../../img/product-4.png", title: "Quality pet foo", price: 21 , count:1},
  ];

const backBtn = $.querySelector('.back-btn')
let productPic = $.querySelector('.product-pic')
let productTitle = $.querySelector('.product-title')
let productPrice = $.querySelector('.product-price')




let mainParams = new URLSearchParams(location.search)
let mainParamsId = mainParams.get('id')

let mainProduct = productsArray.find(function(item){
return item.id ===  Number(mainParamsId)
})

if(mainProduct){
    productPic.setAttribute('src' , mainProduct.src)

    productTitle.innerHTML = mainProduct.title

    productPrice.innerHTML = mainProduct.price + '$'
}else{
    location.href = 'http://127.0.0.1:5050/tailwind/6/src/index.html#'
}







backBtn.addEventListener('click' , function(){
    history.back()
})

