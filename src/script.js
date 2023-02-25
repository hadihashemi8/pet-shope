const $ = document;
// slideBar and navbar part
const slideMenu = $.querySelector("#navbar");
const slideBar = $.querySelector("#slideBar");
const slidePagebtn = $.querySelector("#slide-Pagebtn");
const slidePagebtnNav = $.querySelector("#slide-PagebtnNav");
const secondSlideBar = $.querySelector("#second-slideBar");
const secondSlideBarNav = $.querySelector("#second-slideBarNav");
const pageIcon = $.querySelector(".pageIcon");
const navPart = $.querySelector("#navPart");


slidePagebtnNav.addEventListener("click", function () {
  secondSlideBarNav.classList.toggle("active2");
  secondSlideBarNav.setAttribute("style", "transition:all .3s");
  pageIcon.classList.toggle("active3");
  pageIcon.setAttribute("style", "transition:all .3s");
  
  secondSlideBarNav.focus()
});

secondSlideBarNav.addEventListener('blur' , function(){
  secondSlideBarNav.classList.remove("active2")
  // secondSlideBarNav.style.backgroundColor = 'red'
})
slidePagebtn.addEventListener("click", function () {
  secondSlideBar.classList.toggle("active2");
  secondSlideBar.setAttribute("style", "transition:all .3s");
  pageIcon.classList.toggle("active3");
  pageIcon.setAttribute("style", "transition:all .3s");
});
slideMenu.addEventListener("click", function () {
  slideBar.classList.toggle("h-[280px]");
  slideBar.setAttribute("style", "transition:all .3s");
  secondSlideBar.classList.remove("active2");
  pageIcon.classList.remove("active3");
});
window.addEventListener("scroll", function (event) {
  if (document.documentElement.scrollTop > 113) {
    navPart.className =
      " fixed  top-0 z-20 left-0 w-full small:flex small:flex-wrap    small:flex-row small:justify-between small:item-center p-2  lg:p-0 bg-white drop-shadow-md ";
    titleHeader.classList.add("lg:text-2xl");
    titleIcon.classList.add("lg:text-2xl");
    backTop.className =
      "fas fa-angle-up fixed right-[5%]  p-4 bg-green1 z-50 cursor-pointer text-white hover:text-black transition-all duration-500 bottom-0";
  } else if (document.documentElement.scrollTop == 0) {
    navPart.className =
      "w-full small:flex small:flex-wrap  small:flex-row small:justify-between small:item-center p-2  lg:p-0";
    titleHeader.classList.remove("lg:text-2xl");
    titleIcon.classList.remove("lg:text-2xl");
    backTop.className =
      "fas fa-angle-up fixed right-[5%] -bottom-full p-4 bg-green1 z-50 cursor-pointer text-white hover:text-black transition-all duration-500";
  }
});
// back to top
const titleHeader = $.querySelector("#title");
const titleIcon = $.querySelector("#title-icon");
const backTop = $.querySelector("#backTop");
backTop.addEventListener("click", function () {
  window.scrollTo(0, 0);
  document.body.setAttribute("style", "transition:all 3s ");
});
// play video part
const playIcon = $.querySelector("#playIcon");
const videoPart = $.querySelector("#videoPart");
const closeVideo = $.querySelector("#closeVideo");
playIcon.addEventListener("click", function () {
  videoPart.classList.replace("-top-full", "top-0");
});
closeVideo.addEventListener("click", function () {
  videoPart.classList.add("-top-full");
});

// About part
const overMissionBtn = $.querySelector("#overMissionBtn");
const overVissionBtn = $.querySelector("#overVissionBtn");
const overMissionPart = $.querySelector("#overMissionPart");
const overVissionPart = $.querySelector("#overVissionPart");

overMissionBtn.addEventListener("click", function () {
  overMissionBtn.classList.add("bg-green1", "text-white");
  overVissionBtn.classList.remove("bg-green1", "text-white");
  overMissionPart.classList.replace("hidden", "block");
  overVissionPart.classList.add("hidden", "transition-all", "duration-500");
});

overVissionBtn.addEventListener("click", function () {
  overVissionBtn.classList.add("bg-green1", "text-white");
  overMissionBtn.classList.remove("bg-green1", "text-white");
  overVissionPart.classList.replace("hidden", "block");
  overMissionPart.classList.add("hidden", "transition-all", "duration-500");
});
window.addEventListener("load", function () {
  overMissionBtn.classList.add("bg-green1", "text-white");
  overVissionBtn.classList.remove("bg-green1", "text-white");
  overMissionPart.classList.replace("hidden", "block");
  overVissionPart.classList.add("hidden", "transition-all", "duration-500");
});

// products swiper
let productsArray = [
  { id: 1, src: "../img/product-1.png", title: "Quality pet food", price: 17 , count:1},
  { id: 2, src: "../img/product-2.png", title: "Quality pet food", price: 10 , count:1},
  { id: 3, src: "../img/product-3.png", title: "Quality pet food", price: 54 , count:1},
  { id: 4, src: "../img/product-4.png", title: "Quality pet food", price: 7.5 , count:1},

  { id: 5, src: "../img/product-1.png", title: "Quality pet food", price: 16 , count:1},
  {
    id: 6,
    src: "../img/product-2.png",
    title: "Quality pet food",
    price: 22.5, 
    count:1,
  },
  { id: 7, src: "../img/product-3.png", title: "Quality pet food", price: 30 , count:1},
  { id: 8, src: "../img/product-4.png", title: "Quality pet food", price: 14 , count:1},

  {
    id: 9,
    src: "../img/product-1.png",
    title: "Quality pet food",
    price: 18.5,
    count:1,
  },
  { id: 10, src: "../img/product-2.png", title: "Quality pet food", price: 40 , count:1},
  {
    id: 11,
    src: "../img/product-3.png",
    title: "Quality pet food",
    price: 11.5,
    count:1,
  },
  { id: 12, src: "../img/product-4.png", title: "Quality pet foo", price: 21 , count:1},
];

let swiperContainer = $.querySelector(".swiper-container");

let SwiperCount = 3;
let slideCount = productsArray.length / SwiperCount;

function swiperGenrator(
  slideCount,
  SwiperCount,
  productsArray,
  swiperContainer
) {
  let endIndex = slideCount;
  let startIndex = endIndex - slideCount;

  for (let i = 0; i < SwiperCount; i++) {
    let newArray = productsArray.slice(startIndex, endIndex);

    endIndex += slideCount;
    startIndex = endIndex - slideCount;

    let newDivSwiperParent = $.createElement("div");
    newDivSwiperParent.className = "swiper mySwiper  my-4 w-[300px] p-[50px]";

    let newDivSwiper = $.createElement("div");
    newDivSwiper.className = "swiper-wrapper";

    let newDivNextBtn = $.createElement("div");
    newDivNextBtn.className = "swiper-button-next";
    let newDivPrevBtn = $.createElement("div");
    newDivPrevBtn.className = "swiper-button-prev";
    let newDivPagintion = $.createElement("div");
    newDivPagintion.className = "swiper-pagination";

    newDivSwiperParent.append(
      newDivSwiper,
      newDivNextBtn,
      newDivPrevBtn,
      newDivPagintion
    );
    slideGenrator(newArray, newDivSwiper);
    swiperContainer.append(newDivSwiperParent);
  }
}

function slideGenrator(newArray, newDivSwiper) {
  newArray.forEach(function (item) {
    let newSwiperSlide = $.createElement("div");
    newSwiperSlide.className =
      "swiper-slide  bg-gray1 small:px-4 py-2 pb-8 flex flex-col items-center cursor-pointer group";

    let newProductImg = $.createElement("img");
    newProductImg.setAttribute("src", item.src);

    let newProducTitle = $.createElement("p");
    newProducTitle.innerHTML = item.title;
    newProducTitle.className = "mt-2 text-lg font-semibold";

    let newProductPrice = $.createElement("p");
    newProductPrice.innerHTML = item.price + " " + "$";
    newProductPrice.className = "t-2 text-2xl font-semibold text-green1";

    let newDivHover = $.createElement("div");
    newDivHover.className =
      "bg-green1 absolute left-1/2 -translate-x-1/2 -bottom-6   flex    items-center justify-between";

    let newProductIconEyea = $.createElement("a");
    newProductIconEyea.setAttribute('href','productInfo/productInfo.html?id='+item.id+'')
    let newProductIconEyei = $.createElement('i')
    newProductIconEyei.className =
      "far fa-eye   px-4 py-2  hover:bg-gray1 border-[1px]  border-green1";
        


    let newProductIconCart = $.createElement("i");
    newProductIconCart.className =
      "fas fa-cart-plus   px-4 py-2 cursor-pointer hover:bg-gray1 border-[1px]  border-green1";
    newProductIconCart.addEventListener('click', function(){
      getProductInfo(item.id , newArray)
    });

    newProductIconEyea.append(newProductIconEyei)
    newDivHover.append(newProductIconEyea, newProductIconCart);
    newSwiperSlide.append(
      newProductImg,
      newProducTitle,
      newProductPrice,
      newDivHover
    );
    newDivSwiper.append(newSwiperSlide);
  });
}

swiperGenrator(slideCount, SwiperCount, productsArray, swiperContainer);

var swiper = new Swiper(".mySwiper", {
  effect: "flip",
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


// shopping part

let shopingCart = $.getElementById("shopingCart");
let backetCount = $.getElementById("backet-count");
const shopBacket = $.getElementById('shopBacket')
const shopDownIcon = $.getElementById('shopDownIcon')
let productsTable = $.getElementById('productsTable')
const productClear = $.getElementById('productClear')
const totalProduct = $.getElementById('totalProduct')
const purchaseBtn = $.getElementById('purchaseBtn')

let count = 0 ;

let userProducts = []

function getProductInfo(itemId , newArray) {
  count++
  backetCount.innerHTML = count;
  shopingCart.classList.replace("-left-full", "left-0");
  backetCount.classList.add("backet-count");
  backetCount.addEventListener("animationend", function () {
    backetCount.classList.remove("backet-count");
  });
  
  let UserProduct = newArray.find(function(item){
return item.id == itemId
  })

  

  if(userProducts.includes(UserProduct)){
    
    UserProduct.count++ 
    addToBacket(userProducts)
    setToLocal(userProducts)
    
  }else{
   
    userProducts.push(UserProduct)
    addToBacket(userProducts )
    setToLocal(userProducts)

  }
  


}

function addToBacket(userProducts){
  
  productsTable.innerHTML = ''
  userProducts.forEach(function(item){
    productsTable.insertAdjacentHTML('beforeend' , ' <tr><td class="text-center bg-green1  py-2 px-1 border-[1px] border-black"><img class="w-12 h-8 sm:h-12 " src="'+item.src+'" alt=""></td><td class="text-center bg-green1 py-2 px-1 border-[1px] border-black"><p class="text-center  font-bold  text-[10px] small:text-xs w-full">'+item.title+'</p></td><td class="text-center bg-green1 py-2 px-1 border-[1px] border-black"><p class="text-center  font-bold  text-[10px] small:text-xs w-full">'+item.price + '$' +'</p></td><td class="text-center bg-green1 py-2 px-1 border-[1px] border-black"><p>'+item.count+'</p></td><td class="text-center bg-green1 py-2 px-1 border-[1px] border-black"><button class="bg-red-700 hover:bg-red-600 text-white  text-[10px] p-2 py-[3px] sm:px-3 sm:py-2" onclick=removeItem('+item.id+')>Remove</button></td></tr>')
  })

  
  calcProducts(userProducts)
}

function setToLocal(userProducts){
localStorage.setItem('productsList' , JSON.stringify(userProducts))
}

function getLocal(){
  let localData = JSON.parse(localStorage.getItem('productsList'))
  if(localData){
    userProducts = localData
    
    addToBacket(userProducts)
   
    localData.forEach(function(item){
      count += item.count 
      backetCount.innerHTML = count
        })
  }
  
}

function removeItem( itemid){
let a =  userProducts.find(function(item){
return item.id == itemid
 })

 if(a.count == 1){
  
   let x =  userProducts.filter(function(item){
     return item.id !==  itemid
   })
 
   userProducts = x
 
     count--
     backetCount.innerHTML = count
   
 addToBacket(userProducts)
 setToLocal(userProducts)

 }else if(a.count > 1){
a.count--
count--
backetCount.innerHTML = count
addToBacket(userProducts)
setToLocal(userProducts)
 }
}

function ClearAll(){
  localStorage.removeItem('productsList')
  productsTable.innerHTML = ''
userProducts.forEach(function(item){
item.count = 1
})
userProducts = []
addToBacket(userProducts)
count = 0
backetCount.innerHTML = 0

}

function calcProducts(userProducts){
  let totalProductsPrice = 0
  userProducts.forEach(function(item){
   totalProductsPrice += item.price * item.count
  })
  totalProduct.innerHTML = 'Total: ' +  totalProductsPrice.toFixed(2) + '$'

}



productClear.addEventListener('click' , function(){
  ClearAll(userProducts)
})
purchaseBtn.addEventListener('click' , ClearAll)

window.addEventListener('load' , getLocal)

window.addEventListener('scroll' , function(){
  if(document.documentElement.scrollTop == 0){
    shopingCart.classList.replace('left-0'  , '-left-full')
    shopBacket.classList.remove( 'h-52')
    shopBacket.classList.remove( 'p-2')
    shopDownIcon.classList.remove('active3')
  }else if(document.documentElement.scrollTop > 113){
    if(backetCount.innerHTML !== '0'){
      shopingCart.classList.replace('-left-full'  , 'left-0')
     
    }
    
  
  }
})

shopDownIcon.addEventListener('click' , function(){
    shopBacket.classList.toggle( 'h-52')
    shopBacket.classList.toggle( 'p-2')
    shopDownIcon.classList.toggle('active3')
    shopDownIcon.setAttribute("style", "transition:all .3s")
 

})



// offer part

let offerPercent = 30


// set time for Offer
let hourBox = $.querySelector('.hour')
let minBox = $.querySelector('.min')
let secondBox = $.querySelector('.second')
let hourNum = 24
let minNum = 0
let secondNum = 0

let oferTime = setInterval(function(){
  
  if(secondNum == -1){
    minNum--
   secondNum = 59
  
  }
  if(minNum == -1){
    hourNum--
    minNum = 59
    
   }
 if(secondNum < 10){
  secondNum= '0' + secondNum
  }
 if(minNum < 10 && minNum.length !==2){
  minNum = '0' + minNum
 }
 if(hourNum < 10 && hourNum.length !== 2){
  hourNum = '0' + hourNum
 }

if(hourNum == 0 &&  minNum == 0 && secondNum == 0){
  clearInterval(oferTime)
}


 hourBox.innerHTML = hourNum
 minBox.innerHTML = minNum
 secondBox.innerHTML = secondNum

 let timesNum = []
 timesNum.push(hourNum , minNum , secondNum)
 setTimeToLocal(timesNum)

 secondNum--


}, 1000)

function setTimeToLocal(timesNum){
  localStorage.setItem('offerTime' ,JSON.stringify(timesNum))
}

function getTimeToLocal(){
  let timeInLocal =JSON.parse(localStorage.getItem('offerTime'))
  
  
  hourNum = timeInLocal[0]
  minNum = timeInLocal[1]
  secondNum = timeInLocal[2]

}

window.addEventListener('load' , getTimeToLocal)

// Add product

let OfferProduct = [
  { id: 1, src: "../img/product-1.png", title: "Quality pet food", price: 17 , count:1},
  { id: 2, src: "../img/product-2.png", title: "Quality pet food", price: 10 , count:1},
  { id: 3, src: "../img/product-3.png", title: "Quality pet food", price: 54 , count:1},
  { id: 4, src: "../img/product-4.png", title: "Quality pet food", price: 7.5 , count:1},
  { id: 5, src: "../img/product-1.png", title: "Quality pet food", price: 16 , count:1},

]



let offerPart = $.querySelector('.slideCountainer')
let offerTitle = $.querySelector('#offer-Title')


offerTitle.innerHTML = offerPercent + '%'

function offerProductBuild(OfferProduct , offerPercent ){
  OfferProduct.forEach(function(item){
    let newSwiperSlide = $.createElement("div");
    newSwiperSlide.className =
      "my-10  swiper-slide  bg-gray1 small:px-4 py-2 pb-8 flex flex-col items-center cursor-pointer group";
  
    let newProductImg = $.createElement("img");
    newProductImg.setAttribute("src", item.src);
  
    let newProducTitle = $.createElement("p");
    newProducTitle.innerHTML = item.title;
    newProducTitle.className = "mt-2 text-lg font-semibold";
  
    let ProductOldPrice = $.createElement("p");
    ProductOldPrice.innerHTML = item.price + " " + "$";
    ProductOldPrice.className = "mt-2 text-2xl font-semibold text-green1 line-through decoration-red-600";
  
    let ProductNewPrice = $.createElement('p')
    ProductNewPrice.className = 'mt-2 text-xl font-semibold text-green1'
   let finalPrice = offerPrice(item.price , offerPercent)
    item.price = item.price - finalPrice
    ProductNewPrice.innerHTML = item.price.toFixed(2) + " " + "$";
    


    let newDivHover = $.createElement("div");
    newDivHover.className =
      "bg-green1 absolute left-1/2 -translate-x-1/2 -bottom-6   flex   items-center justify-between";
  
    let newProductIconEyea = $.createElement("a");
    newProductIconEyea.setAttribute('href','productInfo/productInfo.html?id='+item.id+'')
    let newProductIconEyei = $.createElement('i')
    newProductIconEyei.className =
      "far fa-eye   px-4 py-2  hover:bg-gray1 border-[1px]  border-green1";
        
  
  
    let newProductIconCart = $.createElement("i");
    newProductIconCart.className =
      "fas fa-cart-plus   px-4 py-2 cursor-pointer hover:bg-gray1 border-[1px]  border-green1";
    newProductIconCart.addEventListener('click', function(){
      getProductInfo(item.id , OfferProduct )
    });
    newProductIconEyea.append(newProductIconEyei)
    newDivHover.append(newProductIconEyea, newProductIconCart);
    newSwiperSlide.append(
      newProductImg,
      newProducTitle,
      ProductOldPrice,
      ProductNewPrice,
      newDivHover
    );
    offerPart.append(newSwiperSlide )
   
  })

}


function offerPrice(itemPrice , offerPercent){
return (itemPrice/100)*offerPercent

}


offerProductBuild(OfferProduct , offerPercent )


  var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 1,
    spaceBetween: 30,
    slidesPerGroup: 1,

    autoplay: {
      delay: 2000,
    },
    breakpoints: {
      // when window width is >= 320px
      450: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window width is >= 480px
      650: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      // when window width is >= 640px
      850: {
        slidesPerView: 4,
        spaceBetween: 40
      }
    },
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  



  // TEAM MEMBERS

let members = [
  {id:1 , name:'Eli', pic:'../img/team-1.jpg' },
  {id:2 , name:'Jesica', pic:'../img/team-2.jpg' },
  {id:3 , name:'Hana', pic:'../img/team-3.jpg' },
  {id:4 , name:'bily', pic:'../img/team-4.jpg' },
  {id:5 , name:'margo', pic:'../img/team-5.jpg' },
]

let memberPart = $.querySelector('.memberPart')


members.forEach(function(item){
 let newDiv = $.createElement('div')
 newDiv.className = "my-10 p-8 small2:p-0   swiper-slide  bg-gray1  flex flex-col items-center cursor-pointer "

 let newDivPic = $.createElement('div')
 newDivPic.className = "relative group w-full h-52 bg-cover bg-center hover:bg-[length:110%_110%]  bg-blue-600 p-4  hover:transition-all hover:duration-500 after:w-0 after:h-0  after:hover:w-full  after:hover:h-full after:bg-green2 after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:transition-all after:duration-300"
 newDivPic.setAttribute('style' , 'background-image:url('+ item.pic +')')

 let newDivIcons = $.createElement('div')
 newDivIcons.className = 'w-full  absolute left-0 bottom-0 flex items-center justify-around pt-1 z-10'


let newIconInsta = $.createElement('i')
newIconInsta.className = ' fab fa-instagram p-2 bg-white rounded-t-md'

let newIconFacebook = $.createElement('i')
newIconFacebook.className = 'fab fa-facebook-f p-2 bg-white rounded-t-md'

let newIconTwittr = $.createElement('i')
newIconTwittr.className = 'fab fa-twitter p-2 bg-white rounded-t-md'


let newH1 = $.createElement('h1')
newH1.innerHTML = item.name
newH1.className = 'text-2xl  mt-2 font-semibold'

let newH3 = $.createElement('h3')
newH3.innerHTML = 'Designation'
newH3.className = 'text-base mt-2'



newDivIcons.append(newIconInsta , newIconFacebook , newIconTwittr)
newDivPic.append(newDivIcons)
newDiv.append(newDivPic , newH1 , newH3)
memberPart.append(newDiv)

})


  var swiper = new Swiper(".mySwiper3", {
    slidesPerView: 1,
    spaceBetween: 30,
    slidesPerGroup: 1,

    // autoplay: {
    //   delay: 2000,
    // },
    breakpoints: {
      // when window width is >= 320px
      450: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window width is >= 480px
      650: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      // when window width is >= 640px
      850: {
        slidesPerView: 4,
        spaceBetween: 40
      },
      1100: {
        slidesPerView: 4,
        spaceBetween: 40
      }
    },
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-next-button",
      prevEl: ".swiper-prev-button",
    },
  });



// comment part

let userComents = [
  {id:1 , name:'Rozit'  , userpic:'../img/testimonial-1.jpg' ,  coment:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, voluptatem? .'},
  {id:2 , name:'jon'  , userpic:'../img/testimonial-2.jpg' ,  coment:'Lorem ipsum dolor sit amet, consectetur  Obcaecati aliquam sint dignissimos, sunt perspiciatis nisi animi reiciendis et. .'},
]

let commentPart = $.querySelector('.commentPart')


userComents.forEach(function(item){
  let newDivComentSlider = $.createElement('div')
  newDivComentSlider.className = 'swiper-slide  bg-gray1 small:px-8 py-2 pb-8 flex flex-col items-center cursor-pointer'


  let newUserImg = $.createElement('img')
  newUserImg.className = 'w-20 h-20 rounded-full'
  newUserImg.setAttribute('src' , item.userpic)


  let newDivComentPart = $.createElement('div')
  newDivComentPart.className = 'mt-8 p-4 flex flex-col items-center'


  let newPComent = $.createElement('p')
  newPComent.className = 'text-center'
  newPComent.innerHTML = item.coment


  let newSpan = $.createElement('span')
  newSpan.className = 'h-[2px] w-20 mt-4 bg-gray-400'


  let newH2UserName = $.createElement('h2')
  newH2UserName.className = 'mt-4 text-xl bg-green1 w-full p-2 text-center'
  newH2UserName.innerHTML = item.name


  let newPUserType = $.createElement('p')
  newPUserType.className = 'mt-2'
  newPUserType.innerHTML = 'Profesion'



  newDivComentPart.append(newPComent,newSpan,newH2UserName,newPUserType)
  newDivComentSlider.append(newUserImg, newDivComentPart )
  commentPart.append(newDivComentSlider)


})



  var swiper = new Swiper(".mySwiper4", {
    slidesPerView: 1,
    spaceBetween: 30,
    slidesPerGroup: 1,

    // autoplay: {
    //   delay: 2000,
    // },
    // breakpoints: {
    //   // when window width is >= 320px
    //   450: {
    //     slidesPerView: 1,
    //     spaceBetween: 20
    //   },
    //   // when window width is >= 480px
    //   650: {
    //     slidesPerView: 2,
    //     spaceBetween: 30
    //   },
    //   // when window width is >= 640px
    //   850: {
    //     slidesPerView: 3,
    //     spaceBetween: 40
    //   },
    //   1100: {
    //     slidesPerView: 4,
    //     spaceBetween: 40
    //   }
    // },
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-next-button",
      prevEl: ".swiper-prev-button",
    },
  });




  // login part

  const loginForm = $.querySelector('#login-form')
  const closeLoginModal = $.querySelector('#close-Modal')
  const loginBtn = $.querySelectorAll('.login')


  loginBtn.forEach(function(item){
    item.addEventListener('click' ,function(){
      loginForm.className = 'w-full h-[100vh]  flex items-center justify-center fixed top-0 left-0 z-50 px-4 transition-all duration-500'
     
    })
    
  })

  closeLoginModal.onclick = function(){
    loginForm.className = 'w-full h-[100vh]  flex items-center justify-center fixed -top-full left-0 z-50 px-4 transition-all duration-500'
  }


//  reload part

const loadPart = $.getElementById('load-Part')

window.addEventListener('load' , function(){
  loadPart.classList.add('animate-[reload2_1s_forwards]')

})



// custom scroll

const myScroll = $.getElementById('my-scroll')

window.addEventListener('scroll' , function(){
 
  let userInnerHeight = this.window.innerHeight

  let userClientHeight = this.document.body.clientHeight

  let userScrollY = this.window.scrollY

 let scrollPercent = userScrollY / (userClientHeight - userInnerHeight)

 let finalSize = Math.round(scrollPercent * 100)

  

 myScroll.style.height = finalSize + '%'


})



// internet check

let netCheck = $.getElementById('netCheck')

window.addEventListener('offline' , function(e){

    netCheck.innerHTML = 'NO CONACTION'
    netCheck.style.display = 'block'
    netCheck.style.backgroundColor = 'red' 
    

    setTimeout(function(){
      netCheck.style.display = 'none'
     
    }, 3000)

  
})
window.addEventListener('online' , function(e){
  
  netCheck.innerHTML = 'CONACTION'
  netCheck.style.display = 'block'
  netCheck.style.backgroundColor = 'green' 
  

  setTimeout(function(){
    netCheck.style.display = 'none'
   
  }, 3000)


})