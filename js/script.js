const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

let carouselImmages = '';

for (let i = 0 ; i < items.length ; i++){
    carouselImmages += `
    <div class="img-container">
        <img src="${items[i]}" alt="Random picture">
    </div>`
}

const carouselContainer = document.querySelector('div.left-img');
carouselContainer.innerHTML += carouselImmages;

const carouselElement = document.getElementsByClassName('img-container');
const carouselSmallElement = document.getElementsByClassName('my-small-img');

carouselElement[0].classList.add('active');
carouselSmallElement[0].classList.add('active-small');

const buttonNext = document.querySelector('div#up');

let activeElement = 0;
let = activeSmallElement = 0;

buttonNext.addEventListener('click', function(){
    carouselElement[activeElement].classList.remove('active');
    carouselSmallElement[activeSmallElement].classList.remove('active-small');
    activeElement--;
    activeSmallElement--;
    carouselElement[activeElement].classList.add('active');
    carouselSmallElement[activeSmallElement].classList.add('active-small');
});

const buttonPrevious = document.querySelector('div#down');

buttonPrevious.addEventListener('click', function(){
    carouselElement[activeElement].classList.remove('active');
    carouselSmallElement[activeSmallElement].classList.remove('active-small');
    activeElement++;
    activeSmallElement++;
    carouselElement[activeElement].classList.add('active');
    carouselSmallElement[activeSmallElement].classList.add('active-small');
});

