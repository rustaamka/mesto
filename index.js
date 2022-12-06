const profileButton = document.querySelector('.profile__button');
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close');

profileButton.addEventListener('click', openPopup);
popupClose.addEventListener('click', closePopup);

function openPopup(event) {
  popup.classList.add('popup_opened');
}

function closePopup() {
  popup.classList.remove('popup_opened');
}
