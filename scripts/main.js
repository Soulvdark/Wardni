const popup = document.querySelector('.popup');
const popup__close = document.querySelector('.close__popup');
const img__active = document.querySelector('.img__animation');
const bodyElement = document.body;

img__active.addEventListener('click', () => {
	popup.classList.add('popup__active');
	bodyElement.style.overflow = 'hidden';
});

popup__close.addEventListener('click', () => {
	popup.classList.remove('popup__active');
    bodyElement.style.overflow = 'scroll';
});
