const popup = document.querySelector('.popup');
const popup__close = document.querySelector('.close__popup');
const img__active = document.querySelector('.img__animation');
const bodyElement = document.body;

const photos__small = document.querySelector('.photo__grid-small');
const photos__medium = document.querySelector('.photo__grid-medium');
const photos__big = document.querySelector('.photo__grid-big');
const cardTemplate = document.querySelector('#card-template').content;
// const cardImage = cardElement.querySelector('.portfolio__photos');

const popupImage = document.querySelector('.popup__img-full');
const popupImageOpenedPicture = popupImage.querySelector(
	'.popup__img__full-screenshot'
);
const popupImageUsed = popupImage.querySelector(
	'.popup__full-screenshot__usage'
);
const popupImageGif = popupImage.querySelector(
	'.popup__full-screenshot__gif'
);
const popupImageOpenedText = popupImage.querySelector('.popup__img-full__text');

function addCard(link, use, gif) {
	const imgGroup = popupImage.querySelector('.popup__group');
	const cardElement = cardTemplate
		.querySelector('.img__animation')
		.cloneNode(true);
	const cardImg = cardElement.querySelector('.portfolio__photos');
	cardElement.querySelector('.portfolio__photos').src = link;
	cardElement.querySelector('.img__used').src = use;
	cardElement.querySelector('.img__gif').src = gif;

	cardImg.addEventListener('click', function (event) {
		imgOpen(event);
	});
	return cardElement;
}
for (let i = 0; i < initialCards.length; i++) {
	photos__small.append(
		addCard(initialCards[i].link, initialCards[i].use, initialCards[i].gif)
	);
}
for (let i = 0; i < initialCards__medium.length; i++) {
	photos__medium.append(
		addCard(
			initialCards__medium[i].link,
			initialCards__medium[i].use,
			initialCards__medium[i].gif
		)
	);
}
for (let i = 0; i < initialCards__big.length; i++) {
	photos__big.append(
		addCard(
			initialCards__big[i].link,
			initialCards__big[i].use,
			initialCards__big[i].gif
		)
	);
}

function imgOpen(event) {
	const img = event.target.closest('.img__animation');
	popupImageOpenedPicture.src = event.target.src;
	popupImageUsed.src = img.querySelector('.img__used').src;
	popupImageGif.src = img.querySelector('.img__gif').src;
	popup.classList.add('popup__active');
	bodyElement.style.overflow = 'hidden';
}
popup__close.addEventListener('click', () => {
	popup.classList.remove('popup__active');
	bodyElement.style.overflow = 'scroll';
});

// function openPopup(popup) {
// 	popup.classlist.add('popup__active');
// }
// cardImage.addEventListener('click', function (event) {
// 	scaleImage(event);
// });

// function scaleImage(event) {
// 	const card = event.target.closest('.img__animation');
// 	popupImageOpenedPicture.src = event.target.src;
// 	// popupImageOpenedText.textContent =
// 	// 	card.querySelector('.card__title').textContent;
// 	popup.classList.add('popup__active');
// 	bodyElement.style.overflow = 'hidden';
// }

// popup__close.addEventListener('click', () => {
// 	popup.classList.remove('popup__active');
// 	bodyElement.style.overflow = 'scroll';
// });
