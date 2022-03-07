const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = ['Svezia', 'Svizzera', 'Gran Bretagna', 'Germania', 'Paradise'];

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];


let carouselImmages = '';

for (let i = 0 ; i < items.length ; i++){
    carouselImmages += `
    <div class="img-container">
        <img src="${items[i]}" alt="Random picture">
    </div>`;
}


let titleElements = '';
for (let i = 0 ; i < title.length ; i++){
    titleElements = title[i];
}

const carouselTitleContainer = document.getElementById('title');
carouselTitleContainer.innerHTML = titleElements;

const carouselContainer = document.querySelector('div.left-img');
carouselContainer.innerHTML += carouselImmages;






const carouselElement = document.getElementsByClassName('img-container');
const carouselSmallElement = document.getElementsByClassName('small-img');

/* const carouselTestElement = document.getElementById('paragraph'); */

carouselElement[0].classList.add('active');
carouselSmallElement[0].classList.add('active-small');

const buttonPrevious = document.querySelector('div#up');

let activeElement = 0;
let activeSmallElement = 0;

buttonPrevious.addEventListener('click', function(){
    carouselElement[activeElement].classList.remove('active');
    carouselSmallElement[activeSmallElement].classList.remove('active-small');
    
    if (activeElement === 0){
        activeElement = items.length - 1;
    } else {
        activeElement--;
    }

    if (activeSmallElement === 0) {
        activeSmallElement = items.length - 1;
    } else {
        activeSmallElement--;
    }


    carouselElement[activeElement].classList.add('active');
    carouselSmallElement[activeSmallElement].classList.add('active-small');
});

const buttonNext = document.querySelector('div#down');

buttonNext.addEventListener('click', function(){
    carouselElement[activeElement].classList.remove('active');
    carouselSmallElement[activeSmallElement].classList.remove('active-small');
    if( activeElement === items.length - 1){
        activeElement = 0;
    } else {
        activeElement++;
    }

    if (activeSmallElement === items.length - 1){
        activeSmallElement = 0;
    } else {
        activeSmallElement++;
    }

    carouselElement[activeElement].classList.add('active');
    carouselSmallElement[activeSmallElement].classList.add('active-small');
});

