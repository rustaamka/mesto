const profileButton = document.querySelector('.profile__button');
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('profile__subtitle');
const popupForm = document.querySelector('.popup__form');
const namePopup = document.querySelector('.popup__input_name');
const jobPopup = document.querySelector('.popup__input_job');

profileButton.addEventListener('click', openPopup);
popupClose.addEventListener('click', closePopup);

function openPopup(event) {
  popup.classList.add('popup_opened');
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

function valuesSave(e) {
  e.preventDefault();
  profileName.textContent = namePopup.value;
  profileJob.textContent = jobPopup.value;
  popupRemove();
}

popupForm.addEventListener('submit', valuesSave);