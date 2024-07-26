//Слайдер
document.addEventListener('DOMContentLoaded', () => {
    const couruselContainer = document.querySelector('.container__courusel');
    const couruselCards = document.querySelectorAll('.courusel__card');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let currentIndex = 0;
    const cardWidth = couruselCards[0].offsetWidth; // ширина карточки + отступ

    const updateCarouselPosition = () => {
        couruselContainer.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    };

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = couruselCards.length - 1; // возвращаемся к последней карточке
        }
        updateCarouselPosition();
    });

    nextButton.addEventListener('click', () => {
        if (currentIndex < couruselCards.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; // возвращаемся к первой карточке
        }
        updateCarouselPosition();
    });

    
   
});

//popup
const burger = document.querySelector(".btn__burger");
const closeBtn = document.querySelector(".header__btn");
const menu = document.querySelector(".popUp");

burger.addEventListener('click', function (event) {
    menu.style.display = "block";
})

closeBtn.addEventListener('click', function (event) {
    menu.style.display = "none";
})


//Выделение карточки b
const cards = document.querySelectorAll(".courusel__card");
const pNames = document.querySelectorAll(".discription__name");
const favs = document.querySelectorAll(".btn__like");
const like = document.querySelector(".likes__counter");
let counter = 0;
for(let i = 0; i<=cards.length; i++){
    cards[i].addEventListener("mouseover", (e)=>{
        cards[i].style.border = "solid 1px rgba(33, 36, 46, 0.4)"; 
        for(let j = 0; j<=pNames.length; j++){
            pNames[i].style.color = "#D0BC7A";
        }
    })
    
    cards[i].addEventListener("mouseout", (e)=>{
        cards[i].style.border = "none";  
        for(let j = 0; j<=pNames.length; j++){
            pNames[i].style.color = "#21242E";
        }
    })

    favs[i].addEventListener("click", (e)=>{
        console.log("clolc");
        favs[i].setAttribute("background-iamge", "url(../public/aFavo.png)");
        counter+=1;
        like.innerHTML = counter;
        like.style.display = "block";
    })
}

//избранное












